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

## Founder Program

All primary CTAs route to `/founder-program`. The application form is currently
implemented with the initial fields in `src/lib/site.ts`; update that list when
the final application requirements are ready.
