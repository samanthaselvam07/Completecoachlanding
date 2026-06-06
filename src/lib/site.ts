export const founderProgramPath = "/founder-program";
export const founderProgramCta = "Join Founder Program";

export const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.completecoach.fit";

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roadmap", label: "Roadmap" },
] as const;

export const founderProgramFields = [
  "Full name",
  "Email",
  "Business name",
  "Current number of clients",
  "What are you hoping Complete Coach helps you solve first?",
] as const;
