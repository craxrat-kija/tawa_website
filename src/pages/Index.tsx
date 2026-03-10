import { useEffect, useState } from "react";
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
import UpdateNotification from "@/components/UpdateNotification";
import { api } from "@/api";
import { motion } from "framer-motion";

const Index = () => {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    // Fetch page structure from backend (optional - fallback to default layout)
    api.getPage('home')
      .then(res => setPageData(res.data))
      .catch(err => {
        console.warn("Backend not available, using default layout:", err.message);
        // Continue with default layout when backend is unavailable
        setPageData(null);
      });
  }, []);

  const renderSection = (section: any, index: number) => {
    const key = `section-${index}`;
    switch (section.type) {
      case 'hero':
        return <HeroSection key={key} {...section.data} />;
      case 'about':
        return <AboutSection key={key} {...section.data} />;
      case 'stats':
        return <StatsSection key={key} {...section.data} />;
      case 'destinations':
        return <DestinationsSection key={key} />;
      case 'news':
        return <NewsSection key={key} />;
      case 'gallery':
        return <GallerySection key={key} {...section.data} />;
      case 'testimonials':
        return <TestimonialsSection key={key} />;
      case 'newsletter':
        return <NewsletterSection key={key} />;
      case 'rich_text':
        return (
          <section key={key} className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-lg" dangerouslySetInnerHTML={{ __html: section.data.content }} />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />

      {/* Dynamic Content or Static Fallback */}
      {pageData && pageData.content ? (
        pageData.content.map((section: any, idx: number) => renderSection(section, idx))
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <DestinationsSection />
          <NewsSection />
          <GallerySection />
          <TestimonialsSection />
          <NewsletterSection />
        </>
      )}

      <Footer />
      <UpdateNotification />
      <ScrollToTop />
    </div>
  );
};

export default Index;
