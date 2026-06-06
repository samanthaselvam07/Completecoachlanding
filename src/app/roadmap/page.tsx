import type { Metadata } from "next";
import { RoadmapPage } from "@/components/marketing/roadmap-page";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "See what Complete Coach is building next across AI intelligence, retention, performance, nutrition, and automation.",
};

export default function Page() {
  return <RoadmapPage />;
}
