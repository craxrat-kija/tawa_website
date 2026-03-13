import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, ChevronDown, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "../data/destinations";
import LanguageChanger from "./LanguageChanger";
import { PresentationModal } from "./PresentationModal";

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
      {
        name: "Zones",
        href: "/about#zones",
        subItems: [
          { name: "Northern Zone", href: "/about/zones/northern" },
          { name: "Coastal Zone", href: "/about/zones/coastal" },
          { name: "Lake Zone", href: "/about/zones/lake" },
          { name: "Western Zone", href: "/about/zones/western" },
          { name: "Central Zone", href: "/about/zones/central" },
          { name: "Southern Zone", href: "/about/zones/southern" },
          { name: "Southern Highlands Zone", href: "/about/zones/southern-highlands" },
        ]
      },
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
    dropdownItems: [
      { name: "MNRT Portal", href: "https://portal.maliasili.go.tz/" },
      { name: "TAWA Webmail", href: "https://mail.tawa.go.tz/" },
      { name: "Utalii Kiganjani", href: "https://utalii.maliasili.go.tz/" },
    ]
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

// ─── Animation variants ──────────────────────────────────────────────────────
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0, y: -6, scale: 0.97, filter: "blur(3px)",
    transition: { duration: 0.15 }
  }
};

const subDropdownVariants = {
  hidden: { opacity: 0, x: -14, scale: 0.96, filter: "blur(3px)" },
  visible: {
    opacity: 1, x: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0, x: -10, scale: 0.97,
    transition: { duration: 0.12 }
  }
};

const itemVariants = (i: number) => ({
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1, x: 0,
    transition: { delay: i * 0.045 + 0.07, duration: 0.2, ease: "easeOut" }
  }
});

const subItemVariants = (i: number) => ({
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1, x: 0,
    transition: { delay: i * 0.038 + 0.05, duration: 0.18, ease: "easeOut" }
  }
});

const Navbar = ({ customMenuItems }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentMenuItems = customMenuItems || menuItems;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenuFn = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeMenuFn = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSubMenu(null);
    }, 130);
  };
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

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
            <img src="/coat_of_arms_transparent.png" alt="Tanzania Coat of Arms" className="h-20 lg:h-28 w-auto object-contain" />
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
            <img src="/tawa_logo_transparent.png" alt="TAWA Logo" className="h-20 lg:h-28 w-auto object-contain" />
          </Link>
        </div>
      </div>

      <div className={`transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-[#3d5219]/95 backdrop-blur-sm border-b border-white/10"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20 w-full gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-3 xl:gap-4 w-full justify-evenly px-2">
                {currentMenuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100 }}
                  >
                    {(item.dropdownItems || item.useDestinations) ? (
                      <div
                        className="relative"
                        onMouseEnter={() => openMenuFn(item.label)}
                        onMouseLeave={closeMenuFn}
                      >
                        {/* Trigger Link */}
                        <Link
                          to={item.href}
                          className={`flex items-center gap-0.5 relative px-0.5 py-1 font-montserrat text-[10px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-yellow-300"}`}
                        >
                          {item.label}
                          <motion.span
                            animate={{ rotate: openMenu === item.label ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="inline-flex"
                          >
                            <ChevronDown className="w-3 h-3" />
                          </motion.span>
                          <motion.span
                            className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full ${isScrolled ? "bg-primary" : "bg-yellow-300"}`}
                            animate={{ width: openMenu === item.label ? "calc(100% - 0.75rem)" : "0%" }}
                            transition={{ duration: 0.25 }}
                          />
                        </Link>

                        {/* Main Dropdown */}
                        <AnimatePresence>
                          {openMenu === item.label && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[17rem] z-50"
                              onMouseEnter={keepOpen}
                              onMouseLeave={closeMenuFn}
                            >
                              <div className="relative bg-card/97 backdrop-blur-2xl rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.22)] border border-border/60 p-2 overflow-hidden">
                                {/* Background image — fades in after container */}
                                <motion.div
                                  initial={{ opacity: 0, scale: 1.08 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: 0.05 }}
                                  className="absolute inset-0 opacity-[0.28] dark:opacity-[0.1] bg-cover bg-center rounded-2xl pointer-events-none"
                                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                                />

                                <div className="relative z-10 grid grid-cols-1 gap-0.5">
                                  {item.useDestinations
                                    ? destinations.slice(0, 6).map((dest, dIdx) => (
                                      <motion.div key={dest.id} variants={itemVariants(dIdx)} initial="hidden" animate="visible">
                                        <Link
                                          to={`/destinations/${dest.id}`}
                                          className="relative px-4 py-2.5 text-sm font-black text-foreground hover:text-primary bg-background/50 hover:bg-background/90 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-sm border border-border/30 shadow-sm"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                          {dest.name}
                                        </Link>
                                      </motion.div>
                                    ))
                                    : item.dropdownItems?.map((dropItem, dIdx) => (
                                      <motion.div key={dIdx} variants={itemVariants(dIdx)} initial="hidden" animate="visible" className="relative">
                                        {dropItem.subItems ? (
                                          // ── Sub-menu trigger item ──
                                          <div
                                            className="relative"
                                            onMouseEnter={() => { keepOpen(); setOpenSubMenu(dropItem.name); }}
                                            onMouseLeave={() => setOpenSubMenu(null)}
                                          >
                                            <div className={`px-4 py-2.5 text-sm font-black rounded-xl transition-all flex items-center justify-between gap-3 backdrop-blur-sm border shadow-sm cursor-default
                                              ${openSubMenu === dropItem.name
                                                ? "text-primary bg-primary/10 border-primary/30"
                                                : "text-foreground hover:text-primary bg-background/50 hover:bg-background/80 border-border/30"
                                              }`}
                                            >
                                              <div className="flex items-center gap-3">
                                                <motion.span
                                                  className="w-1.5 h-1.5 rounded-full bg-primary"
                                                  animate={{ scale: openSubMenu === dropItem.name ? 1 : 0 }}
                                                  transition={{ duration: 0.15 }}
                                                />
                                                {dropItem.name}
                                              </div>
                                              <motion.div
                                                animate={{ x: openSubMenu === dropItem.name ? 2 : 0 }}
                                                transition={{ duration: 0.15 }}
                                              >
                                                <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-primary/70" />
                                              </motion.div>
                                            </div>

                                            {/* ── Animated Sub-dropdown ── */}
                                            <AnimatePresence>
                                              {openSubMenu === dropItem.name && (
                                                <motion.div
                                                  variants={subDropdownVariants}
                                                  initial="hidden"
                                                  animate="visible"
                                                  exit="exit"
                                                  className="absolute left-[calc(100%+0.5rem)] top-0 w-64 z-[60]"
                                                >
                                                  <div className="bg-card/98 backdrop-blur-2xl rounded-2xl shadow-[0_20px_72px_rgba(0,0,0,0.28)] border border-border/60 p-2 overflow-hidden">
                                                    {/* Decorative top accent */}
                                                    <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-2 opacity-70" />

                                                    <div className="space-y-0.5">
                                                      {dropItem.subItems.map((sub, sIdx) => (
                                                        <motion.div
                                                          key={sIdx}
                                                          variants={subItemVariants(sIdx)}
                                                          initial="hidden"
                                                          animate="visible"
                                                        >
                                                          <Link
                                                            to={sub.href}
                                                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:text-primary hover:bg-primary/8 rounded-xl transition-all group/sub"
                                                          >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/sub:bg-primary group-hover/sub:scale-125 transition-all flex-shrink-0" />
                                                            {sub.name}
                                                          </Link>
                                                        </motion.div>
                                                      ))}
                                                    </div>

                                                    {/* ── View All [Zone name] ── */}
                                                    <motion.div
                                                      initial={{ opacity: 0, y: 4 }}
                                                      animate={{ opacity: 1, y: 0 }}
                                                      transition={{ delay: dropItem.subItems.length * 0.038 + 0.12 }}
                                                      className="mt-2 pt-2 border-t border-border/50"
                                                    >
                                                      <Link
                                                        to={dropItem.href}
                                                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-black text-primary hover:bg-primary/10 rounded-xl transition-all uppercase tracking-widest group/va"
                                                      >
                                                        <span>View All {dropItem.name}</span>
                                                        <motion.span
                                                          animate={{ x: [0, 3, 0] }}
                                                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                                        >→</motion.span>
                                                      </Link>
                                                    </motion.div>
                                                  </div>
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          </div>
                                        ) : dropItem.href.startsWith("http") ? (
                                          <a
                                            href={dropItem.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative px-4 py-2.5 text-sm font-black text-foreground hover:text-primary bg-background/50 hover:bg-background/90 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-sm border border-border/30 shadow-sm"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                            {dropItem.name}
                                            <LinkIcon className="w-3 h-3 ml-auto opacity-30" />
                                          </a>
                                        ) : (
                                          <Link
                                            to={dropItem.href}
                                            className="relative px-4 py-2.5 text-sm font-black text-foreground hover:text-primary bg-background/50 hover:bg-background/90 rounded-xl transition-all flex items-center gap-3 group/link backdrop-blur-sm border border-border/30 shadow-sm"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-safari-gold opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                            {dropItem.name}
                                          </Link>
                                        )}
                                      </motion.div>
                                    ))
                                  }
                                </div>

                                {/* ── View All footer ── */}
                                {item.viewAllHref && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: (item.dropdownItems?.length || 6) * 0.045 + 0.15 }}
                                    className="relative z-10 mt-1.5 pt-1.5 border-t border-border/40"
                                  >
                                    {item.viewAllHref.startsWith("http") ? (
                                      <a
                                        href={item.viewAllHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2.5 text-[10px] font-black text-primary hover:bg-primary/10 rounded-xl text-center uppercase tracking-widest transition-colors"
                                      >
                                        {item.viewAllText}
                                      </a>
                                    ) : (
                                      <Link
                                        to={item.viewAllHref}
                                        className="block px-4 py-2.5 text-[10px] font-black text-primary hover:bg-primary/10 rounded-xl text-center uppercase tracking-widest transition-colors"
                                      >
                                        {item.viewAllText}
                                      </Link>
                                    )}
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.isLocal ? (
                      <a
                        href={item.href}
                        className={`relative group px-1 py-1 font-montserrat text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-yellow-300"}`}
                      >
                        {item.label}
                        <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                      </a>
                    ) : item.isCTA ? (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0px 0px 0px 0px rgba(234, 180, 5, 0)",
                            "0px 0px 15px 5px rgba(234, 180, 5, 0.4)",
                            "0px 0px 0px 0px rgba(234, 180, 5, 0)",
                          ],
                        }}
                        transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
                        className="rounded-md"
                      >
                        <Link
                          to={item.href}
                          className={`px-3 py-1.5 rounded-md font-montserrat text-[10px] xl:text-[11px] font-black uppercase tracking-tighter whitespace-nowrap transition-all duration-300 shadow-sm block ${isScrolled ? "gold-gradient text-primary-foreground" : "bg-white text-primary hover:bg-yellow-300"}`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`relative group px-0.5 py-1 font-montserrat text-[10px] xl:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-yellow-300"}`}
                      >
                        {item.label}
                        <span className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full ${isScrolled ? "bg-primary" : "bg-yellow-300"}`} />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side group */}
            <div className="flex items-center justify-end gap-2 lg:gap-3 flex-shrink-0">
              <PresentationModal />
              <LanguageChanger isScrolled={isScrolled} />
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
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
                                {/* Mobile View All */}
                                <Link
                                  to={dropItem.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-3 py-1.5 text-xs font-black text-primary uppercase tracking-widest"
                                >
                                  View All {dropItem.name} →
                                </Link>
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
    </motion.nav>
  );
};

export default Navbar;
