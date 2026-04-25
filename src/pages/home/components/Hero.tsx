import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=A%20heartwarming%20lifestyle%20scene%20of%20a%20young%20woman%20holding%20a%20custom%20printed%20t-shirt%20featuring%20her%20golden%20retriever%20dog%20portrait%2C%20soft%20natural%20sunlight%20in%20a%20bright%20minimal%20home%20studio%2C%20warm%20cream%20and%20amber%20tones%2C%20the%20shirt%20has%20a%20QR%20code%20tag%20visible%2C%20premium%20lifestyle%20product%20photography%2C%20shallow%20depth%20of%20field%2C%20hopeful%20and%20tender%20mood&width=1920&height=1080&seq=hero002&orientation=landscape"
          alt="Custom pet product with rescue impact"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-0">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[#F5C9A8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Custom Products &bull; Real Impact &bull; Rescue Stories
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.06] mb-6">
            Turn Your Pet Into<br />
            <span className="text-[#F5C9A8]">a Story That Saves Others.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Upload your pet. We create a custom product with a QR code that connects directly to real animals currently available for adoption. Every scan is a live connection to a shelter in need.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/customize"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Create Your Product
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              to="/for-shelters"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-base font-semibold hover:bg-white hover:text-[#2D2D2D] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              For Shelters
              <i className="ri-building-line"></i>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <p className="text-white/50 text-xs tracking-widest uppercase flex items-center gap-2">
              <i className="ri-shield-check-line text-[#C97D5D]"></i>
              Real shelters. Verified. Zero cost to join.
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              QR links to live adoptable animals
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-white/50 text-xs tracking-widest uppercase">Scroll</p>
        <i className="ri-arrow-down-line text-white/50 text-lg"></i>
      </div>
    </section>
  );
}
