import { motion } from "framer-motion";
import { Leaf, Shield, MapPin } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Conservation First",
      description: "Protecting Tanzania's wildlife heritage through sustainable management and anti-poaching efforts.",
    },
    {
      icon: MapPin,
      title: "13 Game Reserves",
      description: "Over 100,000 km² of pristine wilderness spanning diverse ecosystems across Tanzania.",
    },
    {
      icon: Leaf,
      title: "Eco-Tourism",
      description: "Promoting responsible tourism that benefits local communities and preserves biodiversity.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-safari-gold font-medium text-sm uppercase tracking-widest">About TAWA</span>
            <h2 className="section-title text-foreground mt-3 mb-6">
              Guardians of Tanzania's <span className="text-safari-gold italic">Wild Legacy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Tanzania Wildlife Management Authority (TAWA) is entrusted with the management and conservation of 
              wildlife resources outside national parks. We oversee game reserves, game controlled areas, and 
              wildlife management areas — protecting one of Africa's greatest natural treasures.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg safari-gradient flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg">{f.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/images/dest-2.jpg"
              alt="Lion overlooking savanna"
              className="rounded-2xl w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src="/images/dest-3.jpg"
              alt="Elephants at waterhole"
              className="rounded-2xl w-full h-64 object-cover mt-8"
              loading="lazy"
            />
            <img
              src="/images/dest-4.jpg"
              alt="Giraffes with Kilimanjaro"
              className="rounded-2xl w-full h-64 object-cover col-span-2"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
