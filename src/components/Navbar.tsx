import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon, ChevronDown, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About TAWA", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      {/* Top Header Bar */}
      <div className={`bg-[#5F7F2E] text-white py-5 border-b border-white/5 transition-all duration-500 hidden md:block ${isScrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100 h-auto"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 pr-8 lg:pr-16">
            <img
              src="/coat_of_arms_transparent.png"
              alt="Tanzania Coat of Arms"
              className="h-20 lg:h-28 w-auto object-contain"
            />
          </div>
          <div className="flex-1 text-center font-montserrat space-y-2">
            <h1 className="text-sm sm:text-base lg:text-xl font-bold tracking-[0.2em] sm:tracking-[0.4em] text-yellow-300 uppercase">
              The United Republic of Tanzania
            </h1>
            <h2 className="text-base sm:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase">
              Tanzania Wildlife Management Authority (TAWA)
            </h2>
          </div>
          <div className="flex items-center justify-end pl-8 lg:pl-16">
            <img
              src="/tawa_logo_transparent.png"
              alt="TAWA Logo"
              className="h-20 lg:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-[#3d5219]/95 backdrop-blur-sm border-b border-white/10"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20 w-full gap-4">
            {/* Desktop Menu — perfectly centered using flex-1 */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-5 xl:gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative group px-1 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300
                      ${isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white hover:text-yellow-300"
                      }`}
                  >
                    {item.label}
                    <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full
                      ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side group */}
            <div className="flex items-center justify-end gap-2 lg:gap-3 flex-shrink-0">
              {/* Contact Link */}
              <a
                href="#contact"
                className={`hidden lg:flex relative group px-2 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300
                  ${isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-yellow-300"
                  }`}
              >
                Contact
                <span className={`absolute left-4 -bottom-0.5 h-[2px] w-0 group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full
                  ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
              </a>

              {/* Additional Professional Links Dropdown */}
              <div className="hidden lg:relative lg:flex items-center group mr-2">
                <button
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs tracking-wide uppercase transition-all border
                    ${isScrolled
                      ? "border-border text-foreground hover:bg-muted"
                      : "border-white/20 text-white hover:bg-white/10"
                    }`}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>Staff Services</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right p-1 z-50">
                  <div className="bg-background rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col p-1">
                    <a
                      href="https://portal.maliasili.go.tz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors flex items-center"
                    >
                      TAWA Portal
                    </a>
                    <a
                      href="https://mail.tawa.go.tz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors flex items-center"
                    >
                      Webmail
                    </a>
                  </div>
                </div>
              </div>

              {/* Plan Visit CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground font-medium text-sm transition-transform hover:scale-105 shadow-lg mr-2"
              >
                Plan Your Visit
              </a>

              {/* Theme Toggle — Far Right */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-6 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-3 rounded-lg gold-gradient text-primary-foreground font-medium text-center mt-4"
              >
                Plan Your Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
