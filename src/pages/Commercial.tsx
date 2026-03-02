import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Building2, Briefcase, Store, ArrowRight, CheckCircle2, TrendingUp, SlidersHorizontal, Filter, X } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const commercialInventory = [
    { id: 1, title: 'Premium Office Space in BKC', loc: 'Bandra Kurla Complex', sqft: 5000, price: '₹4.5L/mo', type: 'Office', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', status: 'Available' },
    { id: 2, title: 'High-Street Retail Front', loc: 'Linking Road, Bandra', sqft: 1200, price: '₹3L/mo', type: 'Retail', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', status: 'Leased' },
    { id: 3, title: 'IT Park Floor Plate', loc: 'Powai', sqft: 15000, price: '₹12L/mo', type: 'IT/ITES', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', status: 'Available' },
    { id: 4, title: 'Boutique Clinic Space', loc: 'Juhu', sqft: 800, price: '₹1.5L/mo', type: 'Medical', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80', status: 'Available' },
    { id: 5, title: 'Corporate HQ Building', loc: 'Lower Parel', sqft: 25000, price: '₹25L/mo', type: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', status: 'Available' },
    { id: 6, title: 'F&B Approved Space', loc: 'Colaba', sqft: 2000, price: '₹4L/mo', type: 'Restaurant', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', status: 'Under Offer' },
];

export default function Commercial() {
    const [searchParams] = useSearchParams();
    const initType = searchParams.get('type') || 'all';
    const [activeFilter, setActiveFilter] = useState(initType);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 bg-v-gray font-sans selection:bg-v-blue/30 selection:text-v-blue min-h-screen">

            {/* Premium Dark Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-v-black border-b border-white/10">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="Mumbai Commercial" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md">
                            <TrendingUp className="w-4 h-4" /> B2B Real Estate Desk
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 text-white drop-shadow-xl">
                            Scalable Workspaces for <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-blue to-blue-400">Mumbai's Enterprises</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl font-medium leading-relaxed mb-8">
                            Explore A-grade office buildings, high-visibility retail fronts, and customized corporate leasing solutions across MMR.
                        </p>

                        {/* In-Hero Search/Filter Bar */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-2xl shadow-2xl">
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input type="text" placeholder="Locality or Building..." className="w-full pl-12 pr-4 py-3 bg-white/5 border border-transparent rounded-xl focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-v-blue text-white placeholder:text-slate-400 transition-all font-medium" />
                            </div>
                            <button className="bg-v-blue hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                <Search className="w-5 h-5" /> Search Space
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Navigation & Filtering Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                    <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                        {['all', 'rent', 'buy', 'coworking', 'retail'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold capitalize transition-all ${activeFilter === filter ? 'bg-v-black text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                            >
                                {filter === 'all' ? 'All Inventory' : filter}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-v-black hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <SlidersHorizontal className="w-4 h-4" /> Filters
                    </button>
                </div>

                {/* Commercial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {commercialInventory
                        .filter(item => activeFilter === 'all' || item.type.toLowerCase().includes(activeFilter))
                        .map((item) => (
                            <Link to={`/property/${item.id}`} key={item.id} className="block">
                                <PropertyCard
                                    title={item.title}
                                    location={item.loc}
                                    image={item.image}
                                    type={item.type}
                                    price={item.price}
                                    isFeatured={item.status === 'Available'}
                                    metrics={[
                                        { icon: Briefcase, value: `${item.sqft} sq.ft` }
                                    ]}
                                />
                            </Link>
                        ))}
                </div>

            </div>

            {/* Corporate Leasing CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-gradient-to-br from-slate-900 to-v-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl text-white">
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4">Require a Custom Office Buildout?</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Our Corporate Leasing division assists MNCs with mandate execution, legal structuring, and built-to-suit requirements across Grade A IT Parks.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-white text-v-black px-8 py-3.5 rounded-xl font-bold shadow-xl hover:bg-slate-100 transition-colors inline-block">
                                Book Consultation
                            </Link>
                            <Link to="/owner-portal" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-colors inline-block">
                                View Corporate Services
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hidden lg:block">
                        <ul className="space-y-4">
                            {['Due Diligence & Title Search', 'LOI & Term Sheet Negotiation', 'Fit-out Period Optimization'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    );
}
