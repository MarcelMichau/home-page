# Contributor Guide

## Getting Started

Firstly, I'm not sure exactly why you'd want to contribute to someone else's personal website, but here we are. This serves as a guide to understanding the project structure & knowing how to navigate it.

## Project Structure

The site stays flat:

- `src/index.html` — markup and content
- `src/main.css` — styles and seven weekday palettes
- `src/theme.js` — local-weekday selection and local-midnight refresh
- `src/images/` — profile and branding assets
- `src/_headers` — hosting response policies

See [GLOSSARY.md](GLOSSARY.md) for the weekday theme and verified site terminology.

## Development and Testing

1. Install dependencies with `pnpm install --frozen-lockfile` using the version pinned in `package.json`.
2. Run `pnpm run build` before `pnpm start` to preview the site at http://localhost:8788. Use `pnpm run build:watch` in another terminal while editing styles.
3. Stop the preview server before running `pnpm test`. Playwright always builds fresh CSS and starts its own server; an occupied port fails instead of silently reusing stale output.

Tests verify real CSS responses and computed styles across Chromium, Firefox, and WebKit. Controlled browser clocks cover all seven local weekdays, ordinary midnights, 23-hour and 25-hour daylight-saving days, and the Monday default without JavaScript.

## Delivery

GitHub Actions archives the entire verified `src/` directory only after browser tests pass. The deployment job downloads that archive, replaces the checkout's `src/`, and publishes the verified site without rebuilding. Keep HTML, generated CSS, images, and `_headers` together so the published output is the output that was tested.
