import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromoBanner from '@/components/PromoBanner';
import ProductsRange from '@/components/ProductsRange';
import AboutMagikLED from '@/components/AboutMagikLED';
import CenturyHouse from '@/components/CenturyHouse';
import InnovationSection from '@/components/InnovationSection';
import WhyMagik from '@/components/WhyMagik';
import CorporateVideos from '@/components/CorporateVideos';
import IndustrySolutions from '@/components/IndustrySolutions';
import Testimonials from '@/components/Testimonials';
import StoreDistributor from '@/components/StoreDistributor';
import BlogPreview from '@/components/BlogPreview';
import InstagramReels from '@/components/InstagramReels';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PromoBanner />
      <ProductsRange />
      <AboutMagikLED />
      <CenturyHouse />
      <InnovationSection />
      <WhyMagik />
      <CorporateVideos />
      <IndustrySolutions />
      <Testimonials />
      <StoreDistributor />
      <BlogPreview />
      <InstagramReels />
      <Footer />
    </main>
  );
}
