import { useState } from 'react';

const benefits = [
  { icon: 'ri-eye-line', text: 'Increased community visibility for your shelter' },
  { icon: 'ri-group-line', text: 'Engaged audience of animal lovers and donors' },
  { icon: 'ri-funds-line', text: 'Direct funding from merchandise sales' },
  { icon: 'ri-gift-line', text: 'No cost to participate — ever' },
  { icon: 'ri-megaphone-line', text: 'Dedicated rescue story features and campaigns' },
  { icon: 'ri-shield-check-line', text: 'Trusted platform with verified impact reporting' },
];

export default function ShelterPartnership() {
  const [formData, setFormData] = useState({ name: '', email: '', shelter: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
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
    <section id="shelter-partnership" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For Shelters &amp; Rescues</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-6">
              We&apos;re Here to<br />Help You Thrive
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8 max-w-lg">
              We know how hard shelter teams work with limited resources. That&apos;s why we built a platform that amplifies your reach, connects you with supporters, and generates real funding — without adding to your workload.
            </p>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-10 max-w-lg">
              This is a partnership, not a transaction. We succeed when you succeed. And the animals in your care are the reason we exist.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0 mt-0.5">
                    <i className={`${b.icon} text-sm text-[#C97D5D]`}></i>
                  </div>
                  <p className="text-[#2D2D2D] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#F7F5F2] rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5EDE6] mx-auto mb-6">
                  <i className="ri-check-line text-2xl text-[#C97D5D]"></i>
                </div>
                <h3 className="font-serif text-2xl text-[#2D2D2D] mb-3">Thank You!</h3>
                <p className="text-[#6B6B6B] text-base leading-relaxed">
                  We&apos;ve received your inquiry and will be in touch within 2 business days. We can&apos;t wait to work with you.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-[#2D2D2D] mb-2">Become a Partner</h3>
                <p className="text-[#6B6B6B] text-sm mb-8">Tell us about your shelter and we&apos;ll reach out to get started.</p>

                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@shelter.org"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Shelter or Rescue Name</label>
                    <input
                      type="text"
                      name="shelter"
                      required
                      value={formData.shelter}
                      onChange={handleChange}
                      placeholder="Sunridge Animal Rescue"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Tell Us About Your Shelter</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How many animals do you care for? What are your biggest challenges? What would partnership mean for you?"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors resize-none"
                    />
                    <p className="text-xs text-[#A8A8A8] mt-1 text-right">{formData.message.length}/500</p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 disabled:opacity-60 whitespace-nowrap cursor-pointer"
                  >
                    {submitting ? 'Sending...' : 'Start the Conversation'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Shelter image strip */}
        <div className="mt-20 rounded-3xl overflow-hidden relative h-64 md:h-80">
          <img
            src="https://readdy.ai/api/search-image?query=A%20warm%20and%20professional%20scene%20of%20diverse%20shelter%20volunteers%20smiling%20and%20caring%20for%20rescue%20animals%20in%20a%20bright%20clean%20modern%20animal%20shelter%2C%20natural%20light%20streaming%20through%20windows%2C%20hopeful%20and%20collaborative%20atmosphere%2C%20warm%20color%20tones%2C%20lifestyle%20photography%2C%20authentic%20and%20genuine%20mood&width=1400&height=500&seq=shelter001&orientation=landscape"
            alt="Shelter volunteers caring for animals"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug mb-4">
                &ldquo;Partnering with this platform tripled our adoption inquiries in 60 days.&rdquo;
              </p>
              <p className="text-white/70 text-sm">— Sarah M., Director, Coastal Paws Rescue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
