# Complete Coach Landing

Production landing page for Complete Coach.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm check
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://completecoach.fit
NEXT_PUBLIC_APP_URL=https://app.completecoach.fit
```

## Domain Plan

```text
completecoach.fit      -> landing page
app.completecoach.fit  -> Complete Coach product app
```

Current Vercel preview/production alias:

```text
https://complete-coach-landing.vercel.app
```

`completecoach.fit` is currently attached to the existing `complete-coach`
Vercel project. Before moving the apex domain to this landing project, attach
`app.completecoach.fit` to the product app and verify authentication callbacks,
login links, and product redirects against the app subdomain.

The landing Vercel project is `complete-coach-landing`. If automatic Git
deployments are not active, connect the GitHub repository in Vercel:

```text
samanthaselvam07/Completecoachlanding
```

## Founder Program

All primary CTAs route to `/founder-program`. The application form is currently
implemented with the initial fields in `src/lib/site.ts`; update that list when
the final application requirements are ready.
