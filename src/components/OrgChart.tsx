import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Users, Shield, Leaf, Briefcase, Camera } from "lucide-react";

interface OrgNode {
    title: string;
    role: string;
    description: string;
    icon: any;
    color: string;
    children?: OrgNode[];
}

const orgData: OrgNode = {
    title: "Board of Directors",
    role: "Governance & Strategy",
    description: "Highest decision-making body providing strategic oversight and policy direction.",
    icon: Users,
    color: "bg-safari-gold",
    children: [
        {
            title: "Director General",
            role: "Executive Leadership",
            description: "Responsible for the overall management and operations of TAWA.",
            icon: Shield,
            color: "bg-safari-green",
            children: [
                {
                    title: "Wildlife Development",
                    role: "Directorate",
                    description: "Focuses on wildlife infrastructure and habitat improvement.",
                    icon: Leaf,
                    color: "bg-emerald-600",
                },
                {
                    title: "Wildlife Conservation",
                    role: "Directorate",
                    description: "Manages anti-poaching, law enforcement, and species protection.",
                    icon: Shield,
                    color: "bg-red-600",
                },
                {
                    title: "Corporate Services",
                    role: "Directorate",
                    description: "Handles HR, Finance, ICT, and Administrative functions.",
                    icon: Briefcase,
                    color: "bg-blue-600",
                },
                {
                    title: "Tourism & Business",
                    role: "Directorate",
                    description: "Promotes tourism and identifies new investment opportunities.",
                    icon: Camera,
                    color: "bg-orange-600",
                },
            ],
        },
    ],
};

const NodeCard = ({ node, isRoot = false }: { node: OrgNode; isRoot?: boolean }) => {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className={`relative w-64 p-5 rounded-2xl shadow-xl border border-white/20 text-white ${node.color} transition-all cursor-default z-10`}
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                        <node.icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-black font-montserrat text-sm uppercase leading-tight">{node.title}</h4>
                        <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">{node.role}</p>
                    </div>
                </div>
                <p className="text-[11px] leading-relaxed opacity-90 italic">"{node.description}"</p>

                {!isRoot && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-border" />
                )}
            </motion.div>

            {node.children && (
                <div className="relative pt-12 flex flex-col items-center">
                    {/* Vertical line connector */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border" />

                    <div className="flex gap-8 items-start relative">
                        {/* Horizontal connector for multiple children */}
                        {node.children.length > 1 && (
                            <div className="absolute top-0 left-[128px] right-[128px] h-0.5 bg-border" />
                        )}

                        {node.children.map((child, idx) => (
                            <NodeCard key={idx} node={child} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export const OrgChartModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-6xl bg-background rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-border/50 flex items-center justify-between bg-card">
                            <div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Organizational Structure</h2>
                                <p className="text-muted-foreground font-medium">TAWA Hierarchical Governance Framework</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 bg-card hover:bg-destructive/10 text-destructive rounded-full shadow-lg border border-border transition-all hover:rotate-90"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Chart Body */}
                        <div className="flex-grow overflow-auto p-12 bg-background/50">
                            <div className="min-w-fit mx-auto pb-12">
                                <NodeCard node={orgData} isRoot={true} />
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none">
                            <h3 className="text-8xl font-black font-montserrat text-black uppercase">TAWA</h3>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
