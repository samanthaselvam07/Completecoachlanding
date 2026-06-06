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
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL="Complete Coach <applications@completecoach.fit>"
APPLICATION_NOTIFICATION_EMAIL=hello@completecoach.fit
```

## Neon Setup

The Early Access form submits to Neon through
`/api/founder-program/applications`.

1. Create or connect a Neon Postgres database.
2. Add `DATABASE_URL` to the Vercel project environments.
3. Run the migration in Neon SQL Editor, or let the first production
   application submission create the same idempotent schema automatically:

```text
migrations/001_create_founder_program_applications.sql
```

The app uses parameterized inserts through `@neondatabase/serverless`; do not
commit database URLs or credentials.

## Resend Notifications

When the Early Access form is submitted, the application is saved to Neon first.
If Resend is configured, the app then sends a readable notification email with
the submitted fields.

Required Vercel environment variables:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
APPLICATION_NOTIFICATION_EMAIL
```

`RESEND_FROM_EMAIL` should use a sender address from a verified Resend domain.
If any Resend variable is missing, the application still saves successfully and
the email notification is skipped.

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
