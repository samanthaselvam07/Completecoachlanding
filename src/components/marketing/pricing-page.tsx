import Link from "next/link";
import { SharedNav } from "./shared-nav";
import { SharedFooter } from "./shared-footer";
import { founderProgramPath } from "@/lib/site";

function CheckIcon({ color = "#4f40cf" }: { color?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[9px] size-[18px] flex-shrink-0 mt-[2px]"
      style={{ background: color === "#f87600" ? "#3b317a" : "#efeaff" }}
    >
      <span className="rounded-full size-[8px]" style={{ background: color }} />
    </span>
  );
}

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />

      {/* Hero */}
      <section className="pt-12 pb-16 px-6 text-center">
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#1b1c1c] text-[36px] sm:text-[48px] md:text-[60px] leading-[1.03] max-w-[900px] mx-auto mb-6">
          One platform. Every system your coaching business needs.
        </h1>
        <p className="text-[#474554] text-[17px] md:text-[20px] leading-[30px] max-w-[740px] mx-auto mb-10">
          From client delivery to business growth, powered by AI.
        </p>
      </section>

      {/* Plans */}
      <section className="px-6 pb-12 max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Core */}
          <div className="bg-white rounded-[28px] shadow-[0px_16px_32px_0px_rgba(27,28,28,0.1)] p-8 md:p-10">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[30px] mb-1">Core</h2>
            <p className="text-[#474554] text-[15px] mb-6">Everything you need to coach at a high level</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#1b1c1c] text-[58px] leading-none">$79</span>
              <span className="text-[#787586] text-[16px] font-medium mb-2">/mo</span>
            </div>
            <ul className="space-y-4 mb-10">
              {["Full coaching system", "Client review centre", "Integrated messaging", "Up to 25 clients", "1 coach account"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[#1b1c1c] text-[15px] font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <Link href={founderProgramPath} className="w-full h-[54px] bg-[#f5f3f3] hover:bg-[#eae8e8] rounded-[18px] font-semibold text-[#1b1c1c] text-[15px] transition-colors inline-flex items-center justify-center">
              Join Founder Program
            </Link>
          </div>

          {/* Scale */}
          <div className="bg-[#1b1c1c] border-2 border-[rgba(248,118,0,0.55)] rounded-[28px] shadow-[0px_16px_32px_0px_rgba(27,28,28,0.1)] p-8 md:p-10 relative">
            <div className="absolute top-6 right-6 bg-[#f87600] rounded-[17px] px-4 py-1.5">
              <span className="text-white text-[11px] font-semibold tracking-[1.1px]">MOST POPULAR</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[30px] mb-1">Scale</h2>
            <p className="text-[#b9b5d1] text-[15px] mb-6">Turn your coaching into a scalable business</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-[58px] leading-none">$99</span>
              <span className="text-[#b9b5d1] text-[16px] font-medium mb-2">/mo</span>
            </div>
            <ul className="space-y-4 mb-10">
              {["Core + AI Intelligence", "30% faster review speed", "Automated action plans", "Business Growth System", "Task management + pipeline", "Unlimited clients", "3 coach accounts"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon color="#f87600" />
                  <span className="text-white text-[15px] font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <Link href={founderProgramPath} className="w-full h-[54px] bg-[#4f40cf] hover:bg-[#3d31a8] shadow-[0px_10px_20px_0px_rgba(54,32,184,0.16)] rounded-[18px] font-semibold text-white text-[15px] transition-colors inline-flex items-center justify-center">
              Join Founder Program
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/features" className="h-[48px] px-8 bg-[#f5f3f3] hover:bg-[#eae8e8] rounded-[24px] shadow-[0px_8px_18px_0px_rgba(27,28,28,0.04)] font-semibold text-[#1b1c1c] text-[15px] transition-colors inline-flex items-center">
            View All Features
          </Link>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-6 pb-16 max-w-[1160px] mx-auto">
        <div className="bg-white rounded-[30px] shadow-[0px_12px_28px_0px_rgba(27,28,28,0.08)] overflow-hidden">
          <div className="bg-[#f8f6fc] px-8 md:px-10 py-6 grid grid-cols-[1fr_100px_100px]">
            <span className="font-semibold text-[#787586] text-[13px] tracking-[1.56px] uppercase">Feature Category</span>
            <span className="font-semibold text-[#4f40cf] text-[13px] tracking-[1.56px] uppercase text-center">Core</span>
            <span className="font-semibold text-[#f87600] text-[13px] tracking-[1.56px] uppercase text-center">Scale</span>
          </div>
          {[
            { feature: "Client management + profiles", core: "Included", scale: "Included", coreUpgrade: false },
            { feature: "Workout + program builder", core: "Included", scale: "Included", coreUpgrade: false },
            { feature: "Nutrition planning + tracking", core: "Included", scale: "Included", coreUpgrade: false },
            { feature: "AI review workflow", core: "Upgrade", scale: "Included", coreUpgrade: true },
            { feature: "Business CRM + pipeline", core: "Upgrade", scale: "Included", coreUpgrade: true },
            { feature: "Team capacity + coach accounts", core: "Upgrade", scale: "Included", coreUpgrade: true },
          ].map((row, i) => (
            <div key={row.feature} className={`px-8 md:px-10 py-4 grid grid-cols-[1fr_100px_100px] items-center ${i % 2 === 0 ? "bg-[#fbf9f8]/80" : "bg-white"}`}>
              <span className="text-[#1b1c1c] text-[15px] font-medium">{row.feature}</span>
              <span className={`text-[14px] font-semibold text-center ${row.coreUpgrade ? "text-[#787586]" : "text-[#4f40cf]"}`}>{row.core}</span>
              <span className="text-[#f87600] text-[14px] font-semibold text-center">{row.scale}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20 max-w-[1160px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[38px] md:text-[42px] text-center mb-10">
          Common Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "Can I upgrade from Core to Scale later?", a: "Absolutely. You can move to the Scale plan at any time as your business grows." },
            { q: "What does AI intelligence actually do?", a: "It scans client data, check-ins, trends and context so you can review with more clarity and less manual admin." },
            { q: "Is there a contract?", a: "No. All plans are month-to-month. You can cancel at any time without hidden fees." },
          ].map((item) => (
            <div key={item.q} className="bg-white rounded-[24px] shadow-[0px_10px_22px_0px_rgba(27,28,28,0.06)] px-8 md:px-10 py-7">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] md:text-[22px] mb-2">{item.q}</h3>
              <p className="text-[#474554] text-[14px] leading-[22px]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-16 max-w-[1160px] mx-auto">
        <div className="bg-[#4f40cf] rounded-[34px] shadow-[0px_18px_36px_0px_rgba(54,32,184,0.18)] px-8 md:px-16 py-14 text-center relative overflow-hidden">
          <div className="absolute top-10 right-[10%] bg-white/10 w-[184px] h-[124px] rounded-[30px]" />
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-[36px] md:text-[52px] leading-[1.07] mb-10 relative z-10">
            Stop guessing. Start scaling.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href={founderProgramPath} className="bg-white text-[#3620b8] font-semibold text-[14px] px-7 h-[50px] rounded-[25px] shadow-[0px_10px_20px_0px_rgba(27,28,28,0.08)] hover:bg-gray-50 transition-colors w-full sm:w-auto inline-flex items-center justify-center">
              Join Founder Program
            </Link>
            <Link href="/features" className="bg-[#f87600] text-white font-semibold text-[14px] px-7 h-[50px] rounded-[25px] shadow-[0px_10px_20px_0px_rgba(248,118,0,0.12)] hover:bg-[#d96800] transition-colors w-full sm:w-auto inline-flex items-center justify-center">
              View Features
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
