import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/mocks/products';

export default function Shop() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
    }
  };

  return (
    <section id="shop" className="bg-[#F7F5F2] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Shop With Purpose</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-4">
            Products That<br className="hidden md:block" /> Do More
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed max-w-xl mx-auto">
            Every item supports a verified shelter. Every custom product carries a QR code that connects anyone who sees it to real animals available for adoption — right now.
          </p>
        </div>

        {/* Trust band */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-4 border-y border-[#E8E0D8]">
          {[
            { icon: 'ri-shield-check-line', text: 'Verified shelter partnerships' },
            { icon: 'ri-qr-code-line', text: 'QR codes link to live adoptable animals' },
            { icon: 'ri-map-pin-line', text: 'You choose which shelter to support' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[#6B6B6B] text-sm">
              <i className={`${item.icon} text-[#C97D5D] text-base`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E8E0D8] text-[#2D2D2D] hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
            aria-label="Scroll left"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>

          {/* Product Scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden border border-[#F0EAE4] hover:-translate-y-1 transition-all duration-300 snap-start"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-[#F7F5F2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#C97D5D] text-xs font-medium px-3 py-1 rounded-full">
                    {product.shelter}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#2D2D2D] mb-1">{product.name}</h3>
                  <p className="text-[#A8A8A8] text-sm mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xl text-[#2D2D2D]">{product.price}</span>
                    <Link
                      to="/shop"
                      className="flex items-center gap-1.5 text-sm font-semibold text-white bg-[#C97D5D] px-4 py-2 rounded-full hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                    >
                      Shop Now
                    </Link>
                  </div>
                  {/* Impact microcopy */}
                  <p className="text-[#A8A8A8] text-xs mt-3 flex items-center gap-1.5">
                    <i className="ri-heart-line text-[#C97D5D]"></i>
                    Supports real shelter visibility and rescue efforts
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E8E0D8] text-[#2D2D2D] hover:border-[#C97D5D] hover:text-[#C97D5D] transition-all duration-200 cursor-pointer"
            aria-label="Scroll right"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2D2D2D] text-white text-base font-semibold hover:bg-[#444] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            View Full Collection
            <i className="ri-arrow-right-line"></i>
          </Link>
          <p className="text-[#A8A8A8] text-xs mt-4">Choose your shelter. Set your size. Done.</p>
        </div>
      </div>
    </section>
  );
}
