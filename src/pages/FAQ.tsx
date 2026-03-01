import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
    ChevronDown, MessageCircleQuestion, PhoneCall, Mail,
    Home, TrendingUp, Building2, Users, Search, ArrowRight
} from 'lucide-react';

const categories = [
    {
        label: 'Buying & Investment',
        icon: TrendingUp,
        color: 'bg-blue-50 text-v-blue border-blue-100',
        questions: [
            {
                q: 'How is Stamp Duty calculated in Maharashtra?',
                a: 'As of 2024, stamp duty in Mumbai is 5% of the agreement value or Ready Reckoner rate (whichever is higher), plus a 1% metro cess — bringing the total to 6%. Female buyers receive a 1% concession. Registration charges are an additional 1% (max ₹30,000).',
            },
            {
                q: 'Can NRIs buy commercial or residential property in India?',
                a: 'Yes. Under FEMA regulations, NRIs and PIOs can freely purchase residential and commercial properties in India, except agricultural land, plantation property, or farmhouses. Repatriation of sale proceeds is permitted subject to RBI conditions.',
            },
            {
                q: 'What documents do I need before purchasing a property?',
                a: 'You will need the Title Search Report, Form 7/12, Encumbrance Certificate, RERA registration details, building plan approvals, OC/CC, and a legal opinion from an advocate. Our team assists with the full due diligence package.',
            },
        ],
    },
    {
        label: 'Leasing & Renting',
        icon: Home,
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        questions: [
            {
                q: 'What is the standard lock-in period for commercial leases in Mumbai?',
                a: 'Grade-A commercial spaces in Mumbai typically demand a lock-in period of 3 years on a 5-year lease, or 5 years on a 9-year lease, depending on the CAPEX invested by landlord or tenant.',
            },
            {
                q: 'Do you assist with expat lease registrations?',
                a: 'Yes. Our Expat Relocation desk handles end-to-end lease registration (Leave & License Agreements), police verification, and society NOCs mandatory for foreign nationals residing in Mumbai.',
            },
        ],
    },
    {
        label: 'Property Management',
        icon: Building2,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        questions: [
            {
                q: 'What does your Property Management mandate cover?',
                a: 'Our mandate covers tenant sourcing, background verification, lease negotiation & registration, rent collection tracking, quarterly property inspections, and handling society/maintenance compliance on behalf of NRI/HNI owners.',
            },
            {
                q: 'Are your brokerage fees standardized?',
                a: 'Yes. We charge exactly 1 month\'s rent for leasing transactions and 1–2% of the transaction value for outright sales, payable upon successful execution. There are no hidden fees.',
            },
        ],
    },
    {
        label: 'Platform & AI Search',
        icon: Search,
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        questions: [
            {
                q: 'How does the AI Smart Search work?',
                a: 'Our AI search parses your natural language query (e.g. "3 BHK with sea view in Bandra under ₹4 Cr") into structured parameters — location, property type, budget, and features. It is powered by the Gemini API running on a secure server-side proxy — your query never exposes any API key.',
            },
            {
                q: 'Is my data safe on this platform?',
                a: 'Absolutely. We enforce a Zero Spam Policy. Your information is never sold or shared. Contact details are only passed to agents upon your explicit request, and we do not use third-party advertising tracking.',
            },
        ],
    },
    {
        label: 'NRI Services',
        icon: Users,
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        questions: [
            {
                q: 'Can I manage my Mumbai property from abroad?',
                a: 'Yes. Our NRI Mandate includes Power of Attorney execution, escrow-based rent collection, annual property inspection reports with photographs, and timely renewal of lease agreements — all handled remotely.',
            },
            {
                q: 'How do I repatriate property sale proceeds as an NRI?',
                a: 'Repatriation is permitted via an NRO or NRE account subject to TDS deductions and FEMA guidelines. We coordinate with FEMA-familiar CAs to structure your transaction for maximum net repatriation.',
            },
        ],
    },
];

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState<string | null>('0-0');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const filteredCategories = searchQuery.trim()
        ? categories.map(cat => ({
            ...cat,
            questions: cat.questions.filter(
                q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.a.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        })).filter(cat => cat.questions.length > 0)
        : categories;

    const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id);

    return (
        <main className="flex-1 pb-24 w-full bg-v-gray font-sans">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <div className="bg-v-black pt-36 pb-28 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-v-blue rounded-full blur-[160px] opacity-15 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <MessageCircleQuestion className="w-14 h-14 text-v-blue mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tight">
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-blue to-blue-300">Questions</span>
                    </h1>
                    <p className="text-slate-400 text-lg font-medium mb-10 max-w-2xl mx-auto">
                        Clear, authoritative answers on Mumbai real estate regulations, investment structures, and platform features.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-v-blue font-medium backdrop-blur-md"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ── Category Sidebar ─────────────────────────────────────────── */}
                    {!searchQuery && (
                        <div className="lg:w-64 shrink-0">
                            <div className="bg-white rounded-2xl p-3 border border-black/5 shadow-sm sticky top-28">
                                {categories.map((cat, i) => {
                                    const Icon = cat.icon;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActiveCategory(i)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-bold transition-all mb-1 last:mb-0 ${activeCategory === i
                                                    ? 'bg-v-black text-white'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            <Icon className="w-4 h-4 shrink-0" />
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ── Questions Panel ──────────────────────────────────────────── */}
                    <div className="flex-1">
                        {(searchQuery ? filteredCategories : [categories[activeCategory]]).map((cat, catI) => (
                            <motion.div
                                key={`${searchQuery}-${catI}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                {searchQuery && (
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${cat.color}`}>
                                        <cat.icon className="w-3 h-3" />
                                        {cat.label}
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {cat.questions.map((item, qi) => {
                                        const id = `${catI}-${qi}`;
                                        const isOpen = openIndex === id;

                                        return (
                                            <div
                                                key={qi}
                                                className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'border-v-blue/30 shadow-blue-100' : 'border-black/5 hover:border-black/10'
                                                    }`}
                                            >
                                                <button
                                                    onClick={() => toggle(id)}
                                                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                                                >
                                                    <span className={`font-bold text-base leading-snug ${isOpen ? 'text-v-blue' : 'text-v-black'}`}>
                                                        {item.q}
                                                    </span>
                                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-v-blue text-white' : 'bg-slate-100 text-slate-400'
                                                        }`}>
                                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                                    </div>
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-6 pb-6 border-t border-black/5 pt-4">
                                                                <p className="text-slate-600 leading-relaxed font-medium">{item.a}</p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}

                                    {cat.questions.length === 0 && (
                                        <div className="text-center py-12 text-slate-400 font-medium">
                                            No questions found. Try a different search term.
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ────────────────────────────────────────────────────────── */}
                <div className="mt-12 bg-v-black rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-v-blue/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display font-black mb-3">Still have a specific query?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Our advisory desk is available 6 days a week to handle complex regulatory or transactional inquiries.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+919820075868" className="flex items-center justify-center gap-2 bg-white text-v-black px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-colors">
                                <PhoneCall className="w-4 h-4" /> Call the Desk
                            </a>
                            <Link to="/contact" className="flex items-center justify-center gap-2 bg-v-blue text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-500 transition-colors">
                                <Mail className="w-4 h-4" /> Send a Message <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
