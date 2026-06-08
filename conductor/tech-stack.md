# Technology Stack: Fiscalio

## Core Technologies
- **Language:** TypeScript 5.x (Strictly typed, compiler options configured for Next.js and React 19).
- **Core Framework:** Next.js 16.0.10 (App Router, Turbopack enabled for local development).
- **Library:** React 19.2.0.

## UI & Styling
- **Styling:** Tailwind CSS v4.1.9 (Custom utility tokens declared in `app/globals.css`).
- **Icons:** Lucide React (standard shadcn/ui icons).
- **Animation:** Framer Motion (or `motion` from npm) for UI transitions.
- **Components:** Radix UI primitives, pre-configured as shadcn/ui components in `components/ui/`.

## Data & Integrations
- **Form Validation:** React Hook Form + Zod (for type-safe schema definitions).
- **Database/Storage:** Airtable (leads storage, accessed securely via `Airtable` NPM library in server actions).
- **Transactional Emails:** Resend (via `@react-email` templates rendered on the server).

## Infrastructure & Runtime
- **Runtime Environment:** Node.js v22.13.0 (pinned in `.nvmrc`).
- **Routing & Rendering:** Next.js App Router (mix of Server and Client components). Edge Runtime specifically for dynamic assets like the OG image generator (`app/api/og/route.tsx`).
