import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, TreePine, ShieldCheck, Compass } from "lucide-react";

export const zones = [
    {
        id: "northern",
        name: "Northern Zone",
        location: "Arusha, Kilimanjaro, Manyara",
        description: "Encompassing the majestic peaks and volcanic landscapes of the northern circuit.",
        conservationAreas: ["Natron GCA", "Mkungunero GR", "Longido GCA", "Kitwai GCA"],
        color: "from-safari-gold/20 to-safari-gold-light/20",
        icon: Compass
    },
    {
        id: "coastal",
        name: "Coastal Zone",
        location: "Dar es Salaam, Pwani, Tanga, Morogoro",
        description: "Diverse ecosystems from coastal forests to river basins and inland heritage sites.",
        conservationAreas: ["Pande GR", "Wami-Mbiki GCA", "Ruvu Same GCA", "Kilwa Ruins"],
        color: "from-safari-green/20 to-safari-green-light/20",
        icon: TreePine
    },
    {
        id: "lake",
        name: "Lake Zone",
        location: "Mwanza, Kagera, Geita, Mara",
        description: "Rich wetlands and forests bordering Lake Victoria and the Serengeti ecosystem.",
        conservationAreas: ["Kijereshi GR", "Ikorongo GR", "Grumeti GR", "Igombe Dam GCA"],
        color: "from-blue-500/20 to-safari-green-light/20",
        icon: MapPin
    },
    {
        id: "western",
        name: "Western Zone",
        location: "Tabora, Kigoma, Katavi",
        description: "Vast miombo woodlands and remote wilderness areas in western Tanzania.",
        conservationAreas: ["Moyowosi GR", "Kigosi GR", "Ugalla River GR", "Inyonga GR"],
        color: "from-safari-sand/20 to-safari-earth/20",
        icon: ShieldCheck
    },
    {
        id: "central",
        name: "Central Zone",
        location: "Dodoma, Singida",
        description: "The heart of Tanzania, featuring rugged terrain and critical wildlife corridors.",
        conservationAreas: ["Rungwa GR", "Kizigo GR", "Muhesi GR", "Swagaswaga GR"],
        color: "from-safari-earth/20 to-safari-dark/10",
        icon: Compass
    },
    {
        id: "southern",
        name: "Southern Zone",
        location: "Lindi, Mtwara, Ruvuma",
        description: "Home to some of Africa's largest game reserves and pristine miombo ecosystems.",
        conservationAreas: ["Selous GR", "Liparamba GR", "Lukwika-Lumesule GR", "Msanjesi GR"],
        color: "from-safari-earth-light/20 to-safari-dark/10",
        icon: TreePine
    },
    {
        id: "southern-highlands",
        name: "Southern Highlands Zone",
        location: "Iringa, Mbeya, Njombe, Songwe, Rukwa",
        description: "Cool highland forests, montane grasslands, and deep rift valley lakes.",
        conservationAreas: ["Mpanga-Kipengere GR", "Uwanda GR", "Lwafi GR", "Kilombero Valley"],
        color: "from-safari-green-light/20 to-secondary/20",
        icon: MapPin
    }
];

const ZonesSection = () => {
    return (
        <div id="zones" className="py-20 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                        <MapPin className="w-3 h-3" />
                        Operational Jurisdictions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground font-montserrat uppercase mb-6 tracking-tight">
                        Our <span className="text-primary italic">Seven Zones</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mx-auto max-w-3xl">
                        TAWA's operations are strategically divided into seven ecological zones, each dedicated to the conservation
                        and sustainable management of Tanzania's unique wildlife heritage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {zones.map((zone, index) => (
                        <Link
                            key={zone.id}
                            to={`/about/zones/${zone.id}`}
                            className="block group"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${zone.color} p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full cursor-pointer`}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <zone.icon className="w-16 h-16" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-foreground font-montserrat uppercase mb-2 group-hover:text-primary transition-colors">
                                        {zone.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-4">
                                        <MapPin className="w-3 h-3" />
                                        {zone.location.split(',')[0]} & more
                                    </div>

                                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                                        {zone.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-foreground/50">Conservation Areas:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {zone.conservationAreas.map((area) => (
                                                <span
                                                    key={area}
                                                    className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-lg text-[10px] font-bold text-foreground/80 border border-border/50 group-hover:border-primary/30 transition-all"
                                                >
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                                        Explore Zone <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Decorative light effect on hover */}
                                <div className="absolute -inset-[100%] group-hover:inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                            </motion.div>
                        </Link>
                    ))}

                    {/* Summary Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="lg:col-span-1 xl:col-span-1 border-2 border-dashed border-primary/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-primary/5 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-foreground font-montserrat uppercase mb-2">Total Coverage</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Managing over 100,000 km² across all seven zones, securing Tanzania's wild future.
                        </p>
                        <div className="text-2xl font-black text-primary font-montserrat">
                            100% PROTECTED
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ZonesSection;
