import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, ArrowRight } from 'lucide-react';

const offices = [
    {
        city: 'BKC — Main Office',
        address: 'Level 8, Vibgyor Towers, Bandra Kurla Complex, Mumbai 400051',
        phone: '+91 98765 43210',
        email: 'hello@verified.realestate',
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    },
    {
        city: 'South Mumbai',
        address: '301, Nirlon House, Dr Annie Besant Rd, Worli, Mumbai 400018',
        phone: '+91 22 4567 8900',
        email: 'worli@verified.realestate',
        hours: 'Mon – Sat: 10:00 AM – 6:00 PM',
    },
];

const intents = [
    'Buy a Property',
    'Rent a Property',
    'Sell my Property',
    'Property Management',
    'NRI Advisory',
    'Schedule a Consultation',
    'Other Enquiry',
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [activeOffice, setActiveOffice] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="flex-1 w-full pb-0">

            {/* ── Dark Hero ────────────────────────────────────────────────────── */}
            <div className="bg-v-black text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-v-black via-v-black/80 to-v-black" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-5 border border-v-blue/30 px-4 py-2 rounded-full bg-v-blue/10">
                            We're Here to Help
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 leading-[1.05]">
                            Get in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-blue to-blue-300">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                            Whether you're buying, selling, investing, or just exploring — our concierge team is ready to assist within 2 hours.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Quick Channels ───────────────────────────────────────────────── */}
            <div className="bg-white border-b border-black/5">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
                    {[
                        { icon: Phone, label: 'Call us now', value: '+91 98765 43210', href: 'tel:+919876543210', color: 'text-v-blue' },
                        { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with an expert', href: 'https://wa.me/919876543210', color: 'text-green-500' },
                        { icon: Mail, label: 'Email us', value: 'hello@verified.realestate', href: 'mailto:hello@verified.realestate', color: 'text-amber-500' },
                    ].map((ch, i) => {
                        const Icon = ch.icon;
                        return (
                            <a key={i} href={ch.href} target={i > 0 ? '_blank' : undefined} rel="noreferrer"
                                className="flex items-center gap-5 py-8 px-8 hover:bg-slate-50 transition-colors group"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${ch.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{ch.label}</p>
                                    <p className="font-bold text-v-black group-hover:text-v-blue transition-colors">{ch.value}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-v-blue ml-auto transition-colors opacity-0 group-hover:opacity-100" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* ── Main Content ─────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl border border-black/5 shadow-xl overflow-hidden"
                    >
                        {/* Accent bar */}
                        <div className="h-1.5 bg-gradient-to-r from-v-blue via-blue-400 to-blue-300" />

                        <div className="p-8 md:p-12">
                            {!submitted ? (
                                <>
                                    <h2 className="text-3xl font-display font-black text-v-black mb-2">Send us a Message</h2>
                                    <p className="text-slate-400 mb-8">We typically respond within 2 hours during business days.</p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all" placeholder="Rohit" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all" placeholder="Sharma" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                                            <input required type="email" className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all" placeholder="rohit@example.com" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                                            <input required type="tel" className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all" placeholder="+91 98765 43210" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What can we help you with?</label>
                                            <select className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all">
                                                {intents.map(opt => <option key={opt}>{opt}</option>)}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Your Message</label>
                                            <textarea
                                                required rows={4}
                                                className="w-full p-4 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 font-medium transition-all resize-none"
                                                placeholder="Tell us about your requirements — location, budget, property type..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-v-black text-white py-4 rounded-full font-bold hover:bg-v-blue transition-colors flex items-center justify-center gap-2 group mt-2"
                                        >
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            Send Message
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-v-black mb-2">Message Sent!</h3>
                                    <p className="text-slate-400 font-medium max-w-xs">
                                        Our team will be in touch within 2 business hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 px-6 py-2.5 border border-black/10 text-sm font-bold text-v-black rounded-full hover:bg-slate-50 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Office Tabs */}
                        <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
                            <div className="flex border-b border-black/5">
                                {offices.map((o, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveOffice(i)}
                                        className={`flex-1 py-4 px-5 text-sm font-bold transition-colors ${activeOffice === i ? 'bg-v-black text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                                    >
                                        {o.city}
                                    </button>
                                ))}
                            </div>
                            <div className="p-8 space-y-5">
                                {[
                                    { icon: MapPin, label: 'Address', value: offices[activeOffice].address },
                                    { icon: Phone, label: 'Phone', value: offices[activeOffice].phone },
                                    { icon: Mail, label: 'Email', value: offices[activeOffice].email },
                                    { icon: Clock, label: 'Hours', value: offices[activeOffice].hours },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-v-blue" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                                                <p className="font-medium text-v-black leading-relaxed">{item.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm h-64 relative bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                                alt="Mumbai Map"
                                className="w-full h-full object-cover opacity-60"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-v-blue rounded-full" />
                                        <div className="w-3 h-3 bg-v-blue rounded-full absolute inset-0 animate-ping opacity-50" />
                                    </div>
                                    <span className="font-bold text-v-black text-sm">Vibgyor Towers, BKC</span>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-6 bg-[#25D366] rounded-3xl text-white hover:bg-[#1bb757] transition-colors group shadow-lg shadow-green-500/20"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-black text-lg">WhatsApp Us</p>
                                <p className="text-green-100 text-sm font-medium">Fastest response — typically under 30 minutes</p>
                            </div>
                            <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
