import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    Bell, CheckCircle, Heart, Search, TrendingUp, TrendingDown,
    MapPin, Eye, Clock, Calendar, ArrowRight, ArrowUpRight,
    Building2, BadgeCheck, AlertCircle, Sparkles, FileText,
    Phone, Star, ChevronRight, Activity
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../hooks/useNotifications';
import propertyService, { Property } from '../services/propertyService';

// ─── Mock data for rich dashboard sections ────────────────────────────────────

const portfolioTrend = [
    { month: 'Aug', value: 4.2 }, { month: 'Sep', value: 4.5 },
    { month: 'Oct', value: 4.3 }, { month: 'Nov', value: 4.8 },
    { month: 'Dec', value: 5.1 }, { month: 'Jan', value: 5.4 },
    { month: 'Feb', value: 5.2 }, { month: 'Mar', value: 5.8 },
];

const recentActivity = [
    { id: 1, type: 'viewed', title: '4 BHK Sea-View Penthouse', location: 'Worli', time: '2 hours ago', icon: Eye },
    { id: 2, type: 'saved', title: '3 BHK Modern Apartment', location: 'BKC', time: '1 day ago', icon: Heart },
    { id: 3, type: 'enquiry', title: 'Premium Office Space', location: 'BKC', time: '2 days ago', icon: Phone },
    { id: 4, type: 'viewed', title: '2 BHK Studio Flat', location: 'Andheri West', time: '3 days ago', icon: Eye },
    { id: 5, type: 'saved', title: '5 BHK Luxury Apartment', location: 'Bandra West', time: '4 days ago', icon: Heart },
];

const scheduledViewings = [
    { id: 1, title: '3 BHK Premium Residence', location: 'BKC, Mumbai', date: 'Mar 3, 2026', time: '11:00 AM', agent: 'Rohan Sharma', status: 'confirmed' },
    { id: 2, title: '4 BHK Sea-View Penthouse', location: 'Worli, Mumbai', date: 'Mar 6, 2026', time: '3:00 PM', agent: 'Priya Mehta', status: 'pending' },
];

const priceAlerts = [
    { id: 1, title: '4 BHK Luxury Apartment', location: 'Bandra West', oldPrice: '₹12.5 Cr', newPrice: '₹11.9 Cr', change: -4.8, trend: 'down' },
    { id: 2, title: '3 BHK Sea-View', location: 'BKC', oldPrice: '₹4.5 Cr', newPrice: '₹4.8 Cr', change: +6.7, trend: 'up' },
];

const recommendedSearches = [
    { label: '3 BHK in Bandra under 5 Cr', count: '23 matches' },
    { label: 'Sea-facing apartments in Worli', count: '11 matches' },
    { label: 'Office space in BKC', count: '8 matches' },
];

const marketPulse = [
    { label: 'Avg. Price/sqft (Mumbai)', value: '₹28,400', change: '+3.2%', up: true },
    { label: 'New Listings This Week', value: '1,247', change: '+18%', up: true },
    { label: 'Avg. Days on Market', value: '42 days', change: '-5 days', up: false },
    { label: 'Luxury Segment YoY', value: '+15%', change: 'Worli leads', up: true },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ label, value, sub, icon: Icon, accent }: {
    label: string; value: string | number; sub?: string;
    icon: React.ElementType; accent: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex items-start gap-4"
        >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                <p className="text-2xl font-display font-bold text-v-black leading-none">{value}</p>
                {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
            </div>
        </motion.div>
    );
}

function SectionHeader({ title, subtitle, action, to }: {
    title: string; subtitle?: string; action?: string; to?: string;
}) {
    return (
        <div className="flex items-end justify-between mb-5">
            <div>
                <h2 className="text-lg font-display font-bold text-v-black">{title}</h2>
                {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
            {action && to && (
                <Link to={to} className="text-xs font-bold text-v-blue uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                    {action} <ArrowRight className="w-3 h-3" />
                </Link>
            )}
        </div>
    );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function Dashboard() {
    const { user } = useAuth();
    const { requestPermission, sendNotification, isGranted, isSupported } = useNotifications();
    const [alertsEnabled, setAlertsEnabled] = useState(isGranted);
    const [savedProperties, setSavedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'saved' | 'searches' | 'alerts'>('saved');

    useEffect(() => {
        propertyService.getFeaturedProperties().then(props => {
            setSavedProperties(props.slice(0, 3));
            setLoading(false);
        });
    }, []);

    const handleEnableAlerts = async () => {
        const granted = await requestPermission();
        setAlertsEnabled(granted);
        if (granted) {
            setTimeout(() => {
                sendNotification(
                    'Price Drop Alert — Bandra West',
                    '4 BHK Luxury Apartment dropped to ₹11.9 Cr (was ₹12.5 Cr).'
                );
            }, 8000);
        }
    };

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

    return (
        <main className="flex-1 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">

            {/* ── Hero Header ────────────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-v-black via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-v-blue rounded-full blur-[120px] opacity-15 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">{greeting}</p>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-2">
                            {user ? user.name : 'Your Dashboard'}
                        </h1>
                        <p className="text-slate-400 text-sm">
                            Here's a full picture of your property journey — watchlist, viewings, market pulse, and more.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {isSupported() && (
                            <button
                                onClick={alertsEnabled ? undefined : handleEnableAlerts}
                                disabled={alertsEnabled}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${alertsEnabled
                                    ? 'bg-green-900/40 border-green-700 text-green-400 cursor-default'
                                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                                    }`}
                            >
                                {alertsEnabled ? <CheckCircle className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
                                {alertsEnabled ? 'Alerts Active' : 'Enable Alerts'}
                            </button>
                        )}
                        <Link
                            to="/properties"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-v-blue text-white hover:bg-blue-500 transition-colors"
                        >
                            <Search className="w-4 h-4" /> Browse Properties
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Stats Row ──────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard label="Saved Properties" value={savedProperties.length} sub="2 new this week" icon={Heart} accent="bg-red-50 text-red-500" />
                <StatCard label="Active Searches" value="3" sub="Last searched today" icon={Search} accent="bg-blue-50 text-v-blue" />
                <StatCard label="Viewings Booked" value="2" sub="Next: Mar 3, 11am" icon={Calendar} accent="bg-amber-50 text-amber-500" />
                <StatCard label="Enquiries Sent" value="7" sub="3 awaiting reply" icon={Phone} accent="bg-green-50 text-green-600" />
            </div>

            {/* ── Main Grid ──────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left — 2/3 width */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Portfolio Trend Chart */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                        <SectionHeader
                            title="Portfolio Watchlist Value"
                            subtitle="Estimated combined value of saved properties"
                        />
                        <div className="flex items-end gap-4 mb-6">
                            <p className="text-4xl font-display font-bold text-v-black">₹ 5.8 Cr</p>
                            <span className="flex items-center gap-1 text-green-600 font-bold text-sm mb-1">
                                <TrendingUp className="w-4 h-4" /> +38% since Aug
                            </span>
                        </div>
                        <div className="h-44">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={portfolioTrend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={v => `₹${v}Cr`} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                                        formatter={(v: number | undefined) => [`₹${v ?? 0} Cr`, 'Watchlist Value']}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} fill="url(#blueGrad)" dot={false} activeDot={{ r: 5, fill: '#3b82f6' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Tabbed Section: Saved / Searches / Alerts */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                        <div className="flex gap-1 mb-6 bg-slate-50 rounded-xl p-1 w-fit">
                            {(['saved', 'searches', 'alerts'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${activeTab === tab ? 'bg-white text-v-black shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    {tab === 'saved' ? 'Saved Properties' : tab === 'searches' ? 'Saved Searches' : 'Price Alerts'}
                                </button>
                            ))}
                        </div>

                        {/* Saved Properties */}
                        {activeTab === 'saved' && (
                            <div className="flex flex-col gap-3">
                                {loading ? (
                                    [1, 2, 3].map(i => <div key={i} className="h-20 bg-slate-50 rounded-2xl animate-pulse" />)
                                ) : savedProperties.map(p => (
                                    <Link
                                        key={p.id}
                                        to={`/property/${p.id}`}
                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                                    >
                                        <img src={p.image} alt={p.title} className="w-16 h-16 object-cover rounded-xl shrink-0" referrerPolicy="no-referrer" />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-v-black text-sm line-clamp-1 group-hover:text-v-blue transition-colors">{p.title}</p>
                                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                                <MapPin className="w-3 h-3" /> {p.location}
                                            </p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="font-display font-bold text-v-black">{p.price}</p>
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-v-blue px-2 py-0.5 rounded-full flex items-center gap-1 mt-1">
                                                <BadgeCheck className="w-3 h-3" /> Verified
                                            </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-v-blue transition-colors shrink-0" />
                                    </Link>
                                ))}
                                <Link to="/properties" className="flex items-center justify-center gap-2 mt-2 py-3 rounded-2xl border border-dashed border-slate-200 text-sm text-slate-400 font-bold hover:border-v-blue hover:text-v-blue transition-colors">
                                    + Add more properties
                                </Link>
                            </div>
                        )}

                        {/* Saved Searches */}
                        {activeTab === 'searches' && (
                            <div className="flex flex-col gap-3">
                                {recommendedSearches.map((s, i) => (
                                    <Link
                                        key={i}
                                        to="/properties"
                                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <Search className="w-4 h-4 text-v-blue" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-v-black group-hover:text-v-blue transition-colors">{s.label}</p>
                                                <p className="text-xs text-slate-400">{s.count}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-v-blue transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Price Alerts */}
                        {activeTab === 'alerts' && (
                            <div className="flex flex-col gap-3">
                                {priceAlerts.map(a => (
                                    <div key={a.id} className={`p-4 rounded-2xl border ${a.trend === 'down' ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'}`}>
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="font-bold text-v-black text-sm">{a.title}</p>
                                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                                    <MapPin className="w-3 h-3" /> {a.location}
                                                </p>
                                            </div>
                                            <span className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full ${a.trend === 'down' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {a.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                                                {a.trend === 'down' ? '' : '+'}{a.change}%
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-3 text-sm font-bold">
                                            <span className="text-slate-400 line-through">{a.oldPrice}</span>
                                            <ArrowRight className="w-3 h-3 text-slate-300" />
                                            <span className={a.trend === 'down' ? 'text-green-700' : 'text-orange-700'}>{a.newPrice}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Scheduled Viewings */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                        <SectionHeader title="Scheduled Viewings" subtitle="Your upcoming property visits" action="View All" to="/dashboard" />
                        <div className="flex flex-col gap-3">
                            {scheduledViewings.map(v => (
                                <div key={v.id} className="flex items-center gap-4 p-4 rounded-2xl border border-black/5 bg-slate-50/50">
                                    <div className="w-12 h-12 rounded-xl bg-v-blue/10 flex flex-col items-center justify-center shrink-0">
                                        <Calendar className="w-5 h-5 text-v-blue" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-v-black text-sm line-clamp-1">{v.title}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{v.location}</p>
                                        <p className="text-xs font-bold text-slate-500 mt-1 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {v.date} at {v.time}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 shrink-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${v.status === 'confirmed'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {v.status}
                                        </span>
                                        <p className="text-xs text-slate-400">Agent: {v.agent}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar — 1/3 width */}
                <div className="flex flex-col gap-6">

                    {/* User Profile Card */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm text-center">
                        {user ? (
                            <>
                                <div className="relative inline-block mb-4">
                                    <img
                                        src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0A0A0A&color=fff&size=96`}
                                        alt={user.name}
                                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                                        referrerPolicy="no-referrer"
                                    />
                                    <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white" title="Online" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-v-black">{user.name}</h3>
                                <p className="text-slate-400 text-sm mt-0.5">{user.email}</p>
                                <div className="flex items-center justify-center gap-1.5 mt-2">
                                    <BadgeCheck className="w-4 h-4 text-v-blue" />
                                    <span className="text-xs font-bold text-v-blue uppercase tracking-widest">Verified Buyer</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-black/5">
                                    {[
                                        { label: 'Saved', val: savedProperties.length },
                                        { label: 'Enquiries', val: 7 },
                                        { label: 'Viewings', val: 2 },
                                    ].map(s => (
                                        <div key={s.label}>
                                            <p className="text-xl font-display font-bold text-v-black">{s.val}</p>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/profile"
                                    className="mt-5 block w-full py-2.5 rounded-full border border-black/10 text-sm font-bold text-v-black hover:bg-v-black hover:text-white transition-colors"
                                >
                                    View Profile
                                </Link>
                            </>
                        ) : (
                            <div className="py-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Building2 className="w-7 h-7 text-slate-400" />
                                </div>
                                <p className="font-bold text-v-black mb-1">Sign in to track</p>
                                <p className="text-slate-400 text-sm mb-5">Save properties and get personalized alerts.</p>
                                <Link to="/auth" className="block py-2.5 rounded-full bg-v-black text-white text-sm font-bold hover:bg-v-blue transition-colors">
                                    Sign In / Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Market Pulse */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                        <SectionHeader title="Market Pulse" subtitle="Live Mumbai snapshot" action="Full Report" to="/market-rates" />
                        <div className="flex flex-col gap-3">
                            {marketPulse.map((m, i) => (
                                <div key={i} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <div className={`w-2 h-2 rounded-full shrink-0 ${m.up ? 'bg-green-400' : 'bg-amber-400'}`} />
                                        <p className="text-xs text-slate-500 font-medium truncate">{m.label}</p>
                                    </div>
                                    <div className="text-right shrink-0 ml-3">
                                        <p className="text-sm font-bold text-v-black">{m.value}</p>
                                        <p className={`text-[10px] font-bold ${m.up ? 'text-green-600' : 'text-amber-600'}`}>{m.change}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
                        <SectionHeader title="Recent Activity" />
                        <div className="flex flex-col gap-1">
                            {recentActivity.map(a => {
                                const Icon = a.icon;
                                return (
                                    <div key={a.id} className="flex items-start gap-3 py-2.5 border-b border-black/5 last:border-0">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="w-3.5 h-3.5 text-slate-500" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-v-black line-clamp-1">{a.title}</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5">{a.location} · {a.time}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-v-blue to-blue-700 rounded-3xl p-6 text-white">
                        <Sparkles className="w-6 h-6 mb-3 opacity-80" />
                        <h3 className="font-display font-bold text-lg mb-1">AI Property Match</h3>
                        <p className="text-blue-100 text-sm mb-5">Let our AI find properties that match your exact lifestyle and budget.</p>
                        <Link
                            to="/"
                            className="block w-full py-2.5 rounded-full bg-white text-v-blue text-sm font-bold text-center hover:bg-blue-50 transition-colors"
                        >
                            Start AI Search
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
