import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const benefits = [
  {
    icon: 'ri-eye-line',
    title: 'Increased Visibility',
    body: 'Your shelter gets a dedicated profile, featured animal stories, and a presence in our community — reaching thousands of animal lovers who are ready to help.',
  },
  {
    icon: 'ri-qr-code-line',
    title: 'QR-Linked Campaigns',
    body: 'Every custom product sold in support of your shelter includes a QR code that connects supporters directly to your live adoptable animals — not a static page.',
  },
  {
    icon: 'ri-funds-line',
    title: 'Direct Funding',
    body: 'A portion of every product sale linked to your shelter comes back to you. No complicated grant applications. No overhead. Just real support.',
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Campaign Scan Insights',
    body: 'Track campaign-level QR activity — see scan volume, top-performing rescue campaigns, and which products are driving the most shelter traffic.',
  },
  {
    icon: 'ri-group-line',
    title: 'Community Engagement',
    body: 'Connect with a growing network of supporters, creators, and advocates who are actively looking for shelters to champion.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Zero Cost to Join',
    body: 'Partnership is completely free. We succeed when you succeed. There are no fees, no contracts, and no risk to your organization.',
  },
];

const howItWorks = [
  { step: '01', title: 'Apply to Partner', body: 'Fill out our short partnership form. We review every application personally and respond within 2 business days.' },
  { step: '02', title: 'We Verify Your Shelter', body: 'We manually verify your organization\'s legitimacy — checking registration, location, and mission. Every shelter is verified before going live.' },
  { step: '03', title: 'Your Profile Goes Live', body: 'We create a dedicated shelter page with your animals, stories, and mission. You review and approve everything before it\'s published.' },
  { step: '04', title: 'Products + QR Codes Activate', body: 'Custom products linked to your shelter become available. Every QR code scan drives traffic directly to your animals and adoption page.' },
];

const exampleShelters = [
  {
    name: 'Sunridge Animal Rescue',
    location: 'Austin, TX',
    animals: 47,
    type: 'Dogs & Cats',
    status: 'Verified Partner',
    story: 'Founded in 2018, Sunridge focuses on high-risk animals from overcrowded municipal shelters. Their QR-linked products have driven over 200 adoption inquiries.',
    image: 'https://readdy.ai/api/search-image?query=A%20warm%20and%20professional%20animal%20shelter%20interior%20with%20bright%20natural%20light%2C%20clean%20kennels%2C%20and%20happy%20rescue%20dogs%20visible%2C%20volunteers%20in%20matching%20shirts%20caring%20for%20animals%2C%20hopeful%20and%20organized%20atmosphere%2C%20warm%20cream%20and%20amber%20tones%2C%20lifestyle%20photography&width=600&height=400&seq=shelter_ex001&orientation=landscape',
    petImage: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20golden%20retriever%20mix%20with%20warm%20amber%20eyes%20looking%20directly%20at%20camera%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20hopeful%20and%20sweet%20expression%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=pet_ex001&orientation=squarish',
    petName: 'Biscuit',
    petAge: '2 yrs',
  },
  {
    name: 'Coastal Paws Rescue',
    location: 'San Diego, CA',
    animals: 83,
    type: 'Dogs, Cats & Rabbits',
    status: 'Verified Partner',
    story: 'Coastal Paws specializes in animals rescued from natural disasters and hoarding situations. Their storytelling approach has transformed how supporters engage with rescue.',
    image: 'https://readdy.ai/api/search-image?query=A%20bright%20modern%20animal%20rescue%20facility%20near%20the%20coast%20with%20large%20windows%2C%20clean%20and%20organized%20space%2C%20rescue%20cats%20and%20dogs%20visible%20in%20comfortable%20enclosures%2C%20warm%20natural%20light%2C%20professional%20and%20caring%20atmosphere%2C%20lifestyle%20photography&width=600&height=400&seq=shelter_ex002&orientation=landscape',
    petImage: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20tabby%20cat%20with%20bright%20green%20eyes%20and%20a%20curious%20expression%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20warm%20and%20inviting%20mood%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=pet_ex002&orientation=squarish',
    petName: 'Mochi',
    petAge: '3 yrs',
  },
  {
    name: 'Heartland Animal Haven',
    location: 'Chicago, IL',
    animals: 124,
    type: 'All Species',
    status: 'Verified Partner',
    story: 'One of the Midwest\'s largest no-kill shelters. Heartland uses our QR system to connect urban supporters with animals in rural partner facilities across Illinois.',
    image: 'https://readdy.ai/api/search-image?query=A%20large%20modern%20no-kill%20animal%20shelter%20with%20spacious%20play%20areas%2C%20volunteers%20interacting%20with%20rescue%20dogs%20and%20cats%2C%20bright%20and%20clean%20facility%2C%20warm%20natural%20light%2C%20professional%20and%20compassionate%20atmosphere%2C%20lifestyle%20photography&width=600&height=400&seq=shelter_ex003&orientation=landscape',
    petImage: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20beagle%20puppy%20with%20floppy%20ears%20and%20a%20playful%20expression%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20warm%20and%20joyful%20mood%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=pet_ex003&orientation=squarish',
    petName: 'Maple',
    petAge: '8 mo',
  },
];

export default function ForSheltersPage() {
  const [form, setForm] = useState({ name: '', email: '', shelter: '', city: '', animals: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeShelter, setActiveShelter] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      await fetch('https://readdy.ai/api/form/d7htihpaljjjkv6jggtg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">For Shelters &amp; Rescues</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-6">
                We Help Your<br />
                <span className="text-[#C97D5D]">Shelter Thrive.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6 max-w-lg">
                We're not here to replace shelters. We're here to amplify them. Our platform gives your animals more visibility, your stories more reach, and your organization more support — at zero cost to you.
              </p>
              <div className="flex items-center gap-2 mb-8">
                <i className="ri-shield-check-line text-[#C97D5D] text-lg"></i>
                <p className="text-[#6B6B6B] text-sm font-medium">Built to support shelters, not replace them.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Apply to Partner
                  <i className="ri-arrow-right-line"></i>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[500px]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20warm%20and%20professional%20scene%20of%20diverse%20shelter%20volunteers%20smiling%20and%20caring%20for%20rescue%20animals%20in%20a%20bright%20clean%20modern%20animal%20shelter%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20hopeful%20and%20collaborative%20atmosphere%2C%20warm%20cream%20and%20amber%20color%20tones%2C%20lifestyle%20photography%2C%20authentic%20and%20genuine%20mood%2C%20people%20working%20together%20with%20dogs%20and%20cats&width=700&height=700&seq=shelter002&orientation=squarish"
                alt="Shelter volunteers"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4">
                <p className="text-[#2D2D2D] text-sm font-semibold mb-1">Zero cost to join</p>
                <p className="text-[#6B6B6B] text-xs">No fees. No contracts. No risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — moved up for faster understanding */}
      <section id="how-it-works" className="py-14 bg-[#F7F5F2]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] leading-tight mb-3">
              Simple to Start. Built to Scale.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              From application to live QR-linked campaigns — here's exactly how it works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((h, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-[-50%] h-px border-t-2 border-dashed border-[#D4C4B8]"></div>
                )}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C97D5D] text-white font-bold text-lg mb-5 relative z-10">
                  {h.step}
                </div>
                <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">{h.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification System — NEW */}
      <section className="bg-[#2D2D2D] py-14">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Shelter Verification System</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5">
                Every Shelter Is Verified.<br />No Exceptions.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Every shelter is verified to ensure real impact and prevent misuse. We manually review each application before any shelter goes live on our platform.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'ri-file-list-3-line', title: 'Shelters sign up and generate their link', body: 'Each shelter submits their organization details, registration info, and mission statement.' },
                  { icon: 'ri-search-eye-line', title: 'We verify their legitimacy manually', body: 'Our team reviews every application — checking nonprofit status, physical location, and operational history.' },
                  { icon: 'ri-qr-code-line', title: 'Approved shelters connect to QR codes', body: 'Once verified, the shelter\'s profile is linked to all QR codes on products that support them.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0 mt-0.5">
                      <i className={`${item.icon} text-[#C97D5D] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C97D5D]/20">
                  <i className="ri-shield-check-line text-[#C97D5D] text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Verification Badge</p>
                  <p className="text-white/50 text-xs">Displayed on every verified shelter profile</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Nonprofit registration confirmed', done: true },
                  { label: 'Physical location verified', done: true },
                  { label: 'Mission & operations reviewed', done: true },
                  { label: 'Shelter profile approved', done: true },
                  { label: 'QR code system activated', done: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C97D5D] flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span className="text-white/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs leading-relaxed">
                  Verification typically takes 2–3 business days. We contact you directly with any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Shelter Profiles — NEW */}
      <section className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Partner Shelters</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
              What Partnership Looks Like
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
              These are the kinds of shelters we partner with — verified, mission-driven, and ready to connect with a community that cares.
            </p>
          </div>

          {/* Shelter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {exampleShelters.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveShelter(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${activeShelter === i ? 'bg-[#C97D5D] text-white' : 'bg-white border border-[#E8E0D8] text-[#6B6B6B] hover:border-[#C97D5D]'}`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Active shelter card */}
          {exampleShelters.map((shelter, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ${activeShelter === i ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-[#F0EAE4]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Shelter image */}
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img
                      src={shelter.image}
                      alt={shelter.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-5 left-5 flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
                      <i className="ri-shield-check-fill text-[#C97D5D] text-sm"></i>
                      <span className="text-[#2D2D2D] text-xs font-semibold">{shelter.status}</span>
                    </div>
                  </div>

                  {/* Shelter info */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">{shelter.name}</h3>
                        <div className="flex items-center gap-1.5 text-[#6B6B6B] text-sm">
                          <i className="ri-map-pin-line text-[#C97D5D] text-xs"></i>
                          {shelter.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#C97D5D] font-bold text-2xl">{shelter.animals}</p>
                        <p className="text-[#6B6B6B] text-xs">animals in care</p>
                      </div>
                    </div>

                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-7">{shelter.story}</p>

                    {/* QR connection demo */}
                    <div className="bg-[#F7F5F2] rounded-2xl p-5 mb-6">
                      <p className="text-[#2D2D2D] text-xs font-semibold tracking-wide uppercase mb-4">What Supporters See When They Scan</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                          <img src={shelter.petImage} alt={shelter.petName} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[#2D2D2D] font-semibold text-sm">{shelter.petName}</p>
                          <p className="text-[#6B6B6B] text-xs">{shelter.type} · {shelter.petAge}</p>
                          <p className="text-[#C97D5D] text-xs font-medium mt-0.5">{shelter.name}</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="px-3 py-1.5 rounded-full bg-[#C97D5D] text-white text-xs font-semibold whitespace-nowrap">Adopt</div>
                          <div className="px-3 py-1.5 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-xs font-medium whitespace-nowrap">Support</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-[#6B6B6B] text-xs">
                        <i className="ri-t-shirt-line text-[#C97D5D]"></i>
                        <span>{shelter.type}</span>
                      </div>
                      <div className="w-px h-4 bg-[#E8E0D8]"></div>
                      <div className="flex items-center gap-2 text-[#6B6B6B] text-xs">
                        <i className="ri-qr-code-line text-[#C97D5D]"></i>
                        <span>QR-linked products active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">What You Get</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight">
              Real Support for Real Shelters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#F7F5F2] rounded-2xl p-7 border border-[#F0EAE4]">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-5">
                  <i className={`${b.icon} text-lg text-[#C97D5D]`}></i>
                </div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-3">{b.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#2D2D2D] py-14">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <i className="ri-double-quotes-l text-[#C97D5D] text-4xl mb-6 block"></i>
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
            "Partnering with this platform tripled our adoption inquiries in 60 days. The storytelling and visibility tools are unlike anything we've had access to before."
          </p>
          <p className="text-white/60 text-sm">— Sarah M., Director, Coastal Paws Rescue, CA</p>
        </div>
      </section>

      {/* Nationwide Network + Zip Code Concept */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Nationwide Network</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
                A Verified Shelter<br />Network, Growing Daily.
              </h2>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                Every shelter that joins gets verified, receives a unique link, and connects their animals to QR codes on products sold nationwide. The network grows through community — not advertising.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: 'ri-shield-check-line', text: 'Shelters sign up and get verified manually' },
                  { icon: 'ri-link-m', text: 'Each shelter receives a unique, permanent link' },
                  { icon: 'ri-qr-code-line', text: 'QR codes on products connect directly to their live animals' },
                  { icon: 'ri-map-2-line', text: 'Supporters can find and support shelters near them' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                      <i className={`${item.icon} text-[#C97D5D] text-sm`}></i>
                    </div>
                    <span className="text-[#6B6B6B] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local shelter finder concept */}
            <div className="bg-[#F7F5F2] rounded-3xl p-8 border border-[#F0EAE4]">
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Find Local Shelters</p>
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-3">Support Shelters Near You</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                Enter your zip code to discover verified partner shelters in your area. Support local animals and help bring this platform to shelters that aren't on it yet.
              </p>
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="flex-1 px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                />
                <button className="px-5 py-3 rounded-xl bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer">
                  Find Shelters
                </button>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-[#F0EAE4]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5EDE6]">
                    <i className="ri-map-pin-line text-[#C97D5D] text-sm"></i>
                  </div>
                  <p className="text-[#2D2D2D] text-sm font-semibold">Example: Austin, TX (78701)</p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Sunridge Animal Rescue', distance: '2.3 mi', animals: 47 },
                    { name: 'Austin Pets Alive!', distance: '4.1 mi', animals: 183 },
                    { name: 'Capital Area Humane Society', distance: '6.8 mi', animals: 94 },
                  ].map((shelter, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0EAE4] last:border-0">
                      <div>
                        <p className="text-[#2D2D2D] text-xs font-semibold">{shelter.name}</p>
                        <p className="text-[#A8A8A8] text-xs">{shelter.distance} away · {shelter.animals} animals</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="ri-shield-check-fill text-[#C97D5D] text-xs"></i>
                        <span className="text-[#C97D5D] text-xs font-medium">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[#A8A8A8] text-xs mt-4 text-center">
                Don't see your shelter? <a href="#apply" className="text-[#C97D5D] font-medium cursor-pointer hover:underline">Help them apply.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Already rescued your pet? */}
      <section className="py-12 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Community Activation</p>
              <h2 className="font-serif text-3xl text-white leading-tight mb-3">
                Already rescued your pet?<br />Help your shelter reach more people.
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Create a product featuring your rescue animal and link it to the shelter that saved them. Every scan drives new visibility to animals still waiting — at zero cost to the shelter.
              </p>
            </div>
            <Link
              to="/customize"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              Create a Product for Your Shelter
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Apply Now</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-4">
              Start the Conversation
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Tell us about your shelter. We review every application personally and respond within 2 business days.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#F0EAE4]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5EDE6] mx-auto mb-6">
                  <i className="ri-check-line text-2xl text-[#C97D5D]"></i>
                </div>
                <h3 className="font-serif text-2xl text-[#2D2D2D] mb-3">Application Received!</h3>
                <p className="text-[#6B6B6B] text-base leading-relaxed">
                  We'll review your application and be in touch within 2 business days. We can't wait to work with you.
                </p>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Your Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Email Address</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@shelter.org" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Shelter or Rescue Name</label>
                  <input type="text" name="shelter" required value={form.shelter} onChange={handleChange} placeholder="Sunridge Animal Rescue" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">City &amp; State</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Austin, TX" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Animals in Care</label>
                    <select name="animals" value={form.animals} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] focus:outline-none focus:border-[#C97D5D] transition-colors cursor-pointer">
                      <option value="">Select range</option>
                      <option value="1-25">1–25 animals</option>
                      <option value="26-100">26–100 animals</option>
                      <option value="101-500">101–500 animals</option>
                      <option value="500+">500+ animals</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Tell Us About Your Shelter</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="What are your biggest challenges? What would partnership mean for your animals?" rows={4} maxLength={500} className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors resize-none" />
                  <p className="text-xs text-[#A8A8A8] mt-1 text-right">{form.message.length}/500</p>
                </div>
                <button type="submit" disabled={submitting} className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 disabled:opacity-60 whitespace-nowrap cursor-pointer">
                  {submitting ? 'Sending...' : 'Apply to Partner'}
                </button>
                <p className="text-center text-[#A8A8A8] text-xs">Built to support shelters, not replace them. Zero cost, always.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
