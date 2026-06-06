import { getSql } from "@/lib/db";
import type { ApplicationInput } from "@/lib/application-validation";

export async function createFounderProgramApplication(
  input: ApplicationInput,
  metadata: { userAgent?: string | null },
) {
  const sql = getSql();

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
