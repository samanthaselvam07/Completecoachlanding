import Link from "next/link";
import { SharedNav } from "./shared-nav";
import { SharedFooter } from "./shared-footer";
import { founderProgramPath } from "@/lib/site";

function XDot({ red }: { red?: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[10px] size-[20px] flex-shrink-0 mt-[2px]"
      style={{ background: red ? "#ffebe8" : "#e3dfff" }}
    >
      <span className="rounded-full size-[8px]" style={{ background: red ? "#ba1a1a" : "#4f40cf" }} />
    </span>
  );
}

function CheckDot({ color = "purple" }: { color?: "purple" | "orange" }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[10px] size-[18px] flex-shrink-0 mt-[2px]"
      style={{ background: color === "orange" ? "#ffd7bf" : "#efeaff" }}
    >
      <span className="rounded-full size-[8px]" style={{ background: color === "orange" ? "#f87600" : "#4f40cf" }} />
    </span>
  );
}

function IconBox({ color = "purple", orange }: { color?: "purple" | "orange"; orange?: boolean }) {
  const bg = orange ? "#fff1e6" : "#f2eeff";
  const dot = orange ? "rgba(248,118,0,0.24)" : "rgba(79,64,207,0.24)";
  return (
    <span className="inline-flex items-center justify-center rounded-[14px] size-[44px] flex-shrink-0" style={{ background: bg }}>
      <span className="rounded-[10px] size-[20px]" style={{ background: dot }} />
    </span>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />

      {/* Hero */}
      <section className="px-4 md:px-[48px] pb-12">
        <div className="bg-[#4f40cf] rounded-[36px] shadow-[0px_20px_40px_0px_rgba(54,32,184,0.18)] px-6 md:px-[84px] py-14 relative overflow-hidden">
          {/* decorative blurs */}
          <div className="absolute top-[50px] right-[200px] size-[300px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-[60px] right-[100px] size-[230px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FFB68C 0%, transparent 70%)", filter: "blur(36px)" }} />

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="relative z-10">
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-[48px] md:text-[68px] leading-[1.0] mb-8">
                Coach smarter.<br />Scale faster.
              </h1>
              <p className="text-white/90 text-[18px] md:text-[20px] leading-[32px] mb-10 max-w-[448px]">
                Complete Coach combines AI-powered check-in analysis, client management and business systems into one platform so you can deliver better results and grow efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={founderProgramPath}
                  className="bg-white text-[#3620b8] font-semibold text-[15px] px-7 h-[56px] rounded-[28px] shadow-[0px_10px_24px_0px_rgba(27,28,28,0.08)] hover:bg-gray-50 transition-colors inline-flex items-center"
                >
                  Join Founder Program
                </Link>
                <button className="bg-white/12 border border-white/18 text-white font-semibold text-[15px] px-7 h-[56px] rounded-[28px] hover:bg-white/20 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right — phone mockups */}
            <div className="relative z-10 hidden h-[540px] items-end justify-center gap-6 lg:flex">

              {/* Phone 1 — dark (AI Analysis) */}
              <div className="relative mt-auto mb-0" style={{ marginBottom: "0px" }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-white/80 text-[12px] font-semibold tracking-[1.44px]">EFFICIENCY & INTELLIGENCE</p>
                </div>
                <div className="bg-[#1b1c1c] rounded-[42px] shadow-[0px_22px_40px_0px_rgba(27,28,28,0.18)] w-[250px] h-[520px] relative overflow-hidden">
                  <div className="bg-white rounded-[30px] m-[14px] mt-[14px] h-[492px] relative">
                    <div className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-[#1b1c1c] rounded-full h-[10px] w-[80px]" />
                    <div className="h-full overflow-hidden rounded-[30px] bg-[#fbf9f8] px-4 pt-[44px]">
                      <div className="mb-3 rounded-[18px] bg-[#1b1c1c] px-4 py-3 text-white">
                        <p className="text-[9px] font-semibold tracking-[1px] text-white/60">
                          COMPLETE COACH EMAIL
                        </p>
                        <h3 className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-bold leading-[20px]">
                          Sarah Check-In Analysis
                        </h3>
                        <p className="mt-1 text-[10px] leading-[14px] text-white/70">
                          Sent to Coach Sam • Week 12
                        </p>
                      </div>

                      <div className="mb-3 rounded-[18px] bg-white p-3 shadow-[inset_0_0_0_1px_#eee9e5]">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-[10px] font-semibold tracking-[0.9px] text-[#4f40cf]">
                            CLIENT SNAPSHOT
                          </p>
                          <span className="rounded-full bg-[#ffebe8] px-2 py-1 text-[9px] font-semibold text-[#ba1a1a]">
                            Action
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-[12px] bg-[#f2eeff] p-2">
                            <p className="text-[9px] font-semibold text-[#787586]">Weight</p>
                            <p className="text-[15px] font-bold leading-[18px] text-[#1b1c1c]">
                              72.4kg
                            </p>
                            <p className="text-[9px] text-[#ba1a1a]">Prev 70.4kg</p>
                          </div>
                          <div className="rounded-[12px] bg-[#fff1e6] p-2">
                            <p className="text-[9px] font-semibold text-[#787586]">Waist</p>
                            <p className="text-[15px] font-bold leading-[18px] text-[#1b1c1c]">
                              76cm
                            </p>
                            <p className="text-[9px] text-[#753400]">Prev 74.8cm</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="rounded-[16px] bg-white p-3 shadow-[inset_0_0_0_1px_#eee9e5]">
                          <div className="mb-2 flex items-center justify-between">
                            <p className="text-[10px] font-semibold text-[#1b1c1c]">
                              Training progress
                            </p>
                            <span className="text-[10px] font-semibold text-[#f87600]">Stalled</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-[#f0eeec]">
                            <div className="h-full w-[54%] rounded-full bg-[#f87600]" />
                          </div>
                          <p className="mt-2 text-[9px] leading-[13px] text-[#787586]">
                            Lower-body volume down. RPE rising across final sets.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-[16px] bg-white p-3 shadow-[inset_0_0_0_1px_#eee9e5]">
                            <p className="text-[9px] font-semibold text-[#787586]">Fatigue / stress</p>
                            <p className="mt-1 text-[15px] font-bold text-[#ba1a1a]">High</p>
                          </div>
                          <div className="rounded-[16px] bg-white p-3 shadow-[inset_0_0_0_1px_#eee9e5]">
                            <p className="text-[9px] font-semibold text-[#787586]">Nutrition</p>
                            <p className="mt-1 text-[15px] font-bold text-[#f87600]">62%</p>
                          </div>
                        </div>

                        <div className="rounded-[16px] bg-white p-3 shadow-[inset_0_0_0_1px_#eee9e5]">
                          <p className="mb-2 text-[10px] font-semibold text-[#1b1c1c]">
                            Goals for next week
                          </p>
                          <ul className="space-y-1 text-[9px] leading-[13px] text-[#474554]">
                            <li>• Reduce sodium-heavy meals over weekend.</li>
                            <li>• Hold calories steady for 7 days.</li>
                            <li>• Move leg day if sleep drops below 6h.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* AI Analysis card */}
                <div className="absolute -left-6 bottom-[100px] bg-white rounded-[20px] shadow-[0px_12px_20px_0px_rgba(27,28,28,0.12)] px-4 py-3 w-[164px]">
                  <p className="font-semibold text-[#1b1c1c] text-[14px] leading-[20px]">AI Analysis</p>
                  <p className="text-[#474554] text-[12px] leading-[18px]">Daily review queue</p>
                </div>
              </div>

              {/* Phone 2 — light (Spreadsheet chaos) */}
              <div className="relative" style={{ marginTop: "36px" }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-white/80 text-[12px] font-semibold tracking-[1.44px]">MESSY REALITY</p>
                </div>
                <div className="bg-[#f4f3f8] rounded-[42px] shadow-[0px_22px_40px_0px_rgba(27,28,28,0.18)] w-[250px] h-[520px] relative overflow-hidden">
                  <div className="bg-[#fcfbff] rounded-[30px] m-[14px] mt-[14px] h-[492px] relative">
                    <div className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-[#d6d2ea] rounded-full h-[10px] w-[80px]" />
                    <div className="px-3 pt-[50px]">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-[14px] w-[108px] rounded-full bg-[rgba(248,118,0,0.18)]" />
                        <div className="h-[14px] w-[58px] rounded-full bg-[rgba(79,64,207,0.14)]" />
                      </div>
                      <div className="overflow-hidden rounded-[16px] border border-[#d9d5e6] bg-white shadow-[0px_6px_16px_0px_rgba(27,28,28,0.08)]">
                        <div className="grid grid-cols-5 bg-[#edeaf5] text-center text-[8px] font-semibold leading-[18px] text-[#787586]">
                          {["A", "B", "C", "D", "E"].map((column) => (
                            <span className="border-r border-[#d9d5e6] last:border-r-0" key={column}>
                              {column}
                            </span>
                          ))}
                        </div>
                        {[
                          ["82", "7.4", "12", "145", "68"],
                          ["81", "6.9", "11", "132", "72"],
                          ["83", "8.1", "14", "151", "65"],
                          ["80", "7.2", "10", "126", "70"],
                          ["84", "8.4", "16", "164", "63"],
                          ["82", "7.8", "13", "139", "66"],
                          ["79", "6.7", "9", "118", "74"],
                          ["85", "8.9", "18", "172", "61"],
                          ["81", "7.1", "12", "128", "69"],
                          ["83", "8.2", "15", "156", "64"],
                          ["80", "6.8", "11", "121", "73"],
                          ["84", "8.6", "17", "168", "62"],
                        ].map((row, rowIndex) => (
                          <div
                            className="grid grid-cols-5 text-center text-[9px] font-medium leading-[24px] text-[#474554]"
                            key={rowIndex}
                          >
                            {row.map((cell, cellIndex) => (
                              <span
                                className={`border-r border-t border-[#e7e3ef] last:border-r-0 ${
                                  (rowIndex + cellIndex) % 5 === 0
                                    ? "bg-[#fff1e6] text-[#753400]"
                                    : (rowIndex + cellIndex) % 4 === 0
                                      ? "bg-[#f2eeff] text-[#4f40cf]"
                                      : "bg-white"
                                }`}
                                key={`${rowIndex}-${cellIndex}`}
                              >
                                {cell}
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-[36px] rounded-[12px] bg-[#fff1e6]" />
                        <div className="h-[36px] rounded-[12px] bg-[#f2eeff]" />
                        <div className="h-[36px] rounded-[12px] bg-[#f5f3f3]" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Spreadsheet chaos card */}
                <div className="absolute -right-2 bottom-[60px] bg-white rounded-[20px] shadow-[0px_12px_20px_0px_rgba(27,28,28,0.12)] px-4 py-3 w-[192px]">
                  <p className="font-semibold text-[#1b1c1c] text-[14px] leading-[20px]">Spreadsheet chaos</p>
                  <p className="text-[#474554] text-[12px] leading-[18px]">Scattered notes + forms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Sprawl */}
      <section className="px-6 md:px-[88px] py-16 max-w-[1440px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[32px] md:text-[46px] leading-[1.15] max-w-[520px] mb-12">
          Most coaching businesses are held together by 5+ tools.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — pain points */}
          <div>
            <p className="text-[#474554] text-[22px] font-medium leading-[28px] italic mb-8">"It works... until it does not."</p>
            <ul className="space-y-5">
              {[
                "Scattered training apps and PDFs",
                "Manual nutrition tracking spreadsheets",
                "Endless Google Forms for check-ins",
                "Notes buried in Telegram or WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XDot red />
                  <span className="text-[#474554] text-[18px] leading-[24px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right — app icons grid */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Training app", orange: false },
              { label: "Nutrition tracker", orange: true },
              { label: "Check-in forms", orange: false },
              { label: "Spreadsheets", orange: true },
            ].map((app) => (
              <div key={app.label} className="bg-white/72 rounded-[24px] shadow-[0px_8px_24px_0px_rgba(27,28,28,0.05)] p-5">
                <div className="bg-[#f5f3f3] rounded-[14px] size-[44px] flex items-center justify-center mb-3">
                  <div className="rounded-[10px] size-[20px]" style={{ background: app.orange ? "rgba(248,118,0,0.24)" : "rgba(79,64,207,0.24)" }} />
                </div>
                <p className="font-semibold text-[#1b1c1c] text-[16px] leading-[22px]">{app.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Solution */}
      <section className="px-4 md:px-[68px] py-4 max-w-[1440px] mx-auto">
        <div className="bg-[#eae5ff] rounded-[32px] px-6 md:px-16 py-14">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[40px] md:text-[54px] leading-[1.1] text-center mb-4">
            This replaces all of it.
          </h2>
          <p className="text-[#4f40cf] text-[22px] md:text-[24px] font-semibold text-center mb-10 leading-[30px]">
            And now AI that actually helps you coach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Client management",
                desc: "Centralised client profiles, history, communication, task assignment and call requests so nothing gets missed.",
              },
              {
                title: "Training + nutrition",
                desc: "Program builder with exercise demos and integrated nutrition planning with real food databases.",
              },
              {
                title: "Business operations",
                desc: "Lead pipelines, team management, content workflows and financial insight built for scale.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-[24px] shadow-[0px_10px_30px_0px_rgba(27,28,28,0.06)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#f2eeff] rounded-[14px] size-[44px] flex items-center justify-center flex-shrink-0">
                    <div className="bg-[rgba(79,64,207,0.24)] rounded-[10px] size-[20px]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] leading-[28px]">{card.title}</h3>
                </div>
                <p className="text-[#474554] text-[14px] leading-[22px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Review Workflow */}
      <section className="px-4 md:px-[48px] py-12 max-w-[1440px] mx-auto">
        <div className="bg-[#fbf9f8] border border-[#f0eeec] rounded-[32px] px-6 md:px-[88px] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <div className="inline-flex items-center bg-[#f2eeff] rounded-[18px] px-4 py-2 mb-6">
                <span className="text-[#4f40cf] text-[12px] font-semibold tracking-[1.44px]">AI CHECK-IN ANALYSIS</span>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[40px] md:text-[54px] leading-[1.05] mb-6">
                Every check-in.<br />Broken down.<br />Analysed.
              </h2>
              <p className="text-[#474554] text-[16px] leading-[26px] mb-8 max-w-[356px]">
                AI spots fatigue, recovery, training, stress and compliance patterns then surfaces exactly what needs attention.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-[26px] shadow-[0px_8px_16px_0px_rgba(27,28,28,0.06)] size-[52px] flex items-center justify-center flex-shrink-0">
                    <div className="bg-[rgba(79,64,207,0.24)] rounded-[10px] size-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] leading-[28px]">Trend analysis</h4>
                    <p className="text-[#474554] text-[14px] leading-[22px]">Weight, fatigue and recovery patterns in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-[26px] shadow-[0px_8px_16px_0px_rgba(27,28,28,0.06)] size-[52px] flex items-center justify-center flex-shrink-0">
                    <div className="bg-[rgba(248,118,0,0.28)] rounded-[10px] size-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] leading-[28px]">Structured plan</h4>
                    <p className="text-[#474554] text-[14px] leading-[22px]">Urgent, high, and keep-going flags with clear action cues.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-12 mt-10">
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#4f40cf] text-[48px] leading-none">30%</p>
                  <p className="text-[#474554] text-[12px] font-semibold tracking-[1.44px] mt-1">TIME SAVED</p>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#f87600] text-[48px] leading-none">2x</p>
                  <p className="text-[#474554] text-[12px] font-semibold tracking-[1.44px] mt-1">FASTER DECISIONS</p>
                </div>
              </div>
            </div>
            {/* Right — card visuals */}
            <div className="space-y-5">
              <div className="bg-white rounded-[30px] shadow-[0px_14px_28px_0px_rgba(27,28,28,0.08)] p-6">
                <div className="bg-[#f6f4ff] rounded-[24px] p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[#4f40cf] text-[12px] font-semibold tracking-[1.04px]">
                        URGENT ACTION
                      </p>
                      <h3 className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] text-[24px] font-bold leading-[30px] text-[#1b1c1c]">
                        Sarah
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#ffebe8] px-3 py-1 text-[12px] font-semibold text-[#ba1a1a]">
                      Review now
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[18px] bg-white p-4 shadow-[inset_0_0_0_1px_#e5e1dd]">
                      <p className="text-[12px] font-semibold tracking-[1.1px] text-[#787586]">
                        WEIGHT SPIKE
                      </p>
                      <p className="mt-2 font-['Plus_Jakarta_Sans',sans-serif] text-[32px] font-extrabold leading-none text-[#ba1a1a]">
                        +2kg
                      </p>
                    </div>
                    <div className="rounded-[18px] bg-white p-4 shadow-[inset_0_0_0_1px_#e5e1dd]">
                      <p className="text-[12px] font-semibold tracking-[1.1px] text-[#787586]">
                        NUTRITION
                      </p>
                      <p className="mt-2 font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-extrabold leading-none text-[#f87600]">
                        Low compliance
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-[18px] bg-white p-4 shadow-[inset_0_0_0_1px_#e5e1dd]">
                    <div className="mb-2 flex items-center justify-between text-[12px] font-semibold text-[#787586]">
                      <span>Action priority</span>
                      <span>High</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-[#f0eeec]">
                      <div className="h-full w-[82%] rounded-full bg-[#f87600]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[30px] shadow-[0px_14px_28px_0px_rgba(27,28,28,0.08)] p-6">
                <div className="bg-[#fff4ec] rounded-[24px] p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[#f87600] text-[12px] font-semibold tracking-[1.04px]">
                        HIGH COMPLIANCE
                      </p>
                      <h3 className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] text-[24px] font-bold leading-[30px] text-[#1b1c1c]">
                        Clients on track
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#e6f9ef] px-3 py-1 text-[12px] font-semibold text-[#1f6b46]">
                      90%+
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Amelia", training: "96", nutrition: "94", recovery: "92" },
                      { name: "Marcus", training: "93", nutrition: "91", recovery: "95" },
                      { name: "Priya", training: "98", nutrition: "90", recovery: "94" },
                    ].map((client) => (
                      <div
                        className="rounded-[18px] bg-white p-4 shadow-[inset_0_0_0_1px_#eadfd7]"
                        key={client.name}
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-bold leading-[22px] text-[#1b1c1c]">
                            {client.name}
                          </p>
                          <span className="rounded-full bg-[#e6f9ef] px-2.5 py-1 text-[12px] font-semibold text-[#1f6b46]">
                            On track
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-[12px] bg-[#fbf9f8] px-2 py-2">
                            <p className="text-[10px] font-semibold tracking-[0.8px] text-[#787586]">
                              Training
                            </p>
                            <p className="mt-1 text-[16px] font-bold text-[#1f6b46]">
                              {client.training}%
                            </p>
                          </div>
                          <div className="rounded-[12px] bg-[#fbf9f8] px-2 py-2">
                            <p className="text-[10px] font-semibold tracking-[0.8px] text-[#787586]">
                              Nutrition
                            </p>
                            <p className="mt-1 text-[16px] font-bold text-[#1f6b46]">
                              {client.nutrition}%
                            </p>
                          </div>
                          <div className="rounded-[12px] bg-[#fbf9f8] px-2 py-2">
                            <p className="text-[10px] font-semibold tracking-[0.8px] text-[#787586]">
                              Recovery
                            </p>
                            <p className="mt-1 text-[16px] font-bold text-[#1f6b46]">
                              {client.recovery}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Flow */}
      <section className="px-4 md:px-[48px] py-8 max-w-[1440px] mx-auto">
        <div className="bg-[#fff4ec] rounded-[32px] px-6 md:px-12 py-14">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[36px] md:text-[44px] text-center mb-12 leading-[1.12]">
            A new standard for coaching flow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", title: "Client submits", desc: "Photos, data, and subjective feedback arrive in one place." },
              { n: "2", title: "AI processes", desc: "The system cross-references training, fatigue, and compliance markers." },
              { n: "3", title: "Structured report", desc: "Flags highlight what needs immediate attention and what is on track." },
              { n: "4", title: "Coach with clarity", desc: "Respond with confidence in seconds, not minutes." },
            ].map((step) => (
              <div key={step.n} className="bg-white/88 rounded-[24px] shadow-[0px_10px_24px_0px_rgba(27,28,28,0.06)] p-6">
                <div className="pt-0">
                  <div className="bg-[#fff1e6] rounded-[12px] size-[40px] flex items-center justify-center mb-4">
                    <div className="bg-[rgba(248,118,0,0.28)] rounded-[8px] size-[16px]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] leading-[26px] mb-2">{step.title}</h3>
                  <p className="text-[#474554] text-[14px] leading-[22px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Ops */}
      <section className="px-6 md:px-[84px] py-16 max-w-[1440px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[36px] md:text-[48px] leading-[1.12] max-w-[560px] mb-10">
          Not just better coaching.<br />A better business.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Lead pipeline */}
          <div className="md:col-span-6 bg-white/84 rounded-[28px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.06)] p-8">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[28px] leading-[32px] mb-2">Lead pipeline</h3>
            <p className="text-[#474554] text-[15px] leading-[24px] mb-6 max-w-[320px]">Visual CRM built for health and fitness coaching conversions.</p>
            <div className="flex gap-3">
              {[
                { stage: "New lead", count: "18", color: "bg-[#f2eeff] text-[#4f40cf]" },
                { stage: "Qualified", count: "9", color: "bg-[#fff1e6] text-[#753400]" },
                { stage: "Call booked", count: "6", color: "bg-[#e6f9ef] text-[#1f6b46]" },
                { stage: "Won", count: "4", color: "bg-[#f5f3f3] text-[#474554]" },
              ].map((stage) => (
                <div key={stage.stage} className="flex min-h-[112px] flex-1 flex-col justify-between rounded-[18px] bg-[#f5f3f3] p-3">
                  <div>
                    <p className="text-[12px] font-semibold leading-[16px] text-[#1b1c1c]">{stage.stage}</p>
                    <p className="mt-1 text-[11px] text-[#787586]">{stage.count} prospects</p>
                  </div>
                  <div className="space-y-1.5">
                    {[0, 1].map((item) => (
                      <div className={`h-5 rounded-[8px] ${stage.color}`} key={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Financial insights */}
          <div className="md:col-span-3 bg-[#4f40cf] rounded-[28px] shadow-[0px_10px_24px_0px_rgba(54,32,184,0.16)] p-6 flex flex-col justify-between gap-5">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[28px] leading-[34px]">Financial insights</h3>
            <div className="rounded-[20px] bg-white/12 p-4">
              <div className="mb-3 flex items-end justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold tracking-[1px] text-white/60">MONTHLY REVENUE</p>
                  <p className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] text-[24px] font-extrabold leading-none text-white">$18.4k</p>
                </div>
                <span className="rounded-full bg-[#e6f9ef] px-2 py-1 text-[11px] font-semibold text-[#1f6b46]">+12%</span>
              </div>
              <div className="flex h-[76px] items-end gap-1.5">
                {[34, 48, 42, 58, 64, 74, 68, 86].map((height, index) => (
                  <div
                    className="flex-1 rounded-t-[7px]"
                    key={index}
                    style={{
                      height: `${height}%`,
                      background: index % 2 === 0 ? "rgba(255,255,255,0.42)" : "#f87600",
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="text-[#e3dfff] text-[15px] leading-[24px]">Revenue, churn, and projection reports in one glance.</p>
          </div>
          {/* Team management */}
          <div className="md:col-span-3 bg-white/84 rounded-[28px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.06)] p-6">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[26px] leading-[30px] mb-2">Team management</h3>
            <p className="text-[#474554] text-[14px] leading-[22px] mb-4">Coach capacity and weekly earnings at a glance.</p>
            <div className="space-y-2">
              {[
                { name: "Mia", capacity: "24/30", earnings: "$2.8k" },
                { name: "Jordan", capacity: "18/25", earnings: "$2.1k" },
                { name: "Ella", capacity: "29/30", earnings: "$3.4k" },
              ].map((coach) => (
                <div className="rounded-[16px] bg-[#fbf9f8] p-3 shadow-[inset_0_0_0_1px_#f0eeec]" key={coach.name}>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[13px] font-bold text-[#1b1c1c]">{coach.name}</p>
                    <p className="text-[12px] font-semibold text-[#4f40cf]">{coach.earnings}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#e5e1dd]">
                      <div
                        className="h-full rounded-full bg-[#f87600]"
                        style={{ width: coach.capacity.startsWith("29") ? "96%" : coach.capacity.startsWith("24") ? "80%" : "72%" }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#787586]">{coach.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Content workflow */}
          <div className="md:col-span-9 bg-[#f87600] rounded-[28px] shadow-[0px_10px_28px_0px_rgba(248,118,0,0.16)] p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[28px] leading-[32px] mb-2">Content workflow</h3>
                <p className="text-[#fff3eb] text-[15px] leading-[22px] max-w-[280px]">Store, schedule and distribute your educational content instantly.</p>
              </div>
              <div className="grid min-w-[280px] flex-1 grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { step: "1", label: "Content idea" },
                  { step: "2", label: "Content generation" },
                  { step: "3", label: "Content scheduled" },
                  { step: "4", label: "Content posted" },
                ].map((item) => (
                  <div key={item.step} className="rounded-[18px] bg-white/18 p-4">
                    <span className="grid size-7 place-items-center rounded-full bg-white text-[12px] font-bold text-[#f87600]">
                      {item.step}
                    </span>
                    <p className="mt-3 text-[13px] font-semibold leading-[17px] text-white">{item.label}</p>
                    <div className="mt-3 h-2 rounded-full bg-white/28">
                      <div className="h-full w-[72%] rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="px-6 md:px-[84px] py-10 max-w-[1440px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[36px] md:text-[44px] text-center mb-10 leading-[1.12]">
          What changes when you switch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="bg-white/78 rounded-[28px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.05)] p-8">
            <p className="text-[#787586] text-[12px] font-semibold tracking-[1.92px] mb-6">CURRENT REALITY</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <XDot red />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] mb-1">Juggling tools</h4>
                  <p className="text-[#474554] text-[14px] leading-[22px]">Wasting two hours a day sorting data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XDot red />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[22px] mb-1">Manual analysis</h4>
                  <p className="text-[#474554] text-[14px] leading-[22px]">Relying on memory to spot client trends.</p>
                </div>
              </div>
            </div>
          </div>
          {/* After */}
          <div className="bg-[#efeaff]/95 rounded-[28px] shadow-[0px_10px_28px_0px_rgba(27,28,28,0.05)] p-8">
            <p className="text-[#4f40cf] text-[12px] font-semibold tracking-[1.92px] mb-6">THE COMPLETE COACH</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckDot />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#4f40cf] text-[22px] mb-1">Coaching with structure</h4>
                  <p className="text-[#474554] text-[14px] leading-[22px]">Everything happens in one tab.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckDot />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#4f40cf] text-[22px] mb-1">AI-driven efficiency</h4>
                  <p className="text-[#474554] text-[14px] leading-[22px]">Instant summaries highlight exactly who needs you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="px-6 md:px-[84px] py-10 max-w-[1440px] mx-auto">
        <div className="rounded-[32px] bg-white px-6 py-10 shadow-[0px_12px_30px_0px_rgba(27,28,28,0.08)] md:px-10">
          <div className="mx-auto mb-8 max-w-[860px] text-center">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[34px] md:text-[48px] leading-[1.08] mb-5">
              The Only Platform Built To Run Your Entire Coaching Business
            </h2>
            <div className="space-y-3 text-[#474554] text-[16px] md:text-[18px] leading-[28px]">
              <p>Most coaching platforms help you deliver workouts.</p>
              <p>
                Complete Coach helps you acquire clients, manage clients,
                automate operations, analyse performance, grow revenue, and
                scale your business from a single platform.
              </p>
            </div>
          </div>

          <div className="mb-8 rounded-[26px] bg-[#f2eeff] p-5 text-center shadow-[inset_0_0_0_1px_#ddd5ff]">
            <p className="font-semibold text-[#4f40cf] text-[15px] leading-[24px]">
              ✓ Complete Coach leads in 12+ categories where competitors offer
              limited or no functionality.
            </p>
            <p className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] md:text-[24px] leading-[30px]">
              Stop paying for Trainerize + HubSpot + Calendly + ClickUp +
              Buffer + Google Forms.
            </p>
            <p className="mt-2 text-[#474554] text-[15px] font-semibold">
              Run everything from one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              {
                title: "Coaching Features",
                rows: [
                  ["Workout Programming", "✓", "✓"],
                  ["Nutrition Coaching", "✓", "✓"],
                  ["Client Messaging", "✓", "✓"],
                  ["Client Check-ins", "✓", "✓"],
                ],
              },
              {
                title: "Business Growth Features",
                rows: [
                  ["CRM", "Limited", "✓"],
                  ["Lead Management", "No", "✓"],
                  ["Sales Pipeline", "No", "✓"],
                  ["Revenue Analytics", "No", "✓"],
                  ["Team Management", "Limited", "✓"],
                ],
              },
              {
                title: "Marketing Suite",
                rows: [
                  ["Social Media Planning", "No", "✓"],
                  ["Content Calendar", "No", "✓"],
                  ["Post Scheduling", "No", "✓"],
                  ["Marketing Analytics", "No", "✓"],
                ],
              },
              {
                title: "AI & Automation",
                rows: [
                  ["AI Check-In Analysis", "Limited", "✓"],
                  ["Automation Workflows", "Limited", "✓"],
                  ["AI Business Insights", "No", "✓"],
                  ["Predictive Client Intelligence", "No", "✓"],
                ],
              },
            ].map((group) => (
              <div
                className="overflow-hidden rounded-[24px] border border-[#f0eeec] bg-[#fbf9f8]"
                key={group.title}
              >
                <div className="bg-[#1b1c1c] px-5 py-4">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[21px] font-bold leading-[26px] text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr] border-b border-[#f0eeec] bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#787586]">
                  <span>Feature</span>
                  <span className="text-center">Competitors</span>
                  <span className="text-center text-[#4f40cf]">Complete Coach</span>
                </div>
                {group.rows.map(([feature, competitors, completeCoach]) => (
                  <div
                    className="grid grid-cols-[1.4fr_0.8fr_0.9fr] items-center border-b border-[#f0eeec] bg-white px-4 py-3 last:border-b-0"
                    key={feature}
                  >
                    <span className="text-[14px] font-semibold leading-[20px] text-[#1b1c1c]">
                      {feature}
                    </span>
                    <span
                      className={`text-center text-[13px] font-semibold ${
                        competitors === "✓" ? "text-[#1f6b46]" : "text-[#787586]"
                      }`}
                    >
                      {competitors}
                    </span>
                    <span className="mx-auto grid size-7 place-items-center rounded-full bg-[#e6f9ef] text-[14px] font-bold text-[#1f6b46]">
                      {completeCoach}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[840px] rounded-[28px] bg-[#4f40cf] px-6 py-8 text-center shadow-[0px_14px_30px_0px_rgba(54,32,184,0.16)] md:px-10">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[34px] text-white md:text-[36px] md:leading-[42px]">
              Why pay for 6-8 separate tools when one platform does it all?
            </h3>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[25px] text-[#e3dfff] md:text-[17px] md:leading-[28px]">
              Complete Coach combines coaching delivery, CRM, marketing,
              reporting, AI analysis, automation, and business growth tools into
              a single operating system built specifically for fitness coaches.
            </p>
            <p className="mt-5 text-[16px] font-semibold leading-[24px] text-white">
              Join the coaches building smarter businesses with Complete Coach.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-[48px] py-10 max-w-[1440px] mx-auto">
        <div className="bg-[#2e2479] rounded-[32px] shadow-[0px_18px_40px_0px_rgba(27,28,28,0.16)] px-8 md:px-16 py-14 text-center relative overflow-hidden">
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 size-[180px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", filter: "blur(32px)" }} />
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[32px] md:text-[44px] leading-[1.12] mb-2 relative z-10">
            If you are serious about your coaching,<br />you need a serious system.
          </h2>
          <div className="mt-10 relative z-10">
            <Link
              href={founderProgramPath}
              className="bg-white text-[#3620b8] font-semibold text-[15px] px-8 h-[56px] rounded-[28px] shadow-[0px_10px_24px_0px_rgba(27,28,28,0.08)] hover:bg-gray-50 transition-colors inline-flex items-center"
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
