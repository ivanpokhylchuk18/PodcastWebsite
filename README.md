# FIVEBBBBBTV public prototype

Stage 1: responsive visual foundation for the future WordPress frontend.

## Preview
Run `npm run dev` from this folder, then visit http://127.0.0.1:4173.
No dependencies or installation are required; Node.js is required. Stop with Ctrl+C.
You can also open `public/index.html` directly for an offline preview.

## Files
- `public/index.html`: semantic page sections and temporary editorial copy.
- `public/styles.css`: shared design tokens, layout and responsive rules.
- `public/app.js`: accessible mobile menu behavior, including Escape dismissal.
- `public/assets/`: selected public artwork only.
- `docs/design-guide.md`: design, sitemap, migration plan and pending decisions.
- `docs/project-brief.md`: supplied master context for later work.
- `server.mjs`: loopback-only preview server with an explicit public-file allowlist.

## Check
Run `npm run check`. At desktop and 390px/320px mobile widths check wrapping, readable cover art and absence of horizontal scrolling. Tab through links and menu; open the mobile menu, press Escape and verify focus returns. Activate every section link. Expand the cover details. Disable JavaScript and confirm navigation remains visible. Verify `/images/unnamed.jpg` and `/docs/project-brief.md` return 404 on the preview server.

The prototype contains no payment, login, protected-PDF, data collection or subscription implementation. Proposed prices are labeled. `noindex` discourages indexing but is not access control. Future staging needs actual access restrictions. Never deploy original images/ or the workspace root; only public/ is website material.
