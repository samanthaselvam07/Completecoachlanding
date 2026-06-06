import { getSql } from "@/lib/db";
import type { ApplicationInput } from "@/lib/application-validation";

let schemaReady: Promise<void> | null = null;

async function ensureFounderProgramApplicationsTable() {
  if (!schemaReady) {
    const sql = getSql();

    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS founder_program_applications (
          id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          tier text NOT NULL CHECK (tier IN ('design_partner', 'founding_coach')),
          full_name text NOT NULL,
          email text NOT NULL,
          phone text,
          country text NOT NULL,
          social_profile text NOT NULL,
          website text,
          business_name text NOT NULL,
          coach_types text[] NOT NULL DEFAULT '{}',
          active_clients text NOT NULL,
          coaches_online text NOT NULL CHECK (coaches_online IN ('yes', 'no', 'partially')),
          uses_software text NOT NULL CHECK (uses_software IN ('yes', 'no')),
          current_tools text[] NOT NULL DEFAULT '{}',
          biggest_challenge text NOT NULL,
          weekly_check_in_time text NOT NULL,
          switch_reason text NOT NULL,
          collects_check_ins text NOT NULL,
          check_in_includes text[] NOT NULL DEFAULT '{}',
          ai_would_save_time text NOT NULL CHECK (ai_would_save_time IN ('yes', 'no', 'not_sure')),
          early_access_reason text NOT NULL,
          willing_to_use_with_clients text NOT NULL CHECK (willing_to_use_with_clients IN ('yes', 'no', 'not_immediately')),
          willing_to_give_feedback text NOT NULL CHECK (willing_to_give_feedback IN ('yes', 'no')),
          willing_to_attend_feedback_calls text CHECK (willing_to_attend_feedback_calls IN ('yes', 'no')),
          open_to_case_study text NOT NULL CHECK (open_to_case_study IN ('yes', 'maybe', 'no')),
          understands_early_access boolean NOT NULL,
          agrees_to_contact boolean NOT NULL,
          submitted_at timestamptz NOT NULL DEFAULT now(),
          user_agent text,
          source_path text NOT NULL DEFAULT '/founder-program'
        )
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS founder_program_applications_submitted_at_idx
          ON founder_program_applications (submitted_at DESC)
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS founder_program_applications_tier_idx
          ON founder_program_applications (tier)
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS founder_program_applications_email_idx
          ON founder_program_applications (email)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  await schemaReady;
}

export async function createFounderProgramApplication(
  input: ApplicationInput,
  metadata: { userAgent?: string | null },
) {
  const sql = getSql();

  await ensureFounderProgramApplicationsTable();

  const rows = await sql`
    INSERT INTO founder_program_applications (
      tier,
      full_name,
      email,
      phone,
      country,
      social_profile,
      website,
      business_name,
      coach_types,
      active_clients,
      coaches_online,
      uses_software,
      current_tools,
      biggest_challenge,
      weekly_check_in_time,
      switch_reason,
      collects_check_ins,
      check_in_includes,
      ai_would_save_time,
      early_access_reason,
      willing_to_use_with_clients,
      willing_to_give_feedback,
      willing_to_attend_feedback_calls,
      open_to_case_study,
      understands_early_access,
      agrees_to_contact,
      user_agent
    )
    VALUES (
      ${input.tier},
      ${input.fullName},
      ${input.email},
      ${input.phone ?? null},
      ${input.country},
      ${input.socialProfile},
      ${input.website ?? null},
      ${input.businessName},
      ${input.coachTypes},
      ${input.activeClients},
      ${input.coachesOnline},
      ${input.usesSoftware},
      ${input.currentTools},
      ${input.biggestChallenge},
      ${input.weeklyCheckInTime},
      ${input.switchReason},
      ${input.collectsCheckIns},
      ${input.checkInIncludes},
      ${input.aiWouldSaveTime},
      ${input.earlyAccessReason},
      ${input.willingToUseWithClients},
      ${input.willingToGiveFeedback},
      ${input.willingToAttendFeedbackCalls ?? null},
      ${input.openToCaseStudy},
      ${input.understandsEarlyAccess},
      ${input.agreesToContact},
      ${metadata.userAgent ?? null}
    )
    RETURNING id, submitted_at
  `;

  return rows[0] as { id: number; submitted_at: Date };
}
