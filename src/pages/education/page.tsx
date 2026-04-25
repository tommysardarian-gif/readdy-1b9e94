import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const pillars = [
  {
    icon: 'ri-scissors-cut-line',
    title: 'Spay & Neuter Awareness',
    body: 'Spaying or neutering one pet can prevent thousands of unplanned births over a lifetime. It\'s the single most effective way to reduce shelter overpopulation — and it\'s widely accessible.',
    stat: '~80%',
    statLabel: 'of shelter animals could be prevented through spay/neuter programs',
    color: 'bg-[#F5EDE6]',
    iconColor: 'text-[#C97D5D]',
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Responsible Pet Ownership',
    body: 'Most animals enter shelters not because of bad owners, but because of unprepared ones. Understanding the commitment — time, cost, space, and care — before adopting saves lives on both sides.',
    stat: '6.5M',
    statLabel: 'animals enter U.S. shelters every year — many from unprepared households',
    color: 'bg-[#F0F5EE]',
    iconColor: 'text-emerald-600',
  },
  {
    icon: 'ri-group-line',
    title: 'Community Visibility',
    body: 'Shelters with strong community presence have dramatically higher adoption rates. Storytelling, social sharing, and local awareness campaigns are proven to move animals out of shelters faster.',
    stat: '3x',
    statLabel: 'higher adoption rates for shelters with active community storytelling',
    color: 'bg-[#EEF0F5]',
    iconColor: 'text-[#5D7DC9]',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Reducing Overpopulation',
    body: 'Overpopulation is a systemic problem — but it\'s solvable. Targeted education, accessible veterinary care, and community programs have already reduced euthanasia rates from 13% to 8% nationally.',
    stat: '13% → 8%',
    statLabel: 'national euthanasia rate improvement driven by education and community action',
    color: 'bg-[#F5F0EE]',
    iconColor: 'text-amber-600',
  },
];

const actions = [
  {
    icon: 'ri-heart-add-line',
    title: 'Adopt, Don\'t Shop',
    body: 'Millions of animals in shelters are waiting for homes right now. Adoption is the most direct action you can take.',
    cta: 'Find a Shelter',
    link: '/for-shelters',
  },
  {
    icon: 'ri-share-line',
    title: 'Share a Story',
    body: 'Sharing a rescue animal\'s story on social media can reach thousands of potential adopters. Visibility saves lives.',
    cta: 'Create a Product',
    link: '/customize',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Spread the Word',
    body: 'Talk to friends, family, and your community about responsible pet ownership and the animals in local shelters.',
    cta: 'Collaborate With Us',
    link: '/collaborate',
  },
  {
    icon: 'ri-funds-line',
    title: 'Support a Shelter',
    body: 'Every purchase on our platform directs funding to verified shelters. Your shopping becomes a direct act of support.',
    cta: 'Shop With Purpose',
    link: '/shop',
  },
];

const faqs = [
  {
    q: 'What is the biggest cause of shelter overpopulation?',
    a: 'Uncontrolled breeding is the primary driver. A single unspayed female dog and her offspring can produce up to 67,000 dogs in 6 years. Accessible spay/neuter programs are the most effective prevention tool.',
  },
  {
    q: 'How does storytelling actually help animals get adopted?',
    a: 'Research consistently shows that animals with named profiles, photos, and personal stories are adopted significantly faster than those without. People connect with individuals, not statistics. That\'s why every product we create links to a real story.',
  },
  {
    q: 'Is euthanasia in shelters always avoidable?',
    a: 'Not always — some animals have medical or behavioral needs that make placement impossible. But the vast majority of euthanasia in shelters is capacity-driven, not necessity-driven. Better visibility, more adopters, and more funding directly reduce this.',
  },
  {
    q: 'What can I do if I can\'t adopt right now?',
    a: 'Foster, donate, volunteer, share stories, or purchase a product that supports a shelter. Every action — no matter how small — contributes to the system that keeps animals alive.',
  },
  {
    q: 'How does this platform help with prevention, not just reaction?',
    a: 'By building community around rescue animals, we create ongoing visibility that drives adoptions before shelters reach capacity. We also partner with shelters to help them tell stories that educate the public about responsible ownership.',
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F5F2]"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Education &amp; Prevention</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-6">
                Prevention Is<br />
                <span className="text-[#C97D5D]">the Real Mission.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8 max-w-lg">
                Rescue is essential. But the goal is a world where fewer animals need rescuing. Education, community, and visibility are the tools that get us there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/customize"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Take Action Now
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link
                  to="/for-shelters"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20warm%20and%20hopeful%20scene%20of%20a%20diverse%20community%20group%20gathered%20around%20rescue%20animals%20at%20an%20outdoor%20adoption%20event%2C%20people%20of%20all%20ages%20interacting%20with%20dogs%20and%20cats%2C%20bright%20natural%20sunlight%2C%20colorful%20banners%20and%20signage%2C%20genuine%20smiles%20and%20connection%2C%20warm%20cream%20and%20amber%20tones%2C%20lifestyle%20photography%2C%20empowering%20and%20community-driven%20atmosphere&width=700&height=600&seq=edu_hero001&orientation=landscape"
                alt="Community rescue event"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key stats band */}
      <section className="bg-[#2D2D2D] py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6.5M', label: 'Animals enter U.S. shelters annually' },
              { value: '4.2M', label: 'Adopted each year — proof it works' },
              { value: '607K', label: 'Still euthanized — the gap we\'re closing' },
              { value: '8%', label: 'Euthanasia rate — down from 13%' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-serif text-3xl text-[#C97D5D] font-semibold mb-1">{s.value}</p>
                <p className="text-white/60 text-xs leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs mt-6">Source: ASPCA national shelter statistics. These are industry figures, not company claims.</p>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Four Pillars</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight">
              How We Prevent the Problem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className={`${p.color} rounded-2xl p-8`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white flex-shrink-0">
                    <i className={`${p.icon} text-lg ${p.iconColor}`}></i>
                  </div>
                  <h3 className="font-serif text-2xl text-[#2D2D2D] leading-tight">{p.title}</h3>
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">{p.body}</p>
                <div className="bg-white rounded-xl p-4">
                  <p className={`font-serif text-2xl font-semibold mb-1 ${p.iconColor}`}>{p.stat}</p>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">{p.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Take Action</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
              Every Action Counts
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              You don't have to adopt to make a difference. Here are four ways to contribute to the solution — starting today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#F0EAE4] flex flex-col">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-5">
                  <i className={`${a.icon} text-lg text-[#C97D5D]`}></i>
                </div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-3">{a.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5 flex-1">{a.body}</p>
                <Link
                  to={a.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C97D5D] hover:gap-3 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {a.cta}
                  <i className="ri-arrow-right-line text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable / shareable infographic section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="bg-[#2D2D2D] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-12">
                <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Shareable Resource</p>
                <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5">
                  How It Works —<br />Share the System
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  Download or share our simple visual guide explaining how the platform works. Perfect for shelters, creators, and supporters who want to spread the word.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    'Upload your pet → We create a product',
                    'QR code links to the rescue story',
                    'Anyone who scans can adopt or support',
                    'Shelters gain visibility and funding',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C97D5D] flex-shrink-0">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer">
                    <i className="ri-download-line"></i>
                    Download Infographic
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/60 transition-all duration-200 whitespace-nowrap cursor-pointer">
                    <i className="ri-share-line"></i>
                    Share This Page
                  </button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20clean%20minimal%20infographic%20style%20illustration%20showing%20a%20simple%20flow%20diagram%20with%20icons%20representing%20a%20pet%20photo%20upload%2C%20a%20custom%20t-shirt%20product%2C%20a%20QR%20code%20scan%2C%20and%20a%20shelter%20building%2C%20connected%20by%20arrows%2C%20warm%20cream%20and%20terracotta%20color%20palette%2C%20flat%20design%20style%2C%20clear%20and%20educational%20visual&width=600&height=600&seq=infographic001&orientation=squarish"
                  alt="How it works infographic"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Common Questions</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight">
              Understanding the Problem
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#F0EAE4]">
                <h3 className="font-serif text-lg text-[#2D2D2D] mb-3">{faq.q}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-5">
            Ready to Be Part of the Solution?
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Every product you create, every story you share, every shelter you support — it all adds up. The mission is real. The impact is measurable.
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
