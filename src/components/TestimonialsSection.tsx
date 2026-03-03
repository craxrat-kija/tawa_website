import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    text: "The Selous Game Reserve was absolutely breathtaking. We saw the Big Five in just two days. TAWA's conservation efforts are truly remarkable.",
    rating: 5,
  },
  {
    name: "Hans Weber",
    country: "Germany",
    text: "An authentic African safari experience. The guides were incredibly knowledgeable, and the wildlife encounters were beyond our wildest dreams.",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    text: "Moyowosi was unlike anything I've ever experienced. The untouched wilderness and diverse birdlife made it a photographer's paradise.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-safari-gold font-medium text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="section-title text-foreground mt-3">
            What <span className="text-safari-gold italic">Visitors</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote className="w-10 h-10 text-safari-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-safari-gold text-safari-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
