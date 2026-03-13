import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Shield, TreePine, Compass, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { destinations } from "../data/destinations";

// ─── Zone Data ────────────────────────────────────────────────────────────────
const zoneData: Record<string, {
    name: string;
    fullLocation: string;
    description: string;
    history: string;
    color: string;
    gradient: string;
    icon: React.ComponentType<{ className?: string }>;
    conservationAreas: { name: string; type: string; destinationId?: string }[];
    stats: { label: string; value: string }[];
}> = {
    northern: {
        name: "Northern Zone",
        fullLocation: "Arusha, Kilimanjaro & Manyara Regions",
        description: "Encompassing the majestic volcanic peaks and dramatic rift valley landscapes, the Northern Zone is home to some of Tanzania's most iconic wildlife dispersal areas. From the alkaline shores of Lake Natron—the world's only regular breeding ground for Lesser Flamingos—to the vast Maasai Steppe corridors, this zone is a critical gateway for wildlife from Tarangire and Kilimanjaro ecosystems.",
        history: "Established as a distinct management zone to protect the critical ecological corridors between the Ngorongoro Crater, Tarangire National Park, and the Kenyan border. The zone manages the seasonal migrations of over 3,000 elephants and protects the unique volcanic ecosystems around Ol Doinyo Lengai.",
        color: "text-amber-500",
        gradient: "from-amber-500/30 via-orange-400/10 to-transparent",
        icon: Compass,
        stats: [
            { label: "Protected Areas", value: "8+" },
            { label: "Key Species", value: "300+" },
            { label: "Annual Visitors", value: "45,000+" },
            { label: "Elephant Corridor", value: "Active" },
        ],
        conservationAreas: [
            { name: "Mkungunero Game Reserve", type: "Game Reserve", destinationId: "mkungunero" },
            { name: "Lake Natron GCA", type: "Game Controlled Area", destinationId: "lake-natron" },
            { name: "Longido GCA", type: "Game Controlled Area", destinationId: "longido" },
            { name: "Kitwai GCA", type: "Game Controlled Area", destinationId: "kitwai" },
            { name: "Kalimawe GCA", type: "Game Controlled Area", destinationId: "kalimawe" },
            { name: "Simanjiro GCA", type: "Game Controlled Area", destinationId: "simanjiro" },
            { name: "Lolkisale GCA", type: "Game Controlled Area", destinationId: "lolkisale" },
            { name: "Mto wa Mbu GCA", type: "Game Controlled Area", destinationId: "mto-wa-mbu" },
            { name: "Burunge GCA", type: "Game Controlled Area", destinationId: "burunge" },
            { name: "Randilen WMA", type: "Wildlife Mgmt Area", destinationId: "randilen" },
            { name: "Makame WMA (INDEMA)", type: "Wildlife Mgmt Area", destinationId: "makame" },
            { name: "Enduimet WMA", type: "Wildlife Mgmt Area", destinationId: "enduimet" },
        ]
    },
    coastal: {
        name: "Coastal Zone",
        fullLocation: "Dar es Salaam, Pwani, Tanga & Morogoro Regions",
        description: "Stretching from the Indian Ocean coastline deep into the hinterland forests, the Coastal Zone protects a remarkable blend of coastal forests, river basins, and marine-adjacent ecosystems. It includes the historic Kilwa Ruins—a UNESCO World Heritage Site—as well as critical wildlife corridors linking the Selous with coastal habitats, and rare coastal forest patches near Dar es Salaam.",
        history: "Formed to address the unique conservation challenges at the interface of densely populated coastal areas and critical wildlife habitat. TAWA works closely with fishing communities and coastal villages to protect both marine and terrestrial biodiversity while maintaining cultural heritage sites.",
        color: "text-emerald-600",
        gradient: "from-emerald-600/30 via-teal-400/10 to-transparent",
        icon: TreePine,
        stats: [
            { label: "Protected Areas", value: "10+" },
            { label: "Coastal Forests", value: "5 Patches" },
            { label: "Heritage Sites", value: "2 UNESCO" },
            { label: "Marine Species", value: "150+" },
        ],
        conservationAreas: [
            { name: "Pande Game Reserve", type: "Game Reserve", destinationId: "pande" },
            { name: "Wami-Mbiki GCA", type: "Game Controlled Area", destinationId: "wami" },
            { name: "Ruvu Maasai GCA", type: "Game Controlled Area", destinationId: "ruvu-maasai" },
            { name: "Ruvu Same GCA", type: "Game Controlled Area", destinationId: "ruvu-same" },
            { name: "Handeni GCA", type: "Game Controlled Area", destinationId: "handeni" },
            { name: "Umba River GCA", type: "Game Controlled Area", destinationId: "umba-river" },
            { name: "Miele GCA", type: "Game Controlled Area", destinationId: "miele" },
            { name: "Kilwa Ruins", type: "Historical Site", destinationId: "kilwa" },
            { name: "Kunduchi Ruins", type: "Historical Site", destinationId: "kunduchi" },
            { name: "Lundo Island", type: "Marine Reserve", destinationId: "lundo" },
        ]
    },
    lake: {
        name: "Lake Zone",
        fullLocation: "Mwanza, Kagera, Geita & Mara Regions",
        description: "Bordering the shores of Lake Victoria—Africa's largest lake—the Lake Zone protects critical wetland habitats, wildlife corridors, and Game Reserves that form the western wall of the Serengeti ecosystem. It includes the Ikorongo and Grumeti reserves that see the dramatic Great Wildebeest Migration river crossings each June and July.",
        history: "The Lake Zone was carved out to manage the diverse ecosystems around Lake Victoria and the Serengeti western corridor. It faces unique pressures from fishing communities and agricultural expansion, requiring innovative community conservation partnerships to maintain ecological balance.",
        color: "text-blue-600",
        gradient: "from-blue-600/30 via-cyan-400/10 to-transparent",
        icon: MapPin,
        stats: [
            { label: "Protected Areas", value: "6+" },
            { label: "Lake Shoreline", value: "200+ km" },
            { label: "Migration Herds", value: "2M+" },
            { label: "Croc Crossings", value: "Jun–Jul" },
        ],
        conservationAreas: [
            { name: "Ikorongo Game Reserve", type: "Game Reserve", destinationId: "ikorongo" },
            { name: "Grumeti Game Reserve", type: "Game Reserve", destinationId: "grumeti" },
            { name: "Kijereshi Game Reserve", type: "Game Reserve", destinationId: "kijereshi" },
            { name: "Maswa Game Reserve", type: "Game Reserve", destinationId: "maswa" },
            { name: "Igombe Dam GCA", type: "Game Controlled Area", destinationId: "igombe-dam" },
            { name: "Ikona WMA (JUHIWAIKO)", type: "Wildlife Mgmt Area", destinationId: "ikona" },
        ]
    },
    western: {
        name: "Western Zone",
        fullLocation: "Tabora, Kigoma & Katavi Regions",
        description: "Spanning the vast miombo woodland heartlands of western Tanzania, the Western Zone includes some of the country's most remote and pristine wilderness. From the shoebill-rich wetlands of Moyowosi to the massive Kigosi floodplains and the seasonal rivers of Ugalla, this zone represents Africa's wild interior at its most authentic.",
        history: "The Western Zone manages one of Tanzania's most biologically diverse but least-visited regions. Its remoteness has been both a challenge and an advantage—keeping human pressure low while making anti-poaching operations difficult. TAWA has invested heavily in ranger infrastructure and community partnerships here.",
        color: "text-yellow-700",
        gradient: "from-yellow-700/30 via-amber-400/10 to-transparent",
        icon: ShieldCheck,
        stats: [
            { label: "Protected Areas", value: "8+" },
            { label: "Wetland Area", value: "15,000+ km²" },
            { label: "Shoebill Sites", value: "3 Active" },
            { label: "Wild Dogs", value: "Resident Packs" },
        ],
        conservationAreas: [
            { name: "Moyowosi Game Reserve", type: "Game Reserve", destinationId: "moyowosi" },
            { name: "Kigosi Game Reserve", type: "Game Reserve", destinationId: "kigosi" },
            { name: "Ugalla River Reserve", type: "Game Reserve", destinationId: "ugalla-river" },
            { name: "Lwafi Game Reserve", type: "Game Reserve", destinationId: "lwafi" },
            { name: "Inyonga Game Reserve", type: "Game Reserve", destinationId: "inyonga" },
            { name: "Ugunda GCA", type: "Game Controlled Area", destinationId: "ugunda" },
            { name: "Gombe GCA", type: "Game Controlled Area", destinationId: "gombe" },
            { name: "Ipole WMA (JUHIWAI)", type: "Wildlife Mgmt Area", destinationId: "ipole" },
            { name: "Makao WMA", type: "Wildlife Mgmt Area", destinationId: "makao" },
            { name: "Uyumbu WMA (UWIMA)", type: "Wildlife Mgmt Area", destinationId: "uyumbu" },
            { name: "Mpimbwe WMA", type: "Wildlife Mgmt Area", destinationId: "mpimbwe" },
            { name: "Malagarasi-Muyovozi Wetlands", type: "Ramsar Site", destinationId: "malagarasi" },
        ]
    },
    central: {
        name: "Central Zone",
        fullLocation: "Dodoma & Singida Regions",
        description: "The Central Zone forms the ecological heart of Tanzania, connecting the country's northern and southern wildlife circuits through critical miombo woodland corridors. Home to the Rungwa-Kizigo-Muhesi complex—a vast network of Game Reserves—the zone supports significant populations of roan antelope, wild dogs, and large elephant herds.",
        history: "Central Tanzania's game reserves have historically been managed for both photographic and hunting tourism, generating important revenue for TAWA. The Rungwa complex connects the greater Ruaha ecosystem to the north, making central zone management critical for landscape-level conservation across the country.",
        color: "text-orange-700",
        gradient: "from-orange-700/30 via-red-400/10 to-transparent",
        icon: Compass,
        stats: [
            { label: "Protected Areas", value: "7+" },
            { label: "Game Reserve Area", value: "18,000+ km²" },
            { label: "Roan Antelope", value: "Key Population" },
            { label: "Wild Dog Packs", value: "Active" },
        ],
        conservationAreas: [
            { name: "Rungwa Game Reserve", type: "Game Reserve", destinationId: "rungwa" },
            { name: "Kizigo Game Reserve", type: "Game Reserve", destinationId: "kizigo" },
            { name: "Muhesi Game Reserve", type: "Game Reserve", destinationId: "muhesi" },
            { name: "Swagaswaga Game Reserve", type: "Game Reserve", destinationId: "swagaswaga" },
            { name: "Wembere Game Reserve", type: "Game Reserve", destinationId: "wembere" },
            { name: "Igombe Game Reserve", type: "Game Reserve", destinationId: "igombe" },
            { name: "Luganzo-Tongwe Reserve", type: "Game Reserve", destinationId: "luganzo" },
            { name: "Chamwino WMA", type: "Wildlife Mgmt Area", destinationId: "chamwino" },
            { name: "Isawima WMA (ISAWIMA)", type: "Wildlife Mgmt Area", destinationId: "isawima" },
            { name: "Tabora Wildlife Park", type: "Wildlife Park", destinationId: "tabora-zoo" },
        ]
    },
    southern: {
        name: "Southern Zone",
        fullLocation: "Lindi, Mtwara & Ruvuma Regions",
        description: "The Southern Zone is anchored by Africa's largest game reserve—the Selous (Nyerere National Park/TAWA complex)—and extends all the way to the Mozambique border. This zone includes some of Tanzania's most remote wilderness areas, critical for the Selous-Niassa transboundary wildlife corridor that allows elephants and lions to range freely across two nations.",
        history: "The southern zone has long been the engine of TAWA's revenue generation through photographic and hunting concessions. Following ivory poaching crises of the 1980s–90s, massive anti-poaching efforts were deployed here. Today it is a model of recovery, with wild dog populations rebounding and elephant numbers stabilizing.",
        color: "text-red-700",
        gradient: "from-red-700/30 via-orange-500/10 to-transparent",
        icon: TreePine,
        stats: [
            { label: "Protected Areas", value: "15+" },
            { label: "Selous Reserve", value: "50,000 km²" },
            { label: "Wild Dogs", value: "Largest Pop." },
            { label: "Elephant Count", value: "15,000+" },
        ],
        conservationAreas: [
            { name: "Selous Game Reserve", type: "Game Reserve", destinationId: "selous" },
            { name: "Liparamba Game Reserve", type: "Game Reserve", destinationId: "liparamba" },
            { name: "Msanjesi Game Reserve", type: "Game Reserve", destinationId: "msanjesi" },
            { name: "Muhuwesi GCA", type: "Game Controlled Area", destinationId: "muhuwesi" },
            { name: "Mwambesi GCA", type: "Game Controlled Area", destinationId: "mwambesi" },
            { name: "Lunda Mkwambi GCA", type: "Game Controlled Area", destinationId: "lunda" },
            { name: "Msima GCA", type: "Game Controlled Area", destinationId: "msima" },
            { name: "Mbarang'andu WMA", type: "Wildlife Mgmt Area", destinationId: "mbarangandu" },
            { name: "Narika WMA", type: "Wildlife Mgmt Area", destinationId: "narika" },
            { name: "Ngarambe/Tapika WMA", type: "Wildlife Mgmt Area", destinationId: "ngarambe" },
            { name: "UMEMARUWA WMA", type: "Wildlife Mgmt Area", destinationId: "umemaruwa" },
            { name: "Chingoli WMA", type: "Wildlife Mgmt Area", destinationId: "chingoli" },
            { name: "Magingo WMA", type: "Wildlife Mgmt Area", destinationId: "magingo" },
            { name: "Waga WMA", type: "Wildlife Mgmt Area", destinationId: "waga" },
            { name: "Ruhila Wildlife Park", type: "Wildlife Park", destinationId: "ruhila-zoo" },
        ]
    },
    "southern-highlands": {
        name: "Southern Highlands Zone",
        fullLocation: "Iringa, Mbeya, Njombe, Songwe & Rukwa Regions",
        description: "Rising from the floor of the Great Rift Valley to cool montane forests above 3,000m, the Southern Highlands Zone offers some of Tanzania's most dramatic landscapes. It encompasses highland game reserves protecting endemic species, the shallow alkaline Lake Rukwa, and the globally significant Kilombero Valley Ramsar wetland—one of East Africa's most productive freshwater ecosystems.",
        history: "The Highland Zone has historically been managed for watershed protection as much as for wildlife. Its forests guard the headwaters that supply water to millions of Tanzanians. TAWA works in close partnership with the Tanzania Forest Services to manage the interface between highland forests and adjoining game reserves.",
        color: "text-purple-700",
        gradient: "from-purple-700/30 via-indigo-400/10 to-transparent",
        icon: MapPin,
        stats: [
            { label: "Protected Areas", value: "10+" },
            { label: "Altitude Range", value: "600–3,000m" },
            { label: "Puku Antelope", value: "Rare Population" },
            { label: "Ramsar Sites", value: "2 Designated" },
        ],
        conservationAreas: [
            { name: "Mpanga-Kipengere Reserve", type: "Game Reserve", destinationId: "mpanga" },
            { name: "Uwanda Game Reserve", type: "Game Reserve", destinationId: "uwanda" },
            { name: "Lukwati Game Reserve", type: "Game Reserve", destinationId: "lukwati" },
            { name: "Piti Game Reserve", type: "Game Reserve", destinationId: "piti" },
            { name: "Rukwa Game Reserve", type: "Game Reserve", destinationId: "rukwa" },
            { name: "Kilombero Game Reserve", type: "Game Reserve", destinationId: "kilombero" },
            { name: "Kilombero Valley Ramsar Site", type: "Ramsar Site", destinationId: "kilombero-valley" },
            { name: "MBOMIPA WMA (Idodi)", type: "Wildlife Mgmt Area", destinationId: "mbomipa" },
            { name: "JUHIWANGUMWA WMA", type: "Wildlife Mgmt Area", destinationId: "juhiwangumwa" },
            { name: "Kimbanda WMA", type: "Wildlife Mgmt Area", destinationId: "kimbanda" },
            { name: "Ukutu WMA (JUKUMU)", type: "Wildlife Mgmt Area", destinationId: "ukutu" },
            { name: "Makuyuni Water Project", type: "Infrastructure", destinationId: "makuyuni" },
        ]
    }
};

const typeColors: Record<string, string> = {
    "Game Reserve": "bg-primary/10 text-primary border-primary/20",
    "Game Controlled Area": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    "Wildlife Mgmt Area": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    "Ramsar Site": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    "Historical Site": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    "Marine Reserve": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    "Wildlife Park": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    "Infrastructure": "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
};

const zoneOrder = ["northern", "coastal", "lake", "western", "central", "southern", "southern-highlands"];

const ZonePage = () => {
    const { zoneId } = useParams<{ zoneId: string }>();
    const zone = zoneId ? zoneData[zoneId] : null;

    if (!zone) {
        return (
            <div className="min-h-screen bg-background flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 py-16 text-center flex-grow">
                    <h1 className="text-4xl font-black text-foreground mb-4">Zone Not Found</h1>
                    <Link to="/about#zones" className="text-primary hover:underline">← Back to Zones Overview</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const ZoneIcon = zone.icon;
    const currentIndex = zoneOrder.indexOf(zoneId!);
    const prevZone = currentIndex > 0 ? zoneOrder[currentIndex - 1] : null;
    const nextZone = currentIndex < zoneOrder.length - 1 ? zoneOrder[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
            <Navbar />

            {/* Hero Banner */}
            <div className={`relative bg-gradient-to-br ${zone.gradient} border-b border-border overflow-hidden`}>
                <div className="absolute inset-0 opacity-5">
                    <ZoneIcon className="w-full h-full" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/about#zones"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-sm mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Zones Overview
                        </Link>

                        <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center flex-shrink-0`}>
                                <ZoneIcon className={`w-8 h-8 ${zone.color}`} />
                            </div>
                            <div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 text-xs font-bold uppercase tracking-widest mb-3 ${zone.color}`}>
                                    <MapPin className="w-3 h-3" />
                                    TAWA Management Zone
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-foreground font-montserrat uppercase tracking-tight mb-2">
                                    {zone.name}
                                </h1>
                                <p className="text-muted-foreground font-medium">{zone.fullLocation}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {zone.stats.map((stat, i) => (
                        <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className={`text-2xl font-black font-montserrat mb-1 ${zone.color}`}>{stat.value}</div>
                            <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Description */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card rounded-3xl border border-border p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-black text-foreground font-montserrat uppercase mb-4 text-primary">About This Zone</h2>
                        <p className="text-foreground/80 leading-relaxed text-base">{zone.description}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-card rounded-3xl border border-border p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-black text-foreground font-montserrat uppercase mb-4 text-primary">Conservation History</h2>
                        <p className="text-foreground/80 leading-relaxed text-base">{zone.history}</p>
                    </motion.div>
                </div>

                {/* Conservation Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black text-foreground font-montserrat uppercase text-primary">
                            Conservation Areas
                        </h2>
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                            {zone.conservationAreas.length} Areas
                        </span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {zone.conservationAreas.map((area, i) => {
                            const dest = area.destinationId
                                ? destinations.find(d => d.id === area.destinationId)
                                : null;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    whileHover={{ y: -3 }}
                                >
                                    {dest ? (
                                        <Link
                                            to={`/destinations/${dest.id}`}
                                            className="group flex flex-col justify-between h-full bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                                        >
                                            <div>
                                                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border mb-3 ${typeColors[area.type] || typeColors["Game Reserve"]}`}>
                                                    {area.type}
                                                </span>
                                                <h3 className="font-black text-foreground text-base font-montserrat group-hover:text-primary transition-colors mb-2">
                                                    {area.name}
                                                </h3>
                                                {dest.area && (
                                                    <p className="text-xs text-muted-foreground">Area: {dest.area}</p>
                                                )}
                                                {dest.highlight && (
                                                    <p className="text-xs text-primary/80 font-bold mt-1">{dest.highlight}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 mt-4 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                                                View Details <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col justify-between h-full bg-card rounded-2xl border border-border p-6 shadow-sm opacity-80">
                                            <div>
                                                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border mb-3 ${typeColors[area.type] || typeColors["Game Reserve"]}`}>
                                                    {area.type}
                                                </span>
                                                <h3 className="font-black text-foreground text-base font-montserrat mb-2">
                                                    {area.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-1 mt-4 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                                <Shield className="w-3 h-3" /> TAWA Protected
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Zone Navigation */}
                <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
                    {prevZone ? (
                        <Link
                            to={`/about/zones/${prevZone}`}
                            className="flex items-center gap-3 group bg-card border border-border rounded-2xl px-6 py-4 hover:border-primary/40 hover:shadow-md transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
                            <div>
                                <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Previous</div>
                                <div className="font-black text-foreground font-montserrat uppercase text-sm">{zoneData[prevZone].name}</div>
                            </div>
                        </Link>
                    ) : <div />}

                    <Link
                        to="/about#zones"
                        className="px-6 py-3 bg-primary/10 text-primary font-bold text-sm rounded-xl hover:bg-primary/20 transition-colors uppercase tracking-widest"
                    >
                        All Zones
                    </Link>

                    {nextZone ? (
                        <Link
                            to={`/about/zones/${nextZone}`}
                            className="flex items-center gap-3 group bg-card border border-border rounded-2xl px-6 py-4 hover:border-primary/40 hover:shadow-md transition-all"
                        >
                            <div className="text-right">
                                <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Next</div>
                                <div className="font-black text-foreground font-montserrat uppercase text-sm">{zoneData[nextZone].name}</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : <div />}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ZonePage;
