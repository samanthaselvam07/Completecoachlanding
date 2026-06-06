import type { Metadata } from "next";
import { FounderProgramForm } from "@/components/marketing/founder-program-form";
import { SharedFooter } from "@/components/marketing/shared-footer";
import { SharedNav } from "@/components/marketing/shared-nav";

export const metadata: Metadata = {
  title: "Founder Program",
  description:
    "Apply to join the Complete Coach Founder Program and help shape the platform for modern coaching businesses.",
};

export default function FounderProgramPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />
      <main className="px-4 pb-16 md:px-[48px]">
        <section className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 rounded-[34px] bg-white px-6 py-10 shadow-[0px_14px_34px_0px_rgba(27,28,28,0.08)] md:px-12 md:py-14">
          <div className="max-w-[820px]">
            <p className="mb-4 inline-flex rounded-[18px] bg-[#f2eeff] px-4 py-2 text-[12px] font-semibold tracking-[1.44px] text-[#4f40cf]">
              EARLY ACCESS APPLICATION
            </p>
            <h1 className="mb-5 font-['Plus_Jakarta_Sans',sans-serif] text-[40px] font-extrabold leading-[1.05] text-[#1b1c1c] md:text-[56px]">
              Help Shape the Future of Fitness Coaching Software
            </h1>
            <p className="text-[17px] leading-[28px] text-[#474554]">
              Complete Coach is building the AI Operating System for Fitness
              Coaches. We're inviting a limited number of early coaches to help
              shape the product before public launch.
            </p>
            <div className="mt-6 grid gap-3 text-[15px] leading-[24px] text-[#474554] md:grid-cols-2">
              <p className="rounded-[20px] bg-[#f2eeff] p-4">
                <strong className="text-[#4f40cf]">Design Partner:</strong>{" "}
                hands-on product input, limited to 20 coaches.
              </p>
              <p className="rounded-[20px] bg-[#fff1e6] p-4">
                <strong className="text-[#753400]">Founding Coach:</strong>{" "}
                lifetime founder pricing, limited to 100 coaches.
              </p>
            </div>
          </div>
          <FounderProgramForm />
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}
