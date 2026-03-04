import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, ChevronDown, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "../data/destinations";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    bgImage: "/images/dest-2.jpg",
    viewAllHref: "/about",
    viewAllText: "About TAWA",
    dropdownItems: [
      { name: "History", href: "/about#history" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Core Values", href: "/about#values" },
      { name: "Mandate", href: "/about#mandate" },
      { name: "Board of Directors", href: "/about#board" },
      { name: "Management", href: "/about#management" },
      { name: "Organization Structure", href: "/about#structure" },
    ]
  },
  {
    label: "Conservation",
    href: "/destinations",
    bgImage: "/images/dest-1.jpg",
    viewAllHref: "/destinations",
    viewAllText: "Wildlife Areas",
    dropdownItems: [
      {
        name: "Game Reserves",
        href: "/destinations",
        subItems: destinations.slice(0, 8).map(d => ({ name: d.name, href: `/destinations/${d.id}` }))
      },
      { name: "Game Controlled Areas", href: "/conservation#gca" },
      { name: "Wildlife Management Areas", href: "/conservation#wma" },
      { name: "Ramsar Sites", href: "/conservation#ramsar" },
      { name: "Historical Sites", href: "/conservation#historical" },
      { name: "Others", href: "/conservation#others" },
    ]
  },
  {
    label: "Tourism",
    href: "/tourism",
    bgImage: "/images/hero-safari.jpg",
    viewAllHref: "/tourism",
    viewAllText: "Tourism Center",
    dropdownItems: [
      { name: "Hunting Tourism", href: "/tourism#hunting" },
      { name: "Photographic Tourism", href: "/tourism#photographic" },
    ]
  },
  {
    label: "Investments",
    href: "/investments",
    bgImage: "/images/dest-1.jpg",
    viewAllHref: "/investments",
    viewAllText: "Investment Guide",
    dropdownItems: [
      { name: "Investment Opportunities", href: "/investments#opportunities" },
    ]
  },
  {
    label: "Media Centre",
    href: "/news",
    bgImage: "/images/dest-3.jpg",
    viewAllHref: "/news",
    viewAllText: "Media Portal",
    dropdownItems: [
      { name: "News & Text", href: "/news" },
      { name: "Pictures Gallery", href: "/gallery" },
      { name: "Video Gallery", href: "/gallery#videos" },
    ]
  },
  {
    label: "Publication",
    href: "/publications",
  },
  {
    label: "E-Service",
    href: "#",
    bgImage: "/images/dropdown-bg.jpg",
    viewAllHref: "https://portal.maliasili.go.tz/",
    viewAllText: "MNRT Portal",
    dropdownItems: [
      { name: "MNRT Portal", href: "https://portal.maliasili.go.tz/" },
      { name: "TAWA Webmail", href: "https://mail.tawa.go.tz/" },
      { name: "Utalii Kiganjani", href: "https://utalii.maliasili.go.tz/" },
    ]
  },
  {
    label: "Contact",
    href: "/#contact",
  },
  {
    label: "Plan Your Visit",
    href: "/#contact",
    isCTA: true
  }
];

interface DropdownItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface MenuItem {
  label: string;
  href: string;
  isLocal?: boolean;
  isCTA?: boolean;
  bgImage?: string;
  viewAllHref?: string;
  viewAllText?: string;
  useDestinations?: boolean;
  dropdownItems?: DropdownItem[];
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
              <div className="flex items-center gap-3 xl:gap-4 w-full justify-evenly px-2">
                {currentMenuItems.map((item) => (
                  (item.dropdownItems || item.useDestinations) ? (
                    <div key={item.label} className="relative group">
                      <Link
                        to={item.href}
                        className={`flex items-center gap-0.5 relative px-0.5 py-1 font-montserrat text-[10px] xl:text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                          ${isScrolled
                            ? "text-foreground hover:text-primary"
                            : "text-white hover:text-yellow-300"
                          }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-[calc(100%-0.75rem)] transition-all duration-300 rounded-full
                          ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                      </Link>

                      {/* Standardized Dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="relative bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-2">
                          {/* Dynamic Aesthetic Background Image Overlay */}
                          <div
                            className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] bg-cover bg-center rounded-2xl pointer-events-none"
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
                                <div key={idx} className="relative group/sub">
                                  {dropItem.subItems ? (
                                    <>
                                      <div className="relative px-4 py-3 text-base font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-xl transition-all flex items-center justify-between gap-3 group/link backdrop-blur-md border border-border/50 shadow-sm cursor-default">
                                        <div className="flex items-center gap-3">
                                          <div className="w-2 h-2 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity shadow-sm" />
                                          <span className="drop-shadow-sm">{dropItem.name}</span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 -rotate-90 transition-transform group-hover/sub:rotate-0" />
                                      </div>

                                      {/* Sub-dropdown Flyout */}
                                      <div className="absolute left-[calc(100%+0.5rem)] top-0 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-[60]">
                                        <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-2 space-y-1">
                                          {dropItem.subItems.map((sub, sIdx) => (
                                            <Link
                                              key={sIdx}
                                              to={sub.href}
                                              className="block px-4 py-2 text-sm font-bold text-foreground hover:text-primary hover:bg-background/80 rounded-lg transition-all"
                                            >
                                              {sub.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </>
                                  ) : dropItem.href.startsWith("http") ? (
                                    <a
                                      href={dropItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="relative px-4 py-3 text-base font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-md border border-border/50 shadow-sm"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity shadow-sm" />
                                      <span className="drop-shadow-sm">{dropItem.name}</span>
                                    </a>
                                  ) : (
                                    <Link
                                      to={dropItem.href}
                                      className="relative px-4 py-3 text-base font-black text-foreground hover:text-primary bg-background/60 hover:bg-background/95 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-md border border-border/50 shadow-sm"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity shadow-sm" />
                                      <span className="drop-shadow-sm">{dropItem.name}</span>
                                    </Link>
                                  )}
                                </div>
                              ))
                            }
                          </div>
                          <div className="relative z-10 mt-2 border-t border-border/50">
                            {item.viewAllHref?.startsWith("http") ? (
                              <a
                                href={item.viewAllHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-xs font-bold text-primary bg-background/70 hover:bg-background/95 rounded-b-lg text-center uppercase tracking-widest transition-colors backdrop-blur-sm"
                              >
                                {item.viewAllText}
                              </a>
                            ) : (
                              <Link
                                to={item.viewAllHref as string}
                                className="block px-4 py-3 text-xs font-bold text-primary bg-background/70 hover:bg-background/95 rounded-b-lg text-center uppercase tracking-widest transition-colors backdrop-blur-sm"
                              >
                                {item.viewAllText}
                              </Link>
                            )}
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
                  ) : item.isCTA ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`px-3 py-1.5 rounded-md font-montserrat text-[10px] xl:text-[11px] font-black uppercase tracking-tighter transition-all duration-300 hover:scale-105 shadow-sm
                        ${isScrolled
                          ? "gold-gradient text-primary-foreground"
                          : "bg-white text-primary hover:bg-yellow-300"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`relative group px-0.5 py-1 font-montserrat text-[10px] xl:text-[11px] font-bold uppercase tracking-wider transition-all duration-300
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
                  ) : item.isCTA ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl gold-gradient text-primary-foreground font-black text-center text-lg shadow-lg uppercase tracking-tight"
                    >
                      {item.label}
                    </Link>
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
                          <div key={idx} className="space-y-1">
                            {dropItem.href.startsWith("http") ? (
                              <a
                                href={dropItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                              >
                                {dropItem.name}
                              </a>
                            ) : (
                              <Link
                                to={dropItem.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                              >
                                {dropItem.name}
                              </Link>
                            )}

                            {dropItem.subItems && (
                              <div className="ml-4 border-l border-border/50 pl-4 py-1 space-y-1">
                                {dropItem.subItems.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={sub.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      }
                      {item.viewAllHref?.startsWith("http") ? (
                        <a
                          href={item.viewAllHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileOpen(false)}
                          className="block px-3 py-2 text-xs font-bold text-safari-gold uppercase tracking-widest mt-1"
                        >
                          {item.viewAllText} →
                        </a>
                      ) : (
                        <Link
                          to={item.viewAllHref as string}
                          onClick={() => setIsMobileOpen(false)}
                          className="block px-3 py-2 text-xs font-bold text-safari-gold uppercase tracking-widest mt-1"
                        >
                          {item.viewAllText} →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};

export default Navbar;
