import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Phone,
    Mail,
    MapPin,
    X,
    Copy,
    Check,
    Globe
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/tawa.tanzania", label: "Facebook", color: "text-[#1877F2]", bgColor: "bg-[#1877F2]/10", hoverBg: "hover:bg-[#1877F2]/20" },
    { icon: Twitter, href: "https://twitter.com/tawa_tanzania", label: "Twitter", color: "text-[#1DA1F2]", bgColor: "bg-[#1DA1F2]/10", hoverBg: "hover:bg-[#1DA1F2]/20" },
    { icon: Instagram, href: "https://www.instagram.com/tawa_tanzania", label: "Instagram", color: "text-[#E4405F]", bgColor: "bg-[#E4405F]/10", hoverBg: "hover:bg-[#E4405F]/20" },
    { icon: Youtube, href: "https://www.youtube.com/@TAWATANZANIA", label: "YouTube", color: "text-[#FF0000]", bgColor: "bg-[#FF0000]/10", hoverBg: "hover:bg-[#FF0000]/20" },
];

const contactLinks = [
    {
        icon: Phone,
        label: "Callback",
        detail: "+255 23 293 4204",
        actionLabel: "Call Us",
        href: "tel:+255232934204",
        color: "text-safari-green",
        bgColor: "bg-safari-green/10",
        hoverBg: "hover:bg-safari-green/20"
    },
    {
        icon: Mail,
        label: "Email",
        detail: "cc@tawa.go.tz",
        actionLabel: "Send Email",
        href: "mailto:cc@tawa.go.tz",
        color: "text-safari-green",
        bgColor: "bg-safari-green/10",
        hoverBg: "hover:bg-safari-green/20"
    },
    {
        icon: MapPin,
        label: "Location",
        detail: "TAWA Headquarters, Morogoro, Tanzania",
        actionLabel: "View on Map",
        href: "https://maps.google.com/maps?q=Tanzania%20Wildlife%20Management%20Authority%20TAWA%20Morogoro",
        color: "text-safari-green",
        bgColor: "bg-safari-green/10",
        hoverBg: "hover:bg-safari-green/20"
    },
];

const QuickAccessSidebar = () => {
    const [activeContact, setActiveContact] = useState<typeof contactLinks[0] | null>(null);
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        toast({
            description: "Copied to clipboard",
        });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 p-3 bg-card/80 backdrop-blur-2xl border border-border/50 rounded-full shadow-2xl">
                {socialLinks.map((social, index) => (
                    <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-sm",
                                    social.color,
                                    social.bgColor,
                                    social.hoverBg
                                )}
                            >
                                <social.icon size={26} strokeWidth={2.5} />
                            </motion.a>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-background/90 backdrop-blur-md border-border">
                            <p className="font-medium">{social.label}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}

                <div className="h-px w-8 mx-auto bg-foreground/10 my-1" />

                {contactLinks.map((contact, index) => (
                    <Tooltip key={contact.label}>
                        <TooltipTrigger asChild>
                            <motion.button
                                onClick={() => setActiveContact(contact)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (socialLinks.length + index) * 0.1 }}
                                className={cn(
                                    "p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-sm",
                                    contact.color,
                                    contact.bgColor,
                                    contact.hoverBg
                                )}
                            >
                                <contact.icon size={26} strokeWidth={2.5} />
                            </motion.button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-background/90 backdrop-blur-md border-border">
                            <p className="font-medium">{contact.label}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>

            <AnimatePresence>
                {activeContact && (
                    <div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setActiveContact(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card/95 border border-white/10 p-8 rounded-[2rem] shadow-2xl max-w-sm w-full relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-safari-gold/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-safari-green/20 rounded-full blur-3xl" />

                            <button
                                onClick={() => setActiveContact(null)}
                                className="absolute right-6 top-6 text-muted-foreground hover:text-foreground p-2 hover:bg-muted rounded-full transition-colors z-20"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center gap-6 relative z-10">
                                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center text-white shadow-lg rotate-3">
                                    <activeContact.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-safari-gold uppercase tracking-[0.2em] mb-2">{activeContact.label}</h3>
                                    <p className="text-2xl font-display font-bold text-foreground leading-tight">{activeContact.detail}</p>
                                </div>

                                <div className="flex flex-col gap-3 w-full mt-4">
                                    <Button
                                        variant="default"
                                        className="w-full h-12 rounded-xl safari-gradient font-bold text-base shadow-lg shadow-safari-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                        onClick={() => window.open(activeContact.href, '_blank')}
                                    >
                                        {activeContact.actionLabel}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 rounded-xl border-border bg-transparent hover:bg-muted font-semibold flex gap-2 items-center justify-center"
                                        onClick={() => handleCopy(activeContact.detail)}
                                    >
                                        {copied ? (
                                            <>
                                                <Check size={18} className="text-green-500" />
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={18} />
                                                <span>Copy Detail</span>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </TooltipProvider>
    );
};

export default QuickAccessSidebar;
