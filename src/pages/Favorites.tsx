import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarIcon, Search, ArrowRight, TrendingUp, Anchor, LayoutGrid, Building2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';

// Helper to parse "₹1.5 Cr" or "₹85 L" into a numeric value in Crores
const parsePriceToCrores = (priceStr: string) => {
    if (!priceStr) return 0;
    const cleanStr = priceStr.replace(/[₹, ]/g, '').toUpperCase();
    if (cleanStr.includes('CR')) return parseFloat(cleanStr.replace('CR', ''));
    if (cleanStr.includes('L')) return parseFloat(cleanStr.replace('L', '')) / 100;
    if (cleanStr.includes('K')) return parseFloat(cleanStr.replace('K', '')) / 10000;
    return parseFloat(cleanStr) / 10000000; // fallback assume absolute value
};

// Formatter to convert back to readable
const formatCrores = (valueInCrores: number) => {
    if (valueInCrores >= 1) return `₹${valueInCrores.toFixed(1)} Cr`;
    if (valueInCrores > 0) return `₹${(valueInCrores * 100).toFixed(0)} L`;
    return '₹0';
};

export default function Favorites() {
    const { favorites, clearFavorites } = useFavorites();
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Compute Portfolio Value
    const portfolioStats = useMemo(() => {
        if (favorites.length === 0) return { totalValue: 0, avgPrice: 0, highestType: 'N/A' };

        let totalValue = 0;
        const typeCount: Record<string, number> = {};

        favorites.forEach(f => {
            totalValue += parsePriceToCrores(f.price);
            const t = f.type || 'Property';
            typeCount[t] = (typeCount[t] || 0) + 1;
        });

        const dominantType = Object.keys(typeCount).sort((a, b) => typeCount[b] - typeCount[a])[0];

        return {
            totalValue,
            avgPrice: totalValue / favorites.length,
            dominantType
        };
    }, [favorites]);

    const filteredFavorites = useMemo(() => {
        if (activeFilter === 'All') return favorites;
        if (activeFilter === 'New Projects') return favorites.filter(f => f.type.toLowerCase().includes('project') || f.type.toLowerCase().includes('upcoming'));
        return favorites.filter(f => f.type.toLowerCase().includes(activeFilter.toLowerCase()) || (f.title || '').toLowerCase().includes(activeFilter.toLowerCase()));
    }, [activeFilter, favorites]);

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans min-h-screen selection:bg-amber-500/30 selection:text-amber-900">

            {/* Premium Hero Section */}
            <div className="pt-36 pb-20 relative overflow-hidden bg-v-black">
                {/* Abstract Institutional Background */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] bg-amber-600/30 blur-[180px] rounded-full pointer-events-none mix-blend-screen"></div>
                    <div className="absolute bottom-[-30%] left-[20%] w-[600px] h-[600px] bg-emerald-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

                            {/* Header Copy */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 backdrop-blur-md">
                                    <StarIcon className="w-4 h-4 fill-currentColor animate-pulse" /> Portfolio Dashboard
                                </div>
                                <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4 text-white drop-shadow-sm leading-[1.1]">
                                    Saved <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Assets.</span>
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                                    Your curated shortlist of premium real estate options across the Mumbai Western Corridor.
                                </p>
                            </div>

                            {/* Dynamic Portfolio Analytics */}
                            <AnimatePresence>
                                {favorites.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4 grid grid-cols-2 lg:grid-cols-3 bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-xl shrink-0"
                                    >
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Total Value</p>
                                            <span className="text-3xl font-display font-black text-white">{formatCrores(portfolioStats.totalValue)}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><Anchor className="w-3 h-3" /> Shortlist Size</p>
                                            <span className="text-3xl font-display font-black text-white">{favorites.length} <span className="text-sm text-slate-400">Props</span></span>
                                        </div>
                                        <div className="hidden lg:flex flex-col">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><LayoutGrid className="w-3 h-3" /> Dominant</p>
                                            <span className="text-xl font-display font-black text-emerald-400 leading-tight truncate max-w-[120px]">{portfolioStats.dominantType}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">

                {favorites.length === 0 ? (
                    /* Immersive 3D Empty State */
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="bg-white rounded-[3rem] p-16 md:p-24 text-center shadow-2xl border border-slate-100 max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden group"
                    >
                        {/* Animated Background Orbs for Empty State */}
                        <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-slate-100/50 rounded-full blur-[80px] group-hover:bg-amber-100/50 transition-colors duration-1000"></div>

                        {/* 3D Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative mb-12"
                        >
                            <div className="w-40 h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2.5rem] rotate-12 shadow-inner border border-white flex items-center justify-center">
                                <StarIcon className="w-20 h-20 text-slate-300 drop-shadow-md" />
                            </div>
                        </motion.div>

                        <h3 className="text-4xl md:text-5xl font-display font-black text-v-black mb-4 tracking-tight">Your vault is currently empty.</h3>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                            Our platform offers thousands of verified primary and secondary real estate assets. Click the star icon on any property to instantly sync it to your personal portfolio here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link to="/properties?intent=buy" className="bg-v-black text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-black/10">
                                <Search className="w-5 h-5" /> Explore Sales
                            </Link>
                            <Link to="/new-projects" className="bg-white text-v-black border-2 border-slate-200 px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:-translate-y-1 transition-all">
                                <Building2 className="w-5 h-5" /> Discover Projects <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        {/* Advanced Filtering Command Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 -mt-4">
                            <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
                                {['All', 'Buy', 'Rent', 'New Projects'].map(filter => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeFilter === filter ? 'text-v-black' : 'text-slate-500 hover:text-slate-800'}`}
                                    >
                                        {activeFilter === filter && (
                                            <motion.div layoutId="favActiveTab" className="absolute inset-0 bg-slate-100/80 rounded-xl" style={{ zIndex: 0 }} />
                                        )}
                                        <span className="relative z-10">{filter}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={clearFavorites}
                                    className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors uppercase tracking-wider flex items-center gap-1.5"
                                >
                                    <HelpCircle className="w-3.5 h-3.5" /> Clear Portfolio
                                </button>
                            </div>
                        </div>

                        {/* Property Grid */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredFavorites.length === 0 ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="col-span-full py-24 text-center">
                                        <p className="text-xl text-slate-400 font-bold mb-2">No assets match this filter.</p>
                                        <button onClick={() => setActiveFilter('All')} className="text-v-blue font-bold hover:underline">View all saved assets</button>
                                    </motion.div>
                                ) : (
                                    filteredFavorites.map((prop, idx) => (
                                        <motion.div
                                            layout
                                            key={prop.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        >
                                            <PropertyCard
                                                id={typeof prop.id === 'string' ? parseInt(prop.id) : prop.id}
                                                image={prop.image}
                                                price={prop.price}
                                                title={prop.title}
                                                location={prop.location}
                                                beds={prop.beds}
                                                baths={prop.baths}
                                                sqft={prop.sqft}
                                                type={prop.type}
                                                isFeatured={prop.isFeatured}
                                            />
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )}
            </div>
        </main>
    );
}
