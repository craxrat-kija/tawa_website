import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Trees as Tree, Mountain, Droplets, MapPin, Landmark, ArrowRight, BookOpenText, Leaf, Footprints, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ConservationSite {
    name: string;
    image: string;
    id: string;
}

interface ConservationCategory {
    id: string;
    name: string;
    icon: JSX.Element;
    image: string;
    description: string;
    stats: {
        count: string;
        area: string;
    };
    sites: ConservationSite[];
}

const conservationCategories: ConservationCategory[] = [
    {
        id: "gr",
        name: "Game Reserves (GR)",
        icon: <Leaf className="w-8 h-8" />,
        image: "/images/dest-2.jpg",
        description: "Game Reserves are strictly protected areas where wildlife conservation is the primary objective. These areas offer some of Tanzania's most pristine wilderness and diverse ecosystems.",
        stats: { count: "28 Areas", area: "85,600 km²" },
        sites: [
            { name: "Selous", image: "/images/dest-1.jpg", id: "selous" },
            { name: "Rungwa", image: "/images/dest-2.jpg", id: "rungwa" },
            { name: "Liparamba", image: "/images/dest-3.jpg", id: "liparamba" },
            { name: "Uwanda", image: "/images/hero-safari.jpg", id: "uwanda" },
            { name: "Ugalla", image: "/images/dest-4.jpg", id: "ugalla" },
            { name: "Maswa", image: "/images/dest-5.jpg", id: "maswa" },
            { name: "Kizigo", image: "/images/dest-1.jpg", id: "kizigo" },
            { name: "Moyowosi", image: "/images/dest-2.jpg", id: "moyowosi" },
            { name: "Grumeti", image: "/images/dest-3.jpg", id: "grumeti" },
            { name: "Ikorongo", image: "/images/dest-4.jpg", id: "ikorongo" },
            { name: "Lwafi", image: "/images/dest-5.jpg", id: "lwafi" },
            { name: "Kijereshi", image: "/images/dest-1.jpg", id: "kijereshi" },
            { name: "Muhesi", image: "/images/dest-2.jpg", id: "muhesi" },
            { name: "Pande", image: "/images/dest-3.jpg", id: "pande" },
            { name: "Lukwika-Lumesule", image: "/images/dest-4.jpg", id: "lukwika" },
            { name: "Msanjesi", image: "/images/dest-5.jpg", id: "msanjesi" },
            { name: "Rukwa", image: "/images/dest-1.jpg", id: "rukwa" },
            { name: "Mkungunero", image: "/images/dest-2.jpg", id: "mkungunero" },
            { name: "Swagaswaga", image: "/images/dest-3.jpg", id: "swagaswaga" },
            { name: "Lukwati", image: "/images/dest-4.jpg", id: "lukwati" },
            { name: "Mpanga-Kipengere", image: "/images/dest-5.jpg", id: "mpanga" },
            { name: "Piti", image: "/images/dest-1.jpg", id: "piti" },
            { name: "Igombe", image: "/images/dest-2.jpg", id: "igombe" },
            { name: "Wembere", image: "/images/dest-3.jpg", id: "wembere" },
            { name: "Wami-Mbiki", image: "/images/dest-4.jpg", id: "wami" },
            { name: "Luganzo-Tongwe", image: "/images/dest-5.jpg", id: "luganzo" },
            { name: "Inyonga", image: "/images/dest-1.jpg", id: "inyonga" },
            { name: "Kilombero", image: "/images/dest-2.jpg", id: "kilombero" }
        ]
    },
    {
        id: "gca",
        name: "Game Controlled Areas (GCA)",
        icon: <ShieldCheck className="w-8 h-8" />,
        image: "/images/dest-1.jpg",
        description: "Game Controlled Areas are established to balance wildlife management with sustainable land use by local communities. TAWA oversees hunting and environmental protection in these zones.",
        stats: { count: "21 Areas", area: "15,800 km²" },
        sites: [
            { name: "Lake Natron", image: "/images/dest-3.jpg", id: "lake-natron" },
            { name: "Kalimawe", image: "/images/dest-4.jpg", id: "kalimawe" },
            { name: "Kitwai", image: "/images/dest-5.jpg", id: "kitwai" },
            { name: "Lolkisale", image: "/images/dest-1.jpg", id: "lolkisale" },
            { name: "Ruvu Maasai", image: "/images/dest-2.jpg", id: "ruvu-maasai" },
            { name: "Ruvu Same", image: "/images/dest-3.jpg", id: "ruvu-same" },
            { name: "Simanjiro", image: "/images/dest-4.jpg", id: "simanjiro" },
            { name: "Mto wa Mbu", image: "/images/dest-5.jpg", id: "mto-wa-mbu" },
            { name: "Longido", image: "/images/dest-1.jpg", id: "longido" },
            { name: "Umba River", image: "/images/dest-2.jpg", id: "umba-river" },
            { name: "Handeni", image: "/images/dest-3.jpg", id: "handeni" },
            { name: "Burunge", image: "/images/dest-4.jpg", id: "burunge" },
            { name: "Muhuwesi", image: "/images/dest-5.jpg", id: "muhuwesi" },
            { name: "Mwambesi", image: "/images/dest-1.jpg", id: "mwambesi" },
            { name: "Kihurumira Pool", image: "/images/dest-2.jpg", id: "kihurumira" },
            { name: "Lunda Mkwambi", image: "/images/dest-3.jpg", id: "lunda" },
            { name: "Ugunda", image: "/images/dest-4.jpg", id: "ugunda" },
            { name: "Igombe Dam", image: "/images/dest-5.jpg", id: "igombe-dam" },
            { name: "Gombe", image: "/images/dest-1.jpg", id: "gombe" },
            { name: "Miele", image: "/images/dest-2.jpg", id: "miele" },
            { name: "Msima", image: "/images/dest-3.jpg", id: "msima" }
        ]
    },
    {
        id: "wma",
        name: "Wildlife Management Areas (WMA)",
        icon: <Tree className="w-8 h-8" />,
        image: "/images/dest-2.jpg",
        description: "Community-owned conservation areas where locals directly manage and benefit from wildlife resources through sustainable tourism and regulated utilization.",
        stats: { count: "24 Areas", area: "28,300 km²" },
        sites: [
            { name: "Burunge (JUHIBU)", image: "/images/dest-4.jpg", id: "burunge-wma" },
            { name: "Enduimet", image: "/images/dest-5.jpg", id: "enduimet" },
            { name: "Randilen (Lolkisale)", image: "/images/dest-1.jpg", id: "randilen" },
            { name: "Makame (INDEMA)", image: "/images/dest-2.jpg", id: "makame" },
            { name: "Ikona (JUHIWAIKO)", image: "/images/dest-3.jpg", id: "ikona" },
            { name: "Makao", image: "/images/dest-4.jpg", id: "makao" },
            { name: "Ipole (JUHIWAI)", image: "/images/dest-5.jpg", id: "ipole" },
            { name: "Uyumbu (UWIMA)", image: "/images/dest-1.jpg", id: "uyumbu" },
            { name: "Mpimbwe", image: "/images/dest-2.jpg", id: "mpimbwe" },
            { name: "Igombe/Sagara (ISAWIMA)", image: "/images/dest-3.jpg", id: "isawima" },
            { name: "Iluma", image: "/images/dest-4.jpg", id: "iluma" },
            { name: "MBOMIPA (Idodi)", image: "/images/dest-5.jpg", id: "mbomipa" },
            { name: "Waga", image: "/images/dest-1.jpg", id: "waga" },
            { name: "UMEMARUWA", image: "/images/dest-2.jpg", id: "umemaruwa" },
            { name: "Chingoli", image: "/images/dest-3.jpg", id: "chingoli" },
            { name: "JUHIWANGUMWA", image: "/images/dest-4.jpg", id: "juhiwangumwa" },
            { name: "Kimbanda", image: "/images/dest-5.jpg", id: "kimbanda" },
            { name: "Kisungule", image: "/images/dest-1.jpg", id: "kisungule" },
            { name: "Magingo", image: "/images/dest-2.jpg", id: "magingo" },
            { name: "Mbarang'andu", image: "/images/dest-3.jpg", id: "mbarangandu" },
            { name: "Narika", image: "/images/dest-4.jpg", id: "narika" },
            { name: "Ngarambe/Tapika", image: "/images/dest-5.jpg", id: "ngarambe" },
            { name: "Ukutu (JUKUMU)", image: "/images/dest-1.jpg", id: "ukutu" },
            { name: "Chamwino", image: "/images/dest-2.jpg", id: "chamwino" }
        ]
    },
    {
        id: "ramsar",
        name: "Ramsar Sites",
        icon: <Droplets className="w-8 h-8" />,
        image: "/images/dest-3.jpg",
        description: "Wetlands of international importance recognized under the Ramsar Convention for their significant ecological role and biodiversity.",
        stats: { count: "3 Major Sites", area: "5.5 Million Ha" },
        sites: [
            { name: "Malagarasi-Muyovozi", image: "/images/dest-3.jpg", id: "malagarasi" },
            { name: "Lake Natron Basin", image: "/images/dest-4.jpg", id: "lake-natron-basin" },
            { name: "Kilombero Valley", image: "/images/dest-5.jpg", id: "kilombero-valley" }
        ]
    },
    {
        id: "zoos",
        name: "Zoos & Wildlife Parks",
        icon: <Footprints className="w-8 h-8" />,
        image: "/images/dest-4.jpg",
        description: "Facilities dedicated to conservation education, breeding, and providing people with unique opportunities to connect with Tanzania's diverse fauna.",
        stats: { count: "2 Sites", area: "N/A" },
        sites: [
            { name: "Tabora", image: "/images/dest-1.jpg", id: "tabora-zoo" },
            { name: "Ruhila", image: "/images/dest-2.jpg", id: "ruhila-zoo" }
        ]
    },
    {
        id: "historical",
        name: "Historical Sites",
        icon: <Landmark className="w-8 h-8" />,
        image: "/images/hero-safari.jpg",
        description: "Protecting significant cultural and historical landmarks preserved within natural wilderness areas.",
        stats: { count: "2 Sites", area: "N/A" },
        sites: [
            { name: "Kilwa Ruins", image: "/images/hero-safari.jpg", id: "kilwa" },
            { name: "Kunduchi Ruins", image: "/images/dest-5.jpg", id: "kunduchi" }
        ]
    },
    {
        id: "island",
        name: "Island & Water Projects",
        icon: <Waves className="w-8 h-8" />,
        image: "/images/dest-5.jpg",
        description: "Conservation efforts extending to island ecosystems and critical water management initiatives like the Makuyuni WP.",
        stats: { count: "2 Projects", area: "N/A" },
        sites: [
            { name: "Lundo Island", image: "/images/dest-1.jpg", id: "lundo" },
            { name: "Makuyuni WP", image: "/images/dest-2.jpg", id: "makuyuni" }
        ]
    }
];

const Conservation = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const activeData = conservationCategories.find(c => c.id === activeTab);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Conservation Hero */}
            <div className="relative h-[65vh] flex items-center pt-24 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/images/dest-2.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block backdrop-blur-md">
                            Guardians of the Wild
                        </span>
                        <h1 className="text-6xl md:text-9xl font-black text-foreground mb-8 uppercase tracking-tighter font-montserrat leading-none">
                            Is Our <br className="hidden md:block" /> Conservations
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-bold max-w-4xl mx-auto">
                            Beyond game reserves, TAWA manages a diverse portfolio of protected lands to ensure Tanzania's biodiversity remains undisturbed for future generations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                {!activeTab ? (
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <BookOpenText className="w-8 h-8 text-primary" />
                                    <h2 className="text-4xl font-black uppercase tracking-tight font-montserrat">Conservation Categories</h2>
                                </div>
                                <p className="text-muted-foreground text-lg max-w-2xl font-medium">
                                    Explore the different types of conservation areas under TAWA management. Select a category to see the complete list of sites.
                                </p>
                            </div>
                            <div className="flex gap-4 p-2 bg-muted rounded-2xl border border-border">
                                <div className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-black uppercase tracking-widest text-xs shadow-lg">
                                    Grid View
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {conservationCategories.map((cat, idx) => (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setActiveTab(cat.id)}
                                    className="group cursor-pointer bg-card rounded-[32px] border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
                                >
                                    <div className="h-48 relative overflow-hidden">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white leading-none">
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Sites</p>
                                            <p className="text-xl font-black">{cat.sites.length}</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <div className="p-3 bg-primary/10 text-primary rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{cat.name}</h3>
                                        <p className="text-muted-foreground font-medium text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">
                                            {cat.description}
                                        </p>
                                        <button className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                            Explore Sites <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-12">
                        <button
                            onClick={() => setActiveTab(null)}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-black uppercase tracking-widest text-xs group"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to All Categories
                        </button>

                        <AnimatePresence mode="wait">
                            {activeData && (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-16"
                                >
                                    {/* Header Section */}
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        <div className="order-2 lg:order-1 space-y-8">
                                            <div className="flex items-center gap-4">
                                                <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                                                    {activeData.icon}
                                                </div>
                                                <div>
                                                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-1">Protection Status</p>
                                                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight font-montserrat">{activeData.name}</h2>
                                                </div>
                                            </div>
                                            <p className="text-foreground/80 font-medium text-xl leading-relaxed">
                                                {activeData.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="px-8 py-4 bg-muted rounded-2xl border border-border">
                                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Designated Sites</p>
                                                    <p className="text-2xl font-black text-primary">{activeData.stats.count}</p>
                                                </div>
                                                <div className="px-8 py-4 bg-muted rounded-2xl border border-border">
                                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Total Coverage</p>
                                                    <p className="text-2xl font-black text-primary">{activeData.stats.area}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-1 lg:order-2 h-[400px] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10">
                                            <img src={activeData.image} alt={activeData.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    {/* Sites Grid Section */}
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between border-b border-border pb-6">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-6 h-6 text-primary" />
                                                <h3 className="text-2xl font-black uppercase tracking-tight">Included Sites ({activeData.sites.length})</h3>
                                            </div>
                                            <div className="text-xs font-black uppercase tracking-widest text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
                                                Live Inventory
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {activeData.sites.map((site, idx) => (
                                                <motion.div
                                                    key={site.id}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.02 }}
                                                >
                                                    <Link
                                                        to={`/destinations/${site.id}`}
                                                        className="block p-6 bg-card rounded-[32px] border border-border hover:border-primary/40 hover:shadow-2xl transition-all group overflow-hidden relative active:scale-95"
                                                    >
                                                        <div className="flex flex-col items-center text-center space-y-4">
                                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                                                                <img
                                                                    src={site.image}
                                                                    alt={site.name}
                                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center justify-center gap-1 mb-1">
                                                                    <ShieldCheck className="w-3 h-3 text-primary" />
                                                                    <span className="text-[9px] font-black uppercase tracking-widest text-primary/60">Protected Site</span>
                                                                </div>
                                                                <h4 className="font-black text-lg text-foreground group-hover:text-primary transition-colors leading-tight">{site.name}</h4>
                                                            </div>
                                                            <div className="pt-2">
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                                                                    View Profile
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="bg-primary/5 rounded-[32px] p-8 md:p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                                        <div className="space-y-2 text-center md:text-left">
                                            <h4 className="text-2xl font-black uppercase tracking-tight">Need more details?</h4>
                                            <p className="text-muted-foreground font-medium">Request professional maps or legal documentation for these specific conservation areas.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 justify-center">
                                            <Link to="/#contact" className="px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95">
                                                Request Map Data
                                            </Link>
                                            <button className="px-8 py-4 bg-background border border-border text-foreground font-black uppercase tracking-widest text-xs rounded-xl hover:bg-muted transition-all">
                                                Legal Notices
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Conservation;
