const benefits = [
  {
    icon: 'ri-store-line',
    title: 'Launch Your Own Line',
    body: 'Co-create a rescue-linked product collection under your brand. We handle production, fulfillment, and shelter partnerships.',
  },
  {
    icon: 'ri-heart-3-line',
    title: 'Drive Real Impact',
    body: 'Every product you launch is tied to a real shelter. Your audience buys with purpose — and you can show them exactly where it goes.',
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Revenue Share',
    body: 'Earn a meaningful share of every sale. The more your community engages, the more impact — and income — you generate.',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Co-Branded Storytelling',
    body: 'We amplify your campaign through our platform, community, and shelter network. Your reach, multiplied.',
  },
];

export default function CreatorCollaboration() {
  return (
    <section id="creators" className="bg-[#2D2D2D] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For Creators & Influencers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              Have a Following?<br />Build Something<br />That Matters.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              You already have an audience that trusts you. Partner with us to launch rescue-linked products that turn your platform into a force for real change — and give your community something worth buying.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0">
                    <i className={`${b.icon} text-sm text-[#C97D5D]`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{b.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#shelter-partnership"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Collaborate With Us
              <i className="ri-arrow-right-line"></i>
            </a>

            <p className="text-white/30 text-xs mt-5 flex items-center gap-2">
              <i className="ri-shield-check-line text-[#C97D5D]"></i>
              Built to support shelters, not replace them
            </p>
          </div>

          {/* Right — Visual */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-[460px]">
            <img
              src="https://readdy.ai/api/search-image?query=A%20confident%20young%20content%20creator%20sitting%20at%20a%20clean%20minimal%20desk%2C%20holding%20a%20premium%20branded%20hoodie%20with%20a%20rescue%20animal%20design%2C%20warm%20natural%20light%20from%20a%20large%20window%2C%20lifestyle%20photography%2C%20warm%20amber%20and%20cream%20tones%2C%20authentic%20and%20aspirational%20mood%2C%20shallow%20depth%20of%20field%2C%20clean%20background&width=800&height=900&seq=creator001&orientation=portrait"
              alt="Creator collaborating on rescue merchandise"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            {/* Floating stat */}
            <div className="absolute bottom-5 right-5 bg-[#C97D5D] text-white rounded-xl px-5 py-3">
              <p className="text-xs font-medium opacity-80 mb-0.5">Creator Revenue Share</p>
              <p className="text-xl font-bold">Up to 20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
