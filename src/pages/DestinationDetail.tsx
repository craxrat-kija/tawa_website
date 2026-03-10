import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import {
    ArrowLeft, MapPin, Expand, Star, ShieldAlert,
    Info, Image as ImageIcon, Newspaper, Phone, Compass, Calendar, CheckCircle2,
    ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";
import { motion } from "framer-motion";

const DestinationDetail = () => {
    const { id } = useParams();
    const destination = destinations.find((d) => d.id === id);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Destination Not Found</h1>
                    <Link to="/" className="text-safari-green font-medium hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const destinationMenuItems = [
        { label: "Main Site", href: "/", isLocal: false },
        { label: "About", href: `#/destinations/${id}#about`, isLocal: true },
        { label: "Gallery", href: `#/destinations/${id}#gallery`, isLocal: true },
        { label: "News", href: `#/destinations/${id}#news`, isLocal: true },
        { label: "Tours", href: `#/destinations/${id}#tours`, isLocal: true },
        { label: "Contact", href: `#/destinations/${id}#contact`, isLocal: true },
        { label: "Book", href: `#/destinations/${id}#book`, isLocal: true },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
            <Navbar customMenuItems={destinationMenuItems} />

            {/* Hero Header */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <OptimizedImage
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto pb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link to="/destinations" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 w-fit transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Destinations
                        </Link>
                        <span className="bg-safari-gold text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest w-fit mb-4 block shadow-lg">
                            {destination.highlight}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-montserrat drop-shadow-2xl mb-2">
                            {destination.name}
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-2xl flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-safari-gold" /> Tanzania Wildlife Area
                        </p>
                    </motion.div>
                </div>
            </div>


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Column 1 & 2: Content Sections */}
                    <div className="lg:col-span-2 space-y-24">

                        {/* About Section */}
                        <section id="about" className="scroll-mt-48">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Info className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">About this Reserve</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-foreground/90 font-medium text-xl leading-relaxed mb-6">
                                    {destination.description}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {destination.aboutContent || "Detailed information about this specific reserve is maintained by the Zonal Offices. TAWA ensures that the natural integrity and wildlife populations are monitored through regular patrols and biodiversity assessments."}
                                </p>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-primary mb-6 font-montserrat uppercase flex items-center gap-2">
                                    <Star className="w-5 h-5 text-safari-gold fill-safari-gold" /> Prime Attractions
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {destination.attractions.map((attraction, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 shadow-sm hover:border-primary/30 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-foreground">{attraction}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Gallery Section */}
                        <section id="gallery" className="scroll-mt-48">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Visual Discovery</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {(destination.gallery || [destination.image]).map((img, i) => (
                                    <div key={i} className={`group relative rounded-2xl overflow-hidden cursor-zoom-in shadow-lg ${i === 0 ? "col-span-2 row-span-2 h-96" : "h-44"}`}>
                                        <OptimizedImage
                                            src={img}
                                            alt={`${destination.name} photo ${i + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            containerClassName="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* News Section */}
                        <section id="news" className="scroll-mt-48">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Newspaper className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Latest from the Zone</h2>
                            </div>
                            <div className="space-y-4">
                                {(destination.news || []).length > 0 ? destination.news?.map((item, i) => (
                                    <div key={i} className="p-6 bg-card rounded-2xl border border-border/50 hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
                                        <div>
                                            <p className="text-primary text-xs font-black uppercase tracking-widest mb-1">{item.date}</p>
                                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                )) : (
                                    <div className="p-12 text-center bg-muted/20 rounded-3xl border border-dashed border-border flex flex-col items-center">
                                        <Newspaper className="w-12 h-12 text-muted-foreground/30 mb-4" />
                                        <p className="text-muted-foreground font-medium">No recent news announcements for this location.</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Tours Section */}
                        <section id="tours" className="scroll-mt-48">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-foreground font-montserrat uppercase tracking-tight">Exclusive Tours</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {(destination.tours || ["Guided Day Safari", "Photography Excursion"]).map((tour, i) => (
                                    <div key={i} className="relative group rounded-2xl overflow-hidden border border-border shadow-soft h-64">
                                        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-6 text-center">
                                            <h4 className="text-white text-xl font-black uppercase mb-3">{tour}</h4>
                                            <p className="text-white/80 text-sm mb-4">Experience the reserve like never before with our certified rangers.</p>
                                            <a href="#book" className="px-6 py-2 bg-white text-primary rounded-full font-bold text-xs uppercase tracking-widest">Enquire Now</a>
                                        </div>
                                        <OptimizedImage
                                            src={destination.image}
                                            alt={tour}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            containerClassName="w-full h-full"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <h4 className="text-white font-bold">{tour}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Column 3: Sidebar Info & Booking form */}
                    <div className="space-y-8">

                        {/* Summary Card */}
                        <div className="bg-card shadow-2xl rounded-3xl p-8 border border-border sticky top-40 scroll-mt-48">
                            <h3 className="font-black text-2xl mb-8 border-b pb-4 uppercase font-montserrat tracking-tighter">Reserve Profile</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-1">Region</p>
                                        <p className="font-bold text-foreground text-lg">Southern Circuit</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Expand className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-1">Total Coverage</p>
                                        <p className="font-bold text-foreground text-lg">{destination.area}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group" id="contact">
                                    <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-1">Zonal Contact</p>
                                        <p className="font-bold text-foreground">+255 (0) 23 293 4204</p>
                                        <p className="text-sm text-muted-foreground">cc@tawa.go.tz</p>
                                    </div>
                                </div>
                            </div>

                            <div id="book" className="mt-12 pt-10 border-t border-border/50 scroll-mt-48">
                                <div className="flex items-center gap-2 mb-6">
                                    <Calendar className="w-5 h-5 text-safari-gold" />
                                    <h4 className="text-xl font-black uppercase font-montserrat tracking-tighter">Book Your Safari</h4>
                                </div>
                                <form className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase font-black text-muted-foreground">Preferred Date</label>
                                        <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 ring-primary/20 outline-none font-medium" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase font-black text-muted-foreground">Group Size</label>
                                        <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 ring-primary/20 outline-none font-medium">
                                            <option>1-2 Persons</option>
                                            <option>3-5 Persons</option>
                                            <option>Large Group (6+)</option>
                                        </select>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full py-4 rounded-xl bg-safari-green hover:bg-[#2c3d10] text-white font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-safari-green/20"
                                    >
                                        Request Reservation
                                    </button>
                                    <p className="text-center text-[10px] text-muted-foreground mt-4">
                                        Your request will be sent to the Zonal Authority for verification.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DestinationDetail;
