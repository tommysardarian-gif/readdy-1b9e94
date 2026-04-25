import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import QRScanHistory from '@/pages/account/components/QRScanHistory';

const savedAnimals = [
  { name: 'Biscuit', shelter: 'Sunridge Animal Rescue, TX', status: 'Adopted', image: 'https://readdy.ai/api/search-image?query=An%20adorable%20golden%20retriever%20puppy%20with%20warm%20amber%20fur%20sitting%20on%20a%20soft%20cream%20blanket%20in%20natural%20sunlight%2C%20looking%20directly%20at%20camera%20with%20bright%20hopeful%20eyes%2C%20clean%20white%20background%2C%20professional%20pet%20photography%2C%20warm%20and%20tender%20mood&width=200&height=200&seq=acc001&orientation=squarish' },
  { name: 'Luna', shelter: 'Coastal Paws Rescue, CA', status: 'In Care', image: 'https://readdy.ai/api/search-image?query=A%20beautiful%20black%20and%20white%20border%20collie%20dog%20with%20soulful%20eyes%20sitting%20gracefully%20in%20soft%20natural%20light%2C%20warm%20cream%20background%2C%20professional%20lifestyle%20pet%20photography%2C%20elegant%20and%20gentle%20expression&width=200&height=200&seq=acc002&orientation=squarish' },
  { name: 'Mango', shelter: 'Second Chance Cats, NY', status: 'In Care', image: 'https://readdy.ai/api/search-image?query=A%20fluffy%20orange%20tabby%20cat%20with%20bright%20amber%20eyes%20resting%20on%20a%20soft%20warm%20blanket%2C%20natural%20window%20light%2C%20clean%20cream%20background%2C%20professional%20pet%20photography%2C%20warm%20and%20cozy%20mood&width=200&height=200&seq=acc003&orientation=squarish' },
];

const supportedShelters = [
  { name: 'Sunridge Animal Rescue', location: 'Austin, TX', purchases: 3, icon: 'ri-home-heart-line' },
  { name: 'Coastal Paws Rescue', location: 'San Diego, CA', purchases: 1, icon: 'ri-building-line' },
];

const myProducts = [
  { name: "Biscuit's Custom Tee", type: 'T-Shirt', shelter: 'Sunridge Animal Rescue', date: 'Mar 12, 2025', status: 'Delivered', price: '$38' },
  { name: "Luna's Rescue Hoodie", type: 'Hoodie', shelter: 'Coastal Paws Rescue', date: 'Feb 28, 2025', status: 'Delivered', price: '$72' },
];

type Tab = 'dashboard' | 'animals' | 'shelters' | 'products' | 'scans';
type AuthMode = 'options' | 'email';
type EmailMode = 'signin' | 'signup';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
  </svg>
);

const YahooIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M14.5 3l-4 9-4-9H3l6 13.5V21h3v-4.5L18 3z" fill="#6001D2"/>
  </svg>
);

const socialProviders = [
  { id: 'google', label: 'Continue with Google', Icon: GoogleIcon },
  { id: 'apple', label: 'Continue with Apple', Icon: AppleIcon },
  { id: 'facebook', label: 'Continue with Facebook', Icon: FacebookIcon },
  { id: 'yahoo', label: 'Continue with Yahoo', Icon: YahooIcon },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('options');
  const [emailMode, setEmailMode] = useState<EmailMode>('signin');
  const [loginForm, setLoginForm] = useState({ email: '', password: '', name: '' });
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSocialLogin = (provider: string) => {
    setIsLoading(provider);
    setTimeout(() => {
      setIsLoading(null);
      setIsLoggedIn(true);
    }, 1200);
  };

  const handleEmailSubmit = () => {
    if (!loginForm.email || !loginForm.password) return;
    setIsLoading('email');
    setTimeout(() => {
      setIsLoading(null);
      setIsLoggedIn(true);
    }, 900);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FAFAF8]">
        <Navbar />
        <div className="pt-28 pb-20 flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full mx-auto px-6">
            <div className="text-center mb-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5EDE6] mx-auto mb-5">
                <i className="ri-user-heart-line text-2xl text-[#C97D5D]"></i>
              </div>
              <h1 className="font-serif text-3xl text-[#2D2D2D] mb-3">Your Impact Dashboard</h1>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">Track your saved animals, supported shelters, and the real impact of every purchase.</p>
            </div>

            <div className="bg-white rounded-3xl border border-[#F0EAE4] p-8">
              {authMode === 'options' && (
                <>
                  <div className="flex flex-col gap-3 mb-6">
                    {socialProviders.map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        onClick={() => handleSocialLogin(id)}
                        disabled={isLoading !== null}
                        className="w-full flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[#E8E0D8] bg-white text-[#2D2D2D] text-sm font-medium hover:border-[#C97D5D] hover:bg-[#FDFAF8] transition-all duration-200 cursor-pointer disabled:opacity-60"
                      >
                        <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {isLoading === id ? (
                            <i className="ri-loader-4-line animate-spin text-[#C97D5D]"></i>
                          ) : (
                            <Icon />
                          )}
                        </span>
                        <span className="flex-1 text-left">{label}</span>
                        {isLoading === id && (
                          <span className="text-xs text-[#A8A8A8]">Connecting...</span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="relative flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-[#F0EAE4]"></div>
                    <span className="text-[#A8A8A8] text-xs">or use email</span>
                    <div className="flex-1 h-px bg-[#F0EAE4]"></div>
                  </div>

                  <button
                    onClick={() => setAuthMode('email')}
                    className="w-full py-3.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="ri-mail-line"></i>
                    Continue with Email
                  </button>

                  <p className="text-center text-[#A8A8A8] text-xs mt-5">Track your impact. Save animals. Support shelters.</p>
                </>
              )}

              {authMode === 'email' && (
                <>
                  <button
                    onClick={() => setAuthMode('options')}
                    className="flex items-center gap-1.5 text-xs text-[#A8A8A8] hover:text-[#C97D5D] mb-6 cursor-pointer transition-colors"
                  >
                    <i className="ri-arrow-left-line"></i>
                    Back to sign-in options
                  </button>

                  <div className="flex gap-1 bg-[#F7F5F2] rounded-full p-1 mb-6">
                    {(['signin', 'signup'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setEmailMode(mode)}
                        className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${emailMode === mode ? 'bg-white text-[#2D2D2D]' : 'text-[#A8A8A8] hover:text-[#2D2D2D]'}`}
                      >
                        {mode === 'signin' ? 'Sign In' : 'Create Account'}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-5">
                    {emailMode === 'signup' && (
                      <div>
                        <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Full Name</label>
                        <input
                          type="text"
                          value={loginForm.name}
                          onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-semibold text-[#2D2D2D] tracking-wide uppercase">Password</label>
                        {emailMode === 'signin' && (
                          <button className="text-xs text-[#C97D5D] hover:underline cursor-pointer">Forgot password?</button>
                        )}
                      </div>
                      <input
                        type="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D8] bg-white text-sm text-[#2D2D2D] placeholder-[#C0B8B0] focus:outline-none focus:border-[#C97D5D] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleEmailSubmit}
                    disabled={isLoading !== null}
                    className="w-full py-4 rounded-full bg-[#C97D5D] text-white text-base font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isLoading === 'email' ? (
                      <><i className="ri-loader-4-line animate-spin"></i> Signing in...</>
                    ) : (
                      emailMode === 'signin' ? 'Sign In' : 'Create Account'
                    )}
                  </button>

                  <p className="text-center text-[#A8A8A8] text-xs mt-4">
                    {emailMode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
                    <button
                      onClick={() => setEmailMode(emailMode === 'signin' ? 'signup' : 'signin')}
                      className="text-[#C97D5D] hover:underline cursor-pointer"
                    >
                      {emailMode === 'signin' ? 'Create one' : 'Sign in'}
                    </button>
                  </p>
                </>
              )}
            </div>

            <p className="text-center text-[#C0B8B0] text-xs mt-5 leading-relaxed">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'animals', label: 'Saved Animals', icon: 'ri-heart-line' },
    { id: 'shelters', label: 'Shelters', icon: 'ri-building-line' },
    { id: 'products', label: 'My Products', icon: 'ri-t-shirt-line' },
    { id: 'scans', label: 'QR Scans', icon: 'ri-qr-code-line' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-1">Welcome back</p>
              <h1 className="font-serif text-3xl text-[#2D2D2D]">Your Impact Dashboard</h1>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-sm text-[#6B6B6B] hover:text-[#C97D5D] transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-white border border-[#F0EAE4] rounded-full p-1 mb-8 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${activeTab === tab.id ? 'bg-[#C97D5D] text-white' : 'text-[#6B6B6B] hover:text-[#2D2D2D]'}`}
              >
                <i className={tab.icon}></i>
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="flex flex-col gap-6">
              {/* Impact Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Animals Saved', value: '4', icon: 'ri-heart-line', color: 'text-[#C97D5D]' },
                  { label: 'Shelters Supported', value: '2', icon: 'ri-building-line', color: 'text-emerald-600' },
                  { label: 'Products Created', value: '2', icon: 'ri-t-shirt-line', color: 'text-amber-600' },
                  { label: 'QR Scans Generated', value: '47', icon: 'ri-qr-code-line', color: 'text-[#C97D5D]' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] p-5">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-3">
                      <i className={`${stat.icon} text-base ${stat.color}`}></i>
                    </div>
                    <p className={`font-serif text-3xl font-semibold mb-1 ${stat.color}`}>{stat.value}</p>
                    <p className="text-[#6B6B6B] text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl border border-[#F0EAE4] p-6">
                <h3 className="font-serif text-xl text-[#2D2D2D] mb-5">Recent Activity</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: 'ri-t-shirt-line', text: "Biscuit's Custom Tee delivered", time: '2 days ago', color: 'text-[#C97D5D]' },
                    { icon: 'ri-qr-code-line', text: 'Your QR code was scanned 12 times this week', time: '5 days ago', color: 'text-amber-600' },
                    { icon: 'ri-heart-line', text: 'Luna was saved to your animals', time: '1 week ago', color: 'text-[#C97D5D]' },
                    { icon: 'ri-building-line', text: 'Coastal Paws Rescue added to your shelters', time: '2 weeks ago', color: 'text-emerald-600' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-[#F7F5F2] last:border-0">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                        <i className={`${item.icon} text-sm ${item.color}`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-[#2D2D2D] text-sm">{item.text}</p>
                      </div>
                      <span className="text-[#A8A8A8] text-xs whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#F5EDE6] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-xl text-[#2D2D2D] mb-1">Create Another Product</p>
                  <p className="text-[#6B6B6B] text-sm">Upload a new pet and keep the impact growing.</p>
                </div>
                <Link
                  to="/customize"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  Customize Now
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          )}

          {/* Saved Animals Tab */}
          {activeTab === 'animals' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-[#2D2D2D]">Saved Animals</h2>
                <p className="text-[#6B6B6B] text-sm">{savedAnimals.length} animals saved</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {savedAnimals.map((animal, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] overflow-hidden">
                    <div className="h-44 overflow-hidden">
                      <img src={animal.image} alt={animal.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-xl text-[#2D2D2D]">{animal.name}</h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${animal.status === 'Adopted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{animal.status}</span>
                      </div>
                      <p className="text-[#6B6B6B] text-xs flex items-center gap-1.5">
                        <i className="ri-map-pin-line text-[#C97D5D]"></i>
                        {animal.shelter}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shelters Tab */}
          {activeTab === 'shelters' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-[#2D2D2D]">Supported Shelters</h2>
              </div>
              <div className="flex flex-col gap-4">
                {supportedShelters.map((shelter, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] p-6 flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                      <i className={`${shelter.icon} text-xl text-[#C97D5D]`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-[#2D2D2D] mb-1">{shelter.name}</h3>
                      <p className="text-[#6B6B6B] text-sm flex items-center gap-1.5">
                        <i className="ri-map-pin-line text-[#C97D5D] text-xs"></i>
                        {shelter.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#C97D5D] font-bold text-xl">{shelter.purchases}</p>
                      <p className="text-[#A8A8A8] text-xs">purchases</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-[#2D2D2D]">My Products</h2>
                <Link
                  to="/customize"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C97D5D] text-white text-sm font-semibold hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-add-line"></i>
                  New Product
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {myProducts.map((product, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] p-6 flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                      <i className="ri-t-shirt-line text-lg text-[#C97D5D]"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-[#2D2D2D] mb-1">{product.name}</h3>
                      <p className="text-[#6B6B6B] text-xs flex items-center gap-3">
                        <span className="flex items-center gap-1"><i className="ri-map-pin-line text-[#C97D5D]"></i>{product.shelter}</span>
                        <span>{product.date}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-1">{product.status}</span>
                      <p className="text-[#2D2D2D] font-bold text-sm">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* QR Scans Tab */}
          {activeTab === 'scans' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#2D2D2D]">QR Scan History</h2>
                  <p className="text-[#6B6B6B] text-sm mt-1">See who scanned your products and when — every scan connects someone to real animals.</p>
                </div>
              </div>
              <QRScanHistory />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
