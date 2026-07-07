import { z } from "zod";

export const waitlistInputSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email()),
  source: z.string().trim().min(1).max(80).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistInputSchema>;
