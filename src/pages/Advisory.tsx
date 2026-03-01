import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    Globe, Briefcase, Scale, Plane, ArrowRight, ShieldCheck,
    CheckCircle2, ArrowLeft, PhoneCall, Star, Building, Users,
    MapPin, Clock, FileText, Key, TrendingUp, Award, BadgeCheck,
    Home, CreditCard, Calendar, Zap
} from 'lucide-react';

// ─── Service Data ─────────────────────────────────────────────────────────────

const servicesData = {
    'expat-services': {
        title: "Expat Relocation Services",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Seamless transition to Mumbai's premium lifestyle.",
        tagline: "SPECIALIZED ADVISORY DESK",
        accentColor: "from-blue-600 to-indigo-700",
        iconBg: "bg-blue-600",
        borderColor: "border-blue-500",
        textAccent: "text-blue-500",
        description: "Moving to a new country can be overwhelming. Our specialized expat desk handles everything from home search in diplomatic enclaves (like Bandra, Juhu, and South Mumbai) to finalizing lease agreements that protect international tenants. With 40+ nationalities served and 1,200+ expat leases closed, we are Mumbai's most trusted relocation partner.",
        stats: [
            { icon: Globe, value: "40+", label: "Countries Served" },
            { icon: Building, value: "1,200+", label: "Expat Leases" },
            { icon: Clock, value: "8 Days", label: "Avg Move-In Time" },
            { icon: Star, value: "4.9/5", label: "Satisfaction Score" },
        ],
        benefits: [
            { icon: MapPin, title: "Look & Feel Tours", desc: "Area orientation walks across Bandra West, Juhu, Worli, and South Mumbai before you commit." },
            { icon: FileText, title: "FRRO Documentation", desc: "Full assistance with Foreigner Registration and Police Verification, mandatory for non-Indian nationals." },
            { icon: Home, title: "School Zone Mapping", desc: "International school proximity analysed and overlaid on property shortlists for families." },
            { icon: ShieldCheck, title: "Gated Premium Communities", desc: "Access to pre-vetted gated developments with 24/7 security and global lifestyle standards." },
        ],
        process: [
            { day: "Day 1", title: "Briefing Call", desc: "We understand your family needs, budget, preferred areas, and move-in timeline." },
            { day: "Day 2–3", title: "Curated Shortlist", desc: "5–8 verified properties delivered with virtual tours and neighbourhood reports." },
            { day: "Day 4–5", title: "Property Visits", desc: "We accompany you (or conduct virtual walkthroughs) to all shortlisted properties." },
            { day: "Day 6–7", title: "Negotiation & Legal", desc: "Rent negotiated, L&L Agreement drafted, stamp duty paid, society NOC obtained." },
            { day: "Day 8", title: "Move-In Ready", desc: "Keys handed over. Utilities active. Concierge setup complete." },
        ],
        formTitle: "Start Relocation Process",
        formFields: ["Full Name", "Nationality", "Work Email", "Phone / WhatsApp", "Preferred Area", "Move-In Date"],
    },
    'nri-advisory': {
        title: "NRI Investment Advisory",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Maximized yields. Zero geographical friction.",
        tagline: "NRI INVESTMENT DESK",
        accentColor: "from-indigo-600 to-purple-700",
        iconBg: "bg-indigo-600",
        borderColor: "border-indigo-500",
        textAccent: "text-indigo-500",
        description: "We act as your 'boots on the ground' in Mumbai. Our NRI desk provides end-to-end portfolio management — from identifying high-growth pre-launch assets to managing tenants and facilitating fund repatriation under FEMA guidelines.",
        stats: [
            { icon: Users, value: "3,000+", label: "NRI Investors" },
            { icon: ShieldCheck, value: "₹5k Cr+", label: "Assets Under Management" },
            { icon: TrendingUp, value: "+14.2%", label: "Avg. Price Premium" },
            { icon: Globe, value: "22 Countries", label: "Client Diaspora" },
        ],
        benefits: [
            { icon: ShieldCheck, title: "FEMA Compliance", desc: "End-to-end compliance and repatriation guidance through FEMA-familiar legal counsel." },
            { icon: FileText, title: "Digital Documentation", desc: "Video walkthroughs, e-signatures, and fully remote property management for NRIs abroad." },
            { icon: Key, title: "Turnkey Management", desc: "We source tenants, collect rent via escrow, and handle all society compliance — hands-free." },
            { icon: TrendingUp, title: "High-Yield Curation", desc: "Pre-launch commercial and residential assets shortlisted for maximum capital appreciation." },
        ],
        process: [
            { day: "Week 1", title: "Portfolio Briefing", desc: "Virtual consultation to understand your investment goals, risk profile, and FEMA status." },
            { day: "Week 2", title: "Asset Shortlisting", desc: "5–10 properties across high-growth micro-markets presented with yield analysis." },
            { day: "Week 3", title: "Due Diligence", desc: "Title search, RERA check, and legal opinion completed before any offer is made." },
            { day: "Week 4", title: "Transaction Execution", desc: "Sale deed, registration, and POA execution handled entirely by our legal team." },
            { day: "Ongoing", title: "Asset Management", desc: "Rent collection, quarterly inspection reports, and accounting sent to your inbox." },
        ],
        formTitle: "Request NRI Consultation",
        formFields: ["Full Name", "Country of Residence", "Corporate Email", "Phone / WhatsApp", "Investment Budget", "Asset Preference"],
    },
    'corporate-leasing': {
        title: "Corporate Leasing",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Grade-A office spaces for global enterprises.",
        tagline: "ENTERPRISE REAL ESTATE DESK",
        accentColor: "from-slate-700 to-slate-900",
        iconBg: "bg-slate-800",
        borderColor: "border-slate-600",
        textAccent: "text-slate-600",
        description: "Align your workspace with your corporate identity. We specialize in sourcing Grade-A commercial real estate in key business districts like BKC, Lower Parel, and Nariman Point for MNCs and high-growth startups.",
        stats: [
            { icon: Building, value: "5M+ sqft", label: "Commercial Space Leased" },
            { icon: Briefcase, value: "Fortune 500", label: "Client Roster" },
            { icon: Award, value: "23 Yr", label: "Commercial Expertise" },
            { icon: MapPin, value: "BKC, Worli", label: "Prime Districts" },
        ],
        benefits: [
            { icon: Zap, title: "Data-Driven Workspace", desc: "Bloomberg-style market comparables and footfall analytics to justify every sq.ft leased." },
            { icon: Users, title: "Executive Housing", desc: "Bulk residential solutions for senior leadership relocating with your expansion." },
            { icon: FileText, title: "Flexible Lock-ins", desc: "Negotiated lock-in periods, rent-free periods, and CAM charge caps for enterprise clients." },
            { icon: Building, title: "Fit-Out Consultation", desc: "In-house interior partners to design your space from bare shell to operational day one." },
        ],
        process: [
            { day: "Day 1", title: "Requirements Brief", desc: "Headcount, workspace culture, adjacency requirements, and CAPEX budget defined." },
            { day: "Day 3", title: "Options Report", desc: "Micro-market analysis with 8–12 shortlisted properties and floor plans delivered." },
            { day: "Day 5–7", title: "Site Inspections", desc: "Accompanied visits with building engineers to assess MEP, power backup, and connectivity." },
            { day: "Day 8–14", title: "Lease Negotiation", desc: "Security deposit structuring, escalation rates, and exit clauses negotiated." },
            { day: "Day 15+", title: "Handover & Fit-out", desc: "Keys handed to your interior team. Our consultant remains available through occupation." },
        ],
        formTitle: "Submit Office Requirement",
        formFields: ["Company Name", "Contact Person", "Corporate Email", "Phone", "Headcount / Area Required", "Target District"],
    },
    'legal-support': {
        title: "Legal & Documentation",
        icon: Scale,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Transparent, compliant, and risk-free transactions.",
        tagline: "LEGAL ADVISORY DESK",
        accentColor: "from-emerald-600 to-teal-700",
        iconBg: "bg-emerald-600",
        borderColor: "border-emerald-500",
        textAccent: "text-emerald-600",
        description: "Real estate in Mumbai involves complex documentation. Our in-house legal partners ensure seamless transfer of title, rigorous due diligence, and comprehensive risk mitigation for high-value transactions — from individual homes to institutional acquisitions.",
        stats: [
            { icon: ShieldCheck, value: "100%", label: "Title Compliance Rate" },
            { icon: Scale, value: "10,000+", label: "Deeds Registered" },
            { icon: FileText, value: "40-pt", label: "Verification Checklist" },
            { icon: Clock, value: "48 Hrs", label: "Turnaround" },
        ],
        benefits: [
            { icon: ShieldCheck, title: "Title Verification", desc: "Comprehensive 40-point title search covering 30 years of ownership history." },
            { icon: FileText, title: "Sale Deed Drafting", desc: "Legally watertight sale deed drafting and registration assistance across all Mumbai jurisdictions." },
            { icon: CreditCard, title: "Stamp Duty Optimization", desc: "Stamp duty calculation, female buyer concessions, and registration charge optimization." },
            { icon: BadgeCheck, title: "POA Representation", desc: "Full legal representation with Power of Attorney for NRI and HNI clients transacting remotely." },
        ],
        process: [
            { day: "Day 1", title: "Document Collection", desc: "All seller documents collected and indexed: Sale deed chain, 7/12, EC, OC/CC, RERA." },
            { day: "Day 2–3", title: "Title Search", desc: "40-point legal due diligence conducted by ICSI-registered advocate partner." },
            { day: "Day 4", title: "Legal Opinion", desc: "Comprehensive written legal opinion with risk classification delivered." },
            { day: "Day 5–6", title: "Deed Drafting", desc: "Sale Deed or Agreement to Sell drafted and reviewed by both parties' counsels." },
            { day: "Day 7", title: "Registration", desc: "Stamp duty paid and deed registered at the Sub-Registrar office. Title transferred." },
        ],
        formTitle: "Request Legal Consultation",
        formFields: ["Full Name", "Email Address", "Phone", "Transaction Type", "Property Location", "Estimated Value (₹ Cr)"],
    },
};

// ─── Sidebar Form ─────────────────────────────────────────────────────────────

function SidebarForm({ data }: { data: (typeof servicesData)[keyof typeof servicesData] }) {
    const [submitted, setSubmitted] = useState(false);
    const Icon = data.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100 sticky top-32 overflow-hidden relative"
        >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${data.accentColor}`} />
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-20 -mt-20"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)' }} />

            {!submitted ? (
                <>
                    <div className={`w-14 h-14 ${data.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <PhoneCall className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-v-black mb-2">{data.formTitle}</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                        Our specialist will respond within <strong className="text-v-black">4 hours</strong>.
                    </p>

                    <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                        {data.formFields.slice(0, 4).map((field, i) => (
                            <div key={i}>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">{field}</label>
                                <input
                                    required
                                    type={field.toLowerCase().includes('email') ? 'email' : field.toLowerCase().includes('phone') ? 'tel' : 'text'}
                                    placeholder={field}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue focus:bg-white transition-colors font-medium text-v-black placeholder:text-slate-400 placeholder:font-normal text-sm"
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className={`w-full text-white py-4 rounded-2xl font-bold shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group bg-gradient-to-r ${data.accentColor}`}
                        >
                            Initiate Dialogue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex items-center justify-center gap-2 pt-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">NDA Protected · Zero Spam</p>
                        </div>
                    </form>
                </>
            ) : (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h4 className="font-display font-black text-xl text-v-black mb-2">Request Received!</h4>
                    <p className="text-slate-400 text-sm font-medium">Our specialist will contact you within 4 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-xs font-bold text-slate-400 hover:text-v-blue underline transition-colors">
                        Submit another request
                    </button>
                </div>
            )}
        </motion.div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Advisory() {
    const { id } = useParams<{ id: string }>();
    const serviceId = id || 'expat-services';
    const data = servicesData[serviceId as keyof typeof servicesData] || servicesData['expat-services'];
    const Icon = data.icon;

    useEffect(() => { window.scrollTo(0, 0); }, [serviceId]);

    const otherServices = Object.entries(servicesData).filter(([key]) => key !== serviceId);

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans">

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden min-h-[600px] flex items-end">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${data.accentColor} opacity-75 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-20">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/25 shadow-2xl">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">{data.tagline}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-white leading-[1.05]">
                                {data.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white/80 border-l-4 border-white/30 pl-6 leading-relaxed">
                                {data.subtitle}
                            </p>
                        </motion.div>

                        {/* Stat Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:grid grid-cols-2 gap-3 shrink-0"
                        >
                            {data.stats.map((stat, idx) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-36 text-center hover:-translate-y-1 transition-transform">
                                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <StatIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="text-xl font-black text-white font-display leading-tight">{stat.value}</h4>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/60 mt-1">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Content Area ─────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 min-w-0">

                        {/* Mobile stats */}
                        <div className="grid grid-cols-2 gap-3 lg:hidden">
                            {data.stats.map((stat, i) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div key={i} className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm text-center">
                                        <StatIcon className={`w-5 h-5 mx-auto mb-2 ${data.textAccent}`} />
                                        <p className="text-2xl font-display font-black text-v-black">{stat.value}</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Executive Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${data.accentColor}`} />
                            <h2 className="text-2xl font-display font-black text-v-black mb-5 flex items-center gap-3">
                                <FileText className={`w-6 h-6 ${data.textAccent}`} /> Executive Summary
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">{data.description}</p>
                        </motion.div>

                        {/* Benefits Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl font-display font-black text-v-black mb-8 flex items-center gap-3">
                                <Star className={`w-6 h-6 ${data.textAccent}`} /> What You Get
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {data.benefits.map((b, idx) => {
                                    const BIcon = b.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all"
                                        >
                                            <div className={`w-11 h-11 ${data.iconBg} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                                                <BIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-v-black mb-1">{b.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Process Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-v-black rounded-[2rem] p-8 md:p-10 shadow-xl text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl"
                                style={{ background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)' }} />
                            <h2 className="text-2xl font-display font-black text-white mb-8 flex items-center gap-3 relative z-10">
                                <Zap className="w-6 h-6 text-v-blue" /> How It Works
                            </h2>
                            <div className="relative z-10">
                                {data.process.map((step, i) => (
                                    <div key={i} className={`flex gap-5 ${i < data.process.length - 1 ? 'mb-7' : ''}`}>
                                        <div className="flex flex-col items-center">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 shadow-lg bg-gradient-to-br ${data.accentColor}`}>
                                                {i + 1}
                                            </div>
                                            {i < data.process.length - 1 && <div className="w-0.5 flex-1 bg-white/10 mt-2" />}
                                        </div>
                                        <div className="pb-7 last:pb-0">
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${data.textAccent} mb-1 block`}>{step.day}</span>
                                            <h4 className="font-bold text-white mb-1">{step.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Other Services */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Other Advisory Services</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {otherServices.map(([key, svc]) => {
                                    const SvcIcon = svc.icon;
                                    return (
                                        <Link
                                            key={key}
                                            to={`/advisory/${key}`}
                                            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                                        >
                                            <div className={`w-10 h-10 ${svc.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                                                <SvcIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-v-black text-sm truncate">{svc.title}</p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-v-blue group-hover:translate-x-1 transition-all shrink-0" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[380px] shrink-0">
                        <SidebarForm data={data} />
                    </div>
                </div>
            </div>
        </main>
    );
}
