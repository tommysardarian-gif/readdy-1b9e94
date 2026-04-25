import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const stats = [
  {
    value: '6.5M',
    label: 'Animals enter U.S. shelters every year',
    source: 'ASPCA, 2023',
    context: 'That\'s roughly 17,800 animals per day — dogs, cats, rabbits, and more.',
  },
  {
    value: '920K',
    label: 'Animals euthanized annually in the U.S.',
    source: 'ASPCA, 2023',
    context: 'The majority are euthanized due to overcapacity, not behavioral issues.',
  },
  {
    value: '70%',
    label: 'Of shelter animals are healthy and adoptable',
    source: 'Shelter Animals Count, 2022',
    context: 'Most animals in shelters are there through no fault of their own.',
  },
  {
    value: '1 in 4',
    label: 'Shelter dogs are purebred',
    source: 'National Council on Pet Population, 2022',
    context: 'The idea that shelters only have "problem" animals is a myth.',
  },
];

const causes = [
  {
    icon: 'ri-building-2-line',
    title: 'Shelter Overcrowding',
    body: 'Most shelters operate at or above capacity year-round. When intake exceeds adoption rates, animals face euthanasia — not because they\'re unadoptable, but because there\'s no space.',
    severity: 'Critical',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    icon: 'ri-repeat-line',
    title: 'Uncontrolled Breeding',
    body: 'A single unspayed female dog and her offspring can produce up to 67,000 dogs in 6 years. Without intervention, the cycle of overpopulation continues regardless of adoption rates.',
    severity: 'Root Cause',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: 'ri-scissors-cut-line',
    title: 'Lack of Spay & Neuter Access',
    body: 'In many communities, spay/neuter services are unaffordable or inaccessible. Low-income households — who often have the most pets — face the highest barriers to preventive care.',
    severity: 'Systemic',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: 'ri-funds-box-line',
    title: 'Underfunded Shelters',
    body: 'Most shelters operate on tight budgets with limited staff. They can\'t invest in marketing, storytelling, or outreach — which means fewer adoptions, more overcrowding, and a harder cycle to break.',
    severity: 'Structural',
    color: 'bg-[#F5EDE6] border-[#F0E0D0]',
    iconBg: 'bg-[#F5EDE6]',
    iconColor: 'text-[#C97D5D]',
    badgeColor: 'bg-[#F5EDE6] text-[#C97D5D]',
  },
  {
    icon: 'ri-eye-off-line',
    title: 'Invisible Animals',
    body: 'Animals without names, photos, or stories are adopted at dramatically lower rates. Most shelters lack the resources to create compelling profiles for every animal in their care.',
    severity: 'Visibility Gap',
    color: 'bg-[#F0F5EE] border-[#DFF0D8]',
    iconBg: 'bg-[#DFF0D8]',
    iconColor: 'text-emerald-700',
    badgeColor: 'bg-[#DFF0D8] text-emerald-700',
  },
  {
    icon: 'ri-user-unfollow-line',
    title: 'Unprepared Ownership',
    body: 'Many animals are surrendered within the first year of adoption — not because of bad owners, but unprepared ones. Education before adoption dramatically reduces return rates.',
    severity: 'Preventable',
    color: 'bg-[#EEF0F5] border-[#D8DFF0]',
    iconBg: 'bg-[#D8DFF0]',
    iconColor: 'text-[#5D7DC9]',
    badgeColor: 'bg-[#D8DFF0] text-[#5D7DC9]',
  },
];

const progress = [
  { label: 'Euthanasia rate (2010)', value: 13, color: 'bg-red-400' },
  { label: 'Euthanasia rate (2023)', value: 8, color: 'bg-amber-400' },
  { label: 'Adoption rate (2023)', value: 65, color: 'bg-emerald-500' },
];

export default function RealityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">The Reality</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-6">
                The Problem<br />
                <span className="text-[#C97D5D]">Is Real. So Is the Solution.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8 max-w-lg">
                We don't believe in manufactured urgency or emotional manipulation. These are the facts — honest, sourced, and solution-oriented. Understanding the problem is the first step to solving it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/customize"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Be Part of the Solution
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link
                  to="/education"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Prevention &amp; Education
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[420px]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20powerful%20and%20honest%20documentary%20style%20photograph%20of%20a%20busy%20animal%20shelter%20interior%20with%20many%20kennels%20visible%2C%20rescue%20dogs%20looking%20through%20kennel%20doors%20with%20hopeful%20expressions%2C%20warm%20but%20slightly%20somber%20lighting%2C%20clean%20and%20professional%20shelter%20environment%2C%20authentic%20and%20real%20atmosphere%2C%20no%20manipulation%20just%20honest%20reality%2C%20warm%20cream%20and%20amber%20tones&width=700&height=600&seq=reality_hero001&orientation=landscape"
                alt="Animal shelter reality"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4">
                <p className="text-[#2D2D2D] text-sm font-semibold mb-0.5">Real statistics. Real animals.</p>
                <p className="text-[#6B6B6B] text-xs">All data sourced from ASPCA and national shelter organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key stats band */}
      <section className="bg-[#2D2D2D] py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-8">Industry Statistics — Not Company Claims</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="font-serif text-4xl text-[#C97D5D] font-semibold mb-2">{s.value}</p>
                <p className="text-white text-sm font-medium mb-2 leading-tight">{s.label}</p>
                <p className="text-white/40 text-xs leading-relaxed mb-2">{s.context}</p>
                <p className="text-white/25 text-xs italic">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress section */}
      <section className="py-14 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Progress</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] leading-tight mb-3">
              Things Are Getting Better — But Not Fast Enough
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              The national euthanasia rate has dropped significantly over the past decade. Community action, better storytelling, and increased visibility are driving this progress.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#F0EAE4]">
            <div className="flex flex-col gap-6">
              {progress.map((p, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#2D2D2D] text-sm font-medium">{p.label}</span>
                    <span className="text-[#2D2D2D] text-sm font-bold">{p.value}%</span>
                  </div>
                  <div className="h-3 bg-[#F0EAE4] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${p.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${p.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#A8A8A8] text-xs mt-6">Source: ASPCA national shelter statistics. Percentages represent approximate national averages.</p>
          </div>
        </div>
      </section>

      {/* Root causes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Root Causes</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
              Why This Keeps Happening
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              The problem isn't one thing. It's a system of interconnected causes — each one solvable with the right tools and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c, i) => (
              <div key={i} className={`rounded-2xl p-7 border ${c.color}`}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 flex items-center justify-center rounded-full ${c.iconBg}`}>
                    <i className={`${c.icon} text-lg ${c.iconColor}`}></i>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badgeColor}`}>{c.severity}</span>
                </div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-3">{c.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we address it */}
      <section className="py-16 bg-[#F7F5F2]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Response</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-4">
              How This Platform Addresses Each Problem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                problem: 'Invisible animals',
                solution: 'Every product creates a living campaign. The QR code connects anyone who sees it to real, adoptable animals at the linked shelter — right now.',
                icon: 'ri-eye-line',
              },
              {
                problem: 'Underfunded shelters',
                solution: 'A portion of every product sale goes directly to the shelter you choose. No grant applications. No overhead. Direct support.',
                icon: 'ri-funds-line',
              },
              {
                problem: 'Lack of community awareness',
                solution: 'Products worn in public become walking campaigns. Every scan is a new person discovering a shelter they didn\'t know existed.',
                icon: 'ri-group-line',
              },
              {
                problem: 'Overcrowding and capacity strain',
                solution: 'More adoptions = less overcrowding. By driving adoption inquiries directly to shelters, we help reduce the pressure that leads to euthanasia.',
                icon: 'ri-building-line',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-[#F0EAE4]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                    <i className={`${item.icon} text-base text-[#C97D5D]`}></i>
                  </div>
                  <div>
                    <p className="text-[#A8A8A8] text-xs font-semibold uppercase tracking-wide mb-1">Problem: {item.problem}</p>
                    <p className="text-[#2D2D2D] text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community activation */}
      <section className="py-16 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Community Distribution</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5">
                The Platform Grows<br />Through People, Not Ads.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Every person who creates a product becomes an ambassador. Every scan in public is a new connection. Every shelter that joins expands the network. This is how real movements grow.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'ri-user-heart-line', text: 'Users help bring the platform to shelters in their city' },
                  { icon: 'ri-map-pin-line', text: 'Shelters join from new cities, expanding the network nationwide' },
                  { icon: 'ri-share-line', text: 'Every product shared online reaches new potential adopters' },
                  { icon: 'ri-megaphone-line', text: 'Creators amplify shelter stories to audiences that care' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0">
                      <i className={`${item.icon} text-[#C97D5D] text-sm`}></i>
                    </div>
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white text-sm font-semibold mb-6">Already rescued your pet?</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Help your shelter reach more people. Create a product featuring your rescue animal and link it to the shelter that saved them. Every scan drives new visibility to animals still waiting.
              </p>
              <div className="bg-[#C97D5D]/10 border border-[#C97D5D]/20 rounded-xl p-5 mb-6">
                <p className="text-[#C97D5D] text-sm font-semibold mb-2">"Already rescued your pet? Help your shelter reach more people."</p>
                <p className="text-white/50 text-xs leading-relaxed">Your product becomes a permanent campaign for the shelter that saved your animal.</p>
              </div>
              <Link
                to="/customize"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Create a Product for Your Shelter
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-5">
            The Problem Is Real.<br />So Is Your Ability to Help.
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-8 max-w-lg mx-auto">
            You don't need to solve everything. You just need to do something. Create a product. Support a shelter. Share a story. It all adds up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customize"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Create Your Product
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              to="/for-shelters"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Partner as a Shelter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
