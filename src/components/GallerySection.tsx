import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/dest-1.jpg", alt: "Aerial view of game reserve", category: "Landscape" },
  { src: "/images/dest-2.jpg", alt: "Lion at sunset", category: "Wildlife" },
  { src: "/images/dest-3.jpg", alt: "Elephants at waterhole", category: "Wildlife" },
  { src: "/images/dest-4.jpg", alt: "Giraffes with Kilimanjaro", category: "Landscape" },
  { src: "/images/dest-5.jpg", alt: "Hippos in river", category: "Wildlife" },
  { src: "/images/dest-6.jpg", alt: "Wildebeest migration", category: "Migration" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-safari-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-safari-gold font-medium text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="section-title text-foreground mt-3 mb-4">
            Captured <span className="text-safari-gold italic">Moments</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Stunning photography from Tanzania's most breathtaking game reserves.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground font-display font-semibold text-lg">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
