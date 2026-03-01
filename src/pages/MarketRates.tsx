import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    TrendingUp, MapPin, Building2, BarChart3, Info, Search,
    ArrowUpRight, ArrowDownRight, ChevronDown, Activity, ChevronRight,
    PieChart, DollarSign, Target, Zap
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function MarketRates() {
    const [activeLocation, setActiveLocation] = useState('Bandra West');
    const [timeframe, setTimeframe] = useState('5Y');

    // Mock Data for the chart
    const chartData = [
        { name: '2019', rate: 45000 },
        { name: '2020', rate: 46500 },
        { name: '2021', rate: 48000 },
        { name: '2022', rate: 52000 },
        { name: '2023', rate: 58000 },
        { name: '2024', rate: 65000 },
        { name: '2025', rate: 71000 },
    ];

    const marketData = [
        { loc: "Bandra West", avgPrice: "71,000", rentYield: "3.2%", trend: "+8.5%", status: "up", volume: "High" },
        { loc: "Worli", avgPrice: "65,000", rentYield: "2.8%", trend: "+6.2%", status: "up", volume: "Medium" },
        { loc: "Juhu", avgPrice: "68,000", rentYield: "3.0%", trend: "+7.1%", status: "up", volume: "High" },
        { loc: "BKC", avgPrice: "45,000", rentYield: "6.5%", trend: "+12.0%", status: "up", volume: "High" },
        { loc: "Lower Parel", avgPrice: "48,000", rentYield: "3.5%", trend: "+4.5%", status: "up", volume: "Medium" },
        { loc: "Powai", avgPrice: "35,000", rentYield: "3.8%", trend: "-1.2%", status: "down", volume: "High" },
    ];

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 min-h-screen">

            {/* Premium Bloomberg-esque Light Hero Section */}
            <div className="pt-32 pb-16 relative overflow-hidden border-b border-black/5 bg-white">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6 backdrop-blur-md">
                                <Activity className="w-4 h-4" /> Live Market Terminal 2025
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4 text-v-black drop-shadow-sm">
                                Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Intelligence</span>
                            </h1>
                            <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
                                Institutional-grade data, valuation models, and verified Ready Reckoner benchmarks across Mumbai's ultra-prime micro-markets.
                            </p>
                        </div>

                        {/* Quick Stats Header */}
                        <div className="flex gap-4">
                            <div className="bg-white border border-slate-200 rounded-2xl p-4 min-w-[140px] shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">MMR Index</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-black text-v-black font-display">12,450</span>
                                    <span className="text-sm font-bold text-emerald-500 flex items-center"><ArrowUpRight className="w-3 h-3" /> 1.2%</span>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-4 min-w-[140px] shadow-sm hidden sm:block">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Avg Yield</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-black text-v-black font-display">4.2%</span>
                                    <span className="text-sm font-bold text-emerald-500 flex items-center"><ArrowUpRight className="w-3 h-3" /> 0.3%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">

                {/* Command Bar */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center gap-4 shadow-xl shadow-black/5">
                    <div className="flex-1 w-full relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text" placeholder="Search SYMBOL, Locality, or Project..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm font-medium text-v-black placeholder:text-slate-400 transition-all font-mono" />
                    </div>
                    <div className="w-full md:w-auto flex gap-3">
                        <div className="relative flex-1 md:w-48">
                            <select className="appearance-none w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm font-bold text-v-black cursor-pointer font-mono">
                                <option>RESIDENTIAL</option>
                                <option>COMMERCIAL</option>
                                <option>REITs</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transition-all whitespace-nowrap">
                            Execute Query
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Chart Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 relative overflow-hidden">
                            {/* Chart Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-3xl font-display font-black text-v-black">{activeLocation}</h2>
                                        <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg border border-emerald-100">IDX: {activeLocation.substring(0, 3).toUpperCase()}</span>
                                    </div>
                                    <p className="text-sm font-mono text-slate-500 flex items-center gap-4">
                                        <span>Vol: 24.5M</span>
                                        <span>Open: ₹70,500</span>
                                        <span>High: ₹71,200</span>
                                    </p>
                                </div>
                                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                                    {['1Y', '3Y', '5Y', 'MAX'].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTimeframe(t)}
                                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${timeframe === t ? 'bg-white text-v-black shadow-sm border border-slate-200' : 'text-slate-500 hover:text-v-black'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Chart Canvas */}
                            <div className="h-[380px] w-full relative z-10">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'monospace' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'monospace' }} tickFormatter={(value) => `₹${value / 1000}k`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)', fontFamily: 'monospace' }}
                                            itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                                            labelStyle={{ color: '#64748b', marginBottom: '4px' }}
                                        />
                                        <Area type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 4 }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* Secondary Metrics Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Cap Rate", value: "3.24%", icon: PieChart },
                                { label: "Absorption", value: "84%", icon: Target },
                                { label: "Inventory", value: "1,204", icon: Building2 },
                                { label: "Liquidity", value: "High", icon: Zap }
                            ].map((met, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                                    <met.icon className="w-5 h-5 text-emerald-500 mb-3" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{met.label}</p>
                                    <h4 className="text-xl font-display font-bold text-v-black tracking-tight">{met.value}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Ticker & Info */}
                    <div className="space-y-6">

                        {/* Market Ticker List */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-black/5">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 font-display border-b border-slate-100 pb-4 flex justify-between items-center">
                                Watchlist
                                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md text-slate-600">LIVE</span>
                            </h3>
                            <div className="space-y-3">
                                {marketData.map((data, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveLocation(data.loc.split(' ')[0])}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${activeLocation === data.loc.split(' ')[0] ? 'bg-emerald-50 border-emerald-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-slate-50'}`}
                                    >
                                        <div>
                                            <h4 className={`font-bold text-sm mb-1 ${activeLocation === data.loc.split(' ')[0] ? 'text-emerald-900' : 'text-v-black'}`}>{data.loc}</h4>
                                            <p className={`text-xs font-mono mb-1 ${activeLocation === data.loc.split(' ')[0] ? 'text-emerald-700' : 'text-slate-500'}`}>₹{data.avgPrice}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center justify-end gap-1 mb-1">
                                                {data.status === 'up' ? <ArrowUpRight className="w-4 h-4 text-emerald-500" /> : <ArrowDownRight className="w-4 h-4 text-red-500" />}
                                                <span className={`text-sm font-bold font-mono ${data.status === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>{data.trend}</span>
                                            </div>
                                            <p className={`text-[10px] font-bold uppercase tracking-widest ${activeLocation === data.loc.split(' ')[0] ? 'text-emerald-600/70' : 'text-slate-400'}`}>YLD: {data.rentYield}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Ready Reckoner Info Card - Glassmorphic */}
                        <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-6 shadow-xl shadow-black/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <DollarSign className="w-24 h-24 text-indigo-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4 font-display">Compliance & Tax</h3>
                                <h4 className="text-2xl font-black text-v-black mb-2 leading-tight">Ready Reckoner Rates</h4>
                                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 border-l-2 border-indigo-300 pl-3">
                                    Official guideline values for stamp duty computation footprint. Last revised via Govt Notification No. 142.
                                </p>

                                <div className="bg-white rounded-xl p-4 mb-6 border border-slate-100 shadow-sm space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500 font-medium">Stamp Duty Basis</span>
                                        <span className="text-v-black font-mono font-bold">5.0% + 1.0%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500 font-medium">Registration Cap</span>
                                        <span className="text-v-black font-mono font-bold">₹30,000 max</span>
                                    </div>
                                </div>

                                <button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                                    Download Circular PDF <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}
