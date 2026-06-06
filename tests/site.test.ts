import assert from "node:assert/strict";
import test from "node:test";
import { platformComparisonGroups } from "../src/components/marketing/platform-comparison-section";
import { createApplicationNotificationEmail } from "../src/lib/application-notification";
import { applicationInputSchema } from "../src/lib/application-validation";
import {
  applicationTiers,
  checkInIncludesOptions,
  coachTypeOptions,
  countries,
  currentToolOptions,
  founderProgramCta,
  founderProgramSections,
  founderProgramPath,
  founderProgramThankYouPath,
  navLinks,
  switchTestimonials,
  weeklyCheckInTimeOptions,
} from "../src/lib/site";

const baseApplication = {
  tier: "design_partner",
  fullName: "Sam Coach",
  email: "sam@example.com",
  country: "Australia",
  socialProfile: "https://instagram.com/sam",
  businessName: "Sam Coaching",
  coachTypes: ["Online fitness coach"],
  activeClients: "21-50",
  coachesOnline: "yes",
  usesSoftware: "yes",
  currentTools: ["Google Sheets"],
  biggestChallenge: "Check-ins take too long.",
  weeklyCheckInTime: "4-7 hours",
  switchReason: "It would need to make reviews faster.",
  collectsCheckIns: "yes_weekly",
  checkInIncludes: ["Bodyweight"],
  aiWouldSaveTime: "yes",
  earlyAccessReason: "I want to help shape the product.",
  willingToUseWithClients: "yes",
  willingToGiveFeedback: "yes",
  openToCaseStudy: "maybe",
  understandsEarlyAccess: true,
  agreesToContact: true,
} as const;

test("primary CTA points to the founder program", () => {
  assert.equal(founderProgramCta, "Join Founder Program");
  assert.equal(founderProgramPath, "/founder-program");
  assert.equal(founderProgramThankYouPath, "/founder-program/thank-you");
});

test("navigation keeps public marketing routes available", () => {
  assert.deepEqual(
    navLinks.map((link) => link.href),
    ["/features", "/pricing", "/roadmap"],
  );
});

test("founder program offers both early access tiers", () => {
  assert.deepEqual(
    applicationTiers.map((tier) => tier.value),
    ["design_partner", "founding_coach"],
  );
  assert.equal(applicationTiers[0].price, "$29/month");
  assert.equal(applicationTiers[1].price, "$49/month");
  assert.ok(
    applicationTiers[0].includes.includes("Referral commissions up to 30%"),
  );
  assert.ok(
    applicationTiers[1].includes.includes("Referral commissions up to 20%"),
  );
});

test("founder program form covers the required application sections", () => {
  assert.deepEqual(founderProgramSections, [
    "Basic Information",
    "Coaching Business Details",
    "Pain Points",
    "AI Check-In Analysis",
    "Commitment",
  ]);
  assert.ok(coachTypeOptions.includes("Online fitness coach"));
  assert.ok(checkInIncludesOptions.includes("Progress photos"));
  assert.ok(countries.includes("South Africa"));
  assert.ok(currentToolOptions.includes("Buffer"));
  assert.ok(weeklyCheckInTimeOptions.includes("40+ hours"));
  assert.ok(checkInIncludesOptions.includes("Girth measurements"));
  assert.ok(checkInIncludesOptions.includes("Training logs"));
  assert.ok(checkInIncludesOptions.includes("Micronutrients"));
  assert.equal(
    (checkInIncludesOptions as readonly string[]).includes("Measurements"),
    false,
  );
});

test("features page comparison module covers full business platform scope", () => {
  assert.deepEqual(
    platformComparisonGroups.map((group) => group.title),
    [
      "Coaching Features",
      "Business Growth Features",
      "Marketing Suite",
      "AI & Automation",
    ],
  );
  assert.ok(
    platformComparisonGroups.some((group) =>
      group.rows.some(([feature]) => feature === "Revenue Analytics"),
    ),
  );
  assert.ok(
    platformComparisonGroups.some((group) =>
      group.rows.some(([feature]) => feature === "Predictive Client Intelligence"),
    ),
  );
});

test("switch testimonials highlight time savings and single platform workflow", () => {
  assert.match(switchTestimonials[0].quote, /40 minutes per client/);
  assert.match(switchTestimonials[0].quote, /20 minutes per client/);
  assert.equal(switchTestimonials[0].attribution, "Sammi");
  assert.match(switchTestimonials[1].quote, /one platform/);
  assert.match(switchTestimonials[1].quote, /multiple screens and tabs/);
});

test("application validation requires design partner feedback call answer", () => {
  assert.equal(applicationInputSchema.safeParse(baseApplication).success, false);
  assert.equal(
    applicationInputSchema.safeParse({
      ...baseApplication,
      willingToAttendFeedbackCalls: "yes",
    }).success,
    true,
  );
});

test("application notification email formats submitted fields safely", () => {
  const parsed = applicationInputSchema.parse({
    ...baseApplication,
    fullName: "Sam <Coach>",
    willingToAttendFeedbackCalls: "yes",
  });

  const html = createApplicationNotificationEmail(parsed, {
    id: 42,
    submitted_at: new Date("2026-06-06T09:30:00.000Z"),
  });

  assert.match(html, /NEW FOUNDER PROGRAM APPLICATION/);
  assert.match(html, /Application #42/);
  assert.match(html, /Sam &lt;Coach&gt;/);
  assert.match(html, /Basic Information/);
  assert.match(html, /AI Check-In Analysis/);
  assert.doesNotMatch(html, /Sam <Coach>/);
});
