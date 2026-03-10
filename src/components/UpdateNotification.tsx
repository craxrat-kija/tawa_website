import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const UpdateNotification = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed top-24 left-6 z-[9998] pointer-events-auto">
            <AnimatePresence>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative group cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-safari-gold/50 to-primary/50 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />

                    <motion.div
                        layout
                        className={`relative bg-background/90 backdrop-blur-xl border border-safari-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-4 ring-1 ring-white/10 overflow-hidden
                            ${isExpanded ? "rounded-[20px] p-4 pr-6 max-w-[320px]" : "rounded-full p-2 w-12 h-12 justify-center"}`}
                    >
                        {/* Icon Container */}
                        <div className="relative shrink-0">
                            <motion.div
                                layout
                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <MapPin className={`text-safari-gold ${isExpanded ? "w-6 h-6" : "w-6 h-6"}`} />
                            </motion.div>

                            {/* Pulsing indicator - only show when not expanded to draw attention */}
                            {!isExpanded && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-background"></span>
                                </span>
                            )}
                        </div>

                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-1"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-safari-gold">System Update</span>
                                    <div className="h-px flex-1 bg-safari-gold/20" />
                                </div>
                                <h4 className="text-sm font-bold text-foreground leading-snug mb-0.5">Headquarters Relocated</h4>
                                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                                    TAWA Office has officially moved to <span className="text-primary font-bold">TAFORI Morogoro</span>.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Hint Tooltip */}
                    {!isExpanded && (
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur border border-border rounded text-[10px] font-bold text-safari-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-wider">
                            View Update
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default UpdateNotification;
