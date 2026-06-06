import type { Metadata } from "next";
import { PricingPage } from "@/components/marketing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Review Complete Coach pricing and founder program options for growing coaching businesses.",
};

export default function Page() {
  return <PricingPage />;
}
