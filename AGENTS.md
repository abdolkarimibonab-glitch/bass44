# ATRYA Electronic (آتریا الکترونیک)

Persian RTL e-commerce storefront for power supplies / electronic components (React + Vite, plain CSS).

## Run (Base44 dev environment)

- `docker compose -f docker-compose.base44.yml up -d` — serves the app on host port 3000 (Vite dev server on 5173, `allowedHosts: true`, bind-mounted source with HMR).
- `npm install` runs automatically in the container before `npm run dev`.
- No external service credentials are required — everything is local. `.base44/environment.json` has an empty `secrets` list.

## Stack & conventions

- React 18 + `react-router-dom` v6 (BrowserRouter), Vite 5.
- Pure CSS design tokens in `src/styles/global.css` (`--navy`, `--gold`, …); component/page styles in `src/styles/components.css`. RTL is set on `<html dir="rtl">`.
- Font: Vazirmatn self-hosted via `@fontsource/vazirmatn`.
- Persian numerals/prices via `src/utils/format.js` (`formatPrice`, `faNumber` — always تومان).
- Catalog data lives in `src/data/products.js`, articles in `src/data/articles.js`, site config (phone, hours, nav) in `src/data/site.js`. Add new products by appending to `products.js` — UI is fully data-driven.
- Cart/wishlist state: `src/context/StoreContext.jsx` (localStorage-persisted).
- SEO: `useSEO` hook (`src/utils/seo.js`) sets title/meta/canonical/OG + JSON-LD per page.
- Product images are neutral SVG placeholders in `public/images/products/` — replace with real photography by swapping the `image` field per product.

## Verify

- `curl -s http://localhost:3000/ | grep '<div id="root">'` — page serves.
- Vite errors appear in container logs: `docker compose -f docker-compose.base44.yml logs -f web`.
