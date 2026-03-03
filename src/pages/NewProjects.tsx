import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
    Construction, ArrowRight, ShieldCheck, MapPin, Search,
    ChevronDown, Sparkles, Building2, Calendar
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import westernLineMarketData from '../data/westernLineMarketData.json';

export default function NewProjects() {
    const [activeTab, setActiveTab] = useState('All');
    const [activeDeveloper, setActiveDeveloper] = useState('All Developers');

    const defaultImages = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
    ];

    const generateProjects = () => {
        let allProjects: any[] = [];
        let idCounter = 1;

        westernLineMarketData.zones.forEach(zone => {
            zone.stations.forEach(station => {
                if (station.upcomingProjects && station.upcomingProjects.length > 0) {
                    station.upcomingProjects.forEach(proj => {
                        allProjects.push({
                            id: idCounter,
                            name: proj.name,
                            developer: proj.developer,
                            status: proj.rera === 'Ready to Move' ? 'Ready to Move' : proj.rera === 'Pre-Launch' ? 'Pre-Launch' : 'Under Construction',
                            possession: proj.possession,
                            location: station.name,
                            price: `₹ ${(station.avgPricePerSqft * 1200 / 10000000).toFixed(1)} Cr Onwards`,
                            rera: proj.rera,
                            image: defaultImages[idCounter % defaultImages.length],
                            tags: [proj.type]
                        });
                        idCounter++;
                    });
                }
            });
        });
        return allProjects;
    };

    const projects = generateProjects();
    const activeDevelopersList = ["All Developers", ...Array.from(new Set(projects.map(p => p.developer)))];

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
                                <select
                                    className="appearance-none w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-v-blue text-sm font-bold text-slate-700 cursor-pointer"
                                    value={activeDeveloper}
                                    onChange={(e) => setActiveDeveloper(e.target.value)}
                                >
                                    {activeDevelopersList.map(dev => <option key={dev}>{dev}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 border-t border-slate-100 pt-6 overflow-x-auto pb-2 sm:flex-wrap scrollbar-hide">
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
                    {projects.filter(p => (activeTab === 'All' || p.status === activeTab) && (activeDeveloper === 'All Developers' || p.developer === activeDeveloper)).map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={project.id}
                        >
                            <Link to={`/new-projects/${project.id}`} className="block">
                                <PropertyCard
                                    id={project.id}
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
                            </Link>
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
                        <Link to="/contact" className="w-full md:w-auto bg-white text-v-black px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap inline-block text-center">
                            Join VIP Network
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
