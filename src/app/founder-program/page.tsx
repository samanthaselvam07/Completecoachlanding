import type { Metadata } from "next";
import { SharedFooter } from "@/components/marketing/shared-footer";
import { SharedNav } from "@/components/marketing/shared-nav";
import { founderProgramCta, founderProgramFields } from "@/lib/site";

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
        <section className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 rounded-[34px] bg-white px-6 py-10 shadow-[0px_14px_34px_0px_rgba(27,28,28,0.08)] md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-14">
          <div>
            <p className="mb-4 inline-flex rounded-[18px] bg-[#f2eeff] px-4 py-2 text-[12px] font-semibold tracking-[1.44px] text-[#4f40cf]">
              FOUNDER PROGRAM
            </p>
            <h1 className="mb-5 font-['Plus_Jakarta_Sans',sans-serif] text-[40px] font-extrabold leading-[1.05] text-[#1b1c1c] md:text-[56px]">
              Help shape the coaching platform built for scale.
            </h1>
            <p className="max-w-[460px] text-[17px] leading-[28px] text-[#474554]">
              Tell us about your coaching business and where your systems are
              slowing you down. We will use this application to invite the
              right early partners into the founder program.
            </p>
          </div>

          <form className="rounded-[28px] bg-[#fbf9f8] p-5 shadow-[inset_0_0_0_1px_#f0eeec] md:p-7">
            <div className="grid grid-cols-1 gap-5">
              {founderProgramFields.slice(0, 4).map((label) => (
                <label key={label} className="grid gap-2">
                  <span className="text-[13px] font-semibold tracking-[0.5px] text-[#474554]">
                    {label}
                  </span>
                  <input
                    className="h-[52px] rounded-[18px] border border-[#e5e1dd] bg-white px-4 text-[15px] text-[#1b1c1c] outline-none transition-colors focus:border-[#4f40cf]"
                    name={label.toLowerCase().replaceAll(" ", "-")}
                    type={label === "Email" ? "email" : "text"}
                    required
                  />
                </label>
              ))}

              <label className="grid gap-2">
                <span className="text-[13px] font-semibold tracking-[0.5px] text-[#474554]">
                  {founderProgramFields[4]}
                </span>
                <textarea
                  className="min-h-[132px] resize-y rounded-[18px] border border-[#e5e1dd] bg-white px-4 py-3 text-[15px] leading-[24px] text-[#1b1c1c] outline-none transition-colors focus:border-[#4f40cf]"
                  name="first-problem-to-solve"
                  required
                />
              </label>

              <button
                className="mt-2 h-[54px] rounded-[27px] bg-[#4f40cf] px-7 text-[15px] font-semibold text-white shadow-[0px_10px_20px_0px_rgba(79,64,207,0.16)] transition-colors hover:bg-[#3d31a8]"
                type="submit"
              >
                {founderProgramCta}
              </button>
            </div>
          </form>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}
