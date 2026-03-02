import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ArrowLeft, Building2, Calendar, MapPin, ShieldCheck, ArrowRight,
    Bed, Maximize, Car, Trees, Dumbbell, Shield, Waves, Wifi,
    CheckCircle2, Star, Phone
} from 'lucide-react';

const projectsData: Record<number, {
    name: string;
    developer: string;
    status: string;
    possession: string;
    location: string;
    price: string;
    rera: string;
    image: string;
    tags: string[];
    desc: string;
    configurations: { type: string; area: string; price: string }[];
    amenities: string[];
}> = {
    1: {
        name: 'Lodha World Towers', developer: 'Lodha Group', status: 'Under Construction', possession: 'Dec 2026', location: 'Lower Parel', price: '₹ 8.5 Cr Onwards', rera: 'P51900008345', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', tags: ['High-rise', 'Luxury', 'Pre-Launch'],
        desc: 'Lodha World Towers is a landmark ultra-luxury development in Lower Parel, offering breathtaking views of the Arabian Sea and the Mumbai skyline. Designed by Pei Cobb Freed & Partners, this project features world-class amenities, Italian marble lobbies, and dedicated butler service.',
        configurations: [
            { type: '3 BHK', area: '1,850 sq ft', price: '₹ 8.5 Cr' },
            { type: '4 BHK', area: '2,500 sq ft', price: '₹ 12.0 Cr' },
            { type: 'Penthouse', area: '5,200 sq ft', price: '₹ 28.0 Cr' },
        ],
        amenities: ['Infinity Pool', 'Sky Lounge', 'Private Theatre', 'Concierge Service', 'Spa & Wellness', 'Tennis Courts', 'Kids Play Area', 'Smart Home']
    },
    2: {
        name: 'Oberoi Three Sixty West', developer: 'Oberoi Realty', status: 'Ready to Move', possession: 'Immediate', location: 'Worli', price: '₹ 45.0 Cr Onwards', rera: 'P51900002444', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', tags: ['Ultra-Luxury', 'Sea-Facing', 'Ritz-Carlton'],
        desc: 'Oberoi Three Sixty West is Mumbai\'s most prestigious address, featuring two soaring towers overlooking Worli Sea Face. One tower is managed by Ritz-Carlton. Residents enjoy unparalleled views, European-standard finishes, and hotel-level amenities.',
        configurations: [
            { type: '4 BHK', area: '3,800 sq ft', price: '₹ 45.0 Cr' },
            { type: '5 BHK', area: '5,500 sq ft', price: '₹ 65.0 Cr' },
            { type: 'Sky Villa', area: '8,000 sq ft', price: 'On Request' },
        ],
        amenities: ['Ritz-Carlton Services', 'Private Beach Access', 'Helipad', 'Wine Cellar', 'Indoor Pool', 'Cigar Lounge', 'Valet Parking', 'Golf Simulator']
    },
    3: {
        name: 'Piramal Aranya', developer: 'Piramal Realty', status: 'Under Construction', possession: 'Mar 2025', location: 'Byculla', price: '₹ 12.0 Cr Onwards', rera: 'P51900003144', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', tags: ['Botanical Gardens', 'Harbour View'],
        desc: 'Piramal Aranya redefines South Mumbai luxury with panoramic harbour views and 2 acres of landscaped botanical gardens. The project offers spacious 3 & 4 BHK residences with Italian marble flooring, smart home automation, and floor-to-ceiling windows.',
        configurations: [
            { type: '3 BHK', area: '2,200 sq ft', price: '₹ 12.0 Cr' },
            { type: '4 BHK', area: '3,100 sq ft', price: '₹ 18.0 Cr' },
            { type: 'Duplex', area: '4,800 sq ft', price: '₹ 30.0 Cr' },
        ],
        amenities: ['Botanical Gardens', 'Observatory', 'Olympic Pool', 'Art Gallery', 'Business Centre', 'Amphitheatre', 'Library', 'Dog Park']
    },
    4: {
        name: 'Rustomjee Seasons', developer: 'Rustomjee', status: 'Nearing Completion', possession: 'Sep 2025', location: 'BKC Annexe', price: '₹ 6.5 Cr Onwards', rera: 'P51800001433', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', tags: ['Gated Community', 'Corporate Hub'],
        desc: 'Rustomjee Seasons is a premium gated community near BKC, offering modern 2 & 3 BHK apartments with premium specifications. Its proximity to Mumbai\'s financial district and excellent connectivity make it ideal for corporate professionals.',
        configurations: [
            { type: '2 BHK', area: '1,100 sq ft', price: '₹ 6.5 Cr' },
            { type: '3 BHK', area: '1,600 sq ft', price: '₹ 9.5 Cr' },
            { type: '3 BHK Large', area: '2,000 sq ft', price: '₹ 12.0 Cr' },
        ],
        amenities: ['Clubhouse', 'Swimming Pool', 'Jogging Track', 'Gymnasium', 'Multipurpose Hall', 'Garden', 'Indoor Games', 'Power Backup']
    },
    5: {
        name: 'Godrej The Trees', developer: 'Godrej Properties', status: 'Ready to Move', possession: 'Immediate', location: 'Vikhroli', price: '₹ 3.8 Cr Onwards', rera: 'P51800000165', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop', tags: ['Township', 'Mixed-Use', 'Green Building'],
        desc: 'Godrej The Trees is an award-winning mixed-use development set within a sprawling green campus in Vikhroli. The project seamlessly integrates residential towers with commercial spaces, retail, and lush landscapes, creating a self-sustaining urban ecosystem.',
        configurations: [
            { type: '2 BHK', area: '850 sq ft', price: '₹ 3.8 Cr' },
            { type: '3 BHK', area: '1,250 sq ft', price: '₹ 5.5 Cr' },
            { type: '4 BHK', area: '1,800 sq ft', price: '₹ 8.0 Cr' },
        ],
        amenities: ['Green Certified', 'Co-Working Spaces', 'Retail Promenade', 'Cycling Track', 'Pet Park', 'Outdoor Gym', 'Organic Garden', 'EV Charging']
    },
    6: {
        name: 'Prestige Ocean Towers', developer: 'Prestige Group', status: 'Pre-Launch', possession: 'Jan 2028', location: 'Marine Lines', price: '₹ 18.5 Cr Onwards', rera: 'P51900044555', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', tags: ['Exclusive', 'Pre-Launch Offers'],
        desc: 'Prestige Ocean Towers is a highly anticipated pre-launch project in Marine Lines, offering unobstructed ocean views and a prime South Mumbai address. Expected to feature 3 & 4 BHK residences with premium specifications and a rooftop infinity pool.',
        configurations: [
            { type: '3 BHK', area: '2,000 sq ft', price: '₹ 18.5 Cr' },
            { type: '4 BHK', area: '3,000 sq ft', price: '₹ 28.0 Cr' },
            { type: 'Penthouse', area: '6,000 sq ft', price: 'On Request' },
        ],
        amenities: ['Rooftop Infinity Pool', 'Private Lifts', 'Temperature Control', 'Wine Storage', 'Valet', 'Concierge', 'Sky Deck', 'Meditation Room']
    }
};

const amenityIcons: Record<string, any> = {
    'Infinity Pool': Waves, 'Swimming Pool': Waves, 'Indoor Pool': Waves, 'Olympic Pool': Waves, 'Rooftop Infinity Pool': Waves,
    'Gymnasium': Dumbbell, 'Outdoor Gym': Dumbbell,
    'Smart Home': Wifi, 'EV Charging': Wifi,
    'Valet Parking': Car, 'Valet': Car, 'Parking': Car,
    'Garden': Trees, 'Botanical Gardens': Trees, 'Organic Garden': Trees, 'Pet Park': Trees, 'Dog Park': Trees,
    'Security': Shield, 'Power Backup': Shield,
};

export default function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const project = projectsData[Number(id)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <main className="flex-1 min-h-screen flex items-center justify-center bg-v-gray">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-black text-v-black mb-4">Project Not Found</h1>
                    <p className="text-slate-500 mb-8">The project you're looking for doesn't exist.</p>
                    <Link to="/new-projects" className="bg-v-black text-white px-8 py-4 rounded-full font-bold hover:bg-v-blue transition-colors">
                        Back to Projects
                    </Link>
                </div>
            </main>
        );
    }

    const statusColor = project.status === 'Ready to Move' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' :
        project.status === 'Pre-Launch' ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' :
            'text-blue-400 bg-blue-500/10 border-blue-500/20';

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Hero */}
            <div className="bg-v-black border-b border-white/10 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/80 to-v-black/40" />
                </div>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-15 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/new-projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> All Projects
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${statusColor}`}>
                                <ShieldCheck className="w-3.5 h-3.5" /> {project.status}
                            </span>
                            {project.tags.map((tag, i) => (
                                <span key={i} className="bg-white/5 border border-white/10 text-white/70 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-3">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium mb-8">
                            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-v-blue" /> {project.developer}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-v-blue" /> {project.location}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-v-blue" /> Possession: {project.possession}</span>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Starting Price</p>
                                <p className="text-2xl font-black text-white">{project.price}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">RERA ID</p>
                                <p className="text-sm font-bold text-emerald-400 font-mono">{project.rera}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* About */}
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-3 block">About the Project</span>
                            <h2 className="text-3xl font-display font-black text-v-black tracking-tight mb-6">Overview</h2>
                            <p className="text-slate-500 text-lg leading-relaxed">{project.desc}</p>
                        </motion.section>

                        {/* Configurations */}
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-3 block">Units Available</span>
                            <h2 className="text-3xl font-display font-black text-v-black tracking-tight mb-6">Unit Configurations</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {project.configurations.map((config, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                                        <p className="text-xs font-bold uppercase tracking-widest text-v-blue mb-2">{config.type}</p>
                                        <p className="text-2xl font-black text-v-black mb-1">{config.price}</p>
                                        <p className="text-sm text-slate-400 font-medium flex items-center gap-1">
                                            <Maximize className="w-3.5 h-3.5" /> {config.area}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Amenities */}
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-3 block">Lifestyle</span>
                            <h2 className="text-3xl font-display font-black text-v-black tracking-tight mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {project.amenities.map((amenity, idx) => {
                                    const Icon = amenityIcons[amenity] || Star;
                                    return (
                                        <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-3 hover:border-v-blue/30 transition-colors">
                                            <div className="w-9 h-9 rounded-lg bg-v-blue/10 flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4 text-v-blue" />
                                            </div>
                                            <span className="text-sm font-bold text-v-black">{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Enquiry Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white sticky top-28"
                        >
                            <h3 className="text-xl font-display font-bold mb-2">Interested in this project?</h3>
                            <p className="text-slate-400 text-sm mb-6">Get exclusive pricing, floor plans, and site visit scheduling.</p>

                            <div className="space-y-3 mb-6">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-v-blue" />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-v-blue" />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-v-blue" />
                            </div>

                            <button className="w-full bg-v-blue text-white py-3.5 rounded-xl font-bold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4" /> Request Callback
                            </button>

                            <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>RERA Verified · No spam guaranteed</span>
                            </div>
                        </motion.div>

                        {/* Quick Facts */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Facts</h4>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between"><span className="text-slate-500">Developer</span><span className="font-bold text-v-black">{project.developer}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Location</span><span className="font-bold text-v-black">{project.location}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Status</span><span className="font-bold text-v-black">{project.status}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Possession</span><span className="font-bold text-v-black">{project.possession}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">RERA</span><span className="font-bold text-emerald-600 font-mono text-xs">{project.rera}</span></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
