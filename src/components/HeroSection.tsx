import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  cta_text?: string;
  cta_link?: string;
}

const HeroSection = ({ title, subtitle, image, cta_text, cta_link }: HeroSectionProps) => {
  const displayTitle = title || "Discover the Wild Heart of Tanzania";
  const displaySubtitle = subtitle || "Explore 13 pristine game reserves spanning over 100,000 km² of untouched African wilderness. Where conservation meets adventure.";
  const displayImage = image ? (image.startsWith('http') ? image : `http://localhost:8000/storage/${image}`) : "/images/hero-safari.jpg";

  return (
    <section id="home" className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback Image / Background */}
        <img
          src={displayImage}
          alt="African elephants walking through Serengeti savanna at golden sunset"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Video Layer - Only show if no custom image is provided or keep as default */}
        {!image && (
          <div className="absolute inset-0 pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/v7p6VZiRInQ?autoplay=1&mute=1&loop=1&playlist=v7p6VZiRInQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&end=40&playsinline=1"
              className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 brightness-[1.15] saturate-[1.3] contrast-[1.1] focus:outline-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Tanzania Wildlife Background Video"
              frameBorder="0"
            />
          </div>
        )}

        {/* Overlays */}
        <div className="hero-overlay absolute inset-0 mix-blend-multiply opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-safari-dark/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >


          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
            {displayTitle.split(' ').map((word, i) => (
              word.toLowerCase() === 'wild' || word.toLowerCase() === 'heart' ? (
                <span key={i} className="text-safari-gold italic block sm:inline"> {word} </span>
              ) : (
                <span key={i}> {word}</span>
              )
            ))}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-xl mb-10 leading-relaxed">
            {displaySubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={cta_link || "#destinations"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient text-primary-foreground font-semibold text-base transition-transform hover:scale-105 shadow-xl"
            >
              {cta_text || "Explore Destinations"}
            </a>
            {!cta_text && (
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium text-base backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </a>
            )}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
