# Tacit — Eleventy 3.1.2 + Tacit CSS

Minimal Eleventy starter that uses the unminified Tacit CSS baseline instead of a custom component library.

## What's inside
- Eleventy 3.1.2 (ESM) with a resilient Luxon date filter to avoid Nunjucks date parsing errors
- Tacit CSS 1.9.5 in `public/css/tacit.css` (unminified)
- Content in `content/` with layouts in `_layouts/`
- Blog collection in `content/blog/` (sample post included)
- Generated outputs: RSS `/feed/feed.xml`, `/sitemap.xml`, `/robots.txt`, `/humans.txt`

## Getting started
```bash
npm install
npm run serve # or npm run build
```

Edit metadata in `content/_data/metadata.json` (update `url` to your production domain). Static assets go in `public/` and are passed through as-is.

## Scripts
- `npm run build` — build the site to `_site`
- `npm run serve` — dev server with watch
- `npm run watch` — watch-only
- `npm run clean` — remove `_site`

## License
MIT — see `LICENSE`.
