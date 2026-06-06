import { Link } from "react-router";
import { SharedNav } from "../components/SharedNav";
import { SharedFooter } from "../components/SharedFooter";

const phases = [
  {
    label: "Now",
    status: "live" as const,
    title: "Core Platform",
    items: ["Client management & profiles", "Program & workout builder", "Nutrition planning & tracking", "Integrated messaging", "Client check-in system"],
  },
  {
    label: "Next",
    status: "building" as const,
    title: "AI Expansion",
    aiFeatures: [
      {
        title: "Predictive Client Retention",
        description: "Machine learning models trained on coaching data to surface risk signals before clients go quiet or disengage.",
        predictions: [
          {
            label: "Client churn",
            detail: "Identify clients showing disengagement patterns — missed check-ins, declining response quality, reduced training compliance — weeks before they cancel.",
            icon: "churn",
          },
          {
            label: "Program completion",
            detail: "Score each client's likelihood of completing their current program based on early adherence signals, so you can intervene with the right clients at the right time.",
            icon: "completion",
          },
          {
            label: "Upsell opportunities",
            detail: "Surface clients who are hitting consistent milestones and showing high satisfaction signals — the optimal moment to introduce additional services.",
            icon: "upsell",
          },
        ],
      },
      {
        title: "AI Performance Analysis",
        description: "Continuous analysis of training data across your entire client base to surface patterns invisible to the human eye.",
        predictions: [
          {
            label: "Training trends",
            detail: "Aggregate and compare volume, intensity, and frequency patterns across clients and time periods to identify what programming approaches drive the best results.",
            icon: "trends",
          },
          {
            label: "Recovery issues",
            detail: "Cross-reference sleep, stress, and performance data to flag clients trending toward overtraining or under-recovery before performance degrades.",
            icon: "recovery",
          },
          {
            label: "Adherence patterns",
            detail: "Map the days, times, and conditions under which individual clients are most and least compliant — then use this to personalise programming timing.",
            icon: "adherence",
          },
        ],
      },
      {
        title: "AI Nutrition Insights",
        description: "Deep nutritional intelligence that goes beyond calorie counting to understand what is actually driving body composition outcomes.",
        predictions: [
          {
            label: "Nutritional compliance risks",
            detail: "Detect early-stage compliance drift in macro tracking before it compounds into week-long deviation — with suggested intervention messages ready to send.",
            icon: "compliance",
          },
          {
            label: "Potential plateau indicators",
            detail: "Identify the combination of training load, caloric intake, and metabolic adaptation signals that typically precede a plateau, with a 2–3 week lead time.",
            icon: "plateau",
          },
          {
            label: "Adjustment recommendations",
            detail: "AI-generated nutrition adjustment suggestions based on recent biometric trends, training volume changes, and historical response data for each client.",
            icon: "adjust",
          },
        ],
      },
    ],
  },
  {
    label: "Later",
    status: "planned" as const,
    title: "Scale & Automation",
    items: ["Automated client onboarding flows", "White-label client app", "API integrations & webhooks", "Advanced team analytics"],
  },
];

const iconMap: Record<string, JSX.Element> = {
  churn: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3v5l3 3" stroke="#f87600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  completion: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10l4 4 8-8" stroke="#4f40cf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  upsell: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 14l4-4 3 3 5-7" stroke="#2a8a5b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  trends: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 13l4-4 3 3 4-5 3 3" stroke="#4f40cf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  recovery: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4v6l4 2M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="#f87600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  adherence: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="2" stroke="#4f40cf" strokeWidth="1.8"/>
      <path d="M7 10h6M7 13h4" stroke="#4f40cf" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  compliance: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3l1.5 4.5H16l-3.7 2.7 1.4 4.3L10 12l-3.7 2.5 1.4-4.3L4 7.5h4.5L10 3z" stroke="#f87600" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  plateau: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 14h5v-4h4v-3h5" stroke="#4f40cf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  adjust: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2" stroke="#2a8a5b" strokeWidth="1.8"/>
      <path d="M10 4v2M10 14v2M4 10H2M18 10h-2M6.3 6.3 4.9 4.9M15.1 15.1l-1.4-1.4M6.3 13.7l-1.4 1.4M15.1 4.9l-1.4 1.4" stroke="#2a8a5b" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
};

function StatusBadge({ status }: { status: "live" | "building" | "planned" }) {
  const map = {
    live: { bg: "bg-[#e6f9ef]", text: "text-[#2a8a5b]", dot: "bg-[#2a8a5b]", label: "Live" },
    building: { bg: "bg-[#f2eeff]", text: "text-[#4f40cf]", dot: "bg-[#4f40cf]", label: "In Development" },
    planned: { bg: "bg-[#f5f3f3]", text: "text-[#787586]", dot: "bg-[#787586]", label: "Planned" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 ${s.bg} ${s.text} text-[12px] font-semibold tracking-[1.1px] px-3 py-1.5 rounded-[20px]`}>
      <span className={`size-[6px] rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

export function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      <SharedNav />

      {/* Hero */}
      <section className="pt-12 pb-14 px-6 text-center max-w-[800px] mx-auto">
        <div className="inline-flex items-center bg-[#f2eeff] rounded-[18px] px-4 py-2 mb-6">
          <span className="text-[#4f40cf] text-[12px] font-semibold tracking-[1.44px]">PRODUCT ROADMAP</span>
        </div>
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#1b1c1c] text-[40px] md:text-[56px] leading-[1.05] mb-5">
          What we're building next.
        </h1>
        <p className="text-[#474554] text-[18px] leading-[30px] max-w-[580px] mx-auto">
          A transparent view into the intelligence we're adding to Complete Coach — so you can plan your business around what's coming.
        </p>
      </section>

      {/* Timeline track */}
      <section className="px-6 pb-20 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-8">
          {phases.map((phase) => (
            <div key={phase.title}>
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div>
                    <StatusBadge status={phase.status} />
                    <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[26px] md:text-[30px] mt-1">
                      {phase.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Live / Planned — simple pill list */}
              {phase.items && (
                <div className="bg-white rounded-[24px] shadow-[0px_8px_20px_0px_rgba(27,28,28,0.06)] p-6 flex flex-wrap gap-3">
                  {phase.items.map((item) => (
                    <span key={item} className="bg-[#f5f3f3] text-[#474554] text-[14px] font-medium px-4 py-2 rounded-[12px]">
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* AI Expansion — deep cards */}
              {phase.aiFeatures && (
                <div className="flex flex-col gap-6">
                  {phase.aiFeatures.map((feature, fi) => (
                    <div
                      key={feature.title}
                      className="rounded-[28px] overflow-hidden shadow-[0px_12px_28px_0px_rgba(27,28,28,0.08)]"
                    >
                      {/* Feature header bar */}
                      <div
                        className="px-8 py-6"
                        style={{
                          background: fi === 0
                            ? "linear-gradient(135deg, #1b1c1c 0%, #2e2560 100%)"
                            : fi === 1
                            ? "linear-gradient(135deg, #4f40cf 0%, #3b317a 100%)"
                            : "linear-gradient(135deg, #f87600 0%, #c95f00 100%)",
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-white/60 text-[12px] font-semibold tracking-[1.44px] mb-2">AI EXPANSION</p>
                            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[24px] md:text-[28px] leading-[1.1] mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-white/75 text-[15px] leading-[24px] max-w-[560px]">{feature.description}</p>
                          </div>
                          <div className="hidden md:flex items-center gap-1.5 bg-white/10 rounded-[20px] px-4 py-2 flex-shrink-0">
                            <span className="size-[8px] rounded-full bg-[#f87600]" />
                            <span className="text-white text-[12px] font-semibold tracking-[1.1px]">COMING SOON</span>
                          </div>
                        </div>
                      </div>

                      {/* Prediction cards */}
                      <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {feature.predictions.map((pred) => (
                          <div
                            key={pred.label}
                            className="bg-[#fbf9f8] rounded-[20px] p-5 border border-[#f0eeec] hover:border-[#d6d0f5] hover:shadow-[0px_6px_16px_0px_rgba(79,64,207,0.08)] transition-all duration-200"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(27,28,28,0.08)] size-[36px] flex items-center justify-center flex-shrink-0">
                                {iconMap[pred.icon]}
                              </div>
                              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[16px] leading-[22px]">
                                {pred.label}
                              </h4>
                            </div>
                            <p className="text-[#474554] text-[13px] leading-[21px]">{pred.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 max-w-[1100px] mx-auto">
        <div className="bg-[#4f40cf] rounded-[34px] shadow-[0px_18px_36px_0px_rgba(54,32,184,0.18)] px-8 md:px-16 py-14 text-center relative overflow-hidden">
          <div className="absolute top-8 right-[8%] bg-white/10 w-[180px] h-[120px] rounded-[30px]" />
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-[32px] md:text-[48px] leading-[1.07] mb-4 relative z-10">
            Get ahead of the curve.
          </h2>
          <p className="text-[#e3dfff] text-[17px] leading-[28px] mb-10 max-w-[480px] mx-auto relative z-10">
            Start with the platform today and be first in line when AI Expansion launches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/pricing"
              className="bg-white text-[#3620b8] font-semibold text-[15px] px-8 h-[52px] rounded-[26px] shadow-[0px_10px_20px_0px_rgba(27,28,28,0.08)] hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              View Pricing
            </Link>
            <Link
              to="/features"
              className="bg-white/12 border border-white/20 text-white font-semibold text-[15px] px-8 h-[52px] rounded-[26px] hover:bg-white/20 transition-colors inline-flex items-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
