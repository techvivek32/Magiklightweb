import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromoBanner from '@/components/PromoBanner';
import ProductsRange from '@/components/ProductsRange';
import AboutMagikLED from '@/components/AboutMagikLED';
import CenturyHouse from '@/components/CenturyHouse';
import InnovationSection from '@/components/InnovationSection';
import WhyMagik from '@/components/WhyMagik';
import B2BProjectShowcase from '@/components/B2BProjectShowcase';
import CeilingLightsBrochure from '@/components/CeilingLightsBrochure';
import CorporateVideos from '@/components/CorporateVideos';
import ClientTestimonials from '@/components/ClientTestimonials';
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
      <CeilingLightsBrochure />
      <B2BProjectShowcase />
      <CorporateVideos />
      <ClientTestimonials />
      <Testimonials />
      <StoreDistributor />
      <BlogPreview />
      <InstagramReels />
      <Footer />
    </main>
  );
}
