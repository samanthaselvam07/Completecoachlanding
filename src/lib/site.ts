export const founderProgramPath = "/founder-program";
export const founderProgramThankYouPath = "/founder-program/thank-you";
export const founderProgramCta = "Join Founder Program";
export const earlyAccessSubmitCta = "Apply for Early Access";

export const switchTestimonials = [
  {
    quote:
      "My coaching review time dropped from around 40 minutes per client to 20 minutes per client.",
    attribution: "Sammi",
  },
  {
    quote:
      "It was so much easier having everything in one platform instead of bouncing between multiple screens and tabs like usual.",
    attribution: "Din",
  },
] as const;

export const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.completecoach.fit";

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roadmap", label: "Roadmap" },
] as const;

export type ApplicationTier = "design_partner" | "founding_coach";

export type CompleteCoachApplication = {
  tier: ApplicationTier;
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  socialProfile: string;
  website?: string;
  businessName: string;
  coachTypes: string[];
  activeClients: string;
  coachesOnline: "yes" | "no" | "partially";
  usesSoftware: "yes" | "no";
  currentTools?: string[];
  biggestChallenge: string;
  weeklyCheckInTime: string;
  switchReason: string;
  collectsCheckIns: string;
  checkInIncludes?: string[];
  aiWouldSaveTime: "yes" | "no" | "not_sure";
  earlyAccessReason: string;
  willingToUseWithClients: "yes" | "no" | "not_immediately";
  willingToGiveFeedback: "yes" | "no";
  willingToAttendFeedbackCalls?: "yes" | "no";
  openToCaseStudy: "yes" | "maybe" | "no";
  understandsEarlyAccess: boolean;
  agreesToContact: boolean;
  submittedAt: string;
};

export const applicationTiers = [
  {
    value: "design_partner",
    label: "Design Partner",
    price: "$29/month",
    limit: "20 coaches",
    bestFor:
      "Coaches who want direct input into the product before public launch.",
    description:
      "Work closely with the founders, test early features, join feedback calls, and help shape the product roadmap.",
    includes: [
      "Full Scale Plan access",
      "$29/month founder pricing",
      "Direct founder access",
      "Priority feature input",
      "Early AI check-in analysis access",
      "Founder badge",
      "Referral commissions up to 30%",
      "Case study opportunity",
    ],
    requirements: [
      "Must actively test the platform",
      "Must attend feedback calls",
      "Must provide honest product feedback",
      "Must be open to case study participation",
    ],
    confirmation:
      "Thanks for applying to become a Complete Coach Design Partner. We'll review your application and contact selected coaches directly. Design Partner places are limited to 20 coaches.",
  },
  {
    value: "founding_coach",
    label: "Founding Coach",
    price: "$49/month",
    limit: "100 coaches",
    bestFor:
      "Coaches who want lifetime discounted access before public launch.",
    description:
      "Lock in lifetime founder pricing and become one of the first official Complete Coach users.",
    includes: [
      "Full Scale Plan access",
      "$49/month lifetime founder pricing",
      "Founder badge",
      "Early feature access",
      "Referral commissions up to 20%",
      "Priority onboarding",
      "Private founder community access",
    ],
    requirements: [
      "Must be an active fitness coach",
      "Must be willing to use the platform with real clients",
      "Must provide basic onboarding feedback",
    ],
    confirmation:
      "Thanks for applying for Founding Coach access. We'll review your application and contact selected coaches with onboarding details. Founding Coach places are limited to 100 coaches.",
  },
] as const;

export const countries = [
  "Australia",
  "United States",
  "United Kingdom",
  "Canada",
  "New Zealand",
  "Ireland",
  "South Africa",
  "Singapore",
  "United Arab Emirates",
  "India",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Italy",
  "Other",
] as const;

export const coachTypeOptions = [
  "Online fitness coach",
  "Personal trainer",
  "Contest prep coach",
  "Nutrition coach",
  "Transformation coach",
  "Strength coach",
  "Lifestyle coach",
  "Coaching business owner",
  "Fitness business mentor",
  "Other",
] as const;

export const activeClientOptions = [
  "0-5",
  "6-20",
  "21-50",
  "51-100",
  "101-200",
  "200+",
] as const;

export const currentToolOptions = [
  "Trainerize",
  "Everfit",
  "TrueCoach",
  "PT Distinction",
  "Google Sheets",
  "Notion",
  "ClickUp",
  "Trello",
  "HubSpot",
  "GoHighLevel",
  "Calendly",
  "Buffer",
  "WhatsApp",
  "Facebook Groups",
  "Other",
] as const;

export const weeklyCheckInTimeOptions = [
  "Less than 1 hour",
  "1-3 hours",
  "4-7 hours",
  "8-15 hours",
  "16-25 hours",
  "26-40 hours",
  "40+ hours",
] as const;

export const checkInIncludesOptions = [
  "Bodyweight",
  "Progress photos",
  "Girth measurements",
  "Nutrition adherence",
  "Micronutrients",
  "Training adherence",
  "Training logs",
  "Mood",
  "Sleep",
  "Stress",
  "Energy",
  "Digestion",
  "Menstrual cycle",
  "Client notes",
  "Other",
] as const;

export const founderProgramSections = [
  "Basic Information",
  "Coaching Business Details",
  "Pain Points",
  "AI Check-In Analysis",
  "Commitment",
] as const;
