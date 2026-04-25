const features = [
  {
    icon: 'ri-heart-line',
    title: 'Save Favorite Animals',
    body: 'Bookmark rescue animals you connect with. Follow their journey from shelter to forever home.',
  },
  {
    icon: 'ri-building-line',
    title: 'Track Shelter Support',
    body: 'See exactly which shelters you\'ve supported and how your contributions have helped them grow.',
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Your Impact Over Time',
    body: 'A personal timeline of every purchase, donation, and share — and the real-world outcomes they created.',
  },
  {
    icon: 'ri-gift-line',
    title: 'Rewards & Recognition',
    body: 'Earn recognition for consistent support. Future: referral tracking, community badges, and exclusive access.',
  },
];

export default function AccountDashboard() {
  return (
    <section id="account" className="bg-[#F7F5F2] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Personal Impact Dashboard</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-6">
              Your Support,<br />Tracked & Visible
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10 max-w-lg">
              Create a free account and turn every action into a story. See the animals you&apos;ve helped, the shelters you&apos;ve supported, and the impact you&apos;ve built — all in one place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                    <i className={`${f.icon} text-base text-[#C97D5D]`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">{f.title}</h4>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#account"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Create Free Account
                <i className="ri-arrow-right-line"></i>
              </a>
              <a
                href="#account"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-sm font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Right — Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-[#F0EAE4] p-6 md:p-8">
              {/* Mock profile header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F0EAE4]">
                <div className="w-12 h-12 rounded-full bg-[#F5EDE6] flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-smile-line text-xl text-[#C97D5D]"></i>
                </div>
                <div>
                  <p className="font-semibold text-[#2D2D2D] text-sm">Your Impact Profile</p>
                  <p className="text-[#A8A8A8] text-xs">Member since April 2026</p>
                </div>
                <span className="ml-auto text-xs font-semibold text-[#C97D5D] bg-[#F5EDE6] px-3 py-1 rounded-full">Active</span>
              </div>

              {/* Mock stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { val: '12', lbl: 'Animals Saved' },
                  { val: '3', lbl: 'Shelters Supported' },
                  { val: '$148', lbl: 'Total Impact' },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-[#FAFAF8] rounded-xl p-4">
                    <p className="font-serif text-2xl text-[#C97D5D] font-semibold">{s.val}</p>
                    <p className="text-[#A8A8A8] text-xs mt-1">{s.lbl}</p>
                  </div>
                ))}
              </div>

              {/* Mock saved animals */}
              <p className="text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-3">Saved Animals</p>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Biscuit', shelter: 'Sunridge Rescue, TX', status: 'Adopted', color: 'text-emerald-600 bg-emerald-50' },
                  { name: 'Luna', shelter: 'Coastal Paws, CA', status: 'In Care', color: 'text-amber-600 bg-amber-50' },
                  { name: 'Mango', shelter: 'Second Chance Cats, NY', status: 'In Care', color: 'text-amber-600 bg-amber-50' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-[#F7F5F2] last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5EDE6] flex items-center justify-center">
                        <i className="ri-footprint-line text-xs text-[#C97D5D]"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#2D2D2D]">{a.name}</p>
                        <p className="text-xs text-[#A8A8A8]">{a.shelter}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.color}`}>{a.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#C97D5D] text-white rounded-2xl px-5 py-3 text-sm font-semibold hidden md:block">
              <i className="ri-shield-check-line mr-2"></i>Free Forever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
