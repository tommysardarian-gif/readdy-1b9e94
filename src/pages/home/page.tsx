import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductHero from './components/ProductHero';
import TrustImpact from './components/TrustImpact';
import Shop from './components/Shop';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProductHero />
      <TrustImpact />
      <Shop />
      <FinalCTA />
      <Footer />
    </main>
  );
}
