import { useState } from 'react';
import { Link } from 'react-router-dom';

const liveAnimals = [
  {
    name: 'Biscuit',
    breed: 'Golden Retriever Mix',
    age: '2 yrs',
    status: 'Available Now',
    image: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20golden%20retriever%20mix%20with%20warm%20amber%20eyes%20looking%20directly%20at%20camera%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20hopeful%20and%20sweet%20expression%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=live_pet001&orientation=squarish',
  },
  {
    name: 'Mochi',
    breed: 'Tabby Cat',
    age: '3 yrs',
    status: 'Available Now',
    image: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20tabby%20cat%20with%20bright%20green%20eyes%20and%20a%20curious%20expression%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20warm%20and%20inviting%20mood%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=live_pet002&orientation=squarish',
  },
  {
    name: 'Maple',
    breed: 'Beagle',
    age: '8 mo',
    status: 'Available Now',
    image: 'https://readdy.ai/api/search-image?query=An%20adorable%20rescue%20beagle%20puppy%20with%20floppy%20ears%20and%20a%20playful%20expression%2C%20clean%20shelter%20background%2C%20soft%20natural%20light%2C%20warm%20and%20joyful%20mood%2C%20high%20quality%20pet%20portrait%20photography&width=200&height=200&seq=live_pet003&orientation=squarish',
  },
];

export default function HowItWorks() {
  const [scanActive, setScanActive] = useState(false);
  const [activeAnimal, setActiveAnimal] = useState(0);

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
            Three Steps.<br className="hidden md:block" /> One Powerful System.
          </h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto">
            Upload a pet. Get a custom product. The QR code on every piece connects anyone who sees it directly to real animals available for adoption — right now.
          </p>
        </div>

        {/* Steps 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-14">
          {/* Step 1 */}
          <div className="relative flex flex-col group">
            <div className="hidden lg:flex absolute top-[120px] -right-4 z-10 w-8 h-8 items-center justify-center">
              <i className="ri-arrow-right-line text-[#C97D5D] text-xl"></i>
            </div>
            <div className="relative rounded-2xl overflow-hidden mb-6 h-52 bg-[#F7F5F2]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20clean%20minimal%20smartphone%20screen%20showing%20a%20pet%20photo%20upload%20interface%20with%20a%20golden%20retriever%20photo%20being%20selected%2C%20soft%20cream%20background%2C%20flat%20lay%20product%20photography%2C%20warm%20and%20modern%20UI%20design%2C%20simple%20and%20clear&width=400&height=400&seq=step001&orientation=squarish"
                alt="Upload your pet"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#C97D5D] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Step 1
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0 mt-0.5">
                <i className="ri-upload-cloud-2-line text-base text-[#C97D5D]"></i>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">Upload Your Pet</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">Share a photo of your pet — or any rescue animal you want to champion. Add their name and choose a verified shelter to support.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col group">
            <div className="hidden lg:flex absolute top-[120px] -right-4 z-10 w-8 h-8 items-center justify-center">
              <i className="ri-arrow-right-line text-[#C97D5D] text-xl"></i>
            </div>
            <div className="relative rounded-2xl overflow-hidden mb-6 h-52 bg-[#F7F5F2]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20premium%20white%20custom%20t-shirt%20with%20a%20beautifully%20illustrated%20golden%20retriever%20portrait%20printed%20on%20it%20and%20a%20small%20QR%20code%20tag%20attached%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood&width=400&height=400&seq=step002&orientation=squarish"
                alt="We create your product"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#C97D5D] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Step 2
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0 mt-0.5">
                <i className="ri-t-shirt-line text-base text-[#C97D5D]"></i>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">We Create Your Product</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">We turn your pet into a beautifully designed custom shirt, hoodie, or tote — with a unique QR code embedded in every piece.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col group">
            <div className="relative rounded-2xl overflow-hidden mb-6 h-52 bg-[#2D2D2D]">
              <img
                src="https://readdy.ai/api/search-image?query=A%20vivid%20candid%20street%20scene%20showing%20a%20young%20woman%20in%20a%20bright%20cafe%20wearing%20a%20custom%20illustrated%20dog%20portrait%20t-shirt%2C%20a%20curious%20stranger%20nearby%20holds%20up%20their%20phone%20to%20scan%20the%20visible%20QR%20code%20on%20the%20shirt%2C%20the%20phone%20screen%20glows%20with%20a%20shelter%20adoption%20page%20showing%20rescue%20animals%2C%20warm%20golden%20afternoon%20light%2C%20authentic%20human%20connection%2C%20shallow%20depth%20of%20field%2C%20terracotta%20and%20cream%20tones%2C%20genuine%20moment%20of%20discovery&width=400&height=400&seq=step003d&orientation=squarish"
                alt="Someone scans the QR code and sees real adoptable animals"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-[#C97D5D] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Step 3
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[#2D2D2D] text-xs font-semibold">Live animals</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0 mt-0.5">
                <i className="ri-qr-code-line text-base text-[#C97D5D]"></i>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">Scan. See Real Animals. Act.</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">Someone sees your product in public. They scan the QR code. Their phone instantly shows adoptable animals at the linked shelter — available right now.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 Expanded — The Real Interaction Moment */}
        <div className="bg-[#F7F5F2] rounded-3xl overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Scene */}
            <div className="relative h-[420px] lg:h-auto overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=A%20warm%20candid%20lifestyle%20scene%20of%20a%20young%20woman%20in%20a%20coffee%20shop%20wearing%20a%20custom%20illustrated%20dog%20portrait%20t-shirt%20with%20a%20visible%20QR%20code%2C%20another%20person%20nearby%20is%20pointing%20their%20phone%20camera%20at%20the%20QR%20code%20on%20the%20shirt%20with%20curiosity%20and%20a%20smile%2C%20the%20phone%20screen%20clearly%20shows%20a%20shelter%20page%20with%20rescue%20dogs%20available%20for%20adoption%2C%20soft%20warm%20cafe%20lighting%2C%20authentic%20human%20moment%2C%20shallow%20depth%20of%20field%2C%20genuine%20connection%2C%20terracotta%20and%20cream%20tones&width=700&height=600&seq=step3scene002&orientation=landscape"
                alt="Person scans QR code on shirt and sees adoptable animals"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F7F5F2]/80 hidden lg:block"></div>
              {/* Scene label */}
              <div className="absolute bottom-5 left-5 bg-white/90 rounded-xl px-4 py-3">
                <p className="text-[#2D2D2D] text-xs font-semibold">A stranger scans.</p>
                <p className="text-[#C97D5D] text-xs font-medium">They see real animals. They can act immediately.</p>
              </div>
            </div>

            {/* Right — What happens when you scan */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">This Is Where Awareness Becomes Action</p>
              <h3 className="font-serif text-3xl text-[#2D2D2D] leading-tight mb-3">
                One Scan.<br />Real Animals. Right Now.
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-2">
                Scan any product and instantly connect to real animals that need help right now. Every scan is a direct connection to a shelter — not a static page, not a story. Live animals, available today.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-600 text-xs font-semibold">Live shelter inventory — updated in real time</span>
              </div>

              {/* Phone mockup */}
              <div
                className="relative cursor-pointer"
                onClick={() => setScanActive(!scanActive)}
              >
                <div className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${scanActive ? 'border-[#C97D5D]' : 'border-[#E8E0D8]'}`}>
                  {/* Phone top bar */}
                  <div className="bg-[#2D2D2D] px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-full px-3 py-0.5 text-center">
                      <span className="text-white/60 text-xs">sunridgerescue.org/adopt</span>
                    </div>
                  </div>

                  {/* Shelter header */}
                  <div className="px-4 pt-4 pb-3 border-b border-[#F0EAE4]">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[#2D2D2D] font-bold text-sm">Sunridge Animal Rescue</p>
                      <div className="flex items-center gap-1 bg-emerald-50 rounded-full px-2 py-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-600 text-xs font-semibold">47 available now</span>
                      </div>
                    </div>
                    <p className="text-[#A8A8A8] text-xs flex items-center gap-1">
                      <i className="ri-map-pin-line text-[#C97D5D] text-xs"></i>
                      Austin, TX · Verified Partner
                    </p>
                  </div>

                  {/* Animal tabs */}
                  <div className="px-4 pt-3 pb-1 flex gap-2">
                    {liveAnimals.map((a, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setActiveAnimal(i); }}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${activeAnimal === i ? 'bg-[#C97D5D] text-white' : 'bg-[#F7F5F2] text-[#6B6B6B]'}`}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>

                  {/* Active animal */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#F5EDE6]">
                        <img
                          src={liveAnimals[activeAnimal].image}
                          alt={liveAnimals[activeAnimal].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[#2D2D2D] font-bold text-sm">{liveAnimals[activeAnimal].name}</p>
                        <p className="text-[#6B6B6B] text-xs">{liveAnimals[activeAnimal].breed} · {liveAnimals[activeAnimal].age}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                          <span className="text-emerald-600 text-xs font-medium">{liveAnimals[activeAnimal].status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="w-full py-2.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold whitespace-nowrap cursor-pointer">
                        Adopt {liveAnimals[activeAnimal].name}
                      </button>
                      <button className="w-full py-2.5 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-sm font-medium whitespace-nowrap cursor-pointer">
                        Support This Shelter
                      </button>
                    </div>
                  </div>
                </div>

                {!scanActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl backdrop-blur-[1px]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C97D5D] text-white">
                        <i className="ri-qr-scan-2-line text-xl"></i>
                      </div>
                      <p className="text-[#2D2D2D] text-xs font-semibold">Tap to see what they see</p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-[#A8A8A8] text-xs mt-4 text-center">
                Turn awareness into action in seconds. Every scan helps more animals get seen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/customize"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Start Creating
            <i className="ri-arrow-right-line"></i>
          </Link>
          <p className="text-[#A8A8A8] text-xs mt-4">Everything is customizable. The mission is not.</p>
        </div>
      </div>
    </section>
  );
}
