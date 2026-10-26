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
