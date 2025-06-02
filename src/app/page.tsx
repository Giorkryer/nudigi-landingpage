import { HeroSection } from '../components/Hero/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import { PricingSection } from '../components/PriceCard/PricingSection';
import About from '../components/About/About';
import { Navbar } from '../components/Navbar/Navbar'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <About />
    </main>
  );
}
