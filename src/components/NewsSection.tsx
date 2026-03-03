import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    category: "Conservation",
    title: "TAWA Launches New Anti-Poaching Initiative Across Southern Reserves",
    excerpt: "A comprehensive strategy to protect endangered species using modern technology and community engagement.",
    date: "Feb 28, 2026",
    image: "/images/dest-6.jpg",
  },
  {
    category: "Tourism",
    title: "Record Number of International Visitors to Selous Game Reserve",
    excerpt: "2025 saw a 35% increase in tourism, highlighting Tanzania's growing appeal as a safari destination.",
    date: "Feb 15, 2026",
    image: "/images/dest-1.jpg",
  },
  {
    category: "Events",
    title: "World Wildlife Day Celebration at Ikorongo & Grumeti Reserves",
    excerpt: "Join us for a week of educational programs, guided walks, and conservation workshops.",
    date: "Mar 3, 2026",
    image: "/images/dest-5.jpg",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-safari-gold font-medium text-sm uppercase tracking-widest">Stay Updated</span>
            <h2 className="section-title text-foreground mt-3">Latest <span className="text-safari-gold italic">News</span></h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
            View all news <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
