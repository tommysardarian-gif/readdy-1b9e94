const features = [
  {
    icon: 'ri-user-heart-line',
    title: 'Pet Name & Story',
    body: 'Add your pet\'s name, breed, and a short story. We turn it into a design that\'s entirely yours.',
  },
  {
    icon: 'ri-building-line',
    title: 'Choose Your Shelter',
    body: 'Link your product to a specific shelter or rescue. Your purchase directly supports the place you care about.',
  },
  {
    icon: 'ri-qr-code-line',
    title: 'QR Code Integration',
    body: 'Every custom product can include a QR code linking to a rescue campaign, adoption page, or shelter profile.',
  },
  {
    icon: 'ri-palette-line',
    title: 'Design Customization',
    body: 'Choose from curated styles or work with our team to create something completely original.',
  },
];

export default function CustomizationSystem() {
  return (
    <section id="customize" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-[480px]">
            <img
              src="https://readdy.ai/api/search-image?query=A%20premium%20custom%20printed%20hoodie%20and%20tote%20bag%20laid%20flat%20on%20a%20clean%20cream%20surface%2C%20featuring%20a%20personalized%20pet%20name%20and%20paw%20print%20design%20in%20warm%20terracotta%20ink%2C%20alongside%20a%20small%20QR%20code%20tag%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20presentation%2C%20warm%20tones&width=800&height=900&seq=custom001&orientation=portrait"
              alt="Custom rescue merchandise"
              className="w-full h-full object-cover object-top"
            />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 bg-white rounded-xl px-5 py-3 border border-[#F0EAE4]">
              <p className="text-[#2D2D2D] text-sm font-semibold">Everything is customizable.</p>
              <p className="text-[#C97D5D] text-sm font-bold">The mission is not.</p>
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Core Differentiator</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
              Built By You.<br />Powered By Purpose.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-8 max-w-lg">
              Every product on our platform can be personalized — with your pet&apos;s name, your chosen shelter, and even a QR code that links directly to a rescue campaign. This isn&apos;t just merch. It&apos;s a story you wear.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#FAFAF8] rounded-xl p-4 border border-[#F0EAE4]">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                    <i className={`${f.icon} text-sm text-[#C97D5D]`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">{f.title}</h4>
                    <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Start Customizing
                <i className="ri-arrow-right-line"></i>
              </a>
              <a
                href="#shelter-partnership"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-sm font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Link a Shelter
              </a>
            </div>

            <p className="text-[#A8A8A8] text-xs mt-5 flex items-center gap-2">
              <i className="ri-shield-check-line text-[#C97D5D]"></i>
              Every purchase contributes to visibility and rescue impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
