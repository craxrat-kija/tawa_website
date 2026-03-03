import { motion } from "framer-motion";
import { ArrowLeft, Newspaper, ArrowRight, FileText, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";

const News = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Link to="/" className="text-primary hover:text-[#5F7F2E] font-medium flex items-center justify-center gap-2 mb-6 transition-colors w-fit mx-auto">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight font-montserrat mb-4">
                        TAWA News & Updates
                    </h1>
                    <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
                        Stay informed on the latest developments, conservation events, and announcements from across our locations.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {/* Featured Article */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50 flex flex-col md:flex-row cursor-pointer hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                            <OptimizedImage
                                src="/images/hero-safari.jpg"
                                alt="TAWA Anti-Poaching"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                containerClassName="w-full h-full"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-1.5 rounded-full bg-safari-gold text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
                                    Featured
                                </span>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card relative">
                            <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-4">
                                <span className="flex items-center gap-1"><Newspaper className="w-4 h-4" /> Press Release</span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground">March 4, 2026</span>
                            </div>
                            <h2 className="text-3xl font-black text-foreground mb-4 font-montserrat leading-tight group-hover:text-primary transition-colors">
                                TAWA Deploys Advanced Drones for Anti-Poaching Operations Across Key Game Reserves
                            </h2>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6 line-clamp-3">
                                In an unprecedented move to secure Tanzania's rich biodiversity, TAWA has rolled out state-of-the-art surveillance drones spanning across Selous and Rungwa ecosystems to curb illegal activities and safeguard wildlife heritage.
                            </p>
                            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-3 transition-all">
                                Read Full Story <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Recent News Grid */}
                    <div id="latest">
                        <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                            <h3 className="text-2xl font-black text-foreground font-montserrat uppercase">Latest Updates</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* News Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <OptimizedImage
                                        src="/images/dest-1.jpg"
                                        alt="Elephants"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        containerClassName="w-full h-full"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-lg">Conservation</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">February 28, 2026</span>
                                    <h4 className="text-xl font-bold font-montserrat mb-3 group-hover:text-primary transition-colors leading-snug text-foreground">
                                        Record Elephant Population Growth Noted in Ruaha-Rungwa Ecosystem
                                    </h4>
                                    <p className="text-foreground/70 text-sm line-clamp-3 mb-4 flex-grow">
                                        Recent aerial censuses indicate a massive success in conservation, showing significant recovery of elephant herds previously threatened by poaching in the southern circuit.
                                    </p>
                                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </motion.div>

                            {/* News Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="group bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <OptimizedImage
                                        src="/images/dest-2.jpg"
                                        alt="Community"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        containerClassName="w-full h-full"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-lg">Community</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">February 14, 2026</span>
                                    <h4 className="text-xl font-bold font-montserrat mb-3 group-hover:text-primary transition-colors leading-snug text-foreground">
                                        TAWA Disburses Benefits to Local Communities Bordering Game Reserves
                                    </h4>
                                    <p className="text-foreground/70 text-sm line-clamp-3 mb-4 flex-grow">
                                        Over 500 million TZS has been distributed to villages adjacent to game reserves to fund educational infrastructure and healthcare facilities, strengthening community relations.
                                    </p>
                                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </motion.div>

                            {/* News Card 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="group bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <OptimizedImage
                                        src="/images/dest-4.jpg"
                                        alt="Tourism"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        containerClassName="w-full h-full"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-lg">Tourism</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">January 30, 2026</span>
                                    <h4 className="text-xl font-bold font-montserrat mb-3 group-hover:text-primary transition-colors leading-snug text-foreground">
                                        New Photographic Safari Routes Opened in Selous Game Reserve
                                    </h4>
                                    <p className="text-foreground/70 text-sm line-clamp-3 mb-4 flex-grow">
                                        Tourists can now explore previously inaccessible northern sectors of the Selous Game Reserve through new dedicated and low-impact photographic tourism routes.
                                    </p>
                                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </motion.div>

                        </div>

                        <div className="mt-12 text-center pb-8">
                            <button className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
                                View Full Archive
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mt-4">
                        {/* Upcoming Events */}
                        <div id="events">
                            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                                <h3 className="text-2xl font-black text-foreground font-montserrat uppercase">Upcoming Events</h3>
                            </div>
                            <div className="space-y-4">
                                {/* Event 1 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center gap-6 cursor-pointer">
                                    <div className="bg-primary/10 text-primary font-bold rounded-xl py-3 px-4 text-center min-w-[80px] shadow-inner">
                                        <span className="block text-2xl font-black">15</span>
                                        <span className="block text-xs uppercase tracking-widest mt-1">March</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug">TAWA Annual Conservation Gala</h4>
                                        <p className="text-muted-foreground text-sm mt-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> DSM Convention Center</p>
                                    </div>
                                </div>
                                {/* Event 2 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center gap-6 cursor-pointer">
                                    <div className="bg-primary/10 text-primary font-bold rounded-xl py-3 px-4 text-center min-w-[80px] shadow-inner">
                                        <span className="block text-2xl font-black">02</span>
                                        <span className="block text-xs uppercase tracking-widest mt-1">April</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug">Wildlife Ranger Recruitment Expo</h4>
                                        <p className="text-muted-foreground text-sm mt-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Morogoro Training Institute</p>
                                    </div>
                                </div>
                                {/* Event 3 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center gap-6 cursor-pointer">
                                    <div className="bg-primary/10 text-primary font-bold rounded-xl py-3 px-4 text-center min-w-[80px] shadow-inner">
                                        <span className="block text-2xl font-black">22</span>
                                        <span className="block text-xs uppercase tracking-widest mt-1">May</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug">World Biodiversity Day Seminar</h4>
                                        <p className="text-muted-foreground text-sm mt-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Online / Virtual</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Publications & Press Releases */}
                        <div id="publications">
                            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                                <h3 className="text-2xl font-black text-foreground font-montserrat uppercase">Publications & Reports</h3>
                            </div>
                            <div className="space-y-4">
                                {/* Pub 1 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className="bg-safari-gold/20 text-[#a37c00] p-4 rounded-xl shadow-inner"><FileText className="w-7 h-7" /></div>
                                        <div>
                                            <h4 className="font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug pr-4">2025 Annual Wildlife Census Report</h4>
                                            <p className="text-muted-foreground text-sm mt-2">Official Report • PDF (4.5 MB)</p>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Download className="w-5 h-5" />
                                    </div>
                                </div>
                                {/* Pub 2 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className="bg-safari-gold/20 text-[#a37c00] p-4 rounded-xl shadow-inner"><FileText className="w-7 h-7" /></div>
                                        <div>
                                            <h4 className="font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug pr-4">TAWA Strategic Vision 2026-2030</h4>
                                            <p className="text-muted-foreground text-sm mt-2">Corporate Strategy • PDF (8.1 MB)</p>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Download className="w-5 h-5" />
                                    </div>
                                </div>
                                {/* Pub 3 */}
                                <div className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className="bg-safari-gold/20 text-[#a37c00] p-4 rounded-xl shadow-inner"><FileText className="w-7 h-7" /></div>
                                        <div>
                                            <h4 className="font-bold font-montserrat text-foreground group-hover:text-primary transition-colors leading-snug pr-4">Anti-Poaching Operation Guidelines</h4>
                                            <p className="text-muted-foreground text-sm mt-2">Press Briefing • PDF (2.2 MB)</p>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Download className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default News;
