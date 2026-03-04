import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Compass, Camera, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Tourism = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/images/hero-safari.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-safari-gold text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block"
                    >
                        Expereince Tanzania
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight font-montserrat"
                    >
                        Wildlife Tourism
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90 leading-relaxed font-medium"
                    >
                        Explore the vast wilderness of the United Republic of Tanzania through hunting and photographic safaris.
                    </motion.p>
                </div>
            </div>

            {/* Selection Sections */}
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Hunting Tourism */}
                    <motion.section
                        id="hunting"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="h-64 overflow-hidden">
                            <img
                                src="/images/dest-1.jpg"
                                alt="Hunting Tourism"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Hunting Tourism</h2>
                            </div>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Sustainable hunting tourism remains a vital part of conservation in Tanzania, managed rigorously to ensure the health of wildlife populations while providing revenue for community development.
                            </p>
                            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all active:scale-95">
                                Inquire Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.section>

                    {/* Photographic Tourism */}
                    <motion.section
                        id="photographic"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="h-64 overflow-hidden">
                            <img
                                src="/images/dest-2.jpg"
                                alt="Photographic Tourism"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Photographic Tourism</h2>
                            </div>
                            <p className="text-muted-foreground mb-8 text-lg">
                                For those who seek to capture the beauty of the safari through a lens, our reserves offer unparalleled opportunities to witness the Big Five and millions of other species in their natural habitat.
                            </p>
                            <Link to="/destinations" className="inline-flex items-center gap-2 px-6 py-3 bg-safari-green text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all active:scale-95">
                                Browse Reserves <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Tourism;
