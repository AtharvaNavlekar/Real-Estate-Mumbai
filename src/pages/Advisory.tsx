import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    Globe, Briefcase, Scale, Plane, ArrowRight, ShieldCheck,
    CheckCircle2, ArrowLeft, PhoneCall, Star, Building, Users
} from 'lucide-react';

const servicesData = {
    'expat-services': {
        title: "Expat Relocation Services",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1542314831-c6a4d14293f0?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Seamless transition to Mumbai's premium lifestyle.",
        description: "Moving to a new country can be overwhelming. Our specialized expat desk handles everything from home search in diplomatic enclaves (like Bandra, Juhu, and South Mumbai) to finalizing lease agreements that protect international tenants.",
        benefits: ["'Look and Feel' orientation tours", "Assistance with FRRO registration documentation", "International school proximity mapping", "Premium gated communities with global standards"],
        color: "bg-blue-600",
        stats: [
            { icon: Globe, value: "40+", label: "Countries Served" },
            { icon: Building, value: "1,200+", label: "Expat Leases" }
        ]
    },
    'nri-advisory': {
        title: "NRI Investment Advisory",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Maximized yields. Zero geographical friction.",
        description: "We act as your 'boots on the ground' in Mumbai. Our NRI desk provides end-to-end portfolio management, from identifying high-growth pre-launch assets to managing tenets and facilitating fund repatriation.",
        benefits: ["FEMA compliance and repatriation guidance", "Video walkthroughs and digital documentation", "Turnkey property management for absentee owners", "High-yield commercial and residential curation"],
        color: "bg-indigo-600",
        stats: [
            { icon: Users, value: "3,000+", label: "NRI Investors" },
            { icon: ShieldCheck, value: "₹ 5k Cr+", label: "AUM" }
        ]
    },
    'corporate-leasing': {
        title: "Corporate Leasing",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Grade-A office spaces for global enterprises.",
        description: "Align your workspace with your corporate identity. We specialize in sourcing Grade-A commercial real estate in key business districts like BKC, Lower Parel, and Nariman Point for MNCs and high-growth startups.",
        benefits: ["Data-driven workspace optimization", "Bulk executive housing solutions", "Negotiable lock-in periods and escalations", "Fit-out and interior consultation"],
        color: "bg-v-black",
        stats: [
            { icon: Building, value: "5M+ sqft", label: "Space Leased" },
            { icon: Briefcase, value: "Fortune 500", label: "Client Roster" }
        ]
    },
    'legal-support': {
        title: "Legal & Documentation",
        icon: Scale,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Transparent, compliant, and risk-free transactions.",
        description: "Real estate in Mumbai involves complex documentation. Our in-house legal partners ensure a seamless transfer of title, rigorous due diligence, and comprehensive risk mitigation for high-value transactions.",
        benefits: ["Comprehensive Title Verification", "Sale Deed drafting and registration", "Stamp Duty calculation and optimization", "Representation for Power of Attorney (POA)"],
        color: "bg-emerald-700",
        stats: [
            { icon: ShieldCheck, value: "100%", label: "Compliance" },
            { icon: Scale, value: "10,000+", label: "Deeds Registered" }
        ]
    }
};

export default function Advisory() {
    const { id } = useParams<{ id: string }>();
    const serviceId = id || 'expat-services';
    const data = servicesData[serviceId as keyof typeof servicesData] || servicesData['expat-services'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    const Icon = data.icon;

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-v-blue/20 selection:text-v-blue">

            {/* Premium Hero Section */}
            <div className={`relative ${data.color} min-h-[500px] flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24">
                    <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="flex flex-col md:flex-row items-end justify-between gap-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20 shadow-2xl">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Specialized Advisory Desk</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-slate-300 drop-shadow-sm max-w-2xl border-l-4 border-white/30 pl-6">
                                {data.subtitle}
                            </p>
                        </motion.div>

                        {/* Floating Stat Cards */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden md:flex gap-4">
                            {data.stats.map((stat, idx) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-6 w-40 text-center shadow-2xl transform hover:-translate-y-2 transition-transform">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <StatIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-2xl font-black text-white font-display">{stat.value}</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mt-1">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Main Content */}
                    <div className="flex-1 space-y-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-2 h-full ${data.color}`}></div>
                            <h2 className="text-3xl font-display font-black text-v-black mb-6 flex items-center gap-3">
                                Executive Summary
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                {data.description}
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-display font-black text-v-black mb-10 flex items-center gap-3">
                                <Star className={`w-6 h-6 ${data.color.replace('bg-', 'text-')}`} /> Value Proposition
                            </h3>

                            {/* Staggered asymmetric grid for benefits */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.benefits.map((benefit, idx) => (
                                    <div key={idx} className={`p-6 rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 ${idx % 2 === 1 ? 'md:mt-8' : ''}`}>
                                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${data.color} text-white shadow-md`}>
                                            <span className="font-bold text-sm">{idx + 1}</span>
                                        </div>
                                        <p className="font-bold text-slate-700 leading-relaxed pt-2">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Consulting Widget */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-32 overflow-hidden relative group">

                            {/* Decorative Background */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${data.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700 pointer-events-none -mr-20 -mt-20`}></div>

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg text-white ${data.color}`}>
                                <PhoneCall className="w-7 h-7" />
                            </div>

                            <h3 className="text-3xl font-display font-black text-v-black mb-4 tracking-tight">Priority Desk</h3>
                            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm">
                                Engage directly with our specialized advisory partners. Expect a response protocol within <strong className="text-v-black">4 hours</strong> of submission.
                            </p>

                            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Consultation requested via priority channel!"); }}>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Contact</label>
                                    <input required type="text" placeholder="Your Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-colors text-slate-700 font-medium placeholder:font-normal" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Corporate Email</label>
                                        <input required type="email" placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-colors text-slate-700 font-medium placeholder:font-normal" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Direct Line</label>
                                    <input required type="tel" placeholder="+91 90000 00000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-colors text-slate-700 font-medium placeholder:font-normal" />
                                </div>

                                <button type="submit" className={`w-full text-white py-5 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-1 mt-6 flex items-center justify-center gap-3 text-lg group/btn ${data.color}`}>
                                    Initiate Dialogue <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-6">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                    <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">End-to-End Encryption</p>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
}
