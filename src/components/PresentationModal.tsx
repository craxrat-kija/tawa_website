import { useState } from "react";
import { FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface PresentationSlide {
  title: string;
  content: string[];
}

const presentationSlides: PresentationSlide[] = [
  {
    title: "TAWA WILDLIFE EXPLORER",
    content: [
      "Professional Website Presentation",
      "Tanzania Wildlife Management Authority",
      "March 10, 2026",
      "",
      "Official digital gateway showcasing Tanzania's wildlife heritage",
      "and promoting sustainable conservation efforts"
    ]
  },
  {
    title: "EXECUTIVE OVERVIEW",
    content: [
      "The Tanzania Wildlife Explorer is a sophisticated, modern web application",
      "representing the Tanzania Wildlife Management Authority",
      "",
      "KEY PURPOSE:",
      "✓ Showcase Tanzania's wildlife heritage",
      "✓ Manage game reserves information",
      "✓ Promote sustainable conservation",
      "✓ Provide tourism and investment opportunities"
    ]
  },
  {
    title: "TECHNOLOGY STACK",
    content: [
      "Frontend: React 18+ with TypeScript",
      "Build: Vite for fast development",
      "Styling: Tailwind CSS + Framer Motion",
      "UI: Radix UI (40+ components)",
      "State: TanStack React Query",
      "AI: Google Generative AI",
      "Testing: Vitest + ESLint"
    ]
  },
  {
    title: "CORE FEATURES",
    content: [
      "1. Interactive Destinations - 13 game reserves",
      "2. Media Gallery - Professional photography",
      "3. News & Updates - Press releases & events",
      "4. Organizational Info - Structure & contacts",
      "5. AI Chatbot - 24/7 visitor support",
      "6. Tourism Information - Guidelines & booking",
      "7. Investment Portal - Opportunities & data",
      "8. Publications - Research & resources",
      "9. Conservation - Initiatives & impact"
    ]
  },
  {
    title: "WEBSITE PAGES",
    content: [
      "✓ Home - Hero, stats, featured content",
      "✓ Destinations - List & detailed pages",
      "✓ About TAWA - History, mission, team",
      "✓ Conservation - Initiatives & projects",
      "✓ Gallery - Wildlife photography",
      "✓ News - Updates & announcements",
      "✓ Tourism - Visitor information",
      "✓ Investments - Opportunities",
      "✓ Publications - Research & documents"
    ]
  },
  {
    title: "COMPONENT ARCHITECTURE",
    content: [
      "Layout Components:",
      "  • Navbar (Advanced navigation)",
      "  • Footer, ScrollToTopWrapper",
      "",
      "Section Components:",
      "  • HeroSection, AboutSection",
      "  • GallerySection, NewsSection, StatsSection",
      "",
      "Interactive Components:",
      "  • Chatbot, OrgChart, OptimizedImage"
    ]
  },
  {
    title: "DESIGN SYSTEM",
    content: [
      "Visual Identity:",
      "✓ Professional brand colors",
      "✓ WCAG AA compliance",
      "✓ Dark & light mode support",
      "",
      "User Experience:",
      "✓ Smooth animations",
      "✓ Responsive design",
      "✓ Loading states & feedback",
      "✓ Mobile-first approach"
    ]
  },
  {
    title: "PERFORMANCE",
    content: [
      "Optimization Techniques:",
      "✓ Vite for optimized builds",
      "✓ Code splitting by routes",
      "✓ Image lazy loading",
      "✓ React Query caching",
      "",
      "Performance Metrics:",
      "✓ < 3 second load time",
      "✓ 60fps smooth animations",
      "✓ Minimal bundle size"
    ]
  },
  {
    title: "AI & INTELLIGENT FEATURES",
    content: [
      "Chatbot Capabilities:",
      "✓ Google Generative AI integration",
      "✓ 24/7 visitor support",
      "✓ Context-aware responses",
      "",
      "Knowledge Base:",
      "✓ Wildlife information",
      "✓ Destination recommendations",
      "✓ Tourism guidance",
      "✓ Investment details"
    ]
  },
  {
    title: "SECURITY & COMPLIANCE",
    content: [
      "Security Measures:",
      "✓ Static site architecture",
      "✓ HTTPS/TLS encryption",
      "✓ Form input validation",
      "",
      "Compliance Standards:",
      "✓ WCAG 2.1 AA accessibility",
      "✓ GDPR-compliant newsletter",
      "✓ Core Web Vitals optimized",
      "✓ SEO-friendly structure"
    ]
  },
  {
    title: "SCALABILITY & GROWTH",
    content: [
      "Current Architecture Supports:",
      "✓ Unlimited content scaling",
      "✓ Global CDN distribution",
      "✓ Millions of concurrent users",
      "",
      "Future Enhancements:",
      "→ Backend API development",
      "→ Mobile applications",
      "→ Multi-language support",
      "→ E-commerce integration"
    ]
  },
  {
    title: "PROJECT STATISTICS",
    content: [
      "Content:",
      "  ➤ 11 Primary pages",
      "  ➤ 13 Game reserves featured",
      "  ➤ 40+ UI components",
      "",
      "Code Quality:",
      "  ➤ Full TypeScript",
      "  ➤ 80+ npm packages",
      "  ➤ Test framework included"
    ]
  },
  {
    title: "KEY STRENGTHS",
    content: [
      "Technical Excellence:",
      "✓ Modern React with Vite",
      "✓ Type-safe development",
      "✓ Responsive design",
      "",
      "User Experience:",
      "✓ Intuitive navigation",
      "✓ Dark mode support",
      "✓ Accessible & engaging"
    ]
  },
  {
    title: "DEVELOPMENT WORKFLOW",
    content: [
      "Development Commands:",
      "  npm run dev         - Start dev server",
      "  npm run build       - Production build",
      "  npm run lint        - Code quality check",
      "  npm run test        - Run tests",
      "",
      "Build Features:",
      "✓ Hot Module Replacement (HMR)",
      "✓ Tree-shaking optimization",
      "✓ Source maps for debugging"
    ]
  },
  {
    title: "DEPLOYMENT & HOSTING",
    content: [
      "Hosting Options:",
      "✓ GitHub Pages",
      "✓ Netlify",
      "✓ Vercel",
      "✓ AWS S3 + CloudFront",
      "✓ Any static hosting provider",
      "",
      "Requirements:",
      "✓ Node.js LTS or Bun",
      "✓ HTTPS enabled"
    ]
  },
  {
    title: "TESTING & QA",
    content: [
      "Testing Framework:",
      "✓ Vitest for unit testing",
      "✓ TypeScript strict mode",
      "✓ Accessibility compliance",
      "",
      "Browser Support:",
      "✓ Chrome (latest 2-3 versions)",
      "✓ Firefox, Safari, Edge",
      "✓ Mobile browsers"
    ]
  },
  {
    title: "STRATEGIC RECOMMENDATIONS",
    content: [
      "Short-term (1-3 months):",
      "→ Enhance destination details",
      "→ Advanced search features",
      "→ Content expansion",
      "",
      "Medium-term (3-6 months):",
      "→ Backend API development",
      "→ Booking system integration",
      "→ CMS implementation"
    ]
  },
  {
    title: "MARKET POSITIONING",
    content: [
      "Unique Advantages:",
      "✓ Professional organization backing",
      "✓ Authentic wildlife expertise",
      "✓ Integrated AI chatbot",
      "✓ Comprehensive content",
      "",
      "Target Audience:",
      "→ Wildlife enthusiasts",
      "→ Potential investors",
      "→ Researchers & scientists"
    ]
  },
  {
    title: "SUCCESS METRICS",
    content: [
      "Technical KPIs:",
      "  📊 < 3s page load time",
      "  📊 Lighthouse score > 90",
      "  📊 99.9% uptime target",
      "",
      "Business KPIs:",
      "  📈 Monthly active users",
      "  📈 Tourism inquiries",
      "  📈 Investment partnerships",
      "  📈 Newsletter subscribers"
    ]
  },
  {
    title: "FINANCIAL & ROI",
    content: [
      "Operational Costs:",
      "  • Hosting: $0-50/month",
      "  • CDN: $0-100/month",
      "  • Maintenance: 10-20 hours/month",
      "",
      "Return on Investment:",
      "✓ Tourism revenue increase",
      "✓ Investment partnerships",
      "✓ Improved brand reputation",
      "✓ Educational outreach"
    ]
  },
  {
    title: "IMPLEMENTATION TIMELINE",
    content: [
      "Q1 2026 (Current):",
      "  ✓ Website live and operational",
      "  ✓ User feedback collection",
      "  ✓ Analytics setup",
      "",
      "Q2 2026:",
      "  → Mobile optimization",
      "  → Content expansion",
      "  → SEO enhancement",
      "",
      "Q3-Q4 2026:",
      "  → Backend API development",
      "  → Mobile app prototypes"
    ]
  },
  {
    title: "CONCLUSION",
    content: [
      "The TAWA Wildlife Explorer represents:",
      "",
      "✓ Modern architecture supporting growth",
      "✓ User-centric design excellence",
      "✓ Technical achievement & quality",
      "✓ Strategic value for TAWA",
      "",
      "Vision:",
      "Global leader in wildlife tourism & conservation",
      "innovation through modern technology"
    ]
  },
  {
    title: "CONTACT & NEXT STEPS",
    content: [
      "Repository:",
      "  https://github.com/craxrat-kija/tawa_website",
      "",
      "Status: Active Development (Production Ready)",
      "Version: 1.0",
      "Last Updated: March 10, 2026",
      "",
      "Questions or collaboration opportunities?",
      "Contact TAWA Leadership for partnerships"
    ]
  }
];

export function PresentationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % presentationSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + presentationSlides.length) % presentationSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = presentationSlides[currentSlide];

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-lg text-muted-foreground hover:text-primary transition-colors"
        title="View Presentation"
      >
        <FileText className="w-5 h-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>TAWA Wildlife Explorer - Professional Presentation</DialogTitle>
            <DialogClose />
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="py-8"
              >
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  {slide.title}
                </h2>
                <div className="space-y-3 text-base leading-relaxed">
                  {slide.content.map((line, index) => (
                    <p key={index} className="text-foreground/90">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t pt-4 px-6">
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mb-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="gap-2"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} of {presentationSlides.length}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="gap-2"
                disabled={currentSlide === presentationSlides.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Slide Indicator */}
            <div className="flex gap-1 flex-wrap">
              {presentationSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted w-2 hover:bg-muted-foreground"
                    }`}
                  title={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PresentationModal;
