import { motion } from 'motion/react';
import { Home, IndianRupee, Eye, Users, ArrowUpRight, ArrowDownRight, Activity, Crosshair } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const valuationData = [
    { month: 'Jan', val: 120, leads: 400 },
    { month: 'Feb', val: 125, leads: 300 },
    { month: 'Mar', val: 135, leads: 500 },
    { month: 'Apr', val: 130, leads: 450 },
    { month: 'May', val: 140, leads: 600 },
    { month: 'Jun', val: 142.5, leads: 750 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-panel p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-3xl">
                <p className="text-white font-bold mb-2">{label} 2026</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-slate-300">{entry.name}:</span>
                        <span className="text-white font-black">{entry.name.includes("Valuation") ? `₹ ${entry.value} Cr` : entry.value}</span>
                    </div>
                ))}
                export default function Dashboard() {
  const stats = [
                {label: 'Total Network Valuation', value: '₹ 1,240 Cr', trend: '+14.5%', icon: TrendingUp },
                {label: 'Active Pipeline Nodes', value: '3,842', trend: '+8.2%', icon: Target },
                {label: 'System Engagement', value: '142.4K', trend: '+24.1%', icon: Users },
                ];

                return (
                <div className="space-y-8 pb-10">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-4xl font-display font-black text-v-black tracking-tight mb-2">Operational Dashboard</h2>
                            <p className="text-slate-500 font-medium text-lg">Real-time surveillance of network telemetry and asset flow.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white border border-black/5 rounded-2xl px-5 py-3 shadow-md">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protocol Status</p>
                                <p className="text-sm font-black text-emerald-600">SECURE_IDLE</p>
                            </div>
                        </div>
                    </div>

                    {/* Dense Stat Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring' }}
                                className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform border border-black/5 bg-white"
                            >
                                {/* Suble Glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-v-blue/5 rounded-full blur-[40px] group-hover:bg-v-blue/10 transition-colors" />

                                <div className="flex items-start justify-between relative z-10 mb-8">
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-black/5 flex items-center justify-center shadow-inner">
                                        <stat.icon className="w-6 h-6 text-v-blue" />
                                    </div>
                                    <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                                        <ArrowUpRight className="w-4 h-4" />
                                        <span className="text-xs font-black">{stat.trend}</span>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-5xl font-display font-black text-v-black tracking-tight mb-2 group-hover:text-v-blue transition-colors">{stat.value}</p>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Complex Dual-Axis Chart */}
                    <div className="glass-panel p-8 rounded-3xl border border-black/5 bg-white flex flex-col gap-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-v-black">Vector Analysis</h3>
                                <p className="text-sm font-medium text-slate-500">Trailing 7-Month Valuation vs. Lead Capture</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-v-blue shadow-inner" />
                                    <span className="text-xs font-bold text-slate-600">Valuation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-inner" />
                                    <span className="text-xs font-bold text-slate-600">Leads</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                                    <YAxis yAxisId="left" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
                                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', color: '#0f172a', fontWeight: 'bold', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
                                        itemStyle={{ color: '#0f172a' }}
                                    />
                                    <Area yAxisId="left" type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                    <Area yAxisId="right" type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Deep Activity Stream */}
                    <h3 className="text-xl font-bold text-v-black tracking-tight mt-12 mb-4">Neural Activity Stream</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="glass-panel rounded-3xl border border-black/5 bg-white p-6 shadow-md flex flex-col gap-6">
                            {[
                                { action: 'NEW LEAD VECTOR', detail: 'Director Alpha registered High-Intent Buy (Worli)', time: '2m ago', type: 'lead' },
                                { action: 'ASSET VALUATION OVERRIDE', detail: 'BKC Financial Hub OS Price Adjusted +2.5%', time: '14m ago', type: 'asset' },
                                { action: 'SECURITY PROTOCOL', detail: 'Failed auth attempt originating from 192.168.1.XX', time: '1h ago', type: 'sec' },
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 group cursor-pointer p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-black/5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                                        {log.type === 'lead' ? <Users className="w-5 h-5 text-v-blue" /> : log.type === 'asset' ? <Activity className="w-5 h-5 text-emerald-500" /> : <Zap className="w-5 h-5 text-amber-500" />}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest mb-1">{log.action}</h4>
                                        <p className="text-sm font-bold text-v-black">{log.detail}</p>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-400">{log.time}</div>
                                </div>
                            ))}
                        </div>

                        <div className="glass-panel rounded-3xl border border-black/5 bg-slate-900 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                            {/* Internal Dark Panel within Light Theme for contrast */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] opacity-20 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-1000" />
                            <div className="relative z-10">
                                <span className="px-3 py-1 bg-v-blue/20 text-v-blue border border-v-blue/30 rounded-full text-[10px] font-black tracking-widest uppercase inline-block mb-4">Command Terminal</span>
                                <h3 className="text-3xl font-display font-black text-white leading-tight mb-2">Execute global market shifts.</h3>
                                <p className="text-slate-400 text-sm font-medium">Direct access to underlying database architecture.</p>
                            </div>
                            <div className="relative z-10 mt-8">
                                <button className="w-full bg-white text-v-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 group-hover:shadow-white/20">
                                    <Terminal className="w-5 h-5" /> Open CLI Interface
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                );
}
