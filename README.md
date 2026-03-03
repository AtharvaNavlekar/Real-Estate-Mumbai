<div align="center">

<br/>

# Real Estate Mumbai

### A premium, full-stack real estate exploration & management platform  
### purpose-built for the Mumbai property market.

<br/>

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-99.5%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)

<br/>

> **Real Estate Mumbai** is a modern, feature-rich property platform that brings together intelligent search, real-time market analytics, immersive neighborhood guides, and dedicated portals for buyers, sellers, and agents — all wrapped in a best-in-class animated UI.

<br/>

---

</div>

## Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Feature Breakdown](#-feature-breakdown)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Application Pages & Usage Guide](#-application-pages--usage-guide)
- [Key Components](#-key-components)
- [Configuration Files](#-configuration-files)
- [Contributing](#-contributing)
- [Coding Standards](#-coding-standards)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Credits & Acknowledgements](#-credits--acknowledgements)

---

## Overview

Mumbai's real estate market is one of the most dynamic and complex in the world — spanning everything from ultra-luxury sea-facing penthouses in South Mumbai, to high-demand commercial corridors in BKC, to affordable residential townships in Navi Mumbai.

**Real Estate Mumbai** was built to bring clarity, intelligence, and elegance to this market. Whether you're a first-time buyer exploring neighborhoods, an HNI investor tracking luxury inventory, or a registered agent managing a portfolio of active listings, this platform gives you the right tools at the right moment.

### What makes this project different?

| Aspect | Details |
|--------|---------|
| **Mumbai-first** | Data, neighborhoods, districts, and pricing benchmarks are all tailored specifically to the Mumbai Metropolitan Region (MMR) |
| **AI-assisted search** | Powered by the Gemini API, the Smart Search understands natural language queries like *"3 BHK in Bandra under ₹3.5 Cr with a sea view"* |
| **Role-based experience** | Distinct portals for Buyers, Property Owners, and Agents with purpose-built dashboards |
| **Production-grade UI** | Framer Motion animations, full mobile responsiveness, and a design system built on Tailwind CSS |
| **TypeScript-first** | 99.5% of the codebase is TypeScript, ensuring type safety, maintainability, and IDE confidence |

---

## Live Demo

> _Deployment coming soon. To run locally, follow the [Getting Started](#-getting-started) guide below._

---

## Implementation Status

> [!IMPORTANT]
> This project is a **premium UI template and starter kit**, not a production SaaS. The table below clearly distinguishes what is fully implemented in the current codebase vs. what requires backend integration.

| Feature | Status | Notes |
|---------|--------|-------|
| Multi-page SPA routing | Implemented | React Router DOM |
| Luxury animated UI | Implemented | Framer Motion, Tailwind |
| Property listing cards | Implemented | Dynamic indexing via `westernLineMarketData.json` |
| Neighborhood guides | Implemented | Hyper-local dynamic routing and Recharts analytics |
| Market analytics charts | Implemented | Interactive Recharts dashboard with tooltips |
| Smart Search (AI query parsing) | Implemented | Gemini API via server-side proxy |
| Global Favorites System | Implemented | Persistent LocalStorage Context with Portfolio Analytics |
| Completely Air-Gapped Admin Portal | Implemented | Sovereign Vite React app (`/admin-portal`) with Alpine White styling |
| User authentication (UI) | Implemented | Form + localStorage session |
| User auth (real backend) | **Roadmap** | Needs Supabase Auth / Clerk |
| Real property database | **Roadmap** | Replace local JSON with REST API |
| Enquiry inbox / messaging | **Roadmap** | UI only, no delivery system |
| PWA (offline support) | Implemented | Service worker + manifest.json |
| Error boundaries | Implemented | All routes protected |

See [`CUSTOMIZATION.md`](CUSTOMIZATION.md) for a complete guide on connecting a real backend.

---

## Feature Breakdown

### Smart Search & AI Advisory
- Natural language property search powered by the **Google Gemini API**
- Describe what you want in plain language — the assistant understands area names, BHK sizes, price ranges, amenities, and lifestyle preferences
- Receive curated property recommendations, market comparisons, and investment guidance in real time
- Conversational follow-up: ask clarifying questions and refine results dynamically

### Property Listings
- Richly detailed property cards featuring price, BHK configuration, area in sq. ft., floor, and amenities
- Listings span: **Residential Apartments, Luxury Penthouses, Sea-facing Villas, Independent Bungalows, New Launch Projects, and Commercial Spaces**
- Filter and sort by location, price band, property type, possession status, and developer
- Shortlist and save favourite properties to a personal wishlist

### Neighbourhood Insights
- Deep-dive guides for Mumbai's most sought-after micro-markets: South Mumbai, Bandra West, Juhu, Powai, BKC, Andheri, Thane, Navi Mumbai, and more
- Each guide covers: livability score, connectivity (road, rail, metro), social infrastructure (schools, hospitals, malls), typical price per sq. ft., and investment outlook
- Interactive maps showing points of interest, under-construction projects, and recent transactions

### Market Analytics & Rates
- Interactive charts (built with **Recharts**) visualizing property price trends across Mumbai districts
- Historical rate data presented as line charts and bar comparisons
- Metrics include: average price per sq. ft., YoY appreciation, inventory count, days-on-market average, and new supply pipeline
- Downloadable data snapshots for research and investment analysis

### Global Favorites & Portfolio Analytics
- **Persistent Shortlists:** One-click save functionality globally integrated via Context API and HTML5 LocalStorage.
- **Portfolio Analytics Dashboard:** The `/favorites` route automatically calculates the integer Total Value and Average Price of all saved real estate assets using a custom `parsePriceToCrores()` utility.
- **Dynamic Header Notifier:** Smart badge indicators tracking active portfolio items.

### Institutional Market Rates Dashboard
- **Immersive Dark Hero:** High-contrast `bg-v-black` hero section featuring structural grid-lines and screen-blended glowing orbs.
- **Interactive Recharts Tooltips:** Custom React tooltips rendering sharp, dark-glass pills with bright emerald mono-font price tags over 5-year growth charts.
- **Asymmetrical Demographics Grid:** Massive, typography-driven impact grids styling numbers aggressively alongside background watermarks.

### Air-Gapped Owner Admin Portal
- **Sovereign Application:** A completely separate React Vite application (`/admin-portal`) ensuring absolute security and encapsulation from customer crossovers.
- **Premium "Alpine White" Aesthetic:** A bright, luxurious light mode featuring frosty white glass panels (`backdrop-blur-2xl`), subtle gray background depths, and staggered Framer Motion spring physics.
- **Operational Command Center:** A massive central grid utilizing Recharts for an immersive dual-axis area chart matching Network Valuation against Lead Volume trajectories over 12 months.
- **Map-First Spacial Discovery:** The Master Inventory utilizes a 50/50 split-pane rendering dynamic property node maps directly beside granular 10-column data grids.
- **Tactical CRM War Room (`Leads.tsx`):** A neural engine analyzing high-net-worth individual acquisition flow, featuring AI Analysis Matrices for 'Conversion Probability' and 'Flight Risk Assessment', along with full-bleed target asset imagery.

### Settings Page
- Account preferences: name, contact info, profile photo, and pronouns
- Notification controls: email alerts, push notifications, price drop alerts
- Privacy & security settings: two-factor authentication toggle, session management
- Accessibility options and theme preferences

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | [React 18+](https://react.dev/) | Component-based UI architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe development across the entire codebase |
| **Build Tool** | [Vite](https://vitejs.dev/) | Lightning-fast HMR development server and optimized production builds |
| **Styling** | [Tailwind CSS 3.x](https://tailwindcss.com/) | Utility-first CSS with a consistent design system |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) (`motion/react`) | Declarative page transitions, scroll animations, and micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, accessible SVG icon system |
| **Charts** | [Recharts](https://recharts.org/) | Composable, responsive market analytics charts |
| **Routing** | [React Router DOM](https://reactrouter.com/) | Client-side SPA navigation |
| **AI** | [Google Gemini API](https://ai.google.dev/) | Natural language property search and conversational assistance |
| **Linting** | ESLint + TypeScript ESLint | Code quality enforcement |
| **Package Mgr** | npm | Dependency management |

---

## Project Architecture

```
Real-Estate-Mumbai/
│
├── public/                     # Static assets served as-is
│   └── ...                     # Favicons, OG images, robots.txt
│
├── src/
│   ├── components/             # Shared, reusable UI components
│   │   ├── common/             # Generic components (Button, Card, Modal, Badge...)
│   │   ├── layout/             # App shell: Navbar, Footer, Sidebar
│   │   ├── property/           # PropertyCard, PropertyGrid, PropertyFilters
│   │   ├── search/             # SmartSearch, SearchBar, SearchResults
│   │   ├── charts/             # Market rate charts (Recharts wrappers)
│   │   └── dashboard/          # Dashboard widgets, stats cards, tables
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.tsx            # Landing page with hero and featured listings
│   │   ├── Properties.tsx      # Full property listings browse page
│   │   ├── PropertyDetail.tsx  # Dynamic property detail view via Route IDs
│   │   ├── Neighborhoods.tsx   # Neighborhood explorer index
│   │   ├── NeighborhoodDetails.tsx # Hyper-local data-driven insights per region
│   │   ├── MarketRates.tsx     # Analytics and market trend Recharts dashboard
│   │   ├── Favorites.tsx       # Portfolio Analytics and persistent wishlist
│   │   ├── Profile.tsx         # User profile page
│   │   └── Settings.tsx        # Account and app settings
│   │
│   ├── admin-portal/           # AIR-GAPPED ADMIN PLATFORM (Independent Vite Instance)
│   │   ├── src/pages/          # Admin Routes: Dashboard, Leads CRM, Inventory Index
│   │   └── src/components/     # Admin-specific Layouts, Airlock Logins, and Command Palettes
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSearch.ts        # Gemini-powered search logic
│   │   ├── useProperties.ts    # Property fetching and filtering
│   │   └── useMarketData.ts    # Market analytics data hooks
│   │
│   ├── types/                  # TypeScript interfaces and type definitions
│   │   ├── property.ts         # Property, Listing, Filter types
│   │   ├── user.ts             # User, Agent, Owner profile types
│   │   └── market.ts           # Market data and analytics types
│   │
│   ├── utils/                  # Pure utility/helper functions
│   │   ├── formatters.ts       # Currency, area, date formatters
│   │   ├── validators.ts       # Form input validators
│   │   └── constants.ts        # App-wide constant values (Mumbai districts, etc.)
│   │
│   ├── data/                   # Mock / seed data for development
│   │   ├── properties.ts       # Sample property listings
│   │   ├── neighborhoods.ts    # Neighborhood metadata and insights
│   │   └── marketRates.ts      # Historical price data for charts
│   │
│   ├── App.tsx                 # Root component with route definitions
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind base imports and global styles
│
├── .env.example                # Template showing required environment variables
├── .gitignore                  # Git ignore rules
├── index.html                  # Vite HTML entry point
├── metadata.json               # Project metadata
├── package.json                # Dependencies, scripts, and project config
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundler configuration
└── README.md                   # You are here
```

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

| Tool | Minimum Version | Check |
|------|----------------|-------|
| [Node.js](https://nodejs.org/) | v18.0.0 | `node --version` |
| npm | v9.0.0 (bundled with Node 18) | `npm --version` |
| Git | Any recent version | `git --version` |

> **Tip:** We recommend using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage your Node.js versions cleanly.

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/AtharvaNavlekar/Real-Estate-Mumbai.git
```

**2. Navigate into the project directory**

```bash
cd Real-Estate-Mumbai
```

**3. Install all dependencies**

```bash
npm install
```

This will install all packages listed in `package.json`, including React, Vite, Tailwind CSS, Framer Motion, Recharts, Lucide React, and all TypeScript tooling.

---

### Environment Variables

This project requires a Google Gemini API key to power the Smart Search feature.

**1. Copy the example environment file**

```bash
cp .env.example .env.local
```

**2. Open `.env.local` in your editor and fill in your credentials**

```env
# Google Gemini API — required for AI-powered Smart Search
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**How to get a Gemini API Key:**

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click **"Get API Key"** → **"Create API key in new project"**
4. Copy the key and paste it into your `.env.local` file

> ⚠️ **Security Notice:** Never commit your `.env.local` file to version control. It is already listed in `.gitignore` to prevent accidental exposure of your credentials.

> 📝 **Note:** The application will still run without the Gemini key, but the Smart Search and AI advisory features will be disabled or return an error. All other features (listings, charts, dashboards) function fully without it.

---

### Running the Architectures

This project consists of **two sovereign frontend applications**: the customer-facing real estate platform, and the highly secure, air-gapped Admin Portal.

#### 1. Starting the Customer Platform
Start the main Vite development server with hot module replacement (HMR):

```bash
npm run dev
```
Navigate to `http://localhost:3000` (or the port specified in your terminal).

#### 2. Starting the Admin Portal
The Admin Portal operates natively outside of the main routing engine for security. Open a second terminal window:

```bash
cd admin-portal
npm install      # Install the admin-specific dependencies
npm run dev
```
Navigate to the secondary port provided (e.g., `http://localhost:5173`) to access the Alpine White command center.

**Other available scripts:**

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start dev server with HMR |
| Type Check | `npm run type-check` | Run TypeScript compiler checks without emitting |
| Lint | `npm run lint` | Run ESLint across the `src/` directory |
| Build | `npm run build` | Create an optimized production bundle in `/dist` |
| Preview | `npm run preview` | Serve the production build locally for testing |

---

### Building for Production

To create a minified, tree-shaken production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory. To preview the production build locally before deploying:

```bash
npm run preview
```

**Deployment options:**

This is a standard Vite SPA. You can deploy the `dist/` directory to any static hosting provider:

- **[Vercel](https://vercel.com/)** — Recommended. Zero-config deployment, just connect the repository.
- **[Netlify](https://www.netlify.com/)** — Drag-and-drop the `dist/` folder or connect via Git.
- **[GitHub Pages](https://pages.github.com/)** — Set `base` in `vite.config.ts` to your repo name.
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Fast global CDN with free tier.

> **Important for SPA routing:** Since this app uses React Router (client-side routing), you must configure your host to redirect all 404s to `index.html`. On Netlify, add a `_redirects` file with `/* /index.html 200`. On Vercel, this is handled automatically.

---

## Application Pages & Usage Guide

### Home Page (`/`)
The entry point of the application. Features a full-screen hero section with an animated background, a prominent Smart Search bar, featured new launch projects, and shortlists of popular properties by category. Scroll down to discover neighborhood spotlights and a market trends teaser.

**Tip:** Type a natural language query into the Smart Search bar on the home page. For example:
- `"Show me 2 BHK apartments in Powai under ₹1.5 Crore"`
- `"Sea-facing villa in Juhu with 4 bedrooms and a private pool"`
- `"Best areas to invest in commercial real estate in Mumbai 2025"`

---

### Properties Page (`/properties`)
A full, filterable, and sortable catalog of all available property listings. Use the filter panel on the left (or bottom sheet on mobile) to narrow down results by:

- **Location:** District, sub-locality, pincode
- **Type:** Apartment, Villa, Bungalow, Commercial, Plot
- **BHK:** 1, 2, 3, 4, or 4+ BHK
- **Price Range:** Set a minimum and maximum budget in Crores or Lakhs
- **Carpet Area:** Minimum sq. ft.
- **Possession:** Ready to move, Under construction, New launch
- **Amenities:** Parking, Gym, Swimming pool, Clubhouse, Garden

Sort results by: Newest, Price (Low → High), Price (High → Low), Area, or Popularity.

---

### Property Detail Page (`/properties/:id`)
A dedicated, immersive view for each property listing. Includes:

- Full-bleed photo gallery with thumbnail strip
- Key details: configuration, carpet area, floor, facing direction, age
- Detailed amenities list
- Floor plan viewer
- Price history chart for the property/building
- Location map with nearby landmarks
- Developer / builder profile
- EMI calculator widget
- Agent contact form and click-to-call

---

### Neighbourhoods Page (`/neighborhoods`)
Explore Mumbai's micro-markets through rich editorial guides. Each neighborhood card leads to a detailed profile page covering:

- Overview and character of the area
- Connectivity: nearest train stations, metro lines, highway access
- Social infrastructure: top schools, hospitals, malls, restaurants
- Price per sq. ft. range (residential and commercial)
- Year-on-year appreciation trend
- Investment outlook (score out of 10)
- Pros and cons for buyers vs. investors

---

### Market Rates Page (`/market-rates`)
An analytics dashboard featuring interactive Recharts visualizations:

- **District Price Map:** Heatmap-style view of average property prices across Mumbai
- **Price Trend Line Chart:** Track rates in your selected area across the last 1, 3, or 5 years
- **Supply vs. Demand Bar Chart:** Units launched vs. units sold per quarter
- **Top Appreciating Localities:** Ranked list of fastest-growing micro-markets
- **Commercial Rate Comparison:** Office, retail, and industrial space rates by zone

---

### Dashboard (`/dashboard`) — Buyer
After logging in as a buyer, your personal hub shows:

- **My Shortlist:** All properties you've saved
- **My Searches:** Saved search queries with new match alerts
- **Scheduled Viewings:** Upcoming property visit appointments
- **Recent Enquiries:** Messages sent to agents, with reply status
- **Affordability Snapshot:** Quick EMI vs. income ratio calculator

---

### Owner Portal (`/owner-portal`) — Seller
For property owners listing their own properties:

- **My Listings:** All your active, paused, and expired listings with status badges
- **Add New Listing:** Multi-step form to create a complete property listing with photos, floor plan, and pricing
- **Listing Analytics:** Per-listing metrics — impressions, profile views, shortlists, enquiries
- **Price Advisor:** Tool comparing your asking price with recently sold comparables
- **Enquiry Inbox:** All buyer messages with reply functionality

---

### Agent Portal (`/agent-portal`) — Agent
A full CRM experience for registered real estate agents:

- **Overview Dashboard:** Scorecards for total active listings, enquiries this month, viewings scheduled, and deals closed
- **Client Pipeline:** Kanban-style lead management (New → Contacted → Viewing → Offer → Closed)
- **Listings Management:** Add, edit, feature, or delist properties with bulk-action support
- **Performance Reports:** Monthly and quarterly revenue tracking, rating trends, and response-time analytics
- **Profile Settings:** Update certifications, service areas, bio, and contact details

---

### Profile Page (`/profile`)
Your public-facing profile — visible to buyers and agents you interact with. Displays your name, role, verified status, expertise tags, active listings, ratings, and contact details. Fully editable from this page.

---

### Settings Page (`/settings`)
Manage your account at a granular level:

- **Account:** Display name, email, phone number, profile photo, pronouns, date of birth
- **Notifications:** Toggle email, SMS, and push notification preferences by event type
- **Privacy:** Control who can see your contact info, profile, and listings
- **Security:** Change password, enable/disable two-factor authentication, view active sessions
- **Accessibility:** Font size preference, motion reduction toggle

---

## Key Components

| Component | Location | Description |
|-----------|----------|-------------|
| `SmartSearch` | `src/components/search/` | Gemini-powered NLP search bar with animated suggestions |
| `PropertyCard` | `src/components/property/` | Responsive card displaying key listing info with hover animation |
| `PropertyFilters` | `src/components/property/` | Collapsible sidebar filter panel with multi-select and range inputs |
| `MarketChart` | `src/components/charts/` | Recharts wrapper for price trend line charts |
| `NeighbourhoodCard` | `src/components/common/` | Editorial card with area photo, stats, and investment rating |
| `Navbar` | `src/components/layout/` | Sticky top navigation with role-aware links and mobile hamburger |
| `DashboardStatCard` | `src/components/dashboard/` | Animated metric card used across all portal dashboards |
| `EmiCalculator` | `src/components/common/` | Interactive loan EMI and affordability calculator widget |
| `Profile` | `src/pages/` | Full-featured user/agent profile page with luxury dark UI |

---

## Configuration Files

### `vite.config.ts`
Vite build configuration. Key settings include:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

### `tsconfig.json`
TypeScript is configured in strict mode for maximum type safety. Key options include `"strict": true`, `"jsx": "react-jsx"`, and path aliases for clean imports.

### `tailwind.config.*` (if present)
Tailwind is configured with a custom design system — extended colors, font families (`font-display`, `font-sans`), and custom animation utilities aligned to the app's visual language.

### `.env.example`
Documents all required and optional environment variables. Copy this to `.env.local` and fill in your values before running the app:

```env
# Required — AI Smart Search
GEMINI_API_KEY=

# Optional — Analytics, Feature Flags, etc.
# VITE_ANALYTICS_ID=
```

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

**1. Fork the repository**

Click the "Fork" button at the top right of the [repository page](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai).

**2. Clone your fork locally**

```bash
git clone https://github.com/<your-username>/Real-Estate-Mumbai.git
cd Real-Estate-Mumbai
```

**3. Create a new feature branch**

Use a descriptive branch name that reflects your change:

```bash
git checkout -b feature/add-neighborhood-map
# or
git checkout -b fix/search-filter-bug
# or
git checkout -b chore/upgrade-framer-motion
```

**4. Make your changes**

Implement your feature or fix. Make sure to:
- Follow the [Coding Standards](#-coding-standards) described below
- Add TypeScript types for any new data structures
- Test your changes on both desktop and mobile viewport sizes

**5. Commit your changes**

Write a clear, conventional commit message:

```bash
git add .
git commit -m "feat(search): add price range slider to smart search filters"
```

Commit message format: `type(scope): short description`  
Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`

**6. Push to your fork**

```bash
git push origin feature/add-neighborhood-map
```

**7. Open a Pull Request**

Go to the original repository on GitHub and click **"Compare & pull request"**. Fill in the PR template with a description of what you changed and why.

### Good First Issues

If you're new to the project, look for issues tagged with `good first issue` or `help wanted` in the [Issues tab](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai/issues).

### Bug Reports

Found a bug? Please [open an issue](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai/issues/new) with:
- A clear title describing the bug
- Steps to reproduce it
- Expected vs. actual behavior
- Browser, OS, and Node.js version
- Screenshots if applicable

### Feature Requests

Have an idea? [Open a feature request issue](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai/issues/new) describing:
- The problem you're trying to solve
- Your proposed solution
- Any alternative approaches you considered

---

## Coding Standards

Please ensure your contributions adhere to these standards before submitting a PR.

### TypeScript
- **All new files must be `.tsx` or `.ts`** — no plain `.js` or `.jsx`
- **No `any` types** — if you're unsure of a type, use `unknown` and narrow it
- **Define explicit return types** for all functions that are not simple one-liners
- Use `interface` for object shapes, `type` for unions/intersections
- Export types from dedicated `types/` files rather than inline in components

### React
- **Functional components only** — no class components
- Use **custom hooks** (`useXxx`) to extract complex state or side-effect logic from components
- Keep components **single-responsibility** — if a component does more than one clearly distinct thing, split it
- Prefer **named exports** for components, only use default exports for page-level components
- Avoid prop drilling beyond 2 levels — consider lifting state or using context

### Styling (Tailwind CSS)
- **Tailwind utility classes only** — avoid raw inline `style={}` props unless absolutely necessary for dynamic values (like chart colors)
- Maintain consistent spacing using the Tailwind scale (`p-4`, `mt-6`, `gap-8`, etc.)
- For complex component-level styles, use `@apply` in a dedicated `.css` module rather than mega-long `className` strings
- Ensure all interactive elements have visible focus states for accessibility
- All new UI must be **fully responsive** — test at `sm`, `md`, `lg`, and `xl` breakpoints

### Animation (Framer Motion)
- Define variants in a `const` above the component, not inline
- Use `AnimatePresence` for mount/unmount transitions
- Respect the `prefers-reduced-motion` media query — Framer Motion's `useReducedMotion()` hook makes this easy
- Avoid animating `width` and `height` directly (performance) — prefer `scale` transforms or `maxHeight` with overflow

### Git
- One feature or fix per PR — keep PRs focused and reviewable
- Squash trivial "fix typo" commits before submitting
- Rebase onto `main` before opening a PR to avoid merge conflicts

---

## Roadmap

The following features and improvements are planned for future releases:

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Backend API integration (replace mock data) | Planned |
| 🔴 High | User authentication (Sign up / Login / OAuth) | Planned |
| 🔴 High | Real-time property data via web scraping or MagicBricks API | Planned |
| 🟡 Medium | Advanced map integration (Google Maps / Mapbox) | Planned |
| 🟡 Medium | Property comparison tool (side-by-side up to 3 properties) | Planned |
| 🟡 Medium | Push notifications for price drops and new matches | Planned |
| 🟢 Low | Dark / Light theme toggle | Planned |
| 🟢 Low | PWA support for offline browsing and home screen install | Planned |
| 🟢 Low | Multilingual support (Hindi, Marathi) | Planned |
| 🟢 Low | Accessibility audit and WCAG 2.1 AA compliance | Planned |

---

## License

This project is distributed under the **Apache License 2.0**.

```
Copyright 2024 Atharva Navlekar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

The Apache 2.0 license means you are free to use, modify, and distribute this code for personal or commercial projects, provided you include the original copyright notice and a copy of the license. It also provides an explicit grant of patent rights from contributors.

---

## Credits & Acknowledgements

**Project Author & Maintainer**

**Atharva Navlekar** — [@AtharvaNavlekar](https://github.com/AtharvaNavlekar)

---

**Open Source Libraries & Tools Used**

| Library | What it does in this project |
|---------|------------------------------|
| [React](https://react.dev/) | Core UI component framework |
| [Vite](https://vitejs.dev/) | Dev server and production bundler |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the entire codebase |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling and design system |
| [Framer Motion](https://www.framer.com/motion/) | Page transitions and micro-interactions |
| [Lucide React](https://lucide.dev/) | Consistent SVG icon library |
| [Recharts](https://recharts.org/) | Market analytics data visualization |
| [React Router DOM](https://reactrouter.com/) | SPA client-side routing |
| [Google Gemini API](https://ai.google.dev/) | AI-powered Smart Search and advisory |

---

**Design Inspiration**

The UI draws visual inspiration from premium real estate platforms and luxury editorial design — including Sotheby's International Realty, Knight Frank India, and Architectural Digest — adapted into a modern, performant React application.

---

<div align="center">

<br/>

**If this project helped you, please consider giving it a ⭐ on GitHub!**

<br/>

Built by The.Navlekar

<br/>

[Report a Bug](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai/issues/new) · [Request a Feature](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai/issues/new) · [View the Code](https://github.com/AtharvaNavlekar/Real-Estate-Mumbai)

</div>
