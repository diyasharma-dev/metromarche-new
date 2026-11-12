# Metro Marché — Complete Vue 3 Redesign

A complete, ultra-responsive, modern redesign for **Metro Marché** (30 W 57th St, Midtown Manhattan, New York, NY 10019) built as a pure **Vue.js 3 Single Page Application (SPA)** with **Vue Router 4**, **Vite**, and styled strictly to match the **Logo Color Pattern**.

---

## 🎨 Exact Logo Color Pattern Followed 1:1

Extracted directly from `assets/images/logo.webp` and official brand assets:

| Color Role | Hex Code | Visual Swatch Description | Usage |
|---|---|---|---|
| **Primary Brand Gold / Bronze** | `#896A39` | Antique French Bronze / Dijon Ochre | Primary CTA buttons, badge accents, pricing, active tabs |
| **Dark Noir / Charcoal** | `#1B222C` | Deep Midnight Obsidian Charcoal | Header text, editorial typography, dark hero sections |
| **Deep Noir Darker** | `#10161D` | Deep Parisian Bistro Noir | Announcement bar, footer background |
| **Parisian Slate** | `#69707B` | Elegant Slate Gray | Secondary details, captions, subheadings |
| **French Celadon / Sage** | `#9BC3CA` | Soft Duck-Egg Blue / Celadon | Fresh healthy accent, dietary badges |
| **Terracotta Peach** | `#DF9F83` | Warm Mediterranean Terracotta | Promo accents, hotline links |
| **French Parchment Cream** | `#FAF8F5` | Warm Ivory Cream Canvas | Clean, luxurious, easy-on-the-eyes background |
| **Warm Oat** | `#F3ECE1` | Warm Card Container Canvas | Card containers, subtle borders |

---

## ⚡ 100% Vue.js 3 Architecture

The entire application is 100% Vue 3 Single File Components (SFCs) with client-side Vue Router navigation:

### 📄 Pages & Views (`src/views/`)
- **`HomeView.vue` (`/`)**: Complete flagship landing experience including Hero, 100% Seed Oil-Free philosophy, Interactive Market Table Plate Builder, Chef-Curated Highlights, Corporate Catering & Live Budget Estimator, Rewards App showcase, Verified Google Reviews, Location & Transit, and Newsletter promo bar.
- **`MenuView.vue` (`/menu`)**: Full digital menu with live reactive search (`v-model="searchQuery"`), 6 category filters, 4 dietary filters (Gluten-Free, Vegan, High Protein, Dairy-Free), macro counters (calories, protein), and pickup ordering actions.
- **`CateringView.vue` (`/catering`)**: Dedicated corporate catering experience with package options ($16 to $26/guest), interactive guest slider (10 to 200+ guests), real-time budget calculator, and custom quote inquiry form.
- **`AboutView.vue` (`/about`)**: Brand heritage, why we ban industrial seed oils (canola, soybean, corn), our EVOO & Avocado Oil standard, grass-fed proteins, and kitchen values.
- **`RewardsView.vue` (`/rewards`)**: App preview, 10 Pts/$1 loyalty system, instant $5 welcome bonus, redeemable tier breakdown (100, 250, 500, 750 pts), and iOS / Android links.
- **`ContactView.vue` (`/contact`)**: 30 W 57th St details, Midtown subway guides (N, Q, R, W, F, M, 1, E), live operating hours, interactive message form, and Google Maps direction link.

### 🧩 Components (`src/components/`)
- **`Navbar.vue`**: Spacious, collision-free desktop navbar with logo, no-wrap navigation links (`<router-link>`), responsive mobile slide-out drawer, and live NYC store hours status pill in the top announcement bar.
- **`Footer.vue`**: Elegant noir footer with official white logo, route links, corporate catering links, social media handles, and store hours.
- **`Hero.vue`**: High-impact banner with trust badges (100% Seed Oil Free, 4.9★ Google, Cooked Daily Fresh).
- **`SeedOilSection.vue`**: 100% seed-oil-free comparison matrix (What We Cook With vs What We Strictly Ban).
- **`MarketTableBuilder.vue`**: 3-step interactive meal builder (1 Protein + 2 Sides + 1 Base) with live macro & protein calculator.
- **`MenuHighlights.vue`**: Chef-curated dishes with category tabs and dietary badges.
- **`CateringEstimator.vue`**: Real-time event budget estimator with guest slider and package options.
- **`RewardsApp.vue`**: App download preview with $5 bonus badge and loyalty perks.
- **`GoogleReviews.vue`**: 4.9★ Google rating badge and verified diner testimonials.
- **`LocationTransit.vue`**: Midtown address, store hours, and subway badges (N/Q/R/W/F/M).
- **`NewsletterBar.vue`**: $5 off first order email subscription bar.
- **`OrderModal.vue`**: Global modal offering Express Store Pickup or Manhattan Delivery.
- **`CateringModal.vue`**: Global custom proposal quote request form with reactive toast confirmation.

---

## 🛠️ How to Run and Develop

### 1. Start Development Server
```bash
npm run dev
```
Runs the Vite development server locally at `http://localhost:3000` with hot-module replacement (HMR).

### 2. Build for Production
```bash
npm run build
```
Compiles and bundles the application into optimized static assets in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```
Previews the built application locally.
