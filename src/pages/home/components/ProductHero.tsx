import { Link } from 'react-router-dom';


const features = [
  { icon: 'ri-image-add-line', text: 'Upload any pet photo' },
  { icon: 'ri-palette-line', text: 'Custom illustrated design' },
  { icon: 'ri-qr-code-line', text: 'QR code links to rescue story' },
  { icon: 'ri-map-pin-line', text: 'Choose a shelter to support' },
];

export default function ProductHero() {
  return (
    <section id="product-hero" className="bg-[#F7F5F2] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Product Visual */}
          <div className="relative">
            {/* Main product image */}
            <div className="relative rounded-3xl overflow-hidden h-[480px] md:h-[560px] bg-[#EDE8E2]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20premium%20custom%20white%20t-shirt%20with%20a%20beautifully%20hand-illustrated%20golden%20retriever%20portrait%20in%20warm%20terracotta%20and%20cream%20ink%2C%20the%20shirt%20is%20displayed%20on%20a%20clean%20minimal%20cream%20background%20with%20soft%20natural%20studio%20lighting%2C%20a%20small%20QR%20code%20tag%20hangs%20from%20the%20collar%2C%20the%20design%20is%20elegant%20and%20artistic%2C%20lifestyle%20product%20photography%2C%20warm%20and%20premium%20mood&width=700&height=800&seq=producthero001&orientation=portrait"
                alt="Custom pet rescue shirt with QR code"
                className="w-full h-full object-cover object-top"
              />

              {/* QR badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-qr-code-line text-[#C97D5D] text-lg"></i>
                  <span className="text-[#2D2D2D] text-xs font-semibold">Scan to see Biscuit's story</span>
                </div>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">Links to shelter page &amp; adoption info</p>
              </div>

              {/* Shelter badge */}
              <div className="absolute top-6 right-6 bg-[#C97D5D] text-white rounded-full px-4 py-2 text-xs font-semibold">
                Supports Sunridge Rescue
              </div>
            </div>

            {/* Floating feature pills */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center w-full px-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white border border-[#F0EAE4] rounded-full px-3 py-2 text-xs text-[#2D2D2D] font-medium whitespace-nowrap">
                  <i className={`${f.icon} text-[#C97D5D] text-sm`}></i>
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Copy */}
          <div className="pt-8 lg:pt-0">
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-5">The Core Product</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-6">
              Your Pet.<br />
              Their Story.<br />
              <span className="text-[#C97D5D]">Real Impact.</span>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Every product we create is custom-built around a real animal. The QR code on each piece connects anyone who sees it to a live rescue story — driving visibility, adoptions, and shelter support.
            </p>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
              You choose the pet, the shelter, and the design. We handle the rest. The product you wear becomes a walking campaign for rescue.
            </p>

            {/* Tagline */}
            <div className="border-l-4 border-[#C97D5D] pl-5 mb-10">
              <p className="font-serif text-xl text-[#2D2D2D] italic">
                &ldquo;Everything is customizable. The mission is not.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/customize"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Customize Your Product
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
