const comparisons = [
  {
    icon: 'ri-book-open-line',
    title: 'Better Storytelling',
    us: 'Every animal has a name, a face, and a story that moves people to act. We make rescue personal.',
    them: 'Most platforms show statistics and generic appeals that feel distant and forgettable.',
  },
  {
    icon: 'ri-eye-line',
    title: 'More Visibility for Shelters',
    us: 'We give shelters a dedicated platform, featured campaigns, and a community that actively looks for them.',
    them: 'Shelters often operate in isolation with limited marketing resources and no amplification.',
  },
  {
    icon: 'ri-group-line',
    title: 'Community-Driven Support',
    us: 'Our supporters are engaged, repeat contributors who track their impact and share stories organically.',
    them: 'One-time donors with no ongoing connection to the animals or shelters they helped.',
  },
  {
    icon: 'ri-shopping-bag-line',
    title: 'Purpose-Driven Products',
    us: 'Every product is tied to a real shelter. Buying feels meaningful, not transactional.',
    them: 'Generic merchandise with no clear connection to impact or specific rescue outcomes.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#F7F5F2] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why This Platform</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
            We Exist Because<br className="hidden md:block" /> Good Intentions Aren&apos;t Enough
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl mx-auto">
            There are thousands of shelters doing incredible work in silence. We built this platform to change that — with better tools, better stories, and a community that actually shows up.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6]">
                  <i className={`${item.icon} text-lg text-[#C97D5D]`}></i>
                </div>
                <h3 className="font-serif text-xl text-[#2D2D2D]">{item.title}</h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-[#F5EDE6]/50 rounded-xl p-4">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C97D5D] flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-xs text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#C97D5D] uppercase tracking-wide mb-1">Our Approach</p>
                    <p className="text-[#2D2D2D] text-sm leading-relaxed">{item.us}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F7F5F2] rounded-xl p-4">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E8E0D8] flex-shrink-0 mt-0.5">
                    <i className="ri-close-line text-xs text-[#A8A8A8]"></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#A8A8A8] uppercase tracking-wide mb-1">The Status Quo</p>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.them}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#shelter-partnership"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            See How We Work
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
