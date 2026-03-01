import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    Construction, ArrowRight, ShieldCheck, MapPin, Search,
    ChevronDown, Sparkles, Building2, Calendar
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

export default function NewProjects() {
    const [activeTab, setActiveTab] = useState('All');

    const projects = [
        {
            id: 1,
            name: "Lodha World Towers",
            developer: "Lodha Group",
            status: "Under Construction",
            possession: "Dec 2026",
            location: "Lower Parel",
            price: "₹ 8.5 Cr Onwards",
            rera: "P51900008345",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            tags: ["High-rise", "Luxury", "Pre-Launch"]
        },
        {
            id: 2,
            name: "Oberoi Three Sixty West",
            developer: "Oberoi Realty",
            status: "Ready to Move",
            possession: "Immediate",
            location: "Worli",
            price: "₹ 45.0 Cr Onwards",
            rera: "P51900002444",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
            tags: ["Ultra-Luxury", "Sea-Facing", "Ritz-Carlton"]
        },
        {
            id: 3,
            name: "Piramal Aranya",
            developer: "Piramal Realty",
            status: "Under Construction",
            possession: "Mar 2025",
            location: "Byculla",
            price: "₹ 12.0 Cr Onwards",
            rera: "P51900003144",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
            tags: ["Botanical Gardens", "Harbour View"]
        },
        {
            id: 4,
            name: "Rustomjee Seasons",
            developer: "Rustomjee",
            status: "Nearing Completion",
            possession: "Sep 2025",
            location: "BKC Annexe",
            price: "₹ 6.5 Cr Onwards",
            rera: "P51800001433",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            tags: ["Gated Community", "Corporate Hub"]
        },
        {
            id: 5,
            name: "Godrej The Trees",
            developer: "Godrej Properties",
            status: "Ready to Move",
            possession: "Immediate",
            location: "Vikhroli",
            price: "₹ 3.8 Cr Onwards",
            rera: "P51800000165",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
            tags: ["Township", "Mixed-Use", "Green Building"]
        },
        {
            id: 6,
            name: "Prestige Ocean Towers",
            developer: "Prestige Group",
            status: "Pre-Launch",
            possession: "Jan 2028",
            location: "Marine Lines",
            price: "₹ 18.5 Cr Onwards",
            rera: "P51900044555",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
            tags: ["Exclusive", "Pre-Launch Offers"]
        }
    ];

    const filterOptions = ["All", "Pre-Launch", "Under Construction", "Ready to Move"];

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-v-blue/20 selection:text-v-blue">

            {/* Header Hero */}
            <div className="bg-v-black text-white pt-24 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-indigo-300 mb-6 backdrop-blur-md">
                            <Construction className="w-4 h-4" /> Primary Market Portal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6">
                            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">New Developments</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                            Discover RERA-verified new launches, under-construction towers, and pre-release allocations from Mumbai's most trusted Grade-A developers.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Search & Filter Bar */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-[2rem] p-4 sm:p-6 shadow-xl border border-slate-100 mb-10">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1 w-full relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input type="text" placeholder="Search by Project Name, Developer, or Location..." className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-v-blue text-sm font-medium text-v-black transition-all" />
                        </div>
                        <div className="w-full sm:w-auto flex gap-3">
                            <div className="relative flex-1 sm:w-48">
                                <select className="appearance-none w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-v-blue text-sm font-bold text-slate-700 cursor-pointer">
                                    <option>All Developers</option>
                                    <option>Lodha Group</option>
                                    <option>Oberoi Realty</option>
                                    <option>Godrej Properties</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                        {filterOptions.map(option => (
                            <button
                                key={option}
                                onClick={() => setActiveTab(option)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeTab === option ? 'bg-v-black text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-v-black border border-slate-200'}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(p => activeTab === 'All' || p.status === activeTab).map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={project.id}
                        >
                            <PropertyCard
                                title={project.name}
                                location={project.location}
                                image={project.image}
                                type={project.status}
                                price={project.price}
                                metrics={[
                                    { icon: Building2, value: project.developer },
                                    { icon: Calendar, value: project.possession }
                                ]}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* VIP Access Banner */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-3xl font-display font-black mb-4">Want Pre-Launch Access?</h3>
                        <p className="text-blue-100 font-medium leading-relaxed">
                            Join our VIP investor network. Get notified about exclusive soft-launches, developer pre-allocations, and early-bird pricing before projects hit the open market.
                        </p>
                    </div>
                    <div className="relative z-10 w-full md:w-auto shrink-0">
                        <button className="w-full md:w-auto bg-white text-v-black px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap">
                            Join VIP Network
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
