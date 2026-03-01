import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft, MapPin, TrendingUp, Building2, Coffee, Train,
    GraduationCap, Briefcase
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Shared mock data
const neighborhoodsData = {
    'bandra-west': {
        name: 'Bandra West',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
        description: 'The "Queen of Suburbs," Bandra West is Mumbai\'s most eclectic and sought-after neighborhood, blending Portuguese heritage with ultra-luxury modern developments.',
        avgPrice: '₹ 85,000 / sq.ft',
        rentYield: '3.1%',
        capitalAppreciation: '+5.2% YoY',
        demographics: 'High-Net-Worth Individuals, Expatriates, Bollywood Celebrities',
        connectivity: 'Sea Link (5 min), Airport (15 min), BKC (10 min)',
        lifestyle: 'Premium Cafes, Heritage Precincts, Sea-Facing Promenades',
        chartData: [
            { year: '2020', price: 68000 }, { year: '2021', price: 71000 },
            { year: '2022', price: 75000 }, { year: '2023', price: 79000 },
            { year: '2024', price: 82000 }, { year: '2025', price: 85000 }
        ]
    },
    'bkc': {
        name: 'BKC',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
        description: 'Bandra Kurla Complex (BKC) is the financial nerve center of Mumbai, commanding some of the highest commercial and residential premiums in the country.',
        avgPrice: '₹ 75,000 / sq.ft',
        rentYield: '4.5%',
        capitalAppreciation: '+8.1% YoY',
        demographics: 'C-Suite Executives, Expats, Diplomats',
        connectivity: 'Western Express Highway (5 min), Airport (10 min)',
        lifestyle: 'Luxury Malls (Jio World), Fine Dining, High-Security Zone',
        chartData: [
            { year: '2020', price: 55000 }, { year: '2021', price: 58000 },
            { year: '2022', price: 62000 }, { year: '2023', price: 67000 },
            { year: '2024', price: 71000 }, { year: '2025', price: 75000 }
        ]
    }
};

export default function NeighborhoodDetails() {
    const { id } = useParams<{ id: string }>();
    const neighborhoodId = id || 'bandra-west';
    const data = neighborhoodsData[neighborhoodId as keyof typeof neighborhoodsData] || neighborhoodsData['bandra-west'];

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-v-blue/20 selection:text-v-blue">

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full pt-24">
                <div className="absolute inset-0 z-0">
                    <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
                    <Link to="/neighborhoods" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8 w-fit">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Micro-Markets
                    </Link>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-bold uppercase tracking-widest text-white mb-4 backdrop-blur-md w-fit">
                        <MapPin className="w-4 h-4" /> Micro-Market Guide
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight drop-shadow-xl">
                        {data.name}
                    </h1>

                    <p className="text-xl text-slate-200 max-w-3xl font-medium leading-relaxed drop-shadow-lg">
                        {data.description}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: 'Avg Capital Value', value: data.avgPrice, icon: TrendingUp },
                        { label: 'Rental Yield', value: data.rentYield, icon: Building2 },
                        { label: '1YR Appreciation', value: data.capitalAppreciation, icon: TrendingUp },
                        { label: 'Active Listings', value: '1,245', icon: MapPin },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                                <stat.icon className="w-5 h-5 text-v-blue" />
                            </div>
                            <span className="text-2xl font-display font-black text-v-black">{stat.value}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Col: Analysis & Insights */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Interactive Price Chart */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-display font-black text-v-black mb-1">5-Year Pricing Trend</h2>
                            <p className="text-sm font-medium text-slate-500 mb-8">Historical analysis of capital values per sq.ft.</p>

                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0066FF" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#0066FF" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} tickFormatter={(value) => `₹${value / 1000}k`} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                                            labelStyle={{ fontWeight: 'bold' }}
                                        />
                                        <Area type="monotone" dataKey="price" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" activeDot={{ r: 8 }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Lifestyle & Infrastructure */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-display font-black text-v-black mb-8">Ecosystem & Infrastructure</h2>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-v-blue rounded-xl flex items-center justify-center shrink-0">
                                        <Coffee className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Lifestyle & Retail</h4>
                                        <p className="text-sm leading-relaxed text-slate-600">{data.lifestyle}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Demographics</h4>
                                        <p className="text-sm leading-relaxed text-slate-600">{data.demographics}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Train className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Connectivity</h4>
                                        <p className="text-sm leading-relaxed text-slate-600">{data.connectivity}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Social Infrastructure</h4>
                                        <p className="text-sm leading-relaxed text-slate-600">Top International Schools, Premium Healthcare Facilities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Advisory & CTA */}
                    <div className="space-y-6">
                        <div className="bg-v-black rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>

                            <h3 className="text-2xl font-display font-black mb-4">Interested in {data.name}?</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                Connect with our dedicated neighborhood specialist for exclusive off-market listings and deep investment insights.
                            </p>

                            <Link to={`/properties?location=${data.name}`} className="block w-full text-center bg-white text-v-black py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors mb-4">
                                View Active Listings
                            </Link>
                            <button className="block w-full text-center bg-transparent border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                                Speak to an Advisor
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
