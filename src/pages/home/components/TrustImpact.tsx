const stats = [
  {
    value: '4.2M',
    label: 'Animals Adopted Annually',
    detail: 'Across the U.S. each year, millions of shelter animals find loving homes — proof that community action works.',
    icon: 'ri-home-heart-line',
    tone: 'hopeful',
  },
  {
    value: '607K',
    label: 'Still at Risk Each Year',
    detail: 'Around 607,000 animals are euthanized annually. Visibility, funding, and community support directly reduce this number.',
    icon: 'ri-alarm-warning-line',
    tone: 'urgent',
  },
  {
    value: '13% → 8%',
    label: 'Euthanasia Rate Improved',
    detail: 'The national euthanasia rate has fallen from ~13% to ~8% — driven by better storytelling, more shelters, and engaged communities.',
    icon: 'ri-line-chart-line',
    tone: 'hopeful',
  },
  {
    value: 'Proven',
    label: 'Human-Animal Bond Impact',
    detail: 'The human-animal bond is clinically linked to reduced loneliness, lower anxiety, and improved long-term mental health outcomes.',
    icon: 'ri-mental-health-line',
    tone: 'hopeful',
  },
];

export default function TrustImpact() {
  return (
    <section id="trust-impact" className="bg-[#2D2D2D] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">The Problem We Are Solving</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              The Numbers That Drive<br className="hidden md:block" /> Everything We Do
            </h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            These aren&apos;t abstract statistics — they&apos;re the reason this platform exists.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#2D2D2D] p-7 md:p-9 flex flex-col gap-4 hover:bg-[#363636] transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                <i className={`${stat.icon} text-lg ${stat.tone === 'hopeful' ? 'text-[#C97D5D]' : 'text-amber-400'}`}></i>
              </div>
              <div>
                <p className={`font-serif text-3xl md:text-4xl font-semibold mb-1 ${stat.tone === 'hopeful' ? 'text-[#C97D5D]' : 'text-amber-400'}`}>
                  {stat.value}
                </p>
                <p className="text-white text-sm font-semibold tracking-wide">{stat.label}</p>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Mission target statement */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0">
              <i className="ri-focus-3-line text-[#C97D5D] text-lg"></i>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">Our Mission Target</p>
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                Our mission is to help drive these numbers toward zero — through community, visibility, and action. Every purchase, every share, every partnership moves the needle.
              </p>
            </div>
          </div>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            See How It Works
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        {/* Bottom trust line */}
        <p className="text-center text-white/30 text-xs tracking-widest uppercase mt-8">
          Every action contributes to visibility and rescue outcomes
        </p>
      </div>
    </section>
  );
}
