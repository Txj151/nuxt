# AGENTS.md — nuxt-app

## Commands

| Action | Command |
|---|---|
| Dev server | `npm run dev` (http://localhost:3000) |
| Build | `npm run build` |
| Preview | `npm run preview` |
| Generate static | `npm run generate` |
| Lint | `npx nuxt lint` or `npx eslint .` |
| Prepare (regen types) | `npm run postinstall` (alias: `nuxt prepare`) |

No test command or test framework is configured.

## Architecture

- **Nuxt 4** with `app/` directory layout (`app/app.vue`, `app/pages/`, etc.) — NOT the Nuxt 3 root-level layout.
- Pages: `app/pages/index.vue`, `app/pages/detail.vue` only.
- All modules listed in `package.json` dependencies (`@nuxt/ui`, `@element-plus/nuxt`, `@nuxtjs/i18n`, etc.) are **commented out** in `nuxt.config.ts` and effectively disabled.

## Build artifacts (all gitignored)

- `.nuxt/` — generated Nuxt types, ESLint config, tsconfig references
- `.output/` — production build output
- `.data/`, `.nitro/`, `.cache/`

TypeScript project references point into `.nuxt/` — these files do not exist until `nuxt prepare` runs (runs automatically via `postinstall`).

## ESLint

Config at `eslint.config.mjs` imports generated config from `.nuxt/eslint.config.mjs`. Run `nuxt prepare` first if that file is missing.

## Conventions

- `"type": "module"` — all `.ts`/`.js` files are ESM.
- TypeScript 6, Vue 3.5, Vue Router 5.
- Playwright core is a dependency but has no test script or config.
