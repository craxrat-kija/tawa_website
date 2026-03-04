import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, ChevronDown, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "../data/destinations";

const menuItems = [
  { label: "Home", href: "/#home" },
  {
    label: "About TAWA",
    href: "/about",
    bgImage: "/images/dest-2.jpg",
    viewAllHref: "/about",
    viewAllText: "Read About TAWA",
    dropdownItems: [
      { name: "Our History", href: "/about#history" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Management Team", href: "/about#management" },
      { name: "Conservation Efforts", href: "/about#conservation" },
    ]
  },
  {
    label: "Destinations",
    href: "/destinations",
    bgImage: "/images/dropdown-bg.jpg",
    viewAllHref: "/destinations",
    viewAllText: "View All 13 Reserves",
    useDestinations: true
  },
  {
    label: "News",
    href: "/news",
    bgImage: "/images/dest-3.jpg",
    viewAllHref: "/news",
    viewAllText: "All News & Press",
    dropdownItems: [
      { name: "Latest Updates", href: "/news#latest" },
      { name: "Press Releases", href: "/news#publications" },
      { name: "Publications", href: "/news#publications" },
      { name: "Events", href: "/news#events" },
    ]
  },
  {
    label: "Gallery",
    href: "/gallery",
    bgImage: "/images/dest-4.jpg",
    viewAllHref: "/gallery",
    viewAllText: "View Full Gallery",
    dropdownItems: [
      { name: "Wildlife Photography", href: "/gallery#wildlife" },
      { name: "Landscapes", href: "/gallery#landscapes" },
      { name: "Video Gallery", href: "/gallery#videos" },
      { name: "Virtual Tours", href: "/gallery#virtual" },
    ]
  },
];

interface MenuItem {
  label: string;
  href: string;
  isLocal?: boolean;
  bgImage?: string;
  viewAllHref?: string;
  viewAllText?: string;
  useDestinations?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

interface NavbarProps {
  customMenuItems?: MenuItem[];
}

const Navbar = ({ customMenuItems }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentMenuItems = customMenuItems || menuItems;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Initial theme setup
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
          <Link to="/" className="flex items-center gap-3 pr-8 lg:pr-16 hover:opacity-80 transition-opacity">
            <img
              src="/coat_of_arms_transparent.png"
              alt="Tanzania Coat of Arms"
              className="h-20 lg:h-28 w-auto object-contain"
            />
          </Link>
          <Link to="/" className="flex-1 text-center font-montserrat space-y-2 hover:opacity-80 transition-opacity">
            <h1 className="text-sm sm:text-base lg:text-xl font-bold tracking-[0.2em] sm:tracking-[0.4em] text-yellow-300 uppercase">
              The United Republic of Tanzania
            </h1>
            <h2 className="text-base sm:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase">
              Tanzania Wildlife Management Authority (TAWA)
            </h2>
          </Link>
          <Link to="/" className="flex items-center justify-end pl-8 lg:pl-16 hover:opacity-80 transition-opacity">
            <img
              src="/tawa_logo_transparent.png"
              alt="TAWA Logo"
              className="h-20 lg:h-28 w-auto object-contain"
            />
          </Link>
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
                {currentMenuItems.map((item) => (
                  (item.dropdownItems || item.useDestinations) ? (
                    <div key={item.label} className="relative group">
                      <Link
                        to={item.href}
                        className={`flex items-center gap-1 relative px-1 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300
                          ${isScrolled
                            ? "text-foreground hover:text-primary"
                            : "text-white hover:text-yellow-300"
                          }`}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-[calc(100%-1.25rem)] transition-all duration-300 rounded-full
                          ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                      </Link>

                      {/* Standardized Dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="relative bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border overflow-hidden p-2">
                          {/* Dynamic Aesthetic Background Image Overlay */}
                          <div
                            className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] bg-cover bg-center pointer-events-none"
                            style={{ backgroundImage: `url('${item.bgImage}')` }}
                          />

                          <div className="relative z-10 grid grid-cols-1 gap-1">
                            {item.useDestinations
                              ? destinations.slice(0, 6).map((dest) => (
                                <Link
                                  key={dest.id}
                                  to={`/destinations/${dest.id}`}
                                  className="relative px-4 py-3 text-base font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-md border border-border/50 shadow-sm"
                                >
                                  <div className="w-2 h-2 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity shadow-sm" />
                                  <span className="drop-shadow-sm">{dest.name}</span>
                                </Link>
                              ))
                              : item.dropdownItems?.map((dropItem, idx) => (
                                <Link
                                  key={idx}
                                  to={dropItem.href}
                                  className="relative px-4 py-3 text-base font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-md border border-border/50 shadow-sm"
                                >
                                  <div className="w-2 h-2 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity shadow-sm" />
                                  <span className="drop-shadow-sm">{dropItem.name}</span>
                                </Link>
                              ))
                            }
                          </div>
                          <div className="relative z-10 mt-2 border-t border-border/50">
                            <Link
                              to={item.viewAllHref as string}
                              className="block px-4 py-3 text-xs font-bold text-primary bg-background/70 hover:bg-background/95 rounded-b-lg text-center uppercase tracking-widest transition-colors backdrop-blur-sm"
                            >
                              {item.viewAllText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.isLocal ? (
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
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`relative group px-1 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300
                        ${isScrolled
                          ? "text-foreground hover:text-primary"
                          : "text-white hover:text-yellow-300"
                        }`}
                    >
                      {item.label}
                      <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full
                        ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Right side group */}
            <div className="flex items-center justify-end gap-2 lg:gap-3 flex-shrink-0">
              {/* Contact Link */}
              <Link
                to="/#contact"
                className={`hidden lg:flex relative group px-2 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300
                  ${isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-yellow-300"
                  }`}
              >
                Contact
                <span className={`absolute left-4 -bottom-0.5 h-[2px] w-0 group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full
                  ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
              </Link>

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
                  <div className="relative bg-card/95 backdrop-blur-md rounded-xl shadow-2xl border border-border overflow-hidden p-2">
                    {/* Aesthetic Background Image Overlay - Clearer Visibility */}
                    <div
                      className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: "url('/images/dest-1.jpg')" }}
                    />

                    <div className="relative z-10 flex flex-col gap-1">
                      <a
                        href="https://portal.maliasili.go.tz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-4 py-2.5 text-sm font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-lg transition-all flex items-center justify-center backdrop-blur-md border border-border/50 shadow-sm group/link"
                      >
                        <span className="drop-shadow-sm">TAWA Portal</span>
                      </a>
                      <a
                        href="https://mail.tawa.go.tz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-4 py-2.5 text-sm font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-lg transition-all flex items-center justify-center backdrop-blur-md border border-border/50 shadow-sm group/link"
                      >
                        <span className="drop-shadow-sm">Webmail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Visit CTA */}
              <Link
                to="/#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground font-medium text-sm transition-transform hover:scale-105 shadow-lg mr-2"
              >
                Plan Your Visit
              </Link>

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
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-y-auto max-h-[85vh]"
          >
            <div className="px-4 py-6 space-y-4">
              {currentMenuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  {item.isLocal ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-2 rounded-lg text-primary font-bold text-lg border-l-4 border-safari-gold bg-safari-gold/5 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-2 rounded-lg text-primary font-bold text-lg border-l-4 border-safari-gold bg-safari-gold/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {(item.dropdownItems || item.useDestinations) && (
                    <div className="grid grid-cols-1 gap-1 ml-4 border-l border-border pl-4">
                      {item.useDestinations
                        ? destinations.slice(0, 6).map((dest) => (
                          <Link
                            key={dest.id}
                            to={`/destinations/${dest.id}`}
                            onClick={() => setIsMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {dest.name}
                          </Link>
                        ))
                        : item.dropdownItems?.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            to={dropItem.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))
                      }
                      <Link
                        to={item.viewAllHref as string}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-3 py-2 text-xs font-bold text-safari-gold uppercase tracking-widest mt-1"
                      >
                        {item.viewAllText} →
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-border mt-4 space-y-3">
                <Link
                  to="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg border border-border text-foreground font-medium text-center hover:bg-muted transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg gold-gradient text-primary-foreground font-bold text-center shadow-lg"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
