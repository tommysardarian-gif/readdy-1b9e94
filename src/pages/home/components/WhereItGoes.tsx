const flow = [
  {
    step: '01',
    icon: 'ri-shopping-bag-line',
    title: 'You Purchase or Donate',
    body: 'Every order and donation enters a transparent support pool tied directly to the shelter or animal you chose.',
  },
  {
    step: '02',
    icon: 'ri-megaphone-line',
    title: 'Shelters Gain Visibility',
    body: 'Funds power storytelling campaigns, featured animal profiles, and community outreach — giving shelters a real platform.',
  },
  {
    step: '03',
    icon: 'ri-group-line',
    title: 'Communities Engage',
    body: 'More visibility means more adopters, more volunteers, and more donors finding shelters they never knew existed.',
  },
  {
    step: '04',
    icon: 'ri-heart-line',
    title: 'Animals Find Homes',
    body: 'Increased engagement directly reduces time in shelter and euthanasia rates. Your support creates a measurable chain reaction.',
  },
];

const breakdown = [
  { label: 'Shelter Visibility & Storytelling', pct: 45, color: 'bg-[#C97D5D]' },
  { label: 'Animal Care & Medical Support', pct: 30, color: 'bg-[#D4A574]' },
  { label: 'Platform & Community Operations', pct: 15, color: 'bg-[#E8C9A8]' },
  { label: 'Impact Reporting & Transparency', pct: 10, color: 'bg-[#F0DCC8]' },
];

export default function WhereItGoes() {
  return (
    <section id="where-it-goes" className="bg-[#FAFAF8] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Full Transparency</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
            Where Your Support Goes
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-xl mx-auto">
            No ambiguity. No black boxes. Here&apos;s exactly how your purchase or donation creates a chain of real impact.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {flow.map((item, i) => (
            <div key={i} className="relative flex flex-col">
              {/* Connector */}
              {i < flow.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+32px)] right-[-50%] border-t-2 border-dashed border-[#D4C4B8] z-0"></div>
              )}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#C97D5D] text-white text-sm font-bold mb-5 flex-shrink-0">
                {item.step}
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-4">
                <i className={`${item.icon} text-lg text-[#C97D5D]`}></i>
              </div>
              <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">{item.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Breakdown Bar */}
        <div className="bg-white rounded-2xl border border-[#F0EAE4] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">How Funds Are Allocated</h3>
              <p className="text-[#6B6B6B] text-sm">A breakdown of every dollar that comes through our platform.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#C97D5D] bg-[#F5EDE6] px-4 py-2 rounded-full whitespace-nowrap">
              <i className="ri-shield-check-line"></i> Verified Impact Reporting
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {breakdown.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#2D2D2D]">{item.label}</span>
                  <span className="text-sm font-bold text-[#2D2D2D]">{item.pct}%</span>
                </div>
                <div className="h-2.5 bg-[#F0EAE4] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${item.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#A8A8A8] text-xs mt-6 text-center">
            Built to support, not replace shelters. We are a visibility and funding layer — not a replacement for the incredible work shelters do every day.
          </p>
        </div>
      </div>
    </section>
  );
}
