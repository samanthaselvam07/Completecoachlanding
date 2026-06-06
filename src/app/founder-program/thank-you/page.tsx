import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/marketing/shared-footer";
import { SharedNav } from "@/components/marketing/shared-nav";

const priorityBenefits = [
  "Founder pricing",
  "Early product access",
  "Direct communication with the founders",
  "Opportunities to shape the roadmap",
  "Exclusive founding member benefits",
] as const;

export const metadata: Metadata = {
  title: "Thank You For Applying",
  description:
    "Your Complete Coach Founder Program application has been successfully submitted.",
};

export default function FounderProgramThankYouPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />
      <main className="px-4 pb-16 md:px-[48px]">
        <section className="mx-auto grid max-w-[980px] gap-8 rounded-[34px] bg-white px-6 py-10 shadow-[0px_14px_34px_0px_rgba(27,28,28,0.08)] md:px-12 md:py-14">
          <div className="max-w-[760px]">
            <p className="mb-4 inline-flex rounded-[18px] bg-[#e6f9ef] px-4 py-2 text-[12px] font-semibold tracking-[1.44px] text-[#1f6b46]">
              APPLICATION SUBMITTED
            </p>
            <h1 className="mb-5 font-['Plus_Jakarta_Sans',sans-serif] text-[40px] font-extrabold leading-[1.05] text-[#1b1c1c] md:text-[56px]">
              Thank You For Applying
            </h1>
            <p className="text-[18px] font-semibold leading-[28px] text-[#1b1c1c]">
              Your application has been successfully submitted.
            </p>
          </div>

          <div className="grid gap-5 text-[16px] leading-[27px] text-[#474554]">
            <p>
              Complete Coach is currently selecting a small group of coaches to
              help build the world's first AI Operating System for Fitness
              Coaches.
            </p>
            <p>This isn't a public launch.</p>
            <p>It's the formation of a founding community.</p>
            <p>
              Every application is reviewed individually, and successful
              applicants will receive priority access to:
            </p>
          </div>

          <ul className="grid gap-3">
            {priorityBenefits.map((benefit) => (
              <li
                className="flex items-center gap-3 rounded-[18px] bg-[#fbf9f8] px-4 py-3 text-[15px] font-semibold text-[#1b1c1c] shadow-[inset_0_0_0_1px_#f0eeec]"
                key={benefit}
              >
                <span
                  aria-hidden="true"
                  className="grid size-7 place-items-center rounded-full bg-[#e6f9ef] text-[14px] text-[#1f6b46]"
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <section className="grid gap-4 rounded-[28px] bg-[#f2eeff] p-5 md:p-7">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[34px] text-[#1b1c1c]">
              What Happens Next?
            </h2>
            <p className="text-[16px] leading-[27px] text-[#474554]">
              Our team will review your application and contact successful
              applicants via email.
            </p>
            <div className="grid gap-3 text-[15px] leading-[24px] text-[#474554] md:grid-cols-2">
              <p className="rounded-[20px] bg-white p-4">
                <strong className="text-[#4f40cf]">Design Partner Programme:</strong>{" "}
                Limited to 20 coaches.
              </p>
              <p className="rounded-[20px] bg-white p-4">
                <strong className="text-[#4f40cf]">Founding Coach Programme:</strong>{" "}
                Limited to 100 coaches.
              </p>
            </div>
          </section>

          <div className="grid gap-5 text-[16px] leading-[27px] text-[#474554]">
            <p>Thank you for taking the time to apply.</p>
            <p>
              We're excited to learn more about your business and explore
              whether Complete Coach is the right fit for you.
            </p>
          </div>

          <div>
            <Link
              className="inline-flex min-h-[52px] items-center rounded-[29px] bg-[#4f40cf] px-6 text-[15px] font-semibold text-white shadow-[0px_10px_24px_0px_rgba(79,64,207,0.16)] transition-colors hover:bg-[#3d31a8]"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}
