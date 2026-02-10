# Task Checklist: TeluguVoice Portal (Antigravity Architecture)

## Phase 1: Setup & Antigravity Core
- [x] Initialize Next.js Project (Typescript, Tailwind) <!-- id: 0 -->
- [x] Configure Tailwind with TeluguVoice Colors (Deep Charcoal, Saffron) <!-- id: 1 -->
- [x] **State Management:** Setup Zustand Store (`useNewsStore`) & React Query Provider <!-- id: 2 -->
- [x] **Schema Definition:** Create Unified JSON Schema (TypeScript Interfaces) <!-- id: 3 -->

## Phase 2: Core Components (Design System)
- [x] Create Polymorphic `NewsCard` (Vertical/Horizontal variants) <!-- id: 4 -->
- [x] Create `VideoCarousel` Component (Lazy-loading, Snap scroll) <!-- id: 5 -->
- [x] Create `BreakingNewsTicker` (Real-time reactive) <!-- id: 6 -->
- [x] Implement Adaptive Sticky Header (Mega-menu vs Drawer) <!-- id: 7 -->

## Phase 3: Page Implementation
- [x] Build Home Page (Hero, Top Stories, Latest Grid, Trending Strip) <!-- id: 8 -->
- [x] Build Video/Shorts Section (Full-screen mobile experience) <!-- id: 9 -->
- [x] Build Article Detail Page <!-- id: 10 -->
- [x] Implement Category Pages (Movies, Politics) <!-- id: 11 -->

## Phase 4: Performance & Polish
- [x] Optimize LCP (Pre-fetch Trending Data) <!-- id: 12 -->
- [x] Implement "Antigravity" Transitions (Framer Motion) <!-- id: 13 -->
- [x] Deployment Configuration (Vercel) <!-- id: 14 -->

## Phase 5: WordPress Integration (Data Layer)
- [x] **GraphQL Client:** Setup `graphql-request` client <!-- id: 15 -->
- [x] **Queries:** Define `GET_POSTS`, `GET_POST_BY_SLUG`, `GET_CATEGORIES` <!-- id: 16 -->
- [x] **Data Hooks:** Create React Query hooks to fetch real data <!-- id: 17 -->
- [x] **Environment:** Configure `.env.local` example <!-- id: 18 -->

## Phase 6: Production Data Layer (SSR)
- [x] **Service Abstraction:** Create `src/lib/service.ts` to switch between API & Mock <!-- id: 19 -->
- [x] **Home Page (SSR):** Refactor `page.tsx` to Async Server Component using Service <!-- id: 20 -->
- [x] **Slug Page (SSR):** Refactor `[slug]/page.tsx` to Async Server Component <!-- id: 21 -->
- [x] **Category Page (SSR):** Refactor `[category]/page.tsx` to Async Server Component <!-- id: 22 -->

## Phase 7: Deployment Support
- [x] **Documentation:** Add Vercel deployment guide to Walkthrough <!-- id: 23 -->
- [x] **Cleanup:** Remove temporary scripts (`finish_init.bat`, `init.bat`) <!-- id: 24 -->
