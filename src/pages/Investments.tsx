import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Handshake, CheckCircle } from "lucide-react";

const Investments = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Investment Hero */}
            <div className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                    style={{ backgroundImage: "url('/images/hero-safari.jpg')" }}
                />
                <div className="absolute inset-0 bg-[#3d5219]/70" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-l-8 border-safari-gold pl-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight font-montserrat">
                            Investment Opportunities
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-semibold max-w-3xl">
                            Join us in building a sustainable future for Tanzania's wildlife.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Opportunities Grid Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div id="opportunities" className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h2 className="text-4xl font-black text-foreground font-montserrat uppercase tracking-tight">Our Investment Focus</h2>
                    </div>
                    <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mb-12">
                        TAWA welcomes both domestic and foreign investment to develop first-class tourism infrastructure and services across our sprawling reserves and conservation areas.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Briefcase className="w-8 h-8" />,
                                title: "Eco-Lodges & Tented Camps",
                                description: "Develop high-end sustainable accommodation in some of Africa's most pristine environments."
                            },
                            {
                                icon: <Handshake className="w-8 h-8" />,
                                title: "PPP Initiatives",
                                description: "Public-Private Partnerships to manage and improve infrastructure within conservation areas."
                            },
                            {
                                icon: <CheckCircle className="w-8 h-8" />,
                                title: "Sustainable Tourism",
                                description: "Experience-based tourism, including hot air balloon safaris and walking tours."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-all"
                            >
                                <div className="p-4 bg-primary/20 text-primary w-fit rounded-2xl mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Investment Guide Placeholder */}
                <div className="p-12 bg-muted rounded-3xl border border-border text-center">
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Investment Guide Summary</h3>
                    <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
                        The official TAWA Investment Guide is available for download at our main office in Morogoro. This guide provides detailed maps, concession frameworks, and fiscal incentives sanctioned by the Government.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-safari-green text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
                    >
                        Request Guide <TrendingUp className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Investments;
