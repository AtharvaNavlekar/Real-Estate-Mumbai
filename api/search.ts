import type { VercelRequest, VercelResponse } from '@vercel/node';

// ─── In-Memory Rate Limiter ────────────────────────────────────────────────
// Simple per-IP rate limiter for serverless functions.
// Resets when the function cold-starts (acceptable for Vercel edge).
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;          // max requests per window
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

// ─── Input Sanitization ────────────────────────────────────────────────────
const MAX_QUERY_LENGTH = 500;

function sanitizeQuery(input: unknown): string | null {
    if (typeof input !== 'string') return null;
    // Strip HTML tags and limit length
    const cleaned = input
        .replace(/<[^>]*>/g, '')          // Remove HTML tags
        .replace(/[<>"'`]/g, '')          // Remove dangerous characters
        .trim()
        .slice(0, MAX_QUERY_LENGTH);
    return cleaned.length > 0 ? cleaned : null;
}

// ─── Allowed Origins ────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://real-estate-mumbai.vercel.app',
    'https://thenavlekar.netlify.app',
];

function getCorsOrigin(origin: string | undefined): string {
    if (origin && ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
        return origin;
    }
    return ALLOWED_ORIGINS[0]; // Default to localhost for safety
}

/**
 * Server-side Gemini API proxy.
 * Hardened with: rate limiting, input sanitization, CORS restriction, error masking.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin as string | undefined;
    const corsOrigin = getCorsOrigin(origin);

    // Security headers on every response
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Rate limiting
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
    }

    // API key check
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Service temporarily unavailable.' });
    }

    // Input validation
    const { query } = req.body as { query?: unknown };
    const sanitizedQuery = sanitizeQuery(query);
    if (!sanitizedQuery) {
        return res.status(400).json({ error: 'A valid search query is required.' });
    }

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Parse this real estate search query into structured JSON: "${sanitizedQuery}"` }] }],
                    systemInstruction: {
                        parts: [{
                            text: `You are a real estate AI assistant for Mumbai. Extract: location (neighborhood), propertyType (e.g. 3BHK, Villa), budget (formatted, e.g. < ₹5 Cr), features (array of amenities). If not mentioned, use sensible defaults. Respond with only valid JSON matching this schema: { location: string, propertyType: string, budget: string, features: string[] }.`
                        }]
                    },
                    generationConfig: {
                        responseMimeType: 'application/json',
                        responseSchema: {
                            type: 'OBJECT',
                            properties: {
                                location: { type: 'STRING' },
                                propertyType: { type: 'STRING' },
                                budget: { type: 'STRING' },
                                features: { type: 'ARRAY', items: { type: 'STRING' } }
                            },
                            required: ['location', 'propertyType', 'budget', 'features']
                        }
                    }
                })
            }
        );

        if (!geminiRes.ok) {
            // Don't leak upstream error details to the client
            return res.status(502).json({ error: 'Search service temporarily unavailable.' });
        }

        const data = await geminiRes.json() as {
            candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
        };
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const parsed = JSON.parse(text);

        return res.status(200).json({ intent: parsed });
    } catch {
        // Never expose internal error details
        return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
    }
}
