import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const collaboratorTypes = [
  {
    id: 'creators',
    icon: 'ri-camera-line',
    title: 'Creators & Influencers',
    description: 'You have an audience that trusts you. Use that trust to move people toward something that matters.',
    benefits: [
      'Launch your own rescue-linked product line',
      'Your audience drives real adoption visibility',
      'Co-branded storytelling content',
      'QR-linked campaigns tied to real shelters',
      'Impact reporting you can share with your community',
    ],
    cta: 'Apply as a Creator',
  },
  {
    id: 'photographers',
    icon: 'ri-image-line',
    title: 'Photographers & Artists',
    description: 'Your eye for beauty can give animals a second chance. Help us tell stories that move people to act.',
    benefits: [
      'Contribute to shelter storytelling campaigns',
      'Your work featured across our platform',
      'Collaborate on custom product artwork',
      'Portfolio exposure to a mission-aligned audience',
      'Paid collaboration opportunities',
    ],
    cta: 'Apply as an Artist',
  },
  {
    id: 'storytellers',
    icon: 'ri-quill-pen-line',
    title: 'Writers & Storytellers',
    description: 'Words save lives. Help us write the stories that turn a scroll into an adoption.',
    benefits: [
      'Write featured rescue stories for our platform',
      'Bylined content reaching thousands of animal lovers',
      'Collaborate with shelters directly',
      'Paid writing opportunities',
      'Build a portfolio with real-world impact',
    ],
    cta: 'Apply as a Storyteller',
  },
  {
    id: 'partners',
    icon: 'ri-links-line',
    title: 'Mission-Aligned Partners',
    description: 'Brands, organizations, and communities that share our values. Let\'s build something together.',
    benefits: [
      'Co-branded campaigns and collections',
      'Shared audience and community reach',
      'Joint storytelling and visibility initiatives',
      'Custom partnership structures',
      'Long-term ecosystem participation',
    ],
    cta: 'Explore Partnership',
  },
];

const impactStats = [
  { value: '4.2M', label: 'Animals adopted annually in the U.S.', context: 'Industry data' },
  { value: '38%', label: 'Reduction in euthanasia rate over 10 years', context: 'Industry data' },
  { value: '∞', label: 'Stories waiting to be told', context: 'That\'s where you come in' },
];

export default function CollaboratePage() {
  const [activeType, setActiveType] = useState('creators');
  const [form, setForm] = useState({ name: '', email: '', type: 'creators', platform: '', audience: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activeData = collaboratorTypes.find((c) => c.id === activeType)!;

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
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F5F2]"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Collaborate With Us</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-6">
                Have a Following?<br />
                <span className="text-[#C97D5D]">Build Something<br />That Matters.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6 max-w-lg">
                Use your audience to help save lives. Launch mission-aligned products. Help tell stories that move people to act. This is not about promotion — it's about purpose.
              </p>
              <div className="border-l-4 border-[#C97D5D] pl-5 mb-8">
                <p className="font-serif text-xl text-[#2D2D2D] italic">
                  &ldquo;Bring your audience into the mission.&rdquo;
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  Collaborate With Us
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
                src="https://readdy.ai/api/search-image?query=A%20creative%20and%20warm%20scene%20of%20a%20young%20woman%20content%20creator%20filming%20a%20rescue%20dog%20with%20a%20professional%20camera%20in%20a%20bright%20modern%20studio%2C%20warm%20natural%20light%2C%20cream%20and%20terracotta%20color%20tones%2C%20authentic%20and%20genuine%20mood%2C%20lifestyle%20photography%2C%20purposeful%20and%20inspiring%20atmosphere%2C%20minimal%20background&width=700&height=700&seq=collab001&orientation=squarish"
                alt="Creator collaborating for rescue"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4">
                <p className="text-[#2D2D2D] text-sm font-semibold mb-1">Built to support shelters, not replace them.</p>
                <p className="text-[#6B6B6B] text-xs">Real shelters. Real stories. Real outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Context */}
      <section className="bg-[#2D2D2D] py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-center text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">The Problem We're Solving Together</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-5xl text-[#C97D5D] mb-2">{stat.value}</p>
                <p className="text-white text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs">{stat.context}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-8 max-w-xl mx-auto">
            Our mission is to help drive these numbers toward zero — through community, visibility, and action. Your voice is part of that.
          </p>
        </div>
      </section>

      {/* Collaborator Types */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Who We Work With</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight">
              Find Your Role in the Mission
            </h2>
          </div>

          {/* Type Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {collaboratorTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeType === type.id
                    ? 'bg-[#C97D5D] text-white'
                    : 'bg-[#F7F5F2] text-[#6B6B6B] hover:bg-[#F0EAE4]'
                }`}
              >
                <i className={type.icon}></i>
                {type.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Type Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#F7F5F2] rounded-3xl p-8 md:p-12">
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-6">
                <i className={`${activeData.icon} text-2xl text-[#C97D5D]`}></i>
              </div>
              <h3 className="font-serif text-3xl text-[#2D2D2D] mb-4">{activeData.title}</h3>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">{activeData.description}</p>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                {activeData.cta}
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
            <div>
              <p className="text-[#2D2D2D] text-sm font-semibold tracking-wide uppercase mb-4">What You Get</p>
              <div className="flex flex-col gap-3">
                {activeData.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-[#C97D5D] text-xs"></i>
                    </div>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Process</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight">
              Simple to Start. Built to Scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply', body: 'Tell us about yourself, your audience, and how you want to collaborate. We review every application personally.' },
              { step: '02', title: 'We Connect', body: 'We match you with shelters and campaigns that align with your audience and values.' },
              { step: '03', title: 'Create Together', body: 'Launch products, campaigns, or content that drives real visibility for rescue animals.' },
              { step: '04', title: 'Track Impact', body: 'See exactly how your collaboration is driving adoptions, visibility, and shelter support.' },
            ].map((h, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-50%] h-px border-t-2 border-dashed border-[#D4C4B8]"></div>
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

      {/* Social Ecosystem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Community & Channels</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] leading-tight mb-4">
              Follow the Mission. Share the Stories.
            </h2>
            <p className="text-[#6B6B6B] text-base max-w-lg mx-auto">
              Our social channels are where rescue stories come alive. Follow real animals, see transformations, and share the mission with your audience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'ri-instagram-line', platform: 'Instagram', handle: '@pawsandpurpose', desc: 'Daily rescue stories & featured pets', href: 'https://www.instagram.com' },
              { icon: 'ri-tiktok-line', platform: 'TikTok', handle: '@pawsandpurpose', desc: 'Transformations & behind the scenes', href: 'https://www.tiktok.com' },
              { icon: 'ri-youtube-line', platform: 'YouTube', handle: 'Paws & Purpose', desc: 'Full rescue stories & shelter visits', href: 'https://www.youtube.com' },
              { icon: 'ri-pinterest-line', platform: 'Pinterest', handle: 'Paws & Purpose', desc: 'Product inspiration & rescue art', href: 'https://www.pinterest.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#F0EAE4] hover:border-[#C97D5D] hover:bg-[#FDFAF8] transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-4 group-hover:bg-[#C97D5D] transition-colors duration-200">
                  <i className={`${social.icon} text-xl text-[#C97D5D] group-hover:text-white transition-colors duration-200`}></i>
                </div>
                <p className="text-[#2D2D2D] text-sm font-semibold mb-1">{social.platform}</p>
                <p className="text-[#C97D5D] text-xs mb-2">{social.handle}</p>
                <p className="text-[#A8A8A8] text-xs leading-relaxed">{social.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-20 bg-[#F7F5F2]">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Apply Now</p>
            <h2 className="font-serif text-4xl text-[#2D2D2D] leading-tight mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Tell us about yourself and how you want to collaborate. We review every application personally.
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
                  We'll review your application and be in touch within 3 business days. We're excited to build something meaningful together.
                </p>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Your Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Alex Johnson" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Email Address</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="alex@example.com" className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">How Do You Want to Collaborate?</label>
                  <select name="type" value={form.type} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] focus:outline-none focus:border-[#C97D5D] transition-colors cursor-pointer">
                    <option value="creators">Creator / Influencer</option>
                    <option value="photographers">Photographer / Artist</option>
                    <option value="storytellers">Writer / Storyteller</option>
                    <option value="partners">Mission-Aligned Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Platform or Website</label>
                  <input type="text" name="platform" value={form.platform} onChange={handleChange} placeholder="Instagram, TikTok, YouTube, website URL..." className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Audience Size (approximate)</label>
                  <select name="audience" value={form.audience} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] focus:outline-none focus:border-[#C97D5D] transition-colors cursor-pointer">
                    <option value="">Select range</option>
                    <option value="under-1k">Under 1,000</option>
                    <option value="1k-10k">1,000 – 10,000</option>
                    <option value="10k-100k">10,000 – 100,000</option>
                    <option value="100k-1m">100,000 – 1M</option>
                    <option value="1m+">1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Tell Us About Your Vision</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="How do you want to collaborate? What does your audience care about? What would you build?" rows={4} maxLength={500} className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors resize-none" />
                  <p className="text-xs text-[#A8A8A8] mt-1 text-right">{form.message.length}/500</p>
                </div>
                <button type="submit" disabled={submitting} className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 disabled:opacity-60 whitespace-nowrap cursor-pointer">
                  {submitting ? 'Sending...' : 'Build Something That Matters'}
                </button>
                <p className="text-center text-[#A8A8A8] text-xs">Every action contributes to visibility and rescue outcomes.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
