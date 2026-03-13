import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TreePine, Binoculars, PawPrint, Users } from "lucide-react";

const stats = [
  { icon: TreePine, value: 13, suffix: "", label: "Game Reserves", prefix: "" },
  { icon: Binoculars, value: 100, suffix: "K+", label: "Square Kilometers", prefix: "" },
  { icon: PawPrint, value: 500, suffix: "+", label: "Wildlife Species", prefix: "" },
  { icon: Users, value: 250, suffix: "K", label: "Annual Visitors", prefix: "" },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
      {prefix}{count}{suffix}
    </div>
  );
}

interface StatsItem {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
}

interface StatsSectionProps {
  items?: StatsItem[];
}

const StatsSection = ({ items }: StatsSectionProps) => {
  const displayItems = items || [
    { label: "Game Reserves", value: 13, suffix: "", prefix: "" },
    { label: "Square Kilometers", value: 100, suffix: "K+", prefix: "" },
    { label: "Wildlife Species", value: 500, suffix: "+", prefix: "" },
    { label: "Annual Visitors", value: 250, suffix: "K", prefix: "" },
  ];

  return (
    <section className="py-20 safari-gradient relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 border border-primary-foreground rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {displayItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <Binoculars className="w-8 h-8 text-safari-gold-light mx-auto mb-4" />
              <AnimatedCounter target={Number(stat.value)} suffix={stat.suffix || ""} prefix={stat.prefix || ""} />
              <p className="text-primary-foreground/70 font-medium text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
