import "@/i18n";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import CalculationSection from "@/components/CalculationSection";
import LivePricesSection from "@/components/LivePricesSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import ContactSectionWithFloatingButton from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ReviewSection } from "@/components/ReviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LivePricesSection />
        <ProductsSection />
        <CalculationSection />
        <GallerySection />
        <ContactSectionWithFloatingButton />
        <ReviewSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
