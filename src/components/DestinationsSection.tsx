import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import OptimizedImage from "./OptimizedImage";

const DestinationsSection = () => {
  return (
    <section id="destinations" className="section-padding bg-safari-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-safari-gold font-medium text-sm uppercase tracking-widest">Explore</span>
          <h2 className="section-title text-foreground mt-3 mb-4">
            Our <span className="text-safari-gold italic">Destinations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From the vast Selous to the pristine Moyowosi, each game reserve offers a unique and unforgettable safari experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map((dest, i) => (
            <Link to={`/destinations/${dest.id}`} key={dest.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] shadow-lg hover:shadow-2xl transition-all"
              >
                <OptimizedImage
                  src={dest.image}
                  alt={`${dest.name} safari landscape`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  containerClassName="w-full h-full"
                />
                <div className="overlay-gradient absolute inset-0 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-safari-gold text-primary-foreground text-xs font-semibold backdrop-blur-md shadow">
                    {dest.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-primary-foreground text-xl mb-1">{dest.name}</h3>
                  <p className="text-primary-foreground/70 text-sm">{dest.area}</p>
                  <div className="flex items-center gap-1 mt-3 text-safari-gold font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Entity <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View All 13 Reserves
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
