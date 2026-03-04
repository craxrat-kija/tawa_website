import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Trees as Tree, Mountain, Droplets, MapPin, Landmark, ArrowRight, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const conservationCategories = [
    {
        id: "gca",
        name: "Game Controlled Areas",
        icon: <ShieldCheck className="w-8 h-8" />,
        image: "/images/dest-1.jpg",
        description: "Game Controlled Areas (GCAs) are established on village land where wildlife and people coexist. TAWA manages hunting and conservation activities in these zones to balance environmental integrity with community needs.",
        stats: { count: "27 Areas", area: "15,800 km²" }
    },
    {
        id: "wma",
        name: "Wildlife Management Areas",
        icon: <Tree className="w-8 h-8" />,
        image: "/images/dest-2.jpg",
        description: "WMAs are community-owned conservation areas where local residents take an active role in sustainable wildlife management, receiving direct benefits from conservation revenue.",
        stats: { count: "38 Areas", area: "28,300 km²" }
    },
    {
        id: "ramsar",
        name: "Ramsar Sites",
        icon: <Droplets className="w-8 h-8" />,
        image: "/images/dest-3.jpg",
        description: "Tanzania is a signatory to the Ramsar Convention. We manage protected wetlands of international importance, ensuring the preservation of these critical ecosystems and migratory bird routes.",
        stats: { count: "4 Major Sites", area: "5.5 Million Ha" }
    },
    {
        id: "historical",
        name: "Historical Sites",
        icon: <Landmark className="w-8 h-8" />,
        image: "/images/hero-safari.jpg",
        description: "Our mandate extends to the protection of cultural and historical landmarks embedded within the wilderness, preserving the heritage of the United Republic of Tanzania.",
        stats: { count: "12 Sites", area: "N/A" }
    },
    {
        id: "others",
        name: "Other Conservation Areas",
        icon: <Mountain className="w-8 h-8" />,
        image: "/images/dest-4.jpg",
        description: "Including corridors and dispersal areas that connect larger ecosystems, ensuring genetic diversity and safe movement for Tanzania's mega-fauna.",
        stats: { count: "8 Corridors", area: "3,200 km²" }
    }
];

const Conservation = () => {
    const [activeTab, setActiveTab] = useState(conservationCategories[0].id);
    const activeData = conservationCategories.find(c => c.id === activeTab) || conservationCategories[0];

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
                            Protection <br className="hidden md:block" /> Status
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-bold max-w-4xl mx-auto">
                            Beyond game reserves, TAWA manages a diverse portfolio of protected lands to ensure Tanzania's biodiversity remains undisturbed for future generations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Vertial Tabs Navigation */}
                    <div className="lg:w-1/3 space-y-4">
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpenText className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">Select Area Category</h2>
                        </div>
                        {conservationCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group
                                    ${activeTab === cat.id
                                        ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02] z-10"
                                        : "bg-card text-muted-foreground border-border hover:bg-muted"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${activeTab === cat.id ? "bg-white/20" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}>
                                        {cat.icon}
                                    </div>
                                    <span className="font-black uppercase tracking-wide text-sm">{cat.name}</span>
                                </div>
                                <ArrowRight className={`w-5 h-5 transition-transform ${activeTab === cat.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card rounded-[40px] border border-border overflow-hidden shadow-2xl h-full flex flex-col"
                            >
                                <div className="h-80 relative overflow-hidden">
                                    <img
                                        src={activeData.image}
                                        alt={activeData.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                            <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">Inventory</p>
                                            <p className="text-2xl font-black uppercase tracking-tight">{activeData.stats.count}</p>
                                        </div>
                                        <div className="p-4 bg-safari-gold backdrop-blur-md rounded-2xl border border-white/20 text-white text-right">
                                            <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">Total Land Coverage</p>
                                            <p className="text-2xl font-black uppercase tracking-tight">{activeData.stats.area}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-12 flex-grow">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-primary/20 text-primary rounded-xl">
                                            {activeData.icon}
                                        </div>
                                        <h2 className="text-4xl font-black text-foreground font-montserrat uppercase tracking-tight">{activeData.name}</h2>
                                    </div>
                                    <p className="text-foreground/90 font-medium text-xl leading-relaxed mb-12">
                                        {activeData.description}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="p-6 bg-muted rounded-2xl border border-border space-y-2">
                                            <MapPin className="w-6 h-6 text-primary" />
                                            <h4 className="font-black uppercase tracking-wide text-sm">Strategic Locations</h4>
                                            <p className="text-sm text-muted-foreground">Strategically placed within Tanzania's key biodiversity corridors.</p>
                                        </div>
                                        <div className="p-6 bg-muted rounded-2xl border border-border space-y-2">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                            <h4 className="font-black uppercase tracking-wide text-sm">Management Style</h4>
                                            <p className="text-sm text-muted-foreground">Rigorous anti-poaching and land-use adherence managed by TAWA.</p>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                                        <Link to="/#contact" className="px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95">
                                            Request Detailed Map
                                        </Link>
                                        <button className="text-muted-foreground font-black uppercase tracking-widest text-xs hover:text-primary transition-colors">
                                            Download Legal Notice
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Conservation;
