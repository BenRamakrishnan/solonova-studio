# SOLONOVA Studio

Website design studio landing page built with vanilla JavaScript, modular CSS, and Vite. The six portfolio entries are self-initiated concept/demo studies.

## Development

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Run the complete automated gate before publishing:

```sh
npm run check
```

This runs ESLint, behavioral Node tests, the production build, and asset/metadata/CSS verification. Preview production output with `npm run preview -- --host 127.0.0.1 --port 4173`.

## GitHub Pages

The live project URL is https://benramakrishnan.github.io/solonova-studio/. Repository Settings → Pages must use **GitHub Actions**. A push to `main` installs from the lockfile, runs the complete gate, uploads `dist`, and deploys it. Dependencies used by the workflow are pinned to reviewed action commits.

The workflow takes `SITE_URL` from the Pages configuration. `config/site.js` uses it for the canonical link, social image, structured data, sitemap, robots file, and llms.txt. For another host, set `SITE_URL` to its public URL before building; the path is preserved, including GitHub project subpaths. Asset URLs retain the existing relative Vite base. `build-revision` metadata records the deployed Git commit.

## Structure and verification

- `src/components/`: page sections and interactions.
- `src/data/`: owner-confirmed concept portfolio and comparison copy.
- `src/utils/`: contact links, safe text, scope arithmetic, focus/scroll, and guarded mounting.
- `content/seo/`: discovery templates emitted during build.
- `public/`: local fonts with licenses, responsive project previews, and brand assets.
- `scripts/*.test.js`: behavior, metadata, and preview-server tests.
- `scripts/verify-audit.js`: validates the generated production files and asset paths.

Browser verification covers the navigation, portfolio filters and dialog, calculator handoff, inquiry draft, console errors, and responsive widths from 320 to 1920px. Node tests do not replace those browser checks.

Optional browser diagnostic scripts use installed Chrome; override `CHROME_PATH`, `PREVIEW_URL`, `PREVIEW_PORT`, or `SCREENSHOT_DIR` as appropriate. They are development tools and do not run in the deployment gate. Screenshot output defaults to `docs/verification`.

Regenerate responsive images with `python scripts/optimize-previews.py` after installing Pillow. Original project images are retained. `scripts/generate-brand-assets.mjs` recreates the existing SVG/PNG brand exports; it is not part of normal builds.

The inquiry form prepares a WhatsApp draft. It does not submit to a backend; the visitor reviews and sends the message in WhatsApp.
