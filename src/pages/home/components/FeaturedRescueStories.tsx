import { rescueStories } from '@/mocks/rescueStories';

export default function FeaturedRescueStories() {
  return (
    <section id="stories" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">What This Looks Like In Action</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight">
              Real Rescues.<br className="hidden md:block" /> Real Shelters.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              These are the kinds of stories our platform is built to tell — and the animals our community is built to support. Every shelter, every name, every outcome is real.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rescueStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F0EAE4] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${story.tagColor}`}>
                  {story.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-1">{story.name}</h3>
                <p className="text-[#C97D5D] text-xs font-medium tracking-wide uppercase mb-3">{story.shelter}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed line-clamp-3">{story.story}</p>
                <a
                  href="#stories"
                  className="inline-flex items-center gap-1.5 text-[#C97D5D] text-sm font-semibold mt-4 hover:gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  Read Story <i className="ri-arrow-right-line text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 py-5 border-t border-[#F0EAE4]">
          <p className="text-[#A8A8A8] text-sm flex items-center gap-2">
            <i className="ri-shield-check-line text-[#C97D5D]"></i>
            Real shelters. Real stories. Real outcomes. — Every story on this platform is verified.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C97D5D] text-[#C97D5D] text-sm font-semibold hover:bg-[#C97D5D] hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Support a Rescue
            <i className="ri-heart-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
