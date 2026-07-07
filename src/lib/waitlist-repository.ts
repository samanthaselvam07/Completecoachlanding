import { getSql } from "@/lib/db";
import type { WaitlistInput } from "@/lib/waitlist-validation";

let waitlistSchemaReady: Promise<void> | null = null;

async function ensureWaitlistSignupsTable() {
  if (!waitlistSchemaReady) {
    const sql = getSql();

    waitlistSchemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS waitlist_signups (
          id text PRIMARY KEY,
          email text NOT NULL UNIQUE,
          source text NOT NULL DEFAULT 'waitlist-page',
          metadata jsonb,
          created_at timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `;

      await sql`
        CREATE UNIQUE INDEX IF NOT EXISTS waitlist_signups_email_key
          ON waitlist_signups (email)
      `;
    })().catch((error) => {
      waitlistSchemaReady = null;
      throw error;
    });
  }

  await waitlistSchemaReady;
}

export async function upsertWaitlistSignup(
  input: WaitlistInput,
  metadata: { userAgent?: string | null; referer?: string | null },
) {
  const sql = getSql();
  const source = input.source ?? "waitlist-page";
  const metadataJson = JSON.stringify({
    userAgent: metadata.userAgent ?? null,
    referer: metadata.referer ?? null,
  });

  await ensureWaitlistSignupsTable();

  const rows = await sql`
    INSERT INTO waitlist_signups (id, email, source, metadata, updated_at)
    VALUES (${crypto.randomUUID()}, ${input.email}, ${source}, ${metadataJson}::jsonb, CURRENT_TIMESTAMP)
    ON CONFLICT (email)
    DO UPDATE SET
      source = EXCLUDED.source,
      metadata = EXCLUDED.metadata,
      updated_at = CURRENT_TIMESTAMP
    RETURNING id, email
  `;

  return rows[0] as { id: string; email: string };
}
