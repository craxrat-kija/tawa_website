import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Play as PlayIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryData = [
    {
        id: "wildlife-1",
        type: "image",
        category: "Wildlife",
        title: "Serengeti Great Migration",
        description: "Over 2 million herbivores moving across the plains.",
        image: "/images/hero-safari.jpg",
        size: "large",
        anchorId: "wildlife"
    },
    {
        id: "wildlife-2",
        type: "image",
        category: "Wildlife",
        title: "Lion Pride Rest",
        description: "Selous Game Reserve",
        image: "/images/dest-1.jpg",
        size: "standard"
    },
    {
        id: "wildlife-3",
        type: "image",
        category: "Wildlife",
        title: "Leopard Tree Watch",
        description: "Ruaha National Park",
        image: "/images/dest-2.jpg",
        size: "standard"
    },
    {
        id: "video-1",
        type: "video",
        category: "Videos",
        title: "Giraffe Duo Grazing",
        description: "Watch the majestic giraffes of Tanzania.",
        image: "/images/dest-4.jpg",
        size: "tall",
        anchorId: "videos"
    },
    {
        id: "landscape-1",
        type: "image",
        category: "Landscapes",
        title: "Ngorongoro Crater Sunrise",
        description: "Breathtaking views from the crater rim.",
        image: "/images/dest-3.jpg",
        size: "wide",
        anchorId: "landscapes"
    },
    {
        id: "community-1",
        type: "image",
        category: "Community",
        title: "Maasai Village Life",
        description: "Understanding local conservation partnerships.",
        image: "/images/dest-5.jpg",
        size: "standard"
    },
    {
        id: "wildlife-4",
        type: "image",
        category: "Wildlife",
        title: "Twin Beauty",
        description: "Wildlife Photography",
        image: "/images/dropdown-bg.jpg",
        size: "standard",
        anchorId: "virtual"
    },
    {
        id: "landscape-2",
        type: "image",
        category: "Landscapes",
        title: "Kilimanjaro Peak",
        description: "The roof of Africa.",
        image: "/images/hero-safari.jpg",
        size: "standard"
    },
    {
        id: "community-2",
        type: "image",
        category: "Community",
        title: "Local Craftship",
        description: "Cultural heritage and conservation.",
        image: "/images/dest-2.jpg",
        size: "standard"
    },
    {
        id: "video-2",
        type: "video",
        category: "Videos",
        title: "Ruaha Elephants",
        description: "Magnificent herds of Ruaha.",
        image: "/images/dest-1.jpg",
        size: "standard"
    },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All Media");
    const [visibleCount, setVisibleCount] = useState(6);
    const categories = ["All Media", "Wildlife", "Landscapes", "Community", "Videos"];

    const allFilteredItems = activeCategory === "All Media"
        ? galleryData
        : galleryData.filter(item => item.category === activeCategory);

    const displayedItems = allFilteredItems.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

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
                        Media Gallery
                    </h1>
                    <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
                        A visual journey through the Tanzania Wildlife Management Authority's 13 incredible game reserves.
                    </p>
                </motion.div>

                {/* Category Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setVisibleCount(6); // Reset count on filter change
                            }}
                            className={`px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-sm border ${activeCategory === cat
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-muted-foreground hover:bg-muted border-border"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Stunning Masonry/Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                id={item.anchorId}
                                className={`group relative rounded-2xl overflow-hidden shadow-lg border border-border/50 cursor-pointer ${item.size === "large" ? "col-span-1 lg:col-span-2 row-span-2" :
                                    item.size === "tall" ? "row-span-2" :
                                        item.size === "wide" ? "md:col-span-2" : "row-span-1"
                                    }`}
                            >
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                    {item.type === "video" ? <VideoIcon className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                                    {item.category}
                                </div>

                                {item.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                            <PlayIcon className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                )}

                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h3 className={`${item.size === "large" ? "text-3xl" : "text-xl"} font-black text-white font-montserrat mb-1 drop-shadow-md`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleCount < allFilteredItems.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-16 text-center"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm"
                        >
                            Load Full Directory
                        </button>
                    </motion.div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Gallery;
