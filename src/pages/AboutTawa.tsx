import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";

import { useState } from "react";
import { OrgChartModal } from "../components/OrgChart";

const AboutTawa = () => {
    const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);

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
                        About TAWA
                    </h1>
                    <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
                        Learn about our history, mission, vision, and the diverse conservation efforts across the United Republic of Tanzania.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {/* Mission & Vision Section */}
                    <div id="mission" className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
                        <div>
                            <h2 className="text-3xl font-black text-foreground font-montserrat uppercase mb-6 text-primary">Mission & Vision</h2>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold font-montserrat mb-3 bg-muted inline-block px-3 py-1 rounded-lg">Our Vision</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    To become a leading institution in the sustainable management of wildlife resources for the benefit of present and future generations of Tanzanians and the global community.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-montserrat mb-3 bg-muted inline-block px-3 py-1 rounded-lg">Our Mission</h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    To conserve and sustainably manage wildlife resources in Game Reserves, Game Controlled Areas, and wildlife corridors through effective partnerships, anti-poaching operations, and community engagement.
                                </p>
                            </div>
                        </div>
                        <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg relative">
                            <OptimizedImage
                                src="/images/hero-safari.jpg"
                                className="absolute inset-0 w-full h-full object-cover"
                                alt="TAWA Landscape"
                                containerClassName="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div>

                    {/* History Section */}
                    <div id="history" className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-black text-foreground font-montserrat uppercase mb-6 text-primary">Our History</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                The Tanzania Wildlife Management Authority (TAWA) was officially established in 2014 as an autonomous public institution to take over the responsibilities of the Wildlife Division regarding the management of wildlife resources outside National Parks and Ngorongoro Conservation Area.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Since its inception, TAWA has successfully assumed control of over 13 Game Reserves, drastically reduced poaching rates across its territories, and improved revenue generation through sustainable photographic and hunting safaris.
                            </p>
                        </div>
                    </div>

                    {/* Conservation Efforts */}
                    <div id="conservation">
                        <h2 className="text-3xl font-black text-foreground font-montserrat uppercase mb-8 text-center text-primary">Core Conservation Efforts</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold font-montserrat mb-4 text-primary">Anti-Poaching</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    Deploying paramilitary ranger patrols, advanced aerial surveillance, and intelligence-led operations to secure Tanzania's extensive game reserves from illegal hunting and logging activities.
                                </p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold font-montserrat mb-4 text-primary">Community Outreach</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    Working hand-in-hand with villages bordering reserves. By returning generated revenue to local communities, we foster a shared responsibility for conservation and mitigate human-wildlife conflict.
                                </p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold font-montserrat mb-4 text-primary">Ecological Monitoring</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    Conducting regular aerial wildlife censuses, habitant assessments, and GIS mapping to make data-driven decisions on animal populations, migration routes, and carrying capacities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Management & Leadership */}
                    <div id="management" className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 text-center">
                        <h2 className="text-3xl font-black text-foreground font-montserrat uppercase mb-6 text-primary">Management Team</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
                            TAWA is governed by a dedicated Board of Directors and operated by an experienced executive management team comprising wildlife experts, ecologists, and administrative professionals dedicated to transforming Tanzania's conservation sector.
                        </p>
                        <button
                            onClick={() => setIsOrgModalOpen(true)}
                            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm"
                        >
                            View Organizational Structure
                        </button>
                    </div>
                </div>
            </div>

            <OrgChartModal isOpen={isOrgModalOpen} onClose={() => setIsOrgModalOpen(false)} />

            <Footer />
        </div>
    );
};

export default AboutTawa;
