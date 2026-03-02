import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ShieldCheck, Target, Users, Award, ArrowRight, TrendingUp,
    Building2, Star, BadgeCheck, MapPin
} from 'lucide-react';

const stats = [
    { value: '33+', label: 'Years of Legacy', icon: Star },
    { value: '10,000+', label: 'Happy Families', icon: Users },
    { value: '₹5,000+ Cr', label: 'in Transactions', icon: TrendingUp },
    { value: '23', label: 'Mumbai Micro-Markets', icon: MapPin },
];

const values = [
    {
        icon: ShieldCheck,
        title: 'Absolute Verification',
        desc: "Every listing goes through a 40-point legal and physical verification process. If it's not verified, it's not here.",
    },
    {
        icon: Target,
        title: 'Data-Driven Accuracy',
        desc: 'Our AI algorithms analyze 50+ data points to give you the exact fair market value — no emotional bias in pricing.',
    },
    {
        icon: Users,
        title: 'Concierge Service',
        desc: 'A dedicated expert stays with you from the first property tour to negotiating terms and handing over the keys.',
    },
    {
        icon: Award,
        title: 'Zero Spam Policy',
        desc: 'Your data is sacred. We never sell your information. Our agents only call when you explicitly request a callback.',
    },
];

const team = [
    {
        name: 'Vikram Navlekar',
        title: 'CEO & Managing Director',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop',
        bio: "30+ years shaping Mumbai's luxury corridor.",
    },
    {
        name: 'Priya Mehta',
        title: 'Head of Luxury Sales',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop',
        bio: 'Closed over ₹2,200 Cr in premium transactions.',
    },
    {
        name: 'Arjun Sharma',
        title: 'Director — Commercial',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop',
        bio: 'Specialist in Grade-A BKC commercial mandates.',
    },
];

const milestones = [
    { year: '1991', event: 'Founded in South Mumbai with a focus on residential advisory.' },
    { year: '2003', event: 'Opened BKC commercial desk; first institutional mandate secured.' },
    { year: '2012', event: 'Launched NRI advisory division — first of its kind in Mumbai.' },
    { year: '2019', event: 'Crossed ₹1,000 Cr in annual closed transactions.' },
    { year: '2024', event: 'Introduced AI-powered Smart Search and launched digital-first platform.' },
];

export default function About() {
    return (
        <main className="flex-1 pt-0 pb-0 w-full">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="relative bg-v-black text-white pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
                        alt="Mumbai skyline"
                        className="w-full h-full object-cover opacity-20"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-v-black/60 via-v-black/70 to-v-black" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span className="inline-block text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-6 border border-v-blue/30 px-4 py-2 rounded-full bg-v-blue/10">
                            Founded 1991 · Mumbai, India
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-[1.05] mb-8">
                            Trust. Transparency.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-blue via-blue-300 to-white">
                                Technology.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
                            For over three decades, we have been the silent force behind Mumbai's most significant real estate transactions.
                            Not just brokers — your strategic real estate partners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ────────────────────────────────────────────────────── */}
            <section className="bg-white border-b border-black/5">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/5">
                        {stats.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center py-10 px-6 text-center"
                                >
                                    <Icon className="w-6 h-6 text-v-blue mb-3" />
                                    <p className="text-4xl font-display font-black text-v-black">{s.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Story / Timeline ─────────────────────────────────────────────── */}
            <section className="py-28 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-v-black tracking-tight leading-tight mb-6">
                            Built on decades of Mumbai market intelligence
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-10">
                            What began as a boutique advisory desk in South Mumbai has grown into the region's most trusted real estate intelligence platform — combining deep local market knowledge with AI-driven technology.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-v-black text-white px-7 py-4 rounded-full font-bold hover:bg-v-blue transition-colors group">
                            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-6"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-v-blue via-blue-300 to-transparent" />
                        {milestones.map((m, i) => (
                            <div key={i} className="relative pl-8 pb-8 last:pb-0">
                                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-v-blue border-2 border-white shadow" />
                                <p className="text-xs font-black text-v-blue uppercase tracking-widest mb-1">{m.year}</p>
                                <p className="text-slate-600 font-medium leading-relaxed">{m.event}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Core Values / Editorial Layout ──────────────────────────────────── */}
            <section className="bg-v-black text-white py-32 px-4 md:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    {/* Left Column - Intro */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-6 block flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-v-blue"></span> Our Philosophy
                            </span>
                            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tight leading-[1.1] mb-6">
                                The Real Estate<br />Mumbai Difference.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                We operate on first principles. No fluff, no hidden agendas. Just hard data, strict vetting, and an uncompromising commitment to our clients' success.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Stacked List */}
                    <div className="lg:col-span-7 flex flex-col">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="group flex flex-col sm:flex-row gap-6 sm:gap-8 border-b border-white/10 py-10 first:pt-0 last:border-b-0 hover:bg-white/[0.02] transition-colors rounded-3xl -mx-6 px-6"
                                >
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                            <Icon className="w-5 h-5 text-slate-300 group-hover:text-v-black transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold mb-3 tracking-tight group-hover:text-v-blue transition-colors">{v.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-base max-w-lg">{v.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Leadership Team ──────────────────────────────────────────────── */}
            <section className="py-28 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Leadership</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-v-black tracking-tight">The people behind the platform</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group relative bg-white rounded-3xl overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <BadgeCheck className="w-4 h-4 text-v-blue" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-v-blue">{t.title}</p>
                                </div>
                                <h3 className="text-xl font-display font-bold text-v-black">{t.name}</h3>
                                <p className="text-slate-400 text-sm mt-1">{t.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/ceo" className="inline-flex items-center gap-2 border border-black/10 px-6 py-3 rounded-full text-sm font-bold text-v-black hover:bg-v-black hover:text-white transition-colors">
                        Meet the CEO <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────────── */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="py-8 px-4 md:px-8 pb-24 max-w-6xl mx-auto"
            >
                <div className="bg-gradient-to-br from-v-blue via-blue-600 to-blue-800 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 top-0 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2" />
                    <div className="relative z-10">
                        <Building2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">Ready to find your dream home?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                            Join 10,000+ satisfied clients who discovered their perfect property through us.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/properties" className="bg-white text-v-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                                Browse Properties
                            </Link>
                            <Link to="/contact" className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-transform hover:scale-105 active:scale-95">
                                Contact an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
