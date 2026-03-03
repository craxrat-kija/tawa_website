import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About TAWA", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "News & Events", href: "#news" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ];

  const reserves = [
    "Selous Game Reserve",
    "Ikorongo & Grumeti",
    "Maswa Game Reserve",
    "Moyowosi Reserve",
    "Pande Game Reserve",
    "Lukwati & Piti",
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full safari-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">T</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground">TAWA</p>
                <p className="text-xs text-muted-foreground">Wildlife Authority</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Tanzania Wildlife Management Authority — conserving and managing Tanzania's wildlife heritage for future generations.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Reserves */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-5">Top Reserves</h3>
            <ul className="space-y-3">
              {reserves.map((r) => (
                <li key={r}>
                  <a href="#destinations" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-safari-gold shrink-0" />
                <p>Mpingo House, Nyerere Road<br />Dodoma, Tanzania</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-safari-gold shrink-0" />
                <p>+255 26 232 1504</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-safari-gold shrink-0" />
                <p>info@tawa.go.tz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Tanzania Wildlife Management Authority. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
