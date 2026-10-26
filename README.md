# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Requirements

- Node.js `^20.19.0 || >=22.12.0` (required by Vite 8)
- Git submodule `lib/BlueMap`, initialized with `git submodule update --init`

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

`build` first compiles the BlueMap webapp from the `lib/BlueMap` submodule into
`lib/BlueMap/BlueMapCommon/webapp/dist` (exposed to the app as `public/bluemap`),
then runs `vue-tsc -b` and `vite build`.

Note: `typescript` is held on the 5.x line because `vue-tsc` relies on the
JavaScript compiler API, which TypeScript 7 (the native compiler) does not expose.
