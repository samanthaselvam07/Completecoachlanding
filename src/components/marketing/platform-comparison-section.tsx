export const platformComparisonGroups = [
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
];

export function PlatformComparisonSection() {
  return (
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
              automate operations, analyse performance, grow revenue, and scale
              your business from a single platform.
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-[26px] bg-[#f2eeff] p-5 text-center shadow-[inset_0_0_0_1px_#ddd5ff]">
          <p className="font-semibold text-[#4f40cf] text-[15px] leading-[24px]">
            ✓ Complete Coach leads in 12+ categories where competitors offer
            limited or no functionality.
          </p>
          <p className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px] md:text-[24px] leading-[30px]">
            Stop paying for Trainerize + HubSpot + Calendly + ClickUp + Buffer
            + Google Forms.
          </p>
          <p className="mt-2 text-[#474554] text-[15px] font-semibold">
            Run everything from one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {platformComparisonGroups.map((group) => (
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
                <span className="text-center text-[#4f40cf]">
                  Complete Coach
                </span>
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
            reporting, AI analysis, automation, and business growth tools into a
            single operating system built specifically for fitness coaches.
          </p>
          <p className="mt-5 text-[16px] font-semibold leading-[24px] text-white">
            Join the coaches building smarter businesses with Complete Coach.
          </p>
        </div>
      </div>
    </section>
  );
}
