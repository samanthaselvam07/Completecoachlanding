import Link from "next/link";
import { SharedNav } from "./shared-nav";
import { SharedFooter } from "./shared-footer";
import { founderProgramPath } from "@/lib/site";

function IconBox({ orange }: { orange?: boolean }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[14px] size-[44px] flex-shrink-0" style={{ background: orange ? "#fff1e6" : "#f2eeff" }}>
      <span className="rounded-[10px] size-[20px]" style={{ background: orange ? "rgba(248,118,0,0.24)" : "rgba(79,64,207,0.24)" }} />
    </span>
  );
}

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />

      {/* Hero */}
      <section className="px-4 md:px-[48px] pb-10">
        <div className="bg-white rounded-[34px] shadow-[0px_12px_32px_0px_rgba(27,28,28,0.06)] px-6 md:px-[84px] py-14 relative overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-[106px] right-[200px] size-[250px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,64,207,0.1) 0%, transparent 70%)", filter: "blur(48px)" }} />
          <div className="absolute top-[48px] right-[80px] size-[180px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(248,118,0,0.16) 0%, transparent 70%)", filter: "blur(36px)" }} />

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="relative z-10">
              <div className="inline-flex items-center bg-[#f2eeff] rounded-[18px] px-4 py-2 mb-6">
                <span className="text-[#4f40cf] text-[12px] font-semibold tracking-[1.44px]">AI INTELLIGENCE</span>
              </div>
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#1b1c1c] text-[40px] md:text-[52px] leading-[1.07] mb-6">
                Smarter decisions.<br />Every single check-in.
              </h1>
              <p className="text-[#474554] text-[16px] md:text-[18px] leading-[30px] mb-8 max-w-[480px]">
                Complete Coach uses advanced pattern recognition to scan for fatigue, training, nutrition and recovery flags so you can coach with more precision and less admin drag.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-[rgba(79,64,207,0.1)] border border-[rgba(200,196,215,0.3)] rounded-[24px] px-5 h-[48px] inline-flex items-center">
                  <span className="text-[#4f40cf] text-[14px] font-semibold">Pattern Recognition</span>
                </div>
                <div className="bg-[rgba(79,64,207,0.1)] border border-[rgba(200,196,215,0.3)] rounded-[24px] px-5 h-[48px] inline-flex items-center">
                  <span className="text-[#4f40cf] text-[14px] font-semibold">Fatigue Flags</span>
                </div>
              </div>
            </div>

            {/* Right — phone mockups */}
            <div className="relative hidden lg:flex items-start justify-center gap-6 h-[580px]">
              {/* Phone 1 — dark */}
              <div className="relative mt-8">
                <div className="bg-[#1b1c1c] rounded-[42px] shadow-[0px_22px_40px_0px_rgba(27,28,28,0.18)] w-[238px] h-[482px] relative overflow-hidden">
                  <div className="bg-white rounded-[30px] m-[14px] mt-[14px] h-[454px] relative">
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-[#d7d1f0] rounded-full h-[10px] w-[78px]" />
                    <div className="px-4 pt-[52px] space-y-4">
                      {[
                        { w: 150, accent: "rgba(79,64,207,0.12)", sub: 120 },
                        { w: 150, accent: "rgba(248,118,0,0.18)", sub: 144 },
                        { w: 150, accent: "rgba(79,64,207,0.12)", sub: 120 },
                        { w: 150, accent: "rgba(248,118,0,0.18)", sub: 144 },
                        { w: 150, accent: "rgba(79,64,207,0.12)", sub: 120 },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex-1 space-y-1">
                            <div className="h-[14px] rounded-full" style={{ width: row.w, background: row.accent }} />
                            <div className="h-[9px] rounded-full bg-[rgba(120,117,134,0.12)]" style={{ width: row.sub }} />
                          </div>
                          <div className="bg-[rgba(248,118,0,0.22)] rounded-[12px] size-[24px] flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Urgent card */}
                <div className="absolute -left-8 bottom-[120px] bg-white rounded-[20px] shadow-[0px_10px_20px_0px_rgba(27,28,28,0.1)] px-4 py-3 w-[188px]">
                  <p className="text-[#ba1a1a] text-[12px] font-semibold tracking-[1.2px] leading-[18px]">Urgent</p>
                  <p className="font-semibold text-[#1b1c1c] text-[15px] leading-[20px]">Metabolic drop</p>
                </div>
                {/* High card */}
                <div className="absolute -left-10 bottom-[44px] bg-white rounded-[20px] shadow-[0px_10px_20px_0px_rgba(27,28,28,0.1)] px-4 py-3 w-[178px]">
                  <p className="text-[#f87600] text-[12px] font-semibold tracking-[1.2px] leading-[18px]">High</p>
                  <p className="font-semibold text-[#1b1c1c] text-[15px] leading-[20px]">RPE spike</p>
                </div>
              </div>

              {/* Phone 2 — light */}
              <div className="relative">
                <div className="bg-[#f4f3f8] rounded-[42px] shadow-[0px_22px_40px_0px_rgba(27,28,28,0.18)] w-[238px] h-[482px] relative overflow-hidden">
                  <div className="bg-white rounded-[30px] m-[14px] mt-[14px] h-[454px] relative">
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-[#d7d1f0] rounded-full h-[10px] w-[78px]" />
                    <div className="px-4 pt-[52px] space-y-4">
                      {[
                        { accent: "rgba(79,64,207,0.12)", sub: 120 },
                        { accent: "rgba(248,118,0,0.18)", sub: 144 },
                        { accent: "rgba(79,64,207,0.12)", sub: 120 },
                        { accent: "rgba(248,118,0,0.18)", sub: 144 },
                        { accent: "rgba(79,64,207,0.12)", sub: 120 },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex-1 space-y-1">
                            <div className="h-[14px] rounded-full w-[150px]" style={{ background: row.accent }} />
                            <div className="h-[9px] rounded-full bg-[rgba(120,117,134,0.12)]" style={{ width: row.sub }} />
                          </div>
                          <div className="bg-[rgba(79,64,207,0.22)] rounded-[12px] size-[24px] flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Maintain card */}
                <div className="absolute -right-4 bottom-[80px] bg-white rounded-[20px] shadow-[0px_10px_20px_0px_rgba(27,28,28,0.1)] px-4 py-3 w-[170px]">
                  <p className="text-[#2a8a5b] text-[12px] font-semibold tracking-[1.2px] leading-[18px]">Maintain</p>
                  <p className="font-semibold text-[#1b1c1c] text-[15px] leading-[20px]">On track</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery System */}
      <section className="px-4 md:px-[48px] py-6 max-w-[1440px] mx-auto">
        <div className="bg-[#f5f3f3] rounded-[32px] px-6 md:px-[84px] py-14">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[36px] md:text-[48px] text-center leading-[1.1] mb-4 max-w-[836px] mx-auto">
            Everything you need to coach done properly
          </h2>
          <p className="text-[#474554] text-[16px] text-center leading-[24px] mb-10 max-w-[710px] mx-auto">
            A clinical approach to every pillar of the client journey. No fluff, just precision.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Programs + workouts", desc: "Periodised cycles with exercise video libraries." },
              { title: "Nutrition", desc: "Full macro tracking and custom meal plans." },
              { title: "Supplements", desc: "Stack optimisation and timing protocols." },
              { title: "Check-ins", desc: "Logic-gated review forms for cleaner decisions." },
              { title: "Messaging", desc: "Native one-on-one and broadcast communication." },
            ].map((item) => (
              <div key={item.title} className="bg-white/96 rounded-[26px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.06)] p-5">
                <div className="bg-[#f2eeff] rounded-[14px] size-[44px] flex items-center justify-center mb-3">
                  <div className="bg-[rgba(79,64,207,0.22)] rounded-[10px] size-[20px]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] md:text-[22px] leading-[28px] mb-1">{item.title}</h3>
                <p className="text-[#474554] text-[13px] leading-[21px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Coaching */}
      <section className="px-4 md:px-[48px] py-6 max-w-[1440px] mx-auto">
        <div className="bg-white/98 rounded-[34px] shadow-[0px_14px_34px_0px_rgba(27,28,28,0.08)] px-6 md:px-[112px] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[40px] md:text-[54px] leading-[1.07] mb-10">
                Structured coaching,<br />not guesswork.
              </h2>
              <div className="space-y-7">
                {[
                  { color: "orange" as const, title: "Compare trends", desc: "Understand biometrics with training volume to see what is actually driving progress." },
                  { color: "purple" as const, title: "Ensure nothing missed", desc: "Verification steps before a check-in can be finalised." },
                  { color: "orange" as const, title: "Standardise quality", desc: "Uniform review frameworks across your entire coaching team." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="rounded-[14px] size-[48px] flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color === "orange" ? "#fff1e6" : "#f2eeff" }}
                    >
                      <div className="rounded-[10px] size-[20px]" style={{ background: item.color === "orange" ? "rgba(248,118,0,0.24)" : "rgba(79,64,207,0.24)" }} />
                    </div>
                    <div>
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] leading-[28px] mb-1">{item.title}</h3>
                      <p className="text-[#474554] text-[14px] leading-[22px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual mock */}
            <div>
              <div className="bg-[#efeaff] rounded-[32px] shadow-[0px_18px_34px_0px_rgba(27,28,28,0.1)] p-8 relative overflow-hidden">
                <div className="absolute top-[20px] left-[20px] size-[220px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(248,118,0,0.18) 0%, transparent 70%)", filter: "blur(36px)" }} />
                <div className="relative z-10 bg-[#c2c2c2] rounded-[30px] overflow-hidden">
                  <div className="bg-[#3d3d3d] h-[180px] rounded-[24px] m-2 flex gap-2 p-3">
                    <div className="bg-[#7a5a2d] rounded-[20px] w-[110px] h-full" />
                    <div className="bg-[#e08e4d] rounded-[20px] flex-1 h-full" />
                  </div>
                  <div className="bg-[#f5f3f3] rounded-[24px] m-2 mt-0 h-[140px] flex items-end px-4 pb-4">
                    <div className="bg-[rgba(79,64,207,0.16)] h-[24px] rounded-full w-[170px]" />
                  </div>
                </div>
                {/* Client review card */}
                <div className="absolute bottom-6 left-4 bg-white/94 rounded-[22px] shadow-[0px_12px_22px_0px_rgba(27,28,28,0.12)] px-5 py-4">
                  <p className="font-semibold text-[#1b1c1c] text-[15px] leading-[20px]">Client review</p>
                  <p className="text-[#474554] text-[12px] leading-[18px]">In progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Tools */}
      <section className="px-6 md:px-[84px] py-14 max-w-[1440px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[36px] md:text-[44px] leading-[1.08] max-w-[520px] mb-3">
          Built to grow with you.
        </h2>
        <p className="text-[#474554] text-[16px] leading-[26px] max-w-[430px] mb-10">
          Scale the delivery side and the business side without adding friction.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: "Lead pipeline", desc: "Capture, qualify and move leads with clarity.", orange: false },
            { title: "Task management", desc: "Assign, monitor and close work across your team.", orange: true },
            { title: "Team capacity", desc: "Visual workload views for coach account planning.", orange: false },
            { title: "Financial insights", desc: "Revenue, churn and projection data in one place.", orange: true },
            { title: "Automation", desc: "Rule-based follow ups and workflow triggers.", orange: false },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-[24px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.06)] p-5">
              <div className="rounded-[14px] size-[42px] flex items-center justify-center mb-3" style={{ background: item.orange ? "#fff1e6" : "#f2eeff" }}>
                <div className="rounded-[9px] size-[18px]" style={{ background: item.orange ? "rgba(248,118,0,0.24)" : "rgba(79,64,207,0.24)" }} />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] leading-[26px] mb-1">{item.title}</h3>
              <p className="text-[#474554] text-[13px] leading-[21px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-[84px] pb-12 max-w-[1440px] mx-auto">
        <div className="bg-[#4f40cf] rounded-[36px] shadow-[0px_18px_38px_0px_rgba(54,32,184,0.18)] px-8 md:px-16 py-14 relative overflow-hidden">
          <div className="absolute right-[8%] top-[48px] size-[180px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", filter: "blur(36px)", opacity: 0.1 }} />
          {/* Tool tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Training apps", "Forms & Spreadsheets", "Nutrition apps", "Social Media Planner"].map(tag => (
              <div key={tag} className="bg-white/14 rounded-[17px] px-4 py-1.5">
                <span className="text-white text-[12px] font-medium">{tag}</span>
              </div>
            ))}
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-[40px] md:text-[60px] leading-[1.03] text-center mb-3">
            Stop paying for<br />5 different tools.
          </h2>
          <p className="text-[#e3dfff] text-[18px] font-semibold text-center leading-[24px] mb-10">
            One system. Infinite growth.
          </p>
          <div className="flex justify-center">
            <Link
              href={founderProgramPath}
              className="bg-[#4f40cf] border-2 border-white/30 text-white font-semibold text-[14px] px-8 h-[48px] rounded-[24px] hover:bg-[#3d31a8] transition-colors inline-flex items-center shadow-[0px_10px_20px_0px_rgba(54,32,184,0.16)]"
              style={{ background: "rgba(79,64,207,0.8)" }}
            >
              Join Founder Program
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
