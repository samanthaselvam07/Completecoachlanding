import assert from "node:assert/strict";
import test from "node:test";
import { applicationInputSchema } from "../src/lib/application-validation";
import {
  applicationTiers,
  checkInIncludesOptions,
  coachTypeOptions,
  founderProgramCta,
  founderProgramSections,
  founderProgramPath,
  navLinks,
} from "../src/lib/site";

test("primary CTA points to the founder program", () => {
  assert.equal(founderProgramCta, "Join Founder Program");
  assert.equal(founderProgramPath, "/founder-program");
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
});

test("application validation requires design partner feedback call answer", () => {
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
  };

  assert.equal(applicationInputSchema.safeParse(baseApplication).success, false);
  assert.equal(
    applicationInputSchema.safeParse({
      ...baseApplication,
      willingToAttendFeedbackCalls: "yes",
    }).success,
    true,
  );
});
