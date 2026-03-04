import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FileText, Download, Briefcase, FileSearch } from "lucide-react";

const Publications = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Publications Hero */}
            <div className="relative h-[45vh] flex items-center pt-24 overflow-hidden border-b-8 border-safari-gold">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                    style={{ backgroundImage: "url('/images/dest-3.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight font-montserrat">
                            Official Publications
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-semibold max-w-3xl mx-auto">
                            Access all essential reports, guides, and policies from TAWA.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Publication List Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            type: "Annual Report",
                            title: "TAWA Annual Conservation Report 2024/25",
                            color: "bg-blue-600",
                            size: "2.4 MB"
                        },
                        {
                            type: "Strategic Plan",
                            title: "Five-Year Strategic Plan (2025 - 2030)",
                            color: "bg-safari-green",
                            size: "1.8 MB"
                        },
                        {
                            type: "Regulations",
                            title: "Hunting & Conservation Guidelines 2025 Edition",
                            color: "bg-safari-gold",
                            size: "3.2 MB"
                        },
                        {
                            type: "Financial Status",
                            title: "Audit Summary & Financial Transparency Report",
                            color: "bg-red-600",
                            size: "0.9 MB"
                        },
                        {
                            type: "Tourism Guide",
                            title: "Official Tourist Map & Reserve Directory",
                            color: "bg-orange-600",
                            size: "12.4 MB"
                        },
                        {
                            type: "Newsletter",
                            title: "Mazingira Yetu: Quarterly Conservation Update",
                            color: "bg-purple-600",
                            size: "4.5 MB"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-all flex flex-col h-full group"
                        >
                            <div className="relative mb-8 h-48 bg-muted rounded-2xl flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-primary/50 transition-colors">
                                <div className={`absolute top-4 left-4 ${item.color} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}>
                                    {item.type}
                                </div>
                                <FileText className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex-grow">{item.title}</h3>
                            <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">PDF • {item.size}</span>
                                <button className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all active:scale-95">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Search Section Placeholder */}
                <div className="mt-20 p-12 bg-muted rounded-3xl border border-border flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Search Full Publication Archive</h3>
                        <p className="text-muted-foreground text-lg mb-0 text-xl">
                            We maintain an extensive digital library of gazetted notices and research papers dating back to 2016.
                        </p>
                    </div>
                    <div className="relative w-full md:w-fit group">
                        <input
                            type="text"
                            placeholder="Enter keywords..."
                            className="w-full md:w-80 px-6 py-4 rounded-xl bg-card border border-border font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-inner"
                        />
                        <FileSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Publications;
