import { z } from "zod";

const requiredText = z.string().trim().min(1).max(400);
const longText = z.string().trim().min(1).max(3000);
const optionalText = z
  .string()
  .trim()
  .max(400)
  .optional()
  .transform((value) => (value ? value : undefined));
const optionalUrl = z
  .string()
  .trim()
  .max(500)
  .optional()
  .transform((value) => (value ? value : undefined));

export const applicationInputSchema = z
  .object({
    tier: z.enum(["design_partner", "founding_coach"]),
    fullName: requiredText,
    email: z.email().max(320),
    phone: optionalText,
    country: requiredText,
    socialProfile: requiredText,
    website: optionalUrl,
    businessName: requiredText,
    coachTypes: z.array(requiredText).min(1).max(10),
    activeClients: requiredText,
    coachesOnline: z.enum(["yes", "no", "partially"]),
    usesSoftware: z.enum(["yes", "no"]),
    currentTools: z.array(requiredText).max(15).optional().default([]),
    biggestChallenge: longText,
    weeklyCheckInTime: requiredText,
    switchReason: longText,
    collectsCheckIns: requiredText,
    checkInIncludes: z.array(requiredText).max(15).optional().default([]),
    aiWouldSaveTime: z.enum(["yes", "no", "not_sure"]),
    earlyAccessReason: longText,
    willingToUseWithClients: z.enum(["yes", "no", "not_immediately"]),
    willingToGiveFeedback: z.enum(["yes", "no"]),
    willingToAttendFeedbackCalls: z.enum(["yes", "no"]).optional(),
    openToCaseStudy: z.enum(["yes", "maybe", "no"]),
    understandsEarlyAccess: z.literal(true),
    agreesToContact: z.literal(true),
  })
  .superRefine((input, context) => {
    if (input.tier === "design_partner" && !input.willingToAttendFeedbackCalls) {
      context.addIssue({
        code: "custom",
        message: "Design Partner applicants must answer the feedback calls question.",
        path: ["willingToAttendFeedbackCalls"],
      });
    }
  });

export type ApplicationInput = z.infer<typeof applicationInputSchema>;
