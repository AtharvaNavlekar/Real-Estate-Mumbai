import { useState } from 'react';
import { Search, Filter, Phone, Mail, Brain, AlertCircle, MessageSquare, MoreVertical, ArrowUpRight, ArrowDownRight, Zap, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Leads() {
    const [leads] = useState([
        { id: 'LD-1042', name: 'Vikram Sanghavi', intent: 'High / Immediate', budget: '₹ 45-50 Cr', asset: 'Skyline Penthouse', phone: '+91 98200XXXXX', email: 'v.sanghavi@capital.com', lastActive: '12m ago', score: 94, status: 'Hot', agent: 'R. Sharma', risk: 'Low', targetImg: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop' },
        { id: 'LD-1045', name: 'Ayesha Mehra', intent: 'Medium / Q3', budget: '₹ 20-25 Cr', asset: 'Sea-View Reserve', phone: '+91 99201XXXXX', email: 'ayesha.m@design.in', lastActive: '3h ago', score: 68, status: 'Warm', agent: 'A. Desai', risk: 'Medium', targetImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop' },
        { id: 'LD-1048', name: 'Zodiac Holdings Corp', intent: 'Strategic / FY27', budget: '₹ 120-150 Cr', asset: 'BKC Financial Hub', phone: '+91 22 400XXXXX', email: 'acquisitions@zodiac.com', lastActive: '1d ago', score: 88, status: 'Negotiating', agent: 'S. Patel', risk: 'High', targetImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop' },
        { id: 'LD-1051', name: 'Rajiv Menon', intent: 'Low / Exploratory', budget: '₹ 15-18 Cr', asset: 'Juhu Tara Waterfront', phone: '+91 98111XXXXX', email: 'rmenon.tech@gmail.com', lastActive: '5d ago', score: 42, status: 'Cold', agent: 'A. Desai', risk: 'Low', targetImg: 'https://images.unsplash.com/photo-1628611225249-6c174bfdc5dc?q=80&w=2000&auto=format&fit=crop' }
    ]);

    const [activeLead, setActiveLead] = useState(leads[0]);

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0 px-2 lg:px-0">
                <div>
                    <h2 className="text-4xl font-display font-black text-v-black tracking-tight mb-2">CRM War Room</h2>
                    <p className="text-slate-500 font-medium">Neural engine analyzing high-net-worth individual acquisition flow.</p>
                </div>
                <div className="flex gap-4 p-1.5 bg-slate-100 border border-black/5 rounded-2xl">
                    <button className="px-6 py-2.5 rounded-xl font-bold bg-white text-v-black shadow-md border border-black/5 transition-all text-sm">Active Vectors</button>
                    <button className="px-6 py-2.5 rounded-xl font-bold text-slate-500 hover:text-v-black transition-colors text-sm">Archived</button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-0">

                {/* Left Panel: High Velocity Inbox */}
                <div className="xl:col-span-4 flex flex-col gap-4 min-h-0">
                    <div className="flex gap-2 shrink-0">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-v-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Locate entity..."
                                className="w-full bg-white border border-black/5 rounded-xl pl-11 pr-4 py-3 text-sm font-medium focus:outline-none focus:border-v-blue/30 focus:shadow-sm transition-all shadow-sm text-v-black placeholder-slate-400"
                            />
                        </div>
                        <button className="p-3 bg-white border border-black/5 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm shrink-0">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-3 pr-2 pb-4">
                        {leads.map((lead, idx) => (
                            <motion.div
                                key={lead.id}
                                onClick={() => setActiveLead(lead)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25, delay: idx * 0.05 }}
                                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${activeLead?.id === lead.id
                                    ? 'bg-v-black border-v-black shadow-xl shadow-black/10 scale-[1.02] z-10'
                                    : 'bg-white border-black/5 hover:border-black/10 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${lead.status === 'Hot' ? 'bg-red-500' : lead.status === 'Warm' ? 'bg-amber-500' : lead.status === 'Negotiating' ? 'bg-v-blue' : 'bg-slate-400'}`} />
                                        <h3 className={`font-bold text-base ${activeLead?.id === lead.id ? 'text-white' : 'text-v-black'}`}>{lead.name}</h3>
                                    </div>
                                    <span className={`text-[10px] uppercase font-black tracking-widest px-2 py-1 border rounded pt-[5px] ${activeLead?.id === lead.id ? 'border-white/20 text-slate-300' : 'border-black/5 text-slate-400'}`}>{lead.id}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className={`text-xs font-medium truncate max-w-[180px] flex items-center gap-1.5 ${activeLead?.id === lead.id ? 'text-slate-300' : 'text-slate-500'}`}>
                                            Target: {lead.asset}
                                        </p>
                                        <p className={`text-[10px] font-bold uppercase tracking-widest ${activeLead?.id === lead.id ? 'text-slate-400' : 'text-slate-400'}`}>
                                            {lead.intent}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-xs font-bold mb-1 ${activeLead?.id === lead.id ? 'text-v-blue' : 'text-v-blue'}`}>Score: {lead.score}</p>
                                        <p className={`text-[10px] font-medium ${activeLead?.id === lead.id ? 'text-slate-400' : 'text-slate-400'}`}>{lead.lastActive}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Deep Profiler with Visual Target Asset */}
                <div className="xl:col-span-8 glass-panel bg-white border border-black/5 shadow-2xl rounded-3xl overflow-hidden flex flex-col relative h-[calc(100vh-210px)] min-h-[600px]">

                    {/* Header Image / Target Asset Node */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeLead.id + "-img"}
                            initial={{ opacity: 0, y: -20, scale: 1.05 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="h-48 w-full relative shrink-0"
                        >
                            <img src={activeLead.targetImg} alt="Target Asset" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                            <div className="absolute bottom-4 left-8 right-8 flex justify-between items-end">
                                <div>
                                    <span className="px-3 py-1 bg-white/90 border border-black/5 text-slate-600 rounded-full text-[10px] font-black tracking-widest uppercase inline-block mb-2 shadow-sm backdrop-blur-md">Target Asset Node</span>
                                    <h3 className="text-2xl font-display font-black text-v-black tracking-tight drop-shadow-sm">{activeLead.asset}</h3>
                                </div>
                                <span className="text-lg font-black text-v-black drop-shadow-sm">{activeLead.budget}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Header Details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLead.id + "-header"}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="px-8 pb-6 pt-6 border-b border-black/5 flex justify-between items-start shrink-0 relative bg-white z-10"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <h2 className="text-4xl font-display font-black text-v-black tracking-tight">{activeLead.name}</h2>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/5 ${activeLead.status === 'Hot' ? 'bg-red-50 text-red-600 shadow-sm' : activeLead.status === 'Warm' ? 'bg-amber-50 text-amber-600 shadow-sm' : activeLead.status === 'Negotiating' ? 'bg-v-blue/10 text-v-blue shadow-sm' : 'bg-slate-100 text-slate-500 shadow-sm'}`}>
                                        {activeLead.status} Lead
                                    </span>
                                </div>
                                <div className="flex gap-6 mt-4">
                                    <a href={`tel:${activeLead.phone}`} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-v-blue transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-v-blue/10 transition-colors"><Phone className="w-4 h-4" /></div>
                                        {activeLead.phone}
                                    </a>
                                    <a href={`mailto:${activeLead.email}`} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-v-blue transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-v-blue/10 transition-colors"><Mail className="w-4 h-4" /></div>
                                        {activeLead.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors border border-black/5 shadow-sm">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                                <button className="px-6 py-3 bg-v-black text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-black/10">
                                    <MessageSquare className="w-4 h-4" /> Initiate Comms
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar relative bg-slate-50 border-t border-black/5 shadow-inner">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLead.id + "-body"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
                            >
                                {/* Neural Analysis Block */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-black/5 pb-2">
                                        <h3 className="text-xs uppercase font-black tracking-widest text-slate-400 flex items-center gap-2">
                                            <Brain className="w-4 h-4 text-v-blue" /> AI Analysis Matrix
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm transform hover:-translate-y-1 transition-transform">
                                            <p className="text-xs text-slate-500 mb-2 font-medium">Conversion Probability</p>
                                            <div className="flex items-end gap-2">
                                                <p className="text-4xl font-display font-black text-v-black">{activeLead.score}%</p>
                                                <TrendingArrow score={activeLead.score} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm transform hover:-translate-y-1 transition-transform">
                                            <p className="text-xs text-slate-500 mb-2 font-medium">Flight Risk Assessment</p>
                                            <div className="flex items-center gap-2">
                                                <AlertCircle className={`w-5 h-5 ${activeLead.risk === 'Low' ? 'text-emerald-500' : activeLead.risk === 'Medium' ? 'text-amber-500' : 'text-red-500'}`} />
                                                <p className="text-xl font-black text-v-black">{activeLead.risk}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm space-y-3 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-v-blue/5 rounded-full blur-[30px]" />
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Behavioral Insights</p>
                                        <div className="flex gap-3 text-sm font-medium text-slate-600 bg-slate-50 p-3 rounded-xl border border-black/5">
                                            <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                                            <p>Client has viewed <span className="font-bold text-v-black">{activeLead.asset}</span> 6 times in the last 48 hours. Recommend immediate intervention.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Matrix */}
                                <div className="space-y-6 flex flex-col h-full relative z-10">
                                    <div className="flex items-center justify-between border-b border-black/5 pb-2 shrink-0">
                                        <h3 className="text-xs uppercase font-black tracking-widest text-slate-400 flex items-center gap-2">
                                            <RefreshCw className="w-4 h-4 text-emerald-500" /> Action Vectors
                                        </h3>
                                    </div>

                                    <div className="flex-1 bg-white border border-black/5 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 cursor-pointer group">
                                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-v-blue group-hover:border-v-blue transition-colors">
                                                    <CheckCircle2 className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-v-black group-hover:text-v-blue transition-colors">Dispatch site-visit dossier via WhatsApp</p>
                                                    <p className="text-xs text-slate-500 font-medium">Automated protocol ready.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 cursor-pointer group">
                                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-v-blue group-hover:border-v-blue transition-colors">
                                                    <CheckCircle2 className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-v-black group-hover:text-v-blue transition-colors">Schedule Agent Discovery Call</p>
                                                    <p className="text-xs text-slate-500 font-medium">Assign to: {activeLead.agent}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-black/5 relative">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Log manual interaction or note..."
                                                    className="w-full bg-slate-50 border border-black/5 rounded-xl pl-4 pr-12 py-3 text-sm font-medium focus:outline-none focus:border-v-blue/50 focus:bg-white transition-all text-v-black placeholder-slate-400"
                                                />
                                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-v-black rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors shadow-md text-white">
                                                    <Send className="w-4 h-4 ml-[2px]" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}

function TrendingArrow({ score }: { score: number }) {
    if (score > 75) return <ArrowUpRight className="w-6 h-6 text-emerald-500 mb-1" />;
    if (score > 40) return <ArrowUpRight className="w-6 h-6 text-amber-500 mb-1 rotate-45" />;
    return <ArrowDownRight className="w-6 h-6 text-red-500 mb-1" />;
}
