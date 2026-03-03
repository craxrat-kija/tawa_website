import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DestinationsSection />
      <NewsSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
