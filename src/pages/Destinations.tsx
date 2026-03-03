import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DestinationsList = () => {
    return (
        <div className="min-h-screen bg-safari-sand flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Link to="/" className="text-primary hover:text-[#5F7F2E] font-medium flex items-center justify-center gap-2 mb-6 transition-colors w-fit mx-auto">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight font-montserrat mb-4">
                        Our 13 Game Reserves
                    </h1>
                    <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
                        Explore the vast and diverse protected areas managed by the Tanzania Wildlife Management Authority (TAWA).
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, i) => (
                        <Link to={`/destinations/${dest.id}`} key={dest.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={dest.image}
                                    alt={`${dest.name} safari landscape`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-safari-gold text-primary-foreground text-xs font-semibold backdrop-blur-md shadow">
                                        {dest.highlight}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-montserrat font-bold text-white text-2xl mb-1">{dest.name}</h3>
                                    <p className="text-white/80 text-sm font-medium">{dest.area}</p>

                                    <div className="flex items-center gap-2 mt-4 text-yellow-300 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                                        Explore Entity <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DestinationsList;
