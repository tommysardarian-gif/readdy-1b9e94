import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const infographics = [
  {
    title: 'How the QR System Works',
    description: 'The full flow: upload pet \u2192 custom product \u2192 QR scan \u2192 live shelter animals. Ready to share anywhere.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20minimal%20infographic%20style%20illustration%20showing%20a%20simple%20flow%20diagram%20with%20icons%20representing%20a%20pet%20photo%20upload%2C%20a%20custom%20t-shirt%20product%2C%20a%20QR%20code%20scan%2C%20and%20a%20shelter%20building%20with%20animals%2C%20connected%20by%20arrows%2C%20warm%20cream%20and%20terracotta%20color%20palette%2C%20flat%20design%20style%2C%20clear%20and%20educational%20visual%2C%20professional%20and%20modern&width=600&height=400&seq=share_infographic001&orientation=landscape',
    tags: ['Platform', 'How It Works'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
  {
    title: 'Shelter Overcrowding \u2014 The Numbers',
    description: 'Key statistics about shelter capacity, intake rates, and the gap between adoptions and euthanasia.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20data%20visualization%20infographic%20with%20warm%20terracotta%20and%20cream%20colors%20showing%20animal%20shelter%20statistics%20with%20simple%20icons%2C%20bar%20charts%2C%20and%20key%20numbers%2C%20minimal%20and%20professional%20design%2C%20educational%20and%20clear%20layout%2C%20flat%20illustration%20style&width=600&height=400&seq=share_infographic002&orientation=landscape',
    tags: ['Statistics', 'Awareness'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
  {
    title: 'Why Spay & Neuter Matters',
    description: 'Visual breakdown of how one unspayed animal can lead to thousands of unplanned births.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20educational%20infographic%20showing%20the%20exponential%20growth%20of%20unspayed%20pet%20populations%20with%20simple%20icons%20and%20warm%20terracotta%20cream%20color%20scheme%2C%20flat%20design%2C%20clear%20and%20informative%20layout%2C%20prevention%20focused%20messaging%2C%20professional%20and%20approachable%20style&width=600&height=400&seq=share_infographic003&orientation=landscape',
    tags: ['Prevention', 'Education'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
  {
    title: 'What Happens When You Scan',
    description: 'Step-by-step visual of the QR scan experience \u2014 from product to live shelter animals.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20modern%20infographic%20showing%20a%20smartphone%20scanning%20a%20QR%20code%20on%20a%20t-shirt%20and%20displaying%20a%20shelter%20animal%20adoption%20page%2C%20step%20by%20step%20visual%20flow%2C%20warm%20terracotta%20and%20cream%20colors%2C%20flat%20design%20style%2C%20clear%20and%20engaging%20layout%2C%20mobile%20and%20product%20focused&width=600&height=400&seq=share_infographic004&orientation=landscape',
    tags: ['QR System', 'Platform'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
  {
    title: 'The Adoption Gap',
    description: 'Visual showing the difference between animals entering shelters and those being adopted each year.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20infographic%20showing%20a%20comparison%20chart%20between%20shelter%20intake%20numbers%20and%20adoption%20numbers%20with%20a%20highlighted%20gap%2C%20warm%20terracotta%20and%20cream%20color%20palette%2C%20simple%20icons%20of%20animals%2C%20flat%20design%2C%20educational%20and%20solution%20oriented%20tone%2C%20professional%20layout&width=600&height=400&seq=share_infographic005&orientation=landscape',
    tags: ['Statistics', 'Awareness'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
  {
    title: 'How to Help Without Adopting',
    description: 'Four clear actions anyone can take to support rescue animals \u2014 even if they can\'t adopt.',
    image: 'https://readdy.ai/api/search-image?query=A%20clean%20four%20panel%20infographic%20showing%20different%20ways%20to%20help%20rescue%20animals%20including%20sharing%20stories%2C%20buying%20products%2C%20volunteering%2C%20and%20donating%2C%20warm%20terracotta%20and%20cream%20colors%2C%20flat%20design%20icons%2C%20clear%20and%20actionable%20layout%2C%20empowering%20and%20positive%20tone&width=600&height=400&seq=share_infographic006&orientation=landscape',
    tags: ['Action', 'Community'],
    format: 'PNG \u00b7 1920\u00d71080',
  },
];

const socialPlatforms = [
  {
    icon: 'ri-instagram-line',
    name: 'Instagram',
    handle: '@pawsandpurpose',
    purpose: 'Real rescue stories. Featured pets. Behind-the-scenes shelter moments.',
    link: 'https://www.instagram.com',
    color: 'from-pink-500 to-orange-400',
  },
  {
    icon: 'ri-tiktok-line',
    name: 'TikTok',
    handle: '@pawsandpurpose',
    purpose: 'Transformation videos. QR scan moments. Shelter spotlights.',
    link: 'https://www.tiktok.com',
    color: 'from-[#2D2D2D] to-[#444]',
  },
  {
    icon: 'ri-youtube-line',
    name: 'YouTube',
    handle: 'Paws & Purpose',
    purpose: 'Full rescue stories. Shelter tours. Community campaigns.',
    link: 'https://www.youtube.com',
    color: 'from-red-600 to-red-500',
  },
  {
    icon: 'ri-linkedin-line',
    name: 'LinkedIn',
    handle: 'Paws & Purpose',
    purpose: 'Platform updates. Shelter partnerships. Impact reports.',
    link: 'https://www.linkedin.com',
    color: 'from-[#0A66C2] to-[#1a7fd4]',
  },
];

const shareMessages = [
  {
    platform: 'Instagram',
    icon: 'ri-instagram-line',
    message: 'I just created a custom product featuring my rescue dog \u2014 and the QR code connects anyone who sees it to real adoptable animals at the shelter that saved him. Scan any product. See real animals. Help immediately. @pawsandpurpose',
  },
  {
    platform: 'TikTok',
    icon: 'ri-tiktok-line',
    message: 'POV: Someone scans the QR code on your shirt and instantly sees 47 animals available for adoption right now. This is the platform. This is the mission. Every share helps more animals get seen. @pawsandpurpose',
  },
  {
    platform: 'General',
    icon: 'ri-share-line',
    message: '920,000 animals are euthanized in U.S. shelters every year \u2014 mostly due to overcrowding. This platform turns everyday products into live connections to real animals that need help. Scan \u2192 See real animals \u2192 Help immediately. Check it out.',
  },
];

export default function SharePage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Platform', 'Statistics', 'Prevention', 'Action'];

  const filteredInfographics = activeFilter === 'All'
    ? infographics
    : infographics.filter((inf) => inf.tags.includes(activeFilter));

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-[#F7F5F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Share the Mission</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-6">
                Help This Reach<br />
                <span className="text-[#C97D5D]">More Animals.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4 max-w-lg">
                Every share helps more animals get seen. Download visuals, copy share messages, and spread the word across your channels.
              </p>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-8 max-w-lg">
                The mission grows through community \u2014 not ads. You are the distribution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#infographics"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Get Shareable Visuals
                  <i className="ri-download-line"></i>
                </a>
                <a
                  href="#social"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Follow Our Channels
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[380px]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20warm%20lifestyle%20scene%20of%20a%20young%20woman%20sharing%20content%20on%20her%20phone%20about%20rescue%20animals%2C%20sitting%20in%20a%20bright%20modern%20cafe%2C%20smiling%20at%20her%20screen%2C%20warm%20natural%20light%2C%20authentic%20and%20genuine%20moment%2C%20cream%20and%20amber%20tones%2C%20shallow%20depth%20of%20field%2C%20community%20and%20connection%20focused&width=700&height=600&seq=share_hero001&orientation=landscape"
                alt="Sharing the mission"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why sharing matters */}
      <section className="py-12 bg-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '3x', label: 'Higher adoption rates for shelters with active social presence', icon: 'ri-bar-chart-line' },
              { value: '1 post', label: 'Can reach thousands of potential adopters in your network', icon: 'ri-share-forward-line' },
              { value: '0 cost', label: 'Sharing is free. The impact is real.', icon: 'ri-heart-line' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C97D5D]/20 mb-4">
                  <i className={`${s.icon} text-[#C97D5D] text-xl`}></i>
                </div>
                <p className="font-serif text-3xl text-[#C97D5D] font-semibold mb-2">{s.value}</p>
                <p className="text-white/60 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bring to Your Shelter */}
      <section className="py-14 bg-[#F5EDE6]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Community Activation</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] leading-tight mb-4">
                Already adopted your pet?<br />Help your shelter reach more people.
              </h2>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                You can introduce this platform to the shelter that saved your animal. Shelters can join, get verified, and start connecting supporters to their live animals \u2014 at zero cost.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Share this platform with your shelter',
                  'Shelters apply and get verified in 2\u20133 days',
                  'Their animals connect to QR codes on products',
                  'Every scan drives new visibility to animals still waiting',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C97D5D] flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span className="text-[#6B6B6B] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/for-shelters"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Bring This to Your Shelter
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[320px]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20warm%20lifestyle%20scene%20of%20a%20smiling%20person%20holding%20their%20rescue%20dog%20outside%20an%20animal%20shelter%20building%2C%20golden%20afternoon%20light%2C%20authentic%20and%20joyful%20moment%2C%20cream%20and%20amber%20tones%2C%20shallow%20depth%20of%20field%2C%20community%20and%20connection%20focused%2C%20hopeful%20and%20warm%20atmosphere&width=600&height=500&seq=shelter_bring001&orientation=landscape"
                alt="Bring this to your shelter"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section id="infographics" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Free Resources</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
              Download &amp; Share
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              Free visuals for shelters, creators, and supporters. Use them on social media, in presentations, or anywhere you want to spread awareness.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${activeFilter === f ? 'bg-[#C97D5D] text-white' : 'bg-[#F7F5F2] border border-[#E8E0D8] text-[#6B6B6B] hover:border-[#C97D5D]'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfographics.map((inf, i) => (
              <div key={i} className="bg-[#F7F5F2] rounded-2xl overflow-hidden border border-[#F0EAE4] group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={inf.image}
                    alt={inf.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#2D2D2D] text-sm font-semibold whitespace-nowrap cursor-pointer">
                      <i className="ri-download-line"></i>
                      Download
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {inf.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs px-2.5 py-1 rounded-full bg-[#F5EDE6] text-[#C97D5D] font-medium">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">{inf.title}</h3>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed mb-4">{inf.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A8A8A8] text-xs">{inf.format}</span>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-[#C97D5D] hover:gap-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap">
                      <i className="ri-download-line text-xs"></i>
                      Download Free
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-copy share messages */}
      <section className="py-16 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">One-Click Sharing</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-4">
              Ready-to-Share Messages
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              Copy and paste these to your social channels. Customize them however you like. Every share helps more animals get seen.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {shareMessages.map((msg, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#F0EAE4]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5EDE6]">
                      <i className={`${msg.icon} text-[#C97D5D] text-sm`}></i>
                    </div>
                    <span className="text-[#2D2D2D] text-sm font-semibold">{msg.platform}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(msg.message, i)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-xs font-medium hover:border-[#C97D5D] transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    {copiedIndex === i ? (
                      <><i className="ri-check-line text-emerald-500"></i> Copied!</>
                    ) : (
                      <><i className="ri-clipboard-line"></i> Copy</>
                    )}
                  </button>
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social channels */}
      <section id="social" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Follow the Mission</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-4">
              Storytelling. Campaigns.<br />Real Rescue Moments.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              Each platform serves a different purpose. Follow the ones that fit how you engage with the world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialPlatforms.map((platform, i) => (
              <a
                key={i}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group bg-[#F7F5F2] rounded-2xl p-6 border border-[#F0EAE4] hover:border-[#C97D5D] transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${platform.color} mb-5`}>
                  <i className={`${platform.icon} text-white text-xl`}></i>
                </div>
                <p className="text-[#2D2D2D] font-semibold text-base mb-1">{platform.name}</p>
                <p className="text-[#C97D5D] text-xs font-medium mb-3">{platform.handle}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed flex-1">{platform.purpose}</p>
                <div className="flex items-center gap-1.5 mt-4 text-[#C97D5D] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Follow
                  <i className="ri-arrow-right-line text-xs"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#F7F5F2]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-5">
            The Mission Grows<br />Through You.
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Every share reaches someone who might adopt. Every download helps a shelter tell their story. Every product worn in public is a campaign that never stops running.
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
              to="/collaborate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
