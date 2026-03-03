import { useState } from 'react';
import { Plus, Search, Filter, Edit2, Trash2, ArrowUpRight, MapPin, Download, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Properties() {
    const [properties] = useState([
        { id: 'PRP-2026-X1', title: 'Skyline Penthouse', rera: 'P51800000010', location: 'Worli', agent: 'R. Sharma', views: '14.2K', price: '₹ 45.0 Cr', status: 'Active', leads: 24, trend: '+12%', micro: [12, 18, 15, 25, 22, 30], image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop' },
        { id: 'PRP-2026-X2', title: 'Sea-View Reserve', rera: 'P51900001244', location: 'Bandra West', agent: 'A. Desai', views: '8.4K', price: '₹ 18.5 Cr', status: 'Under Offer', leads: 41, trend: '+5%', micro: [30, 25, 35, 38, 40, 41], image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop' },
        { id: 'PRP-2026-X3', title: 'BKC Financial Hub OS', rera: 'P51800040520', location: 'BKC', agent: 'S. Patel', views: '22.1K', price: '₹ 85.0 Cr', status: 'Active', leads: 12, trend: '-2%', micro: [15, 14, 12, 10, 11, 12], image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop' },
        { id: 'PRP-2026-X4', title: 'Pali Estate Manor', rera: 'P51800021999', location: 'Bandra West', agent: 'R. Sharma', views: '1.2K', price: '₹ 12.0 Cr', status: 'Draft', leads: 0, trend: '0%', micro: [0, 0, 0, 0, 0, 0], image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop' },
        { id: 'PRP-2026-X5', title: 'Juhu Tara Waterfront', rera: 'P52000008442', location: 'Juhu', agent: 'A. Desai', views: '18.9K', price: '₹ 28.5 Cr', status: 'Sold', leads: 156, trend: '+45%', micro: [100, 120, 140, 130, 150, 156], image: 'https://images.unsplash.com/photo-1628611225249-6c174bfdc5dc?q=80&w=2000&auto=format&fit=crop' },
    ]);

    const [activeProperty, setActiveProperty] = useState<any>(null);

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col gap-6 relative">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 shrink-0 z-10">
                <div>
                    <h2 className="text-4xl font-display font-black text-v-black tracking-tight mb-2">Master Inventory Index</h2>
                    <p className="text-slate-500 font-medium">Granular control over global node distribution and valuation data.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white text-v-black border border-black/5 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="bg-v-blue text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-v-blue/20">
                        <Plus className="w-5 h-5" /> Initialize Node
                    </button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6 min-h-0 z-10">
                {/* Spatial Map Pane */}
                <div className="hidden xl:block relative glass-panel rounded-3xl overflow-hidden border border-black/5 shadow-2xl bg-white">
                    {/* Simulated Map Background - Light Theme */}
                    <div className="absolute inset-0 bg-slate-100 overflow-hidden mix-blend-multiply opacity-50">
                        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover scale-105" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                        <span className="bg-white/90 border border-black/5 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-emerald-600 tracking-widest uppercase shadow-md">Live Vector Network</span>
                        <div className="flex gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                            <span className="w-2.5 h-2.5 rounded-full bg-v-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        </div>
                    </div>

                    {/* Map Plot Points */}
                    {properties.map((p, idx) => (
                        <motion.div
                            key={`map-${p.id}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", delay: 0.5 + (idx * 0.1) }}
                            className="absolute cursor-pointer flex flex-col items-center gap-2"
                            style={{ top: `${20 + (idx * 15)}%`, left: `${30 + (idx * 10)}%` }}
                            onClick={() => setActiveProperty(p)}
                        >
                            <div className={`w-4 h-4 rounded-full border-2 border-white ${p.status === 'Active' ? 'bg-emerald-500 shadow-[0_4px_10px_rgba(16,185,129,0.5)]' : p.status === 'Sold' ? 'bg-v-blue shadow-[0_4px_10px_rgba(59,130,246,0.5)]' : 'bg-slate-400 shadow-md'}`} />
                        </motion.div>
                    ))}
                </div>

                {/* Dense Data Grid Pane */}
                <div className="glass-panel border border-black/5 shadow-2xl rounded-3xl flex flex-col relative overflow-hidden bg-white">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-black/5 flex items-center justify-between bg-slate-50/80 backdrop-blur-md z-20 shrink-0">
                        <div className="relative w-full max-w-xs group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-v-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Query Database..."
                                className="w-full bg-white border border-black/5 rounded-xl pl-11 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-v-blue/30 focus:shadow-sm transition-all text-v-black placeholder-slate-400"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm ml-2">
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                    </div>

                    <div className="flex-1 overflow-auto custom-scrollbar z-10 relative">
                        <table className="w-full text-left border-collapse whitespace-nowrap">
                            <thead className="sticky top-0 bg-white/90 backdrop-blur-md z-20 shadow-sm">
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-black/5">
                                    <th className="px-6 py-4">Node / RERA</th>
                                    <th className="px-6 py-4">Valuation</th>
                                    <th className="px-6 py-4">Velocity</th>
                                    <th className="px-6 py-4 text-right">Inspect</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {properties.map((prop, i) => (
                                    <motion.tr
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 24, delay: i * 0.05 }}
                                        key={prop.id}
                                        onClick={() => setActiveProperty(prop)}
                                        className="hover:bg-slate-50 transition-colors group cursor-pointer"
                                    >
                                        <td className="px-6 py-5">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden border border-black/5 shrink-0 relative shadow-inner">
                                                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                    <div className={`absolute top-1 right-1 w-2 h-2 rounded-full border border-white ${prop.status === 'Active' ? 'bg-emerald-500' : prop.status === 'Sold' ? 'bg-v-blue' : 'bg-amber-500'}`} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-v-black mb-0.5">{prop.title}</p>
                                                    <p className="text-[10px] font-mono font-bold text-v-blue">{prop.id} <span className="text-slate-400 font-sans tracking-wide">| {prop.location}</span></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-sm font-black text-v-black">{prop.price}</p>
                                            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-0.5">{prop.status}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-v-black">{prop.leads} Lds</span>
                                                    <span className={`text-[10px] font-bold flex items-center gap-0.5 ${prop.trend.includes('-') ? 'text-red-500' : 'text-emerald-600'}`}>
                                                        {prop.trend}
                                                    </span>
                                                </div>
                                                <div className="flex items-end gap-[2px] h-6 w-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                                    {prop.micro.map((m, idx) => (
                                                        <div key={idx} className={`w-1.5 rounded-t-sm ${prop.trend.includes('-') ? 'bg-red-400' : 'bg-v-blue'}`} style={{ height: `${m > 0 ? (m / Math.max(...prop.micro)) * 100 : 5}%` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="p-2 text-slate-400 hover:text-v-blue hover:bg-v-blue/5 rounded-lg transition-colors"><Eye className="w-5 h-5" /></button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Full-Bleed Immersive Drawer Overlay */}
            <AnimatePresence>
                {activeProperty && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="absolute inset-y-0 right-0 w-full xl:w-[60%] z-50 rounded-3xl overflow-hidden glass-panel border border-black/5 shadow-[-20px_0_50px_rgba(0,0,0,0.15)] flex flex-col bg-white"
                    >
                        <div className="relative h-72 w-full shrink-0">
                            <img src={activeProperty.image} alt={activeProperty.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                            <button
                                onClick={() => setActiveProperty(null)}
                                className="absolute top-6 right-6 p-3 bg-white/80 hover:bg-white backdrop-blur-md rounded-full text-v-black border border-black/5 transition-all shadow-md hover:scale-105"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
                                <div>
                                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full backdrop-blur-sm mb-3 inline-block shadow-sm">
                                        {activeProperty.status} NODE
                                    </span>
                                    <h2 className="text-4xl font-display font-black text-v-black tracking-tight">{activeProperty.title}</h2>
                                    <p className="text-sm font-bold text-slate-600 mt-1 flex items-center gap-2"><MapPin className="w-4 h-4 text-v-blue" /> {activeProperty.location}</p>
                                </div>
                                <h3 className="text-3xl font-black text-v-black drop-shadow-sm">{activeProperty.price}</h3>
                            </div>
                        </div>

                        <div className="p-8 flex-1 overflow-y-auto bg-slate-50">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-4">Metadata Analysis</h4>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 border border-black/5 rounded-xl shadow-sm">
                                            <p className="text-xs text-slate-500 mb-1">RERA Validation Tag</p>
                                            <p className="font-mono font-bold text-v-blue">{activeProperty.rera}</p>
                                        </div>
                                        <div className="bg-white p-4 border border-black/5 rounded-xl shadow-sm">
                                            <p className="text-xs text-slate-500 mb-1">Lead Architect / Agent</p>
                                            <p className="font-bold text-v-black">{activeProperty.agent}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-4">Engagement Metrics</h4>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 border border-black/5 rounded-xl shadow-sm flex justify-between items-center group">
                                            <div>
                                                <p className="text-xs text-slate-500 mb-1">Total System Views</p>
                                                <p className="font-display font-black text-2xl text-v-black group-hover:text-v-blue transition-colors">{activeProperty.views}</p>
                                            </div>
                                            <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div className="bg-white p-4 border border-black/5 rounded-xl shadow-sm flex justify-between items-center group">
                                            <div>
                                                <p className="text-xs text-slate-500 mb-1">Active Pipeline Deals</p>
                                                <p className="font-display font-black text-2xl text-v-black group-hover:text-v-blue transition-colors">{activeProperty.leads}</p>
                                            </div>
                                            <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button className="flex-1 bg-v-black text-white font-black py-4 rounded-xl shadow-lg shadow-black/10 hover:bg-slate-800 transition-colors flex justify-center items-center gap-2">
                                    <Edit2 className="w-5 h-5" /> Enter Edit Protocol
                                </button>
                                <button className="px-6 bg-red-50 text-red-600 font-bold py-4 rounded-xl border border-red-100 hover:bg-red-100 transition-colors flex justify-center items-center">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
