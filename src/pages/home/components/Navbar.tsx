import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Customize', to: '/customize' },
  { label: 'For Shelters', to: '/for-shelters' },
  { label: 'Collaborate', to: '/collaborate' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, always show white nav
  const showWhite = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhite ? 'bg-white border-b border-[#F0EAE4]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/246ee2c8fdb1ecf75adf0759f2f27fa8/5e9296862173d4dea7a594342c4ff5b2.png"
            alt="Paws & Purpose Logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const isHashLink = link.to.includes('#');
            return isHashLink ? (
              <a
                key={link.label}
                href={link.to.replace('/', '')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  showWhite ? 'text-[#2D2D2D] hover:text-[#C97D5D]' : 'text-white hover:text-[#F5C9A8]'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#C97D5D]'
                    : showWhite
                    ? 'text-[#2D2D2D] hover:text-[#C97D5D]'
                    : 'text-white hover:text-[#F5C9A8]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/account"
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
              showWhite ? 'text-[#2D2D2D] hover:bg-[#F7F5F2]' : 'text-white hover:bg-white/10'
            }`}
          >
            <i className="ri-user-line text-base"></i>
            <span>Sign In</span>
          </Link>
          <Link
            to="/customize"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#C97D5D] text-white hover:bg-[#b86d4d] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Create Your Product
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${showWhite ? 'text-[#2D2D2D]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0EAE4] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isHashLink = link.to.includes('#');
            return isHashLink ? (
              <a
                key={link.label}
                href={link.to.replace('/', '')}
                className="text-[#2D2D2D] text-base font-medium hover:text-[#C97D5D] transition-colors cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-[#2D2D2D] text-base font-medium hover:text-[#C97D5D] transition-colors cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 pt-3 border-t border-[#F0EAE4]">
            <Link
              to="/account"
              className="text-center text-sm font-medium px-5 py-3 rounded-full border border-[#E8E0D8] text-[#2D2D2D] hover:border-[#C97D5D] transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-user-line mr-2"></i>Sign In / Account
            </Link>
            <Link
              to="/customize"
              className="text-center text-sm font-medium px-5 py-3 rounded-full bg-[#C97D5D] text-white hover:bg-[#b86d4d] transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Create Your Product
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
