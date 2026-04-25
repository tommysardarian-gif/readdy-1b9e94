import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const shelters = [
  'Sunridge Animal Rescue, TX',
  'Coastal Paws Rescue, CA',
  'Second Chance Cats, NY',
  'Heartland Animal Haven, IL',
  'Blue Ridge Animal Shelter, VA',
  'Supports rotating rescue partners',
];

const productTypes = [
  { id: 'tshirt', label: 'T-Shirt', icon: 'ri-t-shirt-line', price: '$38' },
  { id: 'hoodie', label: 'Hoodie', icon: 'ri-shirt-line', price: '$72' },
  { id: 'tote', label: 'Tote Bag', icon: 'ri-shopping-bag-line', price: '$45' },
  { id: 'mug', label: 'Ceramic Mug', icon: 'ri-cup-line', price: '$28' },
];

const animalTypes = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Other'];

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [petName, setPetName] = useState('');
  const [animalType, setAnimalType] = useState('Dog');
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [selectedShelter, setSelectedShelter] = useState(shelters[0]);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) setPhotoUploaded(true);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) setPhotoUploaded(true);
  };

  const selectedProductData = productTypes.find((p) => p.id === selectedProduct);

  const canProceedStep1 = photoUploaded && petName.trim().length > 0;
  const canProceedStep2 = selectedProduct && selectedShelter;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-8 bg-white border-b border-[#F0EAE4]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Custom Products</p>
              <h1 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-3">
                Customize Your Product
              </h1>
              <p className="text-[#6B6B6B] text-base leading-relaxed max-w-lg">
                Everything is customizable. The mission is not.
              </p>
            </div>
            {/* Speed badge */}
            <div className="flex items-center gap-3 bg-[#F5EDE6] rounded-2xl px-5 py-3 flex-shrink-0">
              <i className="ri-timer-flash-line text-[#C97D5D] text-xl"></i>
              <div>
                <p className="text-[#2D2D2D] text-sm font-semibold">Under a minute</p>
                <p className="text-[#6B6B6B] text-xs">Create your product in under a minute.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick flow overview strip */}
      <div className="bg-[#F7F5F2] border-b border-[#F0EAE4]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {[
              { icon: 'ri-upload-cloud-2-line', label: 'Upload photo' },
              { icon: 'ri-eye-line', label: 'Instant preview' },
              { icon: 'ri-price-tag-3-line', label: 'Add pet name' },
              { icon: 'ri-building-line', label: 'Choose shelter' },
              { icon: 'ri-qr-code-line', label: 'QR generated' },
              { icon: 'ri-t-shirt-line', label: 'Select product' },
              { icon: 'ri-check-double-line', label: 'Done' },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="flex items-center gap-1.5 px-2 py-1">
                  <i className={`${item.icon} text-[#C97D5D] text-sm`}></i>
                  <span className="text-[#6B6B6B] text-xs whitespace-nowrap">{item.label}</span>
                </div>
                {i < arr.length - 1 && <i className="ri-arrow-right-s-line text-[#D4C4B8] text-sm flex-shrink-0"></i>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-[#F0EAE4] sticky top-20 z-30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-0">
            {[
              { n: 1, label: 'Your Pet' },
              { n: 2, label: 'Product & Shelter' },
              { n: 3, label: 'Preview & Order' },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center flex-1">
                <button
                  onClick={() => { if (s.n < step || (s.n === 2 && canProceedStep1) || (s.n === 3 && canProceedStep2)) setStep(s.n); }}
                  className={`flex items-center gap-2 cursor-pointer transition-all duration-200 ${step === s.n ? 'opacity-100' : step > s.n ? 'opacity-70' : 'opacity-40'}`}
                >
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${step >= s.n ? 'bg-[#C97D5D] text-white' : 'bg-[#F0EAE4] text-[#6B6B6B]'}`}>
                    {step > s.n ? <i className="ri-check-line text-xs"></i> : s.n}
                  </div>
                  <span className={`text-sm font-medium whitespace-nowrap hidden sm:block ${step === s.n ? 'text-[#2D2D2D]' : 'text-[#6B6B6B]'}`}>{s.label}</span>
                </button>
                {i < 2 && <div className={`flex-1 h-px mx-3 ${step > s.n ? 'bg-[#C97D5D]' : 'bg-[#E8E0D8]'}`}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">

        {/* STEP 1 — Pet Info */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Upload */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">Upload Your Pet's Photo</h2>
              <p className="text-[#6B6B6B] text-sm mb-5">Drop a photo and watch the preview appear instantly.</p>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleFileDrop}
                className={`relative border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${dragOver ? 'border-[#C97D5D] bg-[#F5EDE6]' : photoUploaded ? 'border-[#C97D5D] bg-[#F5EDE6]' : 'border-[#D4C4B8] bg-white hover:border-[#C97D5D] hover:bg-[#FDFAF8]'}`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {photoUploaded ? (
                  <>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#C97D5D]/20 mb-3">
                      <i className="ri-check-line text-2xl text-[#C97D5D]"></i>
                    </div>
                    <p className="text-[#C97D5D] font-semibold text-sm">Photo uploaded!</p>
                    <p className="text-[#A8A8A8] text-xs mt-1">Click to change</p>
                    {/* Instant preview hint */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#C97D5D] text-white text-xs px-2.5 py-1 rounded-full">
                      <i className="ri-eye-line text-xs"></i>
                      Preview ready
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-3">
                      <i className="ri-upload-cloud-2-line text-2xl text-[#C97D5D]"></i>
                    </div>
                    <p className="text-[#2D2D2D] font-semibold text-sm mb-1">Drop your photo here</p>
                    <p className="text-[#A8A8A8] text-xs">or click to browse — JPG, PNG, HEIC</p>
                  </>
                )}
              </div>
              <p className="text-[#A8A8A8] text-xs mt-3">Best results: clear, well-lit photo of your pet's face. We'll handle the artistic transformation.</p>
            </div>

            {/* Pet Details */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">Pet Details</h2>
              <p className="text-[#6B6B6B] text-sm mb-5">This appears on your product and links to the rescue story.</p>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Pet's Name</label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Biscuit"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Type of Animal</label>
                  <div className="flex flex-wrap gap-2">
                    {animalTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setAnimalType(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${animalType === type ? 'bg-[#C97D5D] text-white' : 'bg-white border border-[#E8E0D8] text-[#6B6B6B] hover:border-[#C97D5D]'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QR code callout — prominent */}
                <div className="bg-[#2D2D2D] rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0">
                      <i className="ri-qr-code-line text-[#C97D5D] text-lg"></i>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">QR Code — The Core Feature</p>
                      <p className="text-white/60 text-xs leading-relaxed">
                        Every product includes a unique QR code automatically generated for {petName || 'your pet'}. Anyone who scans it sees <strong className="text-white">live adoptable animals</strong> at the linked shelter — real animals, available right now. Not a static page.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => canProceedStep1 && setStep(2)}
                  disabled={!canProceedStep1}
                  className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  Continue to Product Selection
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
                {!canProceedStep1 && (
                  <p className="text-[#A8A8A8] text-xs text-center -mt-2">Upload a photo and add your pet's name to continue</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 — Product & Shelter */}
        {step === 2 && (
          <div className="flex flex-col gap-10">
            {/* Product Type */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">Choose Your Product</h2>
              <p className="text-[#6B6B6B] text-sm mb-6">All products include your pet's portrait and a QR code linking to their rescue story.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productTypes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${selectedProduct === p.id ? 'border-[#C97D5D] bg-[#F5EDE6]' : 'border-[#E8E0D8] bg-white hover:border-[#C97D5D]'}`}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${selectedProduct === p.id ? 'bg-[#C97D5D]' : 'bg-[#F7F5F2]'}`}>
                      <i className={`${p.icon} text-xl ${selectedProduct === p.id ? 'text-white' : 'text-[#6B6B6B]'}`}></i>
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-semibold ${selectedProduct === p.id ? 'text-[#C97D5D]' : 'text-[#2D2D2D]'}`}>{p.label}</p>
                      <p className="text-[#A8A8A8] text-xs">{p.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Shelter Selection */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">Choose a Shelter to Support</h2>
              <p className="text-[#6B6B6B] text-sm mb-6">A portion of your purchase goes directly to the shelter you select. The QR code on your product will also link to their page. All shelters are verified.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shelters.map((shelter) => (
                  <button
                    key={shelter}
                    onClick={() => setSelectedShelter(shelter)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${selectedShelter === shelter ? 'border-[#C97D5D] bg-[#F5EDE6]' : 'border-[#E8E0D8] bg-white hover:border-[#C97D5D]'}`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 ${selectedShelter === shelter ? 'bg-[#C97D5D]' : 'bg-[#F7F5F2]'}`}>
                      <i className={`ri-map-pin-line text-sm ${selectedShelter === shelter ? 'text-white' : 'text-[#6B6B6B]'}`}></i>
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${selectedShelter === shelter ? 'text-[#C97D5D]' : 'text-[#2D2D2D]'}`}>{shelter}</span>
                      {shelter !== 'Supports rotating rescue partners' && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <i className="ri-shield-check-line text-[#C97D5D] text-xs"></i>
                          <span className="text-[#A8A8A8] text-xs">Verified</span>
                        </div>
                      )}
                    </div>
                    {selectedShelter === shelter && <i className="ri-check-line text-[#C97D5D]"></i>}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-4 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-base font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i>Back
              </button>
              <button
                onClick={() => { setStep(3); setPreviewMode(true); }}
                disabled={!canProceedStep2}
                className="flex-1 py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                Preview My Product
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — Preview */}
        {step === 3 && previewMode && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Preview Visual — major visual moment */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">Your Product Preview</h2>
              <p className="text-[#6B6B6B] text-sm mb-5">This is what your product will look like. Our team sends a proof before production.</p>
              <div className="relative rounded-3xl overflow-hidden bg-[#F5EDE6] h-[460px]">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20premium%20custom%20white%20t-shirt%20with%20a%20beautifully%20illustrated%20golden%20retriever%20portrait%20in%20warm%20terracotta%20ink%2C%20the%20name%20Biscuit%20written%20in%20elegant%20script%20below%20the%20portrait%2C%20a%20small%20QR%20code%20printed%20near%20the%20hem%2C%20displayed%20on%20a%20clean%20cream%20background%2C%20soft%20natural%20studio%20lighting%2C%20lifestyle%20product%20photography%2C%20warm%20and%20elegant%20mood&width=600&height=700&seq=preview001&orientation=portrait"
                  alt="Product preview"
                  className="w-full h-full object-cover object-top"
                />
                {/* QR badge overlay */}
                <div className="absolute top-5 right-5 bg-white rounded-2xl p-3 flex flex-col items-center gap-1">
                  <i className="ri-qr-code-line text-[#C97D5D] text-2xl"></i>
                  <p className="text-[#2D2D2D] text-xs font-semibold">QR Included</p>
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <p className="text-emerald-600 text-xs font-medium leading-tight">Live animals</p>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#2D2D2D] font-semibold text-sm">{petName || 'Your Pet'}'s Custom {selectedProductData?.label}</p>
                    <span className="text-[#C97D5D] font-bold">{selectedProductData?.price}</span>
                  </div>
                  <p className="text-[#6B6B6B] text-xs flex items-center gap-1.5">
                    <i className="ri-map-pin-line text-[#C97D5D]"></i>
                    Supporting: {selectedShelter}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Order Summary</h2>
              <div className="bg-white rounded-2xl border border-[#F0EAE4] p-6 mb-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#F0EAE4]">
                    <span className="text-[#6B6B6B] text-sm">Pet Name</span>
                    <span className="text-[#2D2D2D] text-sm font-semibold">{petName || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#F0EAE4]">
                    <span className="text-[#6B6B6B] text-sm">Animal Type</span>
                    <span className="text-[#2D2D2D] text-sm font-semibold">{animalType}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#F0EAE4]">
                    <span className="text-[#6B6B6B] text-sm">Product</span>
                    <span className="text-[#2D2D2D] text-sm font-semibold">{selectedProductData?.label}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#F0EAE4]">
                    <span className="text-[#6B6B6B] text-sm">Shelter Supported</span>
                    <span className="text-[#2D2D2D] text-sm font-semibold text-right max-w-[180px]">{selectedShelter}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#F0EAE4]">
                    <span className="text-[#6B6B6B] text-sm">QR Code</span>
                    <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1"><i className="ri-check-line"></i> Auto-generated</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#2D2D2D] font-semibold">Total</span>
                    <span className="text-[#C97D5D] font-bold text-xl">{selectedProductData?.price}</span>
                  </div>
                </div>
              </div>

              {/* Impact note */}
              <div className="bg-[#F5EDE6] rounded-2xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ri-heart-line text-[#C97D5D] text-lg mt-0.5"></i>
                  <div>
                    <p className="text-[#2D2D2D] text-sm font-semibold mb-1">Your Purchase Supports Real Rescue</p>
                    <p className="text-[#6B6B6B] text-xs leading-relaxed">A portion of every sale goes directly to {selectedShelter}. Your QR code will drive ongoing visibility for their animals every time someone scans it.</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer mb-3">
                Place Order
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
              <button
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-full border border-[#E8E0D8] text-[#6B6B6B] text-sm font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i>Edit Selection
              </button>

              <p className="text-center text-[#A8A8A8] text-xs mt-4">
                Our team will send a design proof before production begins.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Education strip at bottom of customize page */}
      <div className="bg-[#F7F5F2] border-t border-[#F0EAE4] py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                <i className="ri-information-line text-[#C97D5D] text-lg"></i>
              </div>
              <div>
                <p className="text-[#2D2D2D] text-sm font-semibold mb-1">Why This Matters</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-lg">
                  ~607,000 animals are euthanized in U.S. shelters annually. Visibility and community support are proven to reduce this number. Every product you create is a living campaign.
                </p>
              </div>
            </div>
            <Link
              to="/for-shelters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E8E0D8] text-[#2D2D2D] text-sm font-medium hover:border-[#C97D5D] transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              Learn about shelters
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
