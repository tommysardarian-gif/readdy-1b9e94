import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'done'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('submitting');
    try {
      const body = new URLSearchParams({ email });
      await fetch('https://readdy.ai/api/form/d7htii1aljjjkv6jggu0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubStatus('done');
    } catch {
      setSubStatus('done');
    }
  };

  return (
    <footer className="bg-[#2D2D2D] text-white">
      {/* Mission Summary Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                <i className="ri-heart-line text-[#C97D5D] text-base"></i>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Real Shelters. Real Stories.</p>
                <p className="text-white/50 text-xs leading-relaxed">Every shelter on this platform is verified. Every story is real. No fabricated impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                <i className="ri-funds-line text-[#C97D5D] text-base"></i>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Transparent Fund Allocation</p>
                <p className="text-white/50 text-xs leading-relaxed">We publish exactly how every dollar is used. No black boxes, no vague promises.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                <i className="ri-shield-check-line text-[#C97D5D] text-base"></i>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Built to Support, Not Replace</p>
                <p className="text-white/50 text-xs leading-relaxed">We are a visibility and funding layer. Shelters remain in full control of their animals and operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="https://static.readdy.ai/image/246ee2c8fdb1ecf75adf0759f2f27fa8/5e9296862173d4dea7a594342c4ff5b2.png"
              alt="Brand Logo"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              A movement connecting animal lovers, rescue shelters, and meaningful merchandise. Every purchase saves a life. Every story matters. Every animal deserves a home.
            </p>

            {/* Newsletter */}
            <p className="text-white text-sm font-semibold mb-3">Join the Movement</p>
            {subStatus === 'done' ? (
              <p className="text-[#C97D5D] text-sm font-medium">You&apos;re in! Welcome to the community.</p>
            ) : (
              <form
                data-readdy-form
                onSubmit={handleSubscribe}
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#C97D5D] transition-colors"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'submitting'}
                  className="px-5 py-3 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-60"
                >
                  {subStatus === 'submitting' ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-semibold tracking-wide uppercase mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shop" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Shop</Link></li>
              <li><Link to="/customize" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Customize Your Product</Link></li>
              <li><Link to="/for-shelters" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">For Shelters</Link></li>
              <li><Link to="/collaborate" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Collaborate With Us</Link></li>
              <li><Link to="/education" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Education &amp; Prevention</Link></li>
              <li><Link to="/reality" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">The Reality</Link></li>
              <li><Link to="/share" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Share the Mission</Link></li>
              <li><Link to="/account" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">Your Impact Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-white text-sm font-semibold tracking-wide uppercase mb-5">Connect</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li>
                <a href="mailto:hello@pawsandpurpose.org" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">
                  hello@pawsandpurpose.org
                </a>
              </li>
              <li>
                <Link to="/for-shelters" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">
                  Apply as a Shelter Partner
                </Link>
              </li>
              <li>
                <Link to="/collaborate" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">
                  Creator Collaboration
                </Link>
              </li>
              <li>
                <a href="mailto:press@pawsandpurpose.org" className="text-white/60 text-sm hover:text-[#C97D5D] transition-colors cursor-pointer">
                  Press &amp; Media
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <p className="text-white text-sm font-semibold tracking-wide uppercase mb-4">Follow the Mission</p>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-base"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
                aria-label="TikTok"
              >
                <i className="ri-tiktok-line text-base"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-base"></i>
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
                aria-label="Pinterest"
              >
                <i className="ri-pinterest-line text-base"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-base"></i>
              </a>
            </div>
            <p className="text-white/30 text-xs leading-relaxed">Storytelling. Campaigns. Real rescue moments.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Paws &amp; Purpose. All rights reserved.
          </p>
          <p className="text-white/25 text-xs hidden md:block italic">
            Every action contributes to visibility and rescue outcomes.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors cursor-pointer">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
