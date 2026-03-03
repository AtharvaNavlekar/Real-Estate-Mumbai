import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MapPin, Building2, Search,
    ArrowUpRight, ArrowDownRight, Activity, ChevronRight,
    DollarSign, Target, Zap, BarChart3, Clock, LineChart, PieChart
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import westernMarketData from '../data/westernLineMarketData.json';

// --- Custom Recharts Tooltip ---
const InstitutionalTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-v-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1 min-w-[180px]">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{label} Fiscal</span>
                <div className="flex items-end gap-2">
                    <span className="text-2xl font-display font-black text-white">₹{payload[0].value.toLocaleString()}</span>
                    <span className="text-emerald-400 font-mono text-sm mb-1 pb-0.5">/sqft</span>
                </div>
            </div>
        );
    }
    return null;
};

export default function MarketRates() {
    const firstLocation = westernMarketData.zones[0].stations[0];
    const [activeLocationId, setActiveLocationId] = useState(firstLocation.id);
    const [timeframe, setTimeframe] = useState('5Y');
    const [searchQuery, setSearchQuery] = useState('');

    const allStations = useMemo(() => {
        return westernMarketData.zones.flatMap(zone =>
            zone.stations.map(station => ({ ...station, zoneName: zone.name }))
        );
    }, []);

    const activeLocation = allStations.find(s => s.id === activeLocationId) || allStations[0];

    const filteredStations = allStations.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.zoneName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const chartData = useMemo(() => {
        const currentRate = activeLocation.avgPricePerSqft;
        const trend = parseFloat(String(activeLocation.yoyChange)) || 5;

        // Ensure timeframe limits
        const yearsToShow = timeframe === '1Y' ? 2 : timeframe === '3Y' ? 4 : timeframe === '5Y' ? 6 : 10;
        let rate = currentRate / Math.pow(1 + (trend / 100), yearsToShow - 1);

        const currentYear = 2026;
        const startYear = currentYear - (yearsToShow - 1);

        const data = [];
        for (let i = 0; i < yearsToShow; i++) {
            const year = startYear + i;
            if (year === currentYear) {
                data.push({ name: year.toString(), rate: currentRate });
            } else {
                const pointTrend = trend + (Math.random() * 4 - 2);
                rate = rate * (1 + (pointTrend / 100));
                data.push({ name: year.toString(), rate: Math.round(rate) });
            }
        }
        return data;
    }, [activeLocation, timeframe]);

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-900 min-h-screen">

            {/* 1. Institutional Dark Hero */}
            <div className="pt-36 pb-24 relative overflow-hidden bg-v-black">
                {/* Immersive Background Elements */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-600/40 blur-[180px] rounded-full pointer-events-none mix-blend-screen"></div>
                    <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-600/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md">
                                <Activity className="w-4 h-4 animate-pulse" /> Bloomberg Terminal UI Concept
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-white drop-shadow-xl leading-[1.1]">
                                Automated Market <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Intelligence.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                                Real-time institutional-grade data covering {westernMarketData.metadata.totalStations} premium micro-markets from Churchgate to Dahisar. Powered by primary registrations.
                            </p>
                        </motion.div>

                        {/* Top-Level Market Indicators */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full hover:bg-white/10 transition-colors">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><LineChart className="w-3 h-3" /> Global Trend</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-black text-white font-display">Bullish</span>
                                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-bold">+8.4% YoY</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full hover:bg-white/10 transition-colors">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><BarChart3 className="w-3 h-3" /> Highest Volume</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-black text-white font-display">Andheri W</span>
                                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">1.2k Trxn</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full hover:bg-white/10 transition-colors">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><PieChart className="w-3 h-3" /> Inventory</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-black text-white font-display">8.2m sqft</span>
                                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs font-bold">Low</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full hover:bg-white/10 transition-colors">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1"><Clock className="w-3 h-3" /> Last Update</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-white font-mono mt-2">Live Sync</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Application Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Ticker & Search (Width: 4/12) */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-100 flex flex-col h-[850px]">

                            {/* Command Bar Search */}
                            <div className="relative mb-6">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search Micro-Markets..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-v-black focus:border-transparent text-sm font-bold text-v-black placeholder:text-slate-400 transition-all"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-4 px-2">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Western Index</h3>
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> LIVE
                                </span>
                            </div>

                            {/* Ticker List */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 -mr-2 space-y-2">
                                <AnimatePresence>
                                    {filteredStations.length === 0 ? (
                                        <div className="py-12 text-center text-slate-400 font-medium">No markets match your criteria.</div>
                                    ) : (
                                        filteredStations.map((station) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                key={station.id}
                                                onClick={() => setActiveLocationId(station.id)}
                                                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center justify-between
                                                ${activeLocationId === station.id
                                                        ? 'bg-v-black border-v-black shadow-lg transform scale-[1.02]'
                                                        : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'}`}
                                            >
                                                <div>
                                                    <h4 className={`font-bold text-base mb-1 transition-colors ${activeLocationId === station.id ? 'text-white' : 'text-v-black'}`}>{station.name}</h4>
                                                    <p className={`text-xs font-bold uppercase tracking-widest truncate max-w-[120px] transition-colors ${activeLocationId === station.id ? 'text-white/60' : 'text-slate-400'}`}>
                                                        {station.zoneName.replace('Western Suburbs', 'W.S.')}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className={`text-sm font-mono font-bold mb-1 transition-colors ${activeLocationId === station.id ? 'text-white' : 'text-v-black'}`}>
                                                        ₹{station.avgPricePerSqft.toLocaleString()}
                                                    </p>
                                                    <div className="flex items-center gap-1 justify-end">
                                                        {station.yoyChange > 0 ? <ArrowUpRight className={`w-3.5 h-3.5 ${activeLocationId === station.id ? 'text-emerald-400' : 'text-emerald-500'}`} /> : <ArrowDownRight className={`w-3.5 h-3.5 ${activeLocationId === station.id ? 'text-red-400' : 'text-red-500'}`} />}
                                                        <span className={`text-[11px] font-bold font-mono ${activeLocationId === station.id ? (station.yoyChange > 0 ? 'text-emerald-400' : 'text-red-400') : (station.yoyChange > 0 ? 'text-emerald-600' : 'text-red-600')}`}>
                                                            {station.yoyChange > 0 ? '+' : ''}{station.yoyChange}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Chart & Data Grids (Width: 8/12) */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Interactive Chart Dashboard */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative">
                            {/* Chart Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <h2 className="text-4xl font-display font-black text-v-black">{activeLocation.name}</h2>
                                        <span className="px-3 py-1 bg-v-black text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">{activeLocation.zoneName}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-6 text-sm">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Current Avg</span>
                                            <span className="font-mono font-bold text-lg text-emerald-600">₹{activeLocation.avgPricePerSqft.toLocaleString()}<span className="text-xs text-slate-400 font-sans ml-1">/sqft</span></span>
                                        </div>
                                        <div className="w-px h-8 bg-slate-200"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Trading Range</span>
                                            <span className="font-mono font-bold text-v-black">₹{activeLocation.priceRange.min.toLocaleString()} - ₹{activeLocation.priceRange.max.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Premium Timeframe Selector */}
                                <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
                                    {['1Y', '3Y', '5Y', 'MAX'].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTimeframe(t)}
                                            className={`relative px-6 py-2 rounded-xl text-xs font-bold transition-colors ${timeframe === t ? 'text-white' : 'text-slate-500 hover:text-v-black'}`}
                                        >
                                            {timeframe === t && (
                                                <motion.div layoutId="activeTab" className="absolute inset-0 bg-v-black rounded-xl shadow-md" style={{ zIndex: 0 }} />
                                            )}
                                            <span className="relative z-10">{t}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recharts Canvas */}
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#050505" stopOpacity={0.15} />
                                                <stop offset="100%" stopColor="#050505" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'monospace', fontWeight: 'bold' }} dy={15} />
                                        <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'monospace', fontWeight: 'bold' }} tickFormatter={(value) => `₹${value / 1000}k`} />
                                        <Tooltip content={<InstitutionalTooltip />} cursor={{ stroke: '#050505', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                        <Area type="monotone" dataKey="rate" stroke="#050505" strokeWidth={4} fillOpacity={1} fill="url(#colorRate)" activeDot={{ r: 8, fill: '#050505', stroke: '#fff', strokeWidth: 4 }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* 4. Asymmetrical Data Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                            {/* Demographics Block (7/12) */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="md:col-span-7 bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                                <MapPin className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-50 rotate-12 pointer-events-none" />

                                <div>
                                    <h3 className="text-2xl font-display font-black text-v-black mb-8 relative z-10">Micro-Market Profile</h3>

                                    <div className="grid grid-cols-2 gap-8 relative z-10">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Population Density</p>
                                            <p className="text-3xl font-black font-mono text-v-black mb-1">{activeLocation.demographics.popDensity.toLocaleString()}</p>
                                            <p className="text-xs font-bold text-slate-500">per km² (Ward {activeLocation.demographics.ward})</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Median Income</p>
                                            <p className="text-2xl font-black font-display text-v-black mb-1">{activeLocation.demographics.medianIncome}</p>
                                            <p className="text-xs font-bold text-slate-500">Household Average</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Primary Transport Node</p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm">
                                        <Zap className="w-4 h-4" /> {activeLocation.transport.metro || activeLocation.transport.railway}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Projects & Assets Block (5/12) */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="md:col-span-5 bg-v-black rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-display font-black text-white mb-2">Asset Types</h3>
                                    <p className="text-slate-400 text-sm font-medium mb-8">Supply dominant segments.</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {activeLocation.propertyTypes.map((pt, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs font-bold tracking-wide border border-white/10">
                                                {pt}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">Yield Generators</h4>
                                    {activeLocation.upcomingProjects.length > 0 ? (
                                        <ul className="space-y-4">
                                            {activeLocation.upcomingProjects.slice(0, 3).map((proj, idx) => (
                                                <li key={idx}>
                                                    <p className="text-sm font-bold text-white leading-tight mb-1">{proj.name}</p>
                                                    <p className="text-xs text-slate-400 flex justify-between">
                                                        <span>{proj.developer}</span>
                                                        <span className="text-emerald-400 font-mono">{proj.possession}</span>
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="py-4 flex flex-col text-left">
                                            <p className="text-sm font-medium text-slate-400">Mature market with stable secondary inventory. High rental yield zone.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 12px; }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
            `}</style>
        </main>
    );
}
