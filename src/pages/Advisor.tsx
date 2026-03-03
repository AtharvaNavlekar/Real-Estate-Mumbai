import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PhoneCall, Mail, Calendar, MapPin, Award, Star, ArrowLeft, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function Advisor() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const locationParam = params.get('location') || 'Mumbai';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-v-blue/20 selection:text-v-blue">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16 min-h-[500px] flex items-center bg-v-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
                        alt="Advisor"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/80 to-transparent"></div>
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-v-blue/20 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link to={-1 as any} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Link>

                    <div className="flex flex-col md:flex-row gap-10 items-end">
                        <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shrink-0 bg-slate-800">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" alt="Arjun Mehta" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-v-blue/20 border border-v-blue/30 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 backdrop-blur-md">
                                <Award className="w-4 h-4" /> Senior Investment Partner
                            </div>
                            <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-2 tracking-tight">
                                Arjun Mehta
                            </h1>
                            <p className="text-xl text-slate-300 font-medium max-w-2xl mb-6">
                                Specializing in premium residential assets and high-yield commercial leasing across {locationParam.replace(/-/g, ' ')}.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#book" className="px-6 py-3 bg-white text-v-black rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-lg">
                                    <Calendar className="w-5 h-5" /> Book Consultation
                                </a>
                                <a href="tel:+919876543210" className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                                    <PhoneCall className="w-5 h-5" /> +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content */}
                    <div className="lg:w-2/3 space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-display font-black text-v-black mb-6">About Arjun</h2>
                            <p className="text-slate-600 leading-relaxed font-medium mb-6">
                                With over 12 years of hyper-local experience in the Mumbai real estate market, Arjun has facilitated over ₹1,200 Crores in real estate transactions. He brings unparalleled expertise in off-market luxury listings, legal compliance, and strategic portfolio building for High-Net-Worth Individuals (HNIs) and NRI investors.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Currently appointed as the lead specialist for the <strong>{locationParam.replace(/-/g, ' ')}</strong> corridor, he ensures clients receive unbiased data, stringent due diligence, and exclusive access to pre-launch developments from Tier-1 developers.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: 'RERA Certified', desc: 'Compliant & transparent advisory' },
                                { icon: TrendingUp, title: 'Yield Focused', desc: 'ROI-driven asset selection' },
                                { icon: Star, title: '4.9/5 Rating', desc: 'Based on 150+ client reviews' },
                                { icon: Clock, title: '24/7 Availability', desc: 'Dedicated client support desk' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-v-blue rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-v-black mb-1">{item.title}</h4>
                                        <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:w-1/3" id="book">
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 sticky top-32">
                            <h3 className="text-2xl font-display font-black text-v-black mb-2">Request Callback</h3>
                            <p className="text-slate-500 text-sm font-medium mb-6">Fill out the form below and Arjun's desk will contact you within 2 hours.</p>

                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Consultation Request Sent!'); }}>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Full Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-v-blue transition-colors text-sm font-medium" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Phone Number</label>
                                    <input required type="tel" placeholder="+91 99999 99999" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-v-blue transition-colors text-sm font-medium" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Interest Area</label>
                                    <input required type="text" defaultValue={locationParam.replace(/-/g, ' ')} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-v-blue transition-colors text-sm font-medium" />
                                </div>

                                <button type="submit" className="w-full bg-v-black text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg mt-4">
                                    Schedule Consultation
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
