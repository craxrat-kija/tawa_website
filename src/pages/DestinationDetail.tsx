import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import { ArrowLeft, MapPin, Expand, Star, ShieldAlert } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 md:pt-[180px] lg:pt-[220px]">
            <Navbar />

            {/* Hero Header */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto pb-16">
                    <Link to="/destinations" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 w-fit transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Destinations
                    </Link>
                    <span className="bg-safari-gold text-white px-4 py-1.5 rounded-full text-sm font-semibold w-fit mb-4">
                        {destination.highlight}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight font-montserrat drop-shadow-lg">
                        {destination.name}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4 font-montserrat uppercase">Overview</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4 font-montserrat uppercase mt-12">Key Attractions</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {destination.attractions.map((attraction, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                                        <Star className="w-5 h-5 text-safari-gold flex-shrink-0" />
                                        <span className="font-medium text-foreground">{attraction}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Info Card */}
                    <div className="space-y-6">
                        <div className="bg-card shadow-xl rounded-2xl p-6 border border-border sticky top-32">
                            <h3 className="font-bold text-xl mb-6 border-b pb-4">Reserve Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Location</p>
                                        <p className="font-semibold text-foreground">Tanzania, East Africa</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Expand className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Total Area</p>
                                        <p className="font-semibold text-foreground">{destination.area}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Protection Status</p>
                                        <p className="font-semibold text-foreground">Managed by TAWA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t">
                                <a
                                    href="#contact"
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-safari-green hover:bg-[#2c3d10] text-white font-semibold transition-all shadow-md"
                                >
                                    Plan Safari Here
                                </a>
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
