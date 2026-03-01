# Customization Guide — Real Estate Mumbai Template

This guide explains how to extend, rebrand, and connect a real backend to this project.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Replacing Mock Data](#replacing-mock-data)
3. [Adding a Real Backend](#adding-a-real-backend)
4. [Extending the Design System](#extending-the-design-system)
5. [Adding New Property Types](#adding-new-property-types)
6. [Connecting Real Authentication](#connecting-real-authentication)
7. [Deploying to Vercel](#deploying-to-vercel)

---

## 1. Project Structure
```
src/
  components/     # Reusable UI components (PropertyCard, Header, ErrorBoundary, etc.)
  context/        # React Context providers (Auth, Theme, Compare, Language)
  data/           # Mock data — replace with API calls
  hooks/          # Custom React hooks
  pages/          # Page-level components (one per route)
  services/       # Data service layer (propertyService.ts) — swap mocks here
  types/          # Shared TypeScript interfaces
api/
  search.ts       # Vercel serverless function — Gemini AI proxy
```

---

## 2. Replacing Mock Data

All mock data lives in `src/data/index.ts`. To connect a real backend:

### Option A — Direct REST API
Edit `src/services/propertyService.ts`:
```ts
// Before (mock):
export const propertyService = {
  async getProperties() {
    return properties; // from src/data/index.ts
  }
}

// After (real API):
export const propertyService = {
  async getProperties(filter?) {
    const res = await fetch(`https://your-api.com/properties?intent=${filter?.intent || ''}`);
    return res.json();
  }
}
```

### Option B — Supabase (Recommended)
1. `npm install @supabase/supabase-js`
2. Create a `src/lib/supabase.ts` client
3. Replace `propertyService` methods with Supabase queries

---

## 3. Adding a Real Backend

The Gemini AI search proxy is already configured in `api/search.ts`. For a full backend:

### Recommended Stack
- **Database:** Supabase (PostgreSQL) — free tier, generous limits
- **Auth:** Supabase Auth or Clerk
- **Hosting:** Vercel (frontend + serverless functions)

### Steps
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a `properties` table matching the `Property` interface in `src/types/index.ts`
3. Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your Vercel environment variables
4. Update `src/services/propertyService.ts` to use Supabase client

---

## 4. Extending the Design System

All design tokens are in `src/index.css` under `@theme`:
```css
@theme {
  --font-display: "Space Grotesk", ...;
  --color-v-black: #050505;
  --color-v-gray: #f4f4f5;
  --color-v-blue: #3b82f6;
}
```

To rebrand:
1. Change `--color-v-blue` to your brand color
2. Change `--font-display` to your preferred Google Font
3. Update dark mode tokens in the `.dark { }` block

---

## 5. Adding New Property Types

1. Add the new type to the `Property` interface in `src/types/index.ts`:
   ```ts
   type: 'Apartment' | 'Villa' | 'Plot' | 'YOUR_NEW_TYPE';
   ```
2. Add sample entries to `src/data/index.ts`
3. Update filter options in `src/pages/Properties.tsx`

---

## 6. Connecting Real Authentication

The `AuthContext` (`src/context/AuthContext.tsx`) currently uses `localStorage`. To use a real auth provider:

### Clerk (Easiest)
```bash
npm install @clerk/clerk-react
```
Replace `AuthProvider` in `App.tsx` with `<ClerkProvider>` and use `useUser()` instead of `useAuth()`.

### Supabase Auth
```bash
npm install @supabase/supabase-js
```
Call `supabase.auth.signInWithPassword()` inside `AuthContext.login()`.

---

## 7. Deploying to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Required environment variables** (set in Vercel dashboard, never in code):
| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Your Google Gemini API key (server-side only) |
| `SUPABASE_URL` | Supabase project URL (if using Supabase) |
| `SUPABASE_ANON_KEY` | Supabase public anon key |

The `vercel.json` file already handles SPA routing so React Router works on page refresh.
