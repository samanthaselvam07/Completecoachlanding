import type { Metadata } from "next";
import { FeaturesPage } from "@/components/marketing/features-page";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Complete Coach features for AI check-in review, client management, training, nutrition, messaging, and business operations.",
};

export default function Page() {
  return <FeaturesPage />;
}
