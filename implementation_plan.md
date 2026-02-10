# Implementation Plan - Scalable News Portal (Tupaki-like)

This plan outlines the development of a high-performance, scalable news portal inspired by `tupaki.com`. The goal is to build a modern, aesthetically pleasing, and easy-to-manage platform that scales efficiently.

## 1. Architecture & Tech Stack

To achieve the balance between "making it live fast" and "scaling," we will use the **Next.js** framework. It provides excellent performance (Server-Side Rendering), SEO capabilities, and scalability.

- **Frontend:** Next.js (React), Tailwind CSS (Deep Charcoal/Saffron Theme), Framer Motion.
- **State Management (Antigravity Core):**
    - **Global Store (`zustand`):** For UI state (Nav, Breaking News visibility).
    - **Server State (`TanStack Query`):** For hydrating content from WordPress and background refreshing.
- **Backend/CMS:**
    - **[SELECTED] Headless WordPress:**
        - *Architecture:* WordPress as a hidden headless CMS. Next.js fetches data via WPGraphQL.
- **Schema:** Unified JSON Schema for all story types (Hero, Top, Latest) to ensure component polymorphism.
- **Media Pipeline:**
    - Images: Responsive `next/image` with blur placeholders.
    - Videos: Lazy-loaded native video players for "Viral Clips".

## 2. Hosting & Scaling Strategy

### **Best Option: Vercel (Next.js Frontend)**
- **Why:** Vercel is the creators of Next.js. It offers the fastest path to production ("making it live").
- **Scaling:** It handles traffic spikes automatically via Edge Network.
- **Cost Analysis:**
    - **Development/MVP:** **$0/month** (Hobby Tier). Generous limits for starting up.
    - **Growth:** **$20/month** (Pro Tier). Includes 1TB bandwidth.
    - **High Scale (Millions of views):** If you exceed 1TB bandwidth, costs can rise ($0.15/GB).
    - **Optimization Strategy:** To keep costs low at scale, we will serve heavy media (images/videos) via a separate CDN (Cloudinary/S3), keeping Vercel bandwidth usage low.

## 3. Core Features (TeluguVoice Specs)

1.  **Antigravity Home Page:**
    - **Dynamic Content Engine:** Maps `Hero`, `Top Stories`, and `Latest` to a unified schema.
    - **Reactive Breaking News:** Updates instantly via client-side polling/hooks.
    - **LCP Optimization:** Pre-fetches "Trending Now" text strip.
2.  **Polymorphic News Card:**
    - **Vertical:** For "Top Stories" (Image Top).
    - **Horizontal:** For "Latest Stories" (Image Left).
    - **Design Tokens:** Deep Charcoal (`#121212`), Saffron (`#FF9933`).
3.  **Viral Clips & Videos:**
    - Horizontal scroll snap carousel.
    - Mobile "Shorts" experience full-screen transition.
4.  **Adaptive Navigation:**
    - **Desktop:** Sticky Header + Mega Menu (Movies/Politics).
    - **Mobile:** Bottom Nav + Drawer + Hamburger.

## 4. Implementation Steps

### Phase 1: Setup & Antigravity Core
- [ ] Initialize Next.js Project (Typescript, Tailwind).
- [ ] **State Setup:** Configure Zustand & React Query.
- [ ] **Schema:** Define strict TypeScript interfaces for Unified News Schema.

### Phase 2: Core Components (Design System)
- [ ] Implement `NewsCard` (Polymorphic).
- [ ] Implement `VideoCarousel` (Lazy-loading).
- [ ] Build Adaptive Header/Nav.

### Phase 3: Page Implementation
- [ ] Build Home Page (Hero, Top Stories, Latest Grid).
- [ ] Build Article Detail & Category Pages.

### Phase 4: Performance & Polish
- [ ] LCP Optimization (Pre-fetch strategies).
- [ ] "Antigravity" Transitions (Framer Motion).
- [ ] SEO & Deployment.

## 5. Costs Summary (Estimated)

| Service | Starter / MVP | Growth | High Scale |
| :--- | :--- | :--- | :--- |
| **Hosting (Vercel)** | **$0** | **$20/mo** | Variable |
| **CMS (WordPress)** | **~$5-10/mo** (Hosting) | **~$20-50/mo** (Managed) | Variable |
| **CMS (Sanity)** | **$0** (Free Tier) | **$15/mo** (Team) | Custom |
| **Domain** | **~$12/yr** | - | - |
| **Total** | **~$5 - $15 / month** | **~$40 - $70 / month** | Variable |

**Recommendation:**
- If you want **familiarity & power**: Choose **Headless WordPress**.
- If you want **speed & zero maintenance**: Choose **Sanity**.
