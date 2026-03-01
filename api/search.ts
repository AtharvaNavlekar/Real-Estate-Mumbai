import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Server-side Gemini API proxy.
 * The GEMINI_API_KEY is stored only in Vercel's environment variables — never exposed to the browser.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server configuration error: API key not set.' });
    }

    const { query } = req.body as { query?: string };
    if (!query?.trim()) {
        return res.status(400).json({ error: 'Query is required.' });
    }

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Parse this real estate search query into structured JSON: "${query}"` }] }],
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
            const errText = await geminiRes.text();
            return res.status(502).json({ error: 'Gemini API error', detail: errText });
        }

        const data = await geminiRes.json() as {
            candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
        };
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const parsed = JSON.parse(text);

        return res.status(200).json({ intent: parsed });
    } catch (err) {
        console.error('[/api/search] Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
