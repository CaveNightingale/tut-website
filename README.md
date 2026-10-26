# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Requirements

- Node.js `^20.19.0 || >=22.12.0` (required by Vite 8)
- Git submodules `lib/BlueMap` and `lib/minecraft_map_renderer`, initialized with
  `git submodule update --init --recursive`

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Both `dev` and `build` compile the static-map viewer from
`lib/minecraft_map_renderer/web`, installed as the local `minecraft-map-renderer`
npm dependency. After updating that submodule during development, restart the dev
server to rebuild the viewer.

`build` also compiles the BlueMap webapp from the `lib/BlueMap` submodule into
`lib/BlueMap/BlueMapCommon/webapp/dist` (exposed to the app as `public/bluemap`),
then runs `vue-tsc -b` and `vite build`.

## GitHub Pages

The [deployment workflow](.github/workflows/deploy-pages.yml) runs on pushes to
`master` and can also be started manually from the Actions tab. It initializes
both Git submodules, installs dependencies with Node.js 24, builds the site, and
deploys `dist` using the official GitHub Pages Actions. No personal access token
or `gh-pages` branch is required.

Before the first deployment:

1. In **Settings > Pages > Build and deployment**, set **Source** to
   **GitHub Actions**.
2. Commit `public/CNAME` with the domain `tutserver.top`, set the same custom
   domain in **Settings > Pages**, and configure the domain's DNS records for
   GitHub Pages. Enable **Enforce HTTPS** once the certificate is available.
3. Push to `master`, or run **Deploy to GitHub Pages** from the Actions tab.

The site uses root-relative URLs and Vite's default base `/`, matching the custom
domain. Hosting at `https://<owner>.github.io/tut-website/` without a custom domain
would also require updating the Vite base, router base, and root-relative asset
URLs.

GitHub Pages does not support SPA rewrites. The workflow copies `index.html` to
`404.html` so direct visits and refreshes on `/map` and `/map/bluemap` still load
the app and preserve the URL. These requests return HTTP 404 even though the app
renders correctly; navigation from within the app does not have this limitation.

Pages only serves static files: Vite's development proxy is not available in
production. The BlueMap viewer is included, but its live settings and map data
must be hosted separately or provided as static files.

## Maps

`/map` is the default static-map page. Its left sidebar switches between the
overworld, Nether and End; the link at the bottom opens the original BlueMap at
`/map/bluemap`.

Place renderer output in these directories before building:

```text
public/static-maps/overworld/
public/static-maps/the_nether/
public/static-maps/the_end/
```

Each directory must contain the renderer's `index.map` and its referenced tile
files, preserving their relative paths. Vite copies them unchanged to
`dist/static-maps/<dim_name>/`, served at `/static-maps/<dim_name>/` (not
`/public/static-maps/`). Missing or invalid map data produces an error with a
retry button; it does not silently switch to BlueMap.

Serve the site over HTTPS (or localhost) so the viewer can verify tile SHA-256
hashes using Web Crypto. The browser must support Canvas 2D and gzip
`DecompressionStream`. Production hosting must fall back to `index.html` for
client-side routes such as `/map` and `/map/bluemap`.

Note: `typescript` is held on the 5.x line because `vue-tsc` relies on the
JavaScript compiler API, which TypeScript 7 (the native compiler) does not expose.
