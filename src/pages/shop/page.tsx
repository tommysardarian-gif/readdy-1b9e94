import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'bestsellers', label: 'Best Sellers' },
  { id: 'customize', label: 'Customize Your Own' },
  { id: 'shelter', label: 'Shelter Support' },
  { id: 'essentials', label: 'Everyday Essentials' },
  { id: 'gifts', label: 'Giftable Items' },
];

const shelterOptions = [
  'Supports rotating rescue partners',
  'Sunridge Animal Rescue, TX',
  'Coastal Paws Rescue, CA',
  'Second Chance Cats, NY',
  'Heartland Animal Haven, IL',
  'Blue Ridge Animal Shelter, VA',
];

const allProducts = [
  {
    id: 1,
    name: 'Rescue & Thrive Tee',
    description: 'Soft organic cotton, unisex fit. Wear your values every day.',
    price: '$38',
    shelter: 'Sunridge Animal Rescue',
    category: ['bestsellers', 'essentials'],
    badge: 'Best Seller',
    impact: 'Wear the mission',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20minimalist%20white%20organic%20cotton%20t-shirt%20with%20a%20subtle%20warm%20terracotta%20paw%20print%20graphic%2C%20folded%20neatly%20on%20a%20clean%20cream%20linen%20surface%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood%2C%20simple%20background&width=600&height=600&seq=shop001&orientation=squarish',
  },
  {
    id: 2,
    name: 'Paws & Purpose Hoodie',
    description: 'Heavyweight fleece. Cozy, meaningful, and made to last.',
    price: '$72',
    shelter: 'Coastal Paws Rescue',
    category: ['bestsellers', 'essentials'],
    badge: 'Fan Favorite',
    impact: 'Supports rescue visibility',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20warm%20sand%20colored%20heavyweight%20hoodie%20with%20a%20small%20embroidered%20paw%20print%20logo%20on%20the%20chest%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20presentation&width=600&height=600&seq=shop002&orientation=squarish',
  },
  {
    id: 3,
    name: 'Custom Pet Portrait Tee',
    description: 'Upload your pet. We turn them into wearable art with a QR rescue story.',
    price: '$48',
    shelter: 'Your choice',
    category: ['customize', 'bestsellers'],
    badge: 'Custom',
    impact: 'QR code links to rescue story',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20custom%20white%20t-shirt%20with%20a%20beautifully%20illustrated%20golden%20retriever%20portrait%20in%20warm%20terracotta%20ink%2C%20the%20name%20Biscuit%20written%20in%20elegant%20script%20below%20the%20portrait%2C%20a%20small%20QR%20code%20printed%20near%20the%20hem%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood&width=600&height=600&seq=shop003&orientation=squarish',
  },
  {
    id: 4,
    name: 'Companion Tote Bag',
    description: 'Heavy canvas, reinforced handles. Built for real life and real purpose.',
    price: '$45',
    shelter: 'Second Chance Cats',
    category: ['essentials', 'gifts'],
    badge: null,
    impact: 'Choose a shelter at checkout',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20natural%20canvas%20tote%20bag%20with%20a%20warm%20terracotta%20screen%20printed%20rescue%20animal%20illustration%2C%20placed%20on%20a%20clean%20white%20marble%20surface%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20mood&width=600&height=600&seq=shop004&orientation=squarish',
  },
  {
    id: 5,
    name: 'Rescue Mug — Ceramic',
    description: 'Hand-glazed ceramic. Your morning ritual, with meaning.',
    price: '$28',
    shelter: 'Heartland Animal Haven',
    category: ['gifts', 'essentials'],
    badge: 'Gift Ready',
    impact: 'Supports rescue visibility',
    image: 'https://readdy.ai/api/search-image?query=A%20beautiful%20hand-glazed%20ceramic%20mug%20in%20warm%20cream%20and%20terracotta%20tones%20with%20a%20subtle%20paw%20print%20pattern%2C%20placed%20on%20a%20clean%20wooden%20surface%20with%20soft%20morning%20light%2C%20lifestyle%20product%20photography%2C%20warm%20and%20cozy%20mood%2C%20minimal%20background&width=600&height=600&seq=shop005&orientation=squarish',
  },
  {
    id: 6,
    name: 'Rescue Crew Sweatshirt',
    description: 'Classic crewneck. Soft inside, strong outside. Wear the cause.',
    price: '$65',
    shelter: 'Coastal Paws Rescue',
    category: ['bestsellers', 'essentials'],
    badge: null,
    impact: 'Wear the mission',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20warm%20oatmeal%20colored%20crewneck%20sweatshirt%20with%20a%20small%20embroidered%20rescue%20animal%20logo%2C%20displayed%20flat%20on%20a%20clean%20cream%20linen%20surface%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20warm%20mood&width=600&height=600&seq=shop006&orientation=squarish',
  },
  {
    id: 7,
    name: 'Custom QR Hoodie',
    description: 'Your pet. Your shelter. A QR code that tells their story to the world.',
    price: '$82',
    shelter: 'Your choice',
    category: ['customize'],
    badge: 'Custom + QR',
    impact: 'QR code links to rescue story',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20dark%20charcoal%20hoodie%20with%20a%20beautifully%20illustrated%20cat%20portrait%20in%20cream%20and%20terracotta%20tones%20on%20the%20chest%2C%20a%20small%20QR%20code%20badge%20on%20the%20sleeve%2C%20displayed%20on%20a%20clean%20minimal%20background%2C%20soft%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20warm%20and%20premium%20mood&width=600&height=600&seq=shop007&orientation=squarish',
  },
  {
    id: 8,
    name: 'Hope Enamel Pin Set',
    description: 'Set of 3 enamel pins. Small but mighty. Perfect for gifting.',
    price: '$18',
    shelter: 'Sunridge Animal Rescue',
    category: ['gifts'],
    badge: 'Gift Ready',
    impact: 'Choose a shelter at checkout',
    image: 'https://readdy.ai/api/search-image?query=A%20set%20of%20three%20premium%20enamel%20pins%20featuring%20cute%20rescue%20animal%20designs%20in%20warm%20terracotta%20and%20cream%20colors%2C%20arranged%20on%20a%20clean%20white%20linen%20card%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20presentation&width=600&height=600&seq=shop008&orientation=squarish',
  },
  {
    id: 9,
    name: 'Rescue Mission Hat',
    description: 'Structured 5-panel cap. Clean, minimal, mission-driven.',
    price: '$34',
    shelter: 'Blue Ridge Animal Shelter',
    category: ['essentials', 'bestsellers'],
    badge: null,
    impact: 'Supports rescue visibility',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20structured%20baseball%20cap%20in%20warm%20cream%20canvas%20with%20a%20small%20embroidered%20terracotta%20paw%20print%20logo%20on%20the%20front%2C%20displayed%20on%20a%20clean%20minimal%20background%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20mood&width=600&height=600&seq=shop009&orientation=squarish',
  },
  {
    id: 10,
    name: 'Custom Pet Tote — QR Edition',
    description: 'Canvas tote with your pet\'s portrait and a QR code linking to their rescue story.',
    price: '$55',
    shelter: 'Your choice',
    category: ['customize', 'gifts'],
    badge: 'Custom + QR',
    impact: 'QR code links to rescue story',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20natural%20canvas%20tote%20bag%20with%20a%20custom%20illustrated%20dog%20portrait%20in%20warm%20terracotta%20ink%20and%20a%20small%20QR%20code%20tag%20attached%2C%20placed%20on%20a%20clean%20cream%20marble%20surface%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood&width=600&height=600&seq=shop010&orientation=squarish',
  },
  {
    id: 11,
    name: 'Shelter Support Sticker Pack',
    description: '6 premium vinyl stickers. Waterproof, durable, and full of heart.',
    price: '$12',
    shelter: 'Heartland Animal Haven',
    category: ['gifts', 'shelter'],
    badge: 'Gift Ready',
    impact: 'Choose a shelter at checkout',
    image: 'https://readdy.ai/api/search-image?query=A%20set%20of%20six%20premium%20vinyl%20stickers%20featuring%20cute%20rescue%20animal%20illustrations%20in%20warm%20terracotta%20and%20cream%20tones%2C%20arranged%20on%20a%20clean%20white%20background%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20playful%20mood&width=600&height=600&seq=shop011&orientation=squarish',
  },
  {
    id: 12,
    name: 'Rescue Partner Tee — Shelter Edition',
    description: 'Proceeds go directly to a featured shelter. 100% of net profit.',
    price: '$42',
    shelter: 'Rotating shelter partners',
    category: ['shelter'],
    badge: '100% to Shelter',
    impact: 'Supports rescue visibility',
    image: 'https://readdy.ai/api/search-image?query=A%20premium%20soft%20cream%20t-shirt%20with%20a%20bold%20warm%20terracotta%20rescue%20shelter%20logo%20and%20the%20words%20Shelter%20Partner%20printed%20in%20elegant%20typography%2C%20displayed%20on%20a%20clean%20minimal%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20warm%20and%20purposeful%20mood&width=600&height=600&seq=shop012&orientation=squarish',
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedShelters, setSelectedShelters] = useState<Record<number, string>>({});
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category.includes(activeCategory));

  const handleShelterSelect = (productId: number, shelter: string) => {
    setSelectedShelters((prev) => ({ ...prev, [productId]: shelter }));
    setOpenDropdown(null);
  };

  const handleAddToCart = (productId: number) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-28 pb-14 overflow-hidden bg-white border-b border-[#F0EAE4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Shop With Purpose</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] leading-tight mb-5">
                Every Product<br />
                <span className="text-[#C97D5D]">Tells a Story.</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6 max-w-lg">
                Premium products designed with intention. Every custom product carries a QR code that connects anyone who sees it to real animals available for adoption — right now.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#6B6B6B] text-sm">
                  <i className="ri-shield-check-line text-[#C97D5D]"></i>
                  <span>Verified shelter partnerships</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B6B] text-sm">
                  <i className="ri-qr-code-line text-[#C97D5D]"></i>
                  <span>Scan to see live adoptable animals</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B6B] text-sm">
                  <i className="ri-map-pin-line text-[#C97D5D]"></i>
                  <span>You choose which shelter to support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20premium%20custom%20white%20t-shirt%20with%20a%20beautifully%20illustrated%20golden%20retriever%20portrait%20in%20warm%20terracotta%20ink%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood&width=400&height=400&seq=shopheader001&orientation=squarish"
                  alt="Custom pet tee"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 mt-6">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20premium%20warm%20sand%20colored%20heavyweight%20hoodie%20with%20a%20small%20embroidered%20paw%20print%20logo%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20presentation&width=400&height=400&seq=shopheader002&orientation=squarish"
                  alt="Rescue hoodie"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 -mt-6">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20beautiful%20hand-glazed%20ceramic%20mug%20in%20warm%20cream%20and%20terracotta%20tones%20with%20a%20subtle%20paw%20print%20pattern%2C%20placed%20on%20a%20clean%20wooden%20surface%20with%20soft%20morning%20light%2C%20lifestyle%20product%20photography%2C%20warm%20and%20cozy%20mood&width=400&height=400&seq=shopheader003&orientation=squarish"
                  alt="Rescue mug"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20premium%20natural%20canvas%20tote%20bag%20with%20a%20warm%20terracotta%20screen%20printed%20rescue%20animal%20illustration%2C%20placed%20on%20a%20clean%20white%20marble%20surface%2C%20soft%20natural%20light%2C%20lifestyle%20product%20photography%2C%20minimal%20and%20elegant%20mood&width=400&height=400&seq=shopheader004&orientation=squarish"
                  alt="Companion tote"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Product Banner */}
      <div className="bg-[#F5EDE6] border-b border-[#E8D8CC]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <i className="ri-qr-code-line text-[#C97D5D] text-xl"></i>
            <p className="text-[#2D2D2D] text-sm font-medium">
              <strong>Want something truly personal?</strong> Upload your pet and create a custom product with a QR code that connects anyone who sees it to real adoptable animals at your chosen shelter.
            </p>
          </div>
          <Link
            to="/customize"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            Customize Your Own
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-[#F0EAE4] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#C97D5D] text-white'
                    : 'bg-[#F7F5F2] text-[#6B6B6B] hover:bg-[#F0EAE4] hover:text-[#2D2D2D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#6B6B6B] text-sm">
            Showing <strong className="text-[#2D2D2D]">{filtered.length}</strong> products
          </p>
          <p className="text-[#A8A8A8] text-xs hidden md:block">Real shelters. Real stories. Real impact.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const chosenShelter = selectedShelters[product.id] || product.shelter;
            const isOpen = openDropdown === product.id;
            const isAdded = addedToCart === product.id;
            const isCustom = product.category.includes('customize');

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#F0EAE4] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#F7F5F2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      product.badge === 'Custom' || product.badge === 'Custom + QR'
                        ? 'bg-[#C97D5D] text-white'
                        : product.badge === '100% to Shelter'
                        ? 'bg-[#2D2D2D] text-white'
                        : 'bg-white text-[#2D2D2D] border border-[#F0EAE4]'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  {isCustom && (
                    <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90">
                      <i className="ri-qr-code-line text-[#C97D5D] text-sm"></i>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#2D2D2D] mb-1 leading-snug">{product.name}</h3>
                  <p className="text-[#A8A8A8] text-xs mb-3 leading-relaxed">{product.description}</p>

                  {/* Shelter selector */}
                  {!isCustom ? (
                    <div className="relative mb-4">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : product.id)}
                        className="w-full flex items-center justify-between gap-2 text-xs text-[#6B6B6B] bg-[#FAFAF8] border border-[#F0EAE4] rounded-lg px-3 py-2 hover:border-[#C97D5D] transition-all duration-200 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <i className="ri-map-pin-line text-[#C97D5D] flex-shrink-0"></i>
                          <span className="truncate">{chosenShelter}</span>
                        </span>
                        <i className={`flex-shrink-0 ${isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                      </button>
                      {isOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#F0EAE4] rounded-xl z-20 overflow-hidden">
                          {shelterOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleShelterSelect(product.id, opt)}
                              className="w-full text-left text-xs text-[#2D2D2D] px-3 py-2.5 hover:bg-[#F5EDE6] hover:text-[#C97D5D] transition-colors duration-150 cursor-pointer"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mb-4 flex items-center gap-1.5 text-xs text-[#C97D5D] bg-[#F5EDE6] rounded-lg px-3 py-2">
                      <i className="ri-qr-code-line"></i>
                      <span>You choose shelter at customization</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-xl text-[#2D2D2D]">{product.price}</span>
                    {isCustom ? (
                      <Link
                        to="/customize"
                        className="flex items-center gap-1.5 text-sm font-semibold text-white bg-[#C97D5D] px-4 py-2 rounded-full hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                      >
                        Customize
                        <i className="ri-arrow-right-line text-xs"></i>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'text-white bg-[#C97D5D] hover:bg-[#b86d4d]'
                        }`}
                      >
                        {isAdded ? (
                          <><i className="ri-check-line"></i> Added</>
                        ) : (
                          'Add to Cart'
                        )}
                      </button>
                    )}
                  </div>

                  {/* Impact microcopy */}
                  <p className="text-[#A8A8A8] text-xs flex items-center gap-1.5">
                    <i className="ri-heart-line text-[#C97D5D]"></i>
                    {product.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Shelter Support Banner */}
        <div className="mt-16 bg-[#2D2D2D] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Shelter Support Collection</p>
            <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
              100% of Net Profit<br />Goes to Shelters
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Our Shelter Support Collection is different. Every dollar of net profit from these products goes directly to our partner shelters — no overhead, no deductions.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Verified shelter partnerships',
                'Transparent fund allocation',
                'Real animals. Real outcomes.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <i className="ri-check-line text-[#C97D5D]"></i>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-white text-sm font-semibold mb-1">Currently Supporting</p>
              <div className="flex flex-col gap-2 mt-3">
                {['Sunridge Animal Rescue, TX', 'Coastal Paws Rescue, CA', 'Second Chance Cats, NY', 'Heartland Animal Haven, IL'].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <i className="ri-map-pin-line text-[#C97D5D] text-xs"></i>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/for-shelters"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/60 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Is your shelter a partner?
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        {/* FAQ Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'ri-truck-line', title: 'Shipping', body: 'Free shipping on orders over $60. Standard delivery 5–8 business days. Express available at checkout.' },
            { icon: 'ri-refresh-line', title: 'Returns', body: 'Custom products are final sale. All other items can be returned within 30 days in original condition.' },
            { icon: 'ri-funds-line', title: 'Impact', body: 'A portion of every sale goes to the shelter linked to that product. Custom products let you choose your shelter.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#F0EAE4]">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                <i className={`${item.icon} text-[#C97D5D] text-base`}></i>
              </div>
              <div>
                <p className="text-[#2D2D2D] text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
