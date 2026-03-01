import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
    Globe, ShieldCheck, FileText, Home, Users, Key, Phone,
    ArrowRight, CheckCircle2, MapPin, Star, Building2, Clock,
    BadgeCheck, Calendar, Plane, CreditCard
} from 'lucide-react';

const services = [
    {
        icon: Home,
        title: 'Home Finding & Relocation',
        color: 'bg-blue-500',
        desc: 'Curated shortlists based on school proximity, commute, and lifestyle. We visit, vet, and negotiate on your behalf before you even land.',
        features: ['Virtual property tours', 'School zone mapping', 'Airport pickup & hotel', 'Area orientation walk'],
    },
    {
        icon: FileText,
        title: 'Lease Registration & Legal',
        color: 'bg-emerald-500',
        desc: 'End-to-end Leave & License Agreement drafting, stamp duty, police verification, and society NOC — all mandatory for foreign nationals.',
        features: ['L&L Agreement drafting', 'Stamp duty payment', 'Police verification', 'Society NOC assistance'],
    },
    {
        icon: ShieldCheck,
        title: 'FEMA & Visa Compliance',
        color: 'bg-amber-500',
        desc: 'We coordinate with FEMA-familiar legal counsel to ensure your property transactions, rental payments, and repatriation stay fully compliant.',
        features: ['FEMA transaction structuring', 'NRE/NRO account liaison', 'Repatriation support', 'Tax documentation'],
    },
    {
        icon: Key,
        title: 'Concierge Move-In Setup',
        color: 'bg-indigo-500',
        desc: 'From internet connection to domestic help placement, we make your apartment feel like home within 24 hours of key handover.',
        features: ['Utility setup & broadband', 'Furniture sourcing', 'Domestic help sourcing', 'Emergency contacts list'],
    },
    {
        icon: Building2,
        title: 'Corporate Bulk Leasing',
        color: 'bg-rose-500',
        desc: 'Managing relocations for 5 or 50 employees? We negotiate master leases with premium developers and manage the entire housing programme.',
        features: ['Master lease negotiation', 'Multi-unit sourcing', 'HR coordination', 'Quarterly reviews'],
    },
    {
        icon: CreditCard,
        title: 'NRI Investment Advisory',
        color: 'bg-purple-500',
        desc: 'FEMA-compliant property investment, repatriation planning, and rental yield optimisation for the Mumbai diaspora worldwide.',
        features: ['Portfolio structuring', 'Yield optimization', 'Resale advisory', 'Power of Attorney'],
    },
];

const testimonials = [
    {
        name: 'James Thornton',
        role: 'VP Operations, HSBC — Relocated from London',
        quote: "Found our Bandra apartment, handled every document, and had broadband installed before we flew in. Absolute white-glove service.",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
    },
    {
        name: 'Aiko Tanaka',
        role: 'Senior Consultant, Deloitte — Relocated from Tokyo',
        quote: "The legal compliance team was outstanding. Police verification and society paperwork done in 3 days. I had no idea where to start.",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
    },
    {
        name: 'Marcus de Vries',
        role: 'Country Director, Philips — Relocated from Amsterdam',
        quote: "They managed housing for 12 of our senior employees simultaneously. Flawless execution, premium properties, total peace of mind.",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    },
];

const timeline = [
    { day: 'Day 1', title: 'Briefing Call', desc: 'We understand your requirements, budget, preferred areas, and family needs.' },
    { day: 'Day 2–3', title: 'Curated Shortlist', desc: 'Receive 5–8 verified properties with virtual tours and neighbourhood reports.' },
    { day: 'Day 4–5', title: 'Property Visits', desc: 'We accompany you (or do virtual walkthroughs) to shortlisted properties.' },
    { day: 'Day 6–7', title: 'Negotiation & Legal', desc: 'We negotiate rent and handle all documentation — L&L, stamp duty, NOC.' },
    { day: 'Day 8', title: 'Move-In Ready', desc: 'Keys handed over. Utilities active. Concierge setup complete.' },
];

const stats = [
    { value: '2,400+', label: 'Expats Relocated', icon: Plane },
    { value: '47', label: 'Nationalities Served', icon: Globe },
    { value: '8 Days', label: 'Avg. Time to Move-In', icon: Clock },
    { value: '4.9/5', label: 'Expat Satisfaction', icon: Star },
];

export default function ExpatServices() {
    const [activeService, setActiveService] = useState(0);

    return (
        <main className="flex-1 w-full pb-0">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="relative bg-v-black text-white pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2000&auto=format&fit=crop"
                        alt="Mumbai city at night"
                        className="w-full h-full object-cover opacity-15"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-v-black via-v-black/90 to-blue-950/80" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-[0.25em] text-blue-300 mb-8">
                                <Globe className="w-4 h-4" /> Expat Relocation Services
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-[1.05] mb-6">
                                Mumbai. Made
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-v-blue via-blue-300 to-white">
                                    for You.
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-lg">
                                Relocating to Mumbai is complex. We handle every step — from finding your home to navigating Maharashtra's legal requirements — so you can focus on your work.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-2 bg-v-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-colors group shadow-lg shadow-blue-500/30"
                                >
                                    Start Relocation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link to="/properties" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors backdrop-blur-md">
                                    <Home className="w-5 h-5" /> Browse Properties
                                </Link>
                            </div>
                        </motion.div>

                        {/* Floating stat cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="hidden lg:grid grid-cols-2 gap-4"
                        >
                            {stats.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
                                    >
                                        <Icon className="w-7 h-7 text-v-blue mb-4" />
                                        <p className="text-4xl font-display font-black text-white">{s.value}</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Mobile Stats Bar ─────────────────────────────────────────────── */}
            <div className="bg-white border-b border-black/5 lg:hidden">
                <div className="max-w-5xl mx-auto grid grid-cols-2 divide-x divide-black/5">
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div key={i} className="flex flex-col items-center py-7 px-4 text-center even:border-t even:border-black/5 odd:border-t odd:border-black/5 first:border-t-0 [&:nth-child(2)]:border-t-0">
                                <Icon className="w-5 h-5 text-v-blue mb-2" />
                                <p className="text-2xl font-display font-black text-v-black">{s.value}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Services Tabs ────────────────────────────────────────────────── */}
            <section className="py-24 px-4 md:px-8 bg-v-gray">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-v-black tracking-tight">
                            Complete Relocation Coverage
                        </h2>
                        <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
                            Six specialised service lines, one dedicated team, zero gaps in your relocation experience.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Tab list */}
                        <div className="lg:w-72 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                            {services.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setActiveService(i)}
                                        className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal shrink-0 ${activeService === i
                                                ? 'bg-v-black text-white shadow-lg'
                                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-black/5'
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${activeService === i ? 'bg-white/20' : 'bg-slate-100'}`}>
                                            <Icon className={`w-4 h-4 ${activeService === i ? 'text-white' : 'text-slate-500'}`} />
                                        </div>
                                        {s.title}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab content */}
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1"
                        >
                            {(() => {
                                const s = services[activeService];
                                const Icon = s.icon;
                                return (
                                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-xl h-full">
                                        <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-display font-black text-v-black mb-4">{s.title}</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed mb-10">{s.desc}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {s.features.map((f, fi) => (
                                                <div key={fi} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                                    <span className="font-semibold text-v-black text-sm">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="mt-8 flex items-center gap-2 bg-v-black text-white px-7 py-3.5 rounded-full font-bold hover:bg-v-blue transition-colors group"
                                        >
                                            Enquire About This Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Process Timeline ─────────────────────────────────────────────── */}
            <section className="py-24 px-4 md:px-8 bg-v-black text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Process</span>
                        <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">Move-in Ready in 8 Days</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-v-blue via-blue-400 to-transparent hidden md:block" />
                        <div className="space-y-8">
                            {timeline.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className={`flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                                        <p className="text-v-blue font-black text-xs uppercase tracking-widest mb-2">{t.day}</p>
                                        <h3 className="text-xl font-display font-bold text-white mb-2">{t.title}</h3>
                                        <p className="text-slate-400 font-medium">{t.desc}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-v-blue rounded-full flex items-center justify-center shrink-0 font-black text-white text-sm shadow-lg shadow-blue-500/30 z-10">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ─────────────────────────────────────────────────── */}
            <section className="py-24 px-4 md:px-8 bg-v-gray">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
                        <h2 className="text-4xl font-display font-black text-v-black tracking-tight">What Expats Say</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: t.rating }).map((_, si) => (
                                        <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium mb-8 italic">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div>
                                        <p className="font-bold text-v-black">{t.name}</p>
                                        <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact Form ─────────────────────────────────────────────────── */}
            <section id="contact-form" className="py-24 px-4 md:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <Globe className="w-12 h-12 text-v-blue mx-auto mb-4" />
                        <h2 className="text-4xl font-display font-black text-v-black tracking-tight mb-3">Start Your Relocation</h2>
                        <p className="text-slate-500 text-lg">Fill in the details below. Your dedicated relocation specialist will reach out within 2 hours.</p>
                    </div>

                    <form
                        className="bg-v-gray rounded-3xl p-8 md:p-12 border border-black/5 space-y-5"
                        onSubmit={e => { e.preventDefault(); alert('Relocation request submitted! We will contact you within 2 hours.'); }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium" placeholder="James Thornton" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nationality</label>
                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium" placeholder="British" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Work Email</label>
                                <input required type="email" className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium" placeholder="james@company.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone / WhatsApp</label>
                                <input required type="tel" className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium" placeholder="+44 ..." />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Service Required</label>
                                <select className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium">
                                    {services.map(s => <option key={s.title}>{s.title}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Expected Move Date</label>
                                <input type="date" className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium text-slate-600" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Preferred Areas & Budget</label>
                            <textarea
                                rows={3}
                                className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium resize-none"
                                placeholder="e.g. BKC or Bandra West, 3 BHK, budget ₹2–3 Lakh/month, family of 4..."
                            />
                        </div>
                        <button type="submit" className="w-full bg-v-black text-white py-4 rounded-full font-bold hover:bg-v-blue transition-colors flex items-center justify-center gap-2 group">
                            <Calendar className="w-5 h-5" />
                            Request Relocation Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-center text-xs text-slate-400 font-medium">
                            Strict NDA enforced. Your data is never shared with third parties.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
