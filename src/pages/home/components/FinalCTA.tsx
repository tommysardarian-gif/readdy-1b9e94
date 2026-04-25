import { Link } from 'react-router-dom';

const primaryAction = {
  icon: 'ri-t-shirt-line',
  title: 'Create a Product',
  description: 'Turn your pet into a product that connects people to real animals.',
  cta: 'Start Creating',
  to: '/customize',
};

const secondaryActions = [
  {
    icon: 'ri-shopping-bag-line',
    title: 'Shop',
    description: 'Browse products that directly support verified shelters.',
    cta: 'Shop Products',
    to: '/shop',
  },
  {
    icon: 'ri-building-line',
    title: 'Partner',
    description: 'Join as a shelter or collaborator and expand your reach.',
    cta: 'Apply as a Shelter',
    to: '/for-shelters',
  },
];

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-20 md:py-28 overflow-hidden bg-[#1a1a1a]">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C97D5D 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8B4A2E 0%, transparent 40%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Header */}
        <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Take Action</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          Turn Awareness Into Action
        </h2>
        <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-14">
          Every action connects people to real animals that need help right now.
        </p>

        {/* Primary Card */}
        <div className="mb-5">
          <div className="relative bg-[#2a2a2a] border border-[#C97D5D]/40 rounded-2xl p-10 text-left max-w-2xl mx-auto hover:border-[#C97D5D]/70 transition-all duration-300 group">
            {/* Primary badge */}
            <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase text-[#C97D5D] bg-[#C97D5D]/10 px-3 py-1 rounded-full">Most Popular</span>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#C97D5D]/15 shrink-0">
                <i className={`${primaryAction.icon} text-2xl text-[#C97D5D]`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{primaryAction.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{primaryAction.description}</p>
                <Link
                  to={primaryAction.to}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  {primaryAction.cta}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {secondaryActions.map((action, i) => (
            <div
              key={i}
              className="bg-[#242424] border border-white/10 rounded-2xl p-7 text-left hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/8 mb-5">
                <i className={`${action.icon} text-lg text-white/60`}></i>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">{action.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{action.description}</p>
              <Link
                to={action.to}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-[#C97D5D]/50 hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                {action.cta}
                <i className="ri-arrow-right-line text-xs"></i>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-white/25 text-xs tracking-wide">
          Real shelters. Verified partners. Built to scale nationwide.
        </p>
      </div>
    </section>
  );
}
