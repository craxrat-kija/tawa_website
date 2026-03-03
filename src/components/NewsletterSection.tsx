import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 safari-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 border-2 border-primary-foreground rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-primary-foreground rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Stay Connected with the Wild
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Subscribe to receive the latest news, conservation updates, and exclusive safari offers.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-safari-gold-light font-semibold text-lg"
            >
              🎉 Thank you for subscribing!
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-safari-gold backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-lg gold-gradient text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
