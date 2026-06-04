# AGENTS.md — Fiscalio Web

High-signal guidance for working in this repo. Read `DESIGN.md` and `GEMINI.md` in addition — they own the design system and content voice respectively and are not duplicated here.

## Stack

- **Next.js 16.0.10** App Router with **Turbopack** enabled by default in `next.config.ts`
- **React 19.2.0**, **TypeScript 5** (strict)
- **Tailwind v4** via `@tailwindcss/postcss` (no `tailwind.config.ts`; tokens live as CSS vars in `app/globals.css`)
- **shadcn/ui** (new-york, lucide icons) — components in `components/ui/`
- **ESLint** flat config (`eslint.config.mjs`) extending `eslint-config-next/core-web-vitals` + `typescript`
- Path alias: `@/*` → repo root

## Commands

Only four npm scripts exist. There is **no** test or typecheck script.

| Task                   | Command                                                                |
| ---------------------- | ---------------------------------------------------------------------- |
| Dev server (Turbopack) | `npm run dev`                                                          |
| Production build       | `npm run build`                                                        |
| Run production         | `npm run start`                                                        |
| Lint                   | `npm run lint` (runs `eslint .`)                                       |
| Type-check (manual)    | `npx tsc --noEmit` — there is no `typecheck` script, do not invent one |

No CI workflows exist in `.github/`. Verification order when finishing a task: `lint` → `tsc --noEmit` → manual `build` if routes/SSR changed.

## Layout

- `app/` — App Router routes
  - `app/page.tsx` landing, `app/calculadora-resico/` calculator, `app/blog/*` SEO posts, `app/signup/thank-you`, `app/admin/*` (see below), `app/api/og/route.tsx` (edge runtime, OG image)
  - `app/admin/layout.tsx` sets `robots: noindex` for the whole `/admin` subtree — treat as internal
- `actions/` — `"use server"` files: `sendTaxReport.ts` (Resend + tax-report email), `signupWaitlist.ts` (Airtable + Resend)
- `lib/` — `tax-calculator.ts` (pure functions, `CalculoResult`), `tax-constants.ts` (SAT RESICO rates), `format-currency.ts`, `utils.ts` (`cn` shadcn helper + `delay`), `constants.ts` (env accessors)
- `components/` — feature components, `components/ui/` (shadcn), `components/emails/` (React Email)
- `hooks/use-count-up.ts` — animated counter
- `conductor/` — implementation plan docs (e.g. `tax-calculator.md`)
- `public/` — static assets including the hero image

## Domain & Language

- Product is Spanish-first (`<html lang="es">`, `locale: "es_MX"`). Keep UI copy in Spanish unless explicitly asked.
- Domain: Mexico **RESICO** tax (ISR + IVA) for freelancers. Rates in `lib/tax-constants.ts` must match SAT rules — change them only when the official table changes, and verify with the existing test cases before shipping.

## Environment

Required env vars (read via `lib/constants.ts` and inline `process.env`):

- `NEXT_PUBLIC_APP_URL` (default `https://fiscalio.app`)
- `NEXT_PUBLIC_GA_ID` — Google Analytics, only loaded in production (`app/layout.tsx:49`)
- `NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL`
- `AIRTABLE_ACCESS_TOKEN`, `AIRTABLE_BASE` — Airtable base ID
- `RESEND_API_KEY` — used by both server actions

`.env.local` is gitignored. Without these, server actions silently fail or no-op. `from` address for Resend is hardcoded to `Fiscalio <noresponder@fiscalio.app>` in `actions/`.

## Conventions & Gotchas

- **Spanish copy only.** Don't translate UI strings to English.
- **Fonts already wired in `app/layout.tsx`** — use `font-display` (DM Sans) for headings, default body font is Geist, apply `font-mono` (Geist Mono) for currency/percentages per `DESIGN.md`.
- **Container:** `max-w-7xl` (1280px), `py-12` to `py-24` between major sections, corners stay at `rounded-md` (8px). Background is the warm neutral — never pure `#ffffff` for page bg.
- **No comments in code** — keep new code clean of inline comments.
- **Airtable `Waitlist` table** has fields `Email` and `Created at` (note the space). Don't rename the field.
- **`signupWaitlist` throttles with `await delay(2)`** (2 s) before writing — keep it.
- **Tailwind v4, no `tailwind.config.ts`.** Tokens are CSS custom properties in `app/globals.css`. If you add a new color, add the CSS var there, not a config file.
- **`app/api/og/route.tsx` runs on edge runtime** and hardcodes `#fcfaf6` to match `DESIGN.md` — if the design background changes, update both.
- **`conductor/tax-calculator.md` is a plan doc**, not a contract. It describes an older draft; the engine now lives in `lib/tax-calculator.ts`. Use it for intent, not as a literal checklist.
- **No automated tests.** Manual verification only. Don't add test files unless explicitly asked.
- **Shadcn add via `components.json`** — the config is present, but in this repo components are usually hand-edited. If you `shadcn add`, it targets `components/ui/` and uses the `cn` helper from `lib/utils.ts`.

## Verification Checklist for a Change

1. `npm run lint`
2. `npx tsc --noEmit` (no script, run manually)
3. If you touched routes, server actions, or fonts: `npm run build`
4. If you touched `lib/tax-constants.ts` or `lib/tax-calculator.ts`: cross-check a hand-computed case against the public SAT tabla ISR RESICO mensual.
5. If you touched `DESIGN.md` colors used by OG: update `app/api/og/route.tsx` to match.
