const partnerTypes = [
  {
    icon: 'ri-building-line',
    tag: 'Shelters & Rescues',
    title: 'Amplify Your Reach',
    body: 'We give your shelter a platform, a story, and a community. You keep doing the incredible work you already do — we make sure more people see it.',
    benefits: ['Featured animal profiles', 'Dedicated shelter page', 'Direct donation routing', 'Community engagement tools'],
    cta: 'Apply as a Shelter',
    href: '#shelter-partnership',
  },
  {
    icon: 'ri-palette-line',
    tag: 'Creators & Designers',
    title: 'Create With Purpose',
    body: 'Are you a designer, illustrator, or artist? Submit your work for our merchandise line. Your creativity funds rescue operations.',
    benefits: ['Revenue share on sales', 'Brand exposure to our community', 'Co-branded storytelling', 'Portfolio feature'],
    cta: 'Submit Your Work',
    href: '#shelter-partnership',
  },
  {
    icon: 'ri-heart-3-line',
    tag: 'Supporters & Advocates',
    title: 'Grow the Movement',
    body: 'You don\'t need to be a shelter or a designer to make a difference. Share stories, refer friends, and watch your impact multiply.',
    benefits: ['Personal impact dashboard', 'Referral tracking', 'Community recognition', 'Exclusive supporter updates'],
    cta: 'Join as a Supporter',
    href: '#account',
  },
];

export default function PartnerEcosystem() {
  return (
    <section id="partners" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Open Ecosystem</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
            Everyone Has a Role<br className="hidden md:block" /> in This Movement
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl mx-auto">
            This isn&apos;t a closed system. It&apos;s a growing ecosystem where shelters, creators, and supporters each play a vital part — and everyone benefits when animals find homes.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {partnerTypes.map((p, i) => (
            <div
              key={i}
              className="group bg-[#FAFAF8] rounded-2xl border border-[#F0EAE4] p-8 hover:border-[#C97D5D]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#C97D5D] bg-[#F5EDE6] px-3 py-1.5 rounded-full mb-6">
                <i className={`${p.icon} text-sm`}></i>
                {p.tag}
              </span>

              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-3">{p.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">{p.body}</p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {p.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-[#2D2D2D]">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                      <i className="ri-check-line text-xs text-[#C97D5D]"></i>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C97D5D] hover:gap-3 transition-all duration-200 cursor-pointer"
              >
                {p.cta} <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center">
          <p className="text-[#A8A8A8] text-sm">
            Real shelters. Real stories. Real impact. &mdash; Built to support, not replace the people doing the work.
          </p>
        </div>
      </div>
    </section>
  );
}
