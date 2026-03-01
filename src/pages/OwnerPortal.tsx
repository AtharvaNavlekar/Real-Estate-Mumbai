import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Key, Users, ShieldCheck, ArrowRight, Home, Building, FileText, CheckCircle2,
    Star, TrendingUp, Clock, Shield
} from 'lucide-react';

export default function OwnerPortal() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-emerald-500/20 selection:text-emerald-700">

            {/* Premium Hero Section */}
            <div className="bg-v-black text-white pt-32 pb-48 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-v-blue rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md">
                                <Key className="w-4 h-4" /> Exclusive Mandate Services
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 drop-shadow-md leading-[1.1]">
                                Maximize Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Asset's Yield</span>
                            </h1>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-lg">
                                Partner with Mumbai's elite advisory. We secure record transactions through our pre-verified HNI network and proprietary institutional MLS system.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-emerald-500 hover:bg-emerald-400 text-v-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Request Valuation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-md flex items-center justify-center gap-2">
                                    <FileText className="w-5 h-5" /> Our Track Record
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block">
                            <div className="relative z-10 bg-white/5 border border-white/20 p-4 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" alt="Luxury Real Estate" className="rounded-[2rem] object-cover h-[500px] w-full" />

                                {/* Floating Badges */}
                                <div className="absolute top-12 -left-12 bg-white text-v-black p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:pause">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-black"><TrendingUp className="w-5 h-5" /></div>
                                    <div>
                                        <p className="font-bold text-sm">Avg. Price Premium</p>
                                        <p className="text-xl font-display font-black">+14.2%</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-12 -right-8 bg-v-black text-white p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-v-blue rounded-full flex items-center justify-center font-black"><Clock className="w-5 h-5" /></div>
                                    <div>
                                        <p className="font-bold text-sm text-slate-300">Time to Lease</p>
                                        <p className="text-xl font-display font-black text-white">18 Days</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Dynamic Floating Stats Bar */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {[
                        { icon: Users, val: "5,000+", label: "Elite Brokers on MLS", color: "text-blue-600", bg: "bg-blue-50" },
                        { icon: Building, val: "₹2.5k Cr", label: "Assets Under Mandate", color: "text-emerald-600", bg: "bg-emerald-50" },
                        { icon: ShieldCheck, val: "100%", label: "Legal Title Verification", color: "text-amber-600", bg: "bg-amber-50" },
                        { icon: Star, val: "4.9/5", label: "Owner Satisfaction", color: "text-indigo-600", bg: "bg-indigo-50" }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center py-6 md:py-4 px-4 w-full group hover:bg-slate-50 transition-colors rounded-2xl cursor-default">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-display font-black text-v-black">{stat.val}</h4>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 text-center">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 relative z-20 space-y-32">

                {/* Alternating Split-Screen Card: MLS */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row items-center gap-0">
                    <div className="flex-1 p-12 lg:p-20 order-2 lg:order-1">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl mb-8 shadow-inner">
                            <Home className="w-7 h-7" />
                        </div>
                        <h2 className="text-4xl font-display font-black text-v-black mb-6 leading-tight">
                            The Institutional <br />Multiple Listing Service
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                            An exclusive mandate with us means your property is instantly distributed across Mumbai's most powerful broker consortiums. Maximum market penetration, one single point of accountability.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: 'Cinematic Visuals', desc: '4K Drone footage and guided 3D Matterport tours.' },
                                { title: 'Algorithmic Pricing', desc: 'Real-time comparables using our Bloomberg-style terminal.' },
                                { title: 'Silent Marketing', desc: 'Off-market distribution to ultra-HNI family offices.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-[400px] lg:h-auto lg:self-stretch relative order-1 lg:order-2">
                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" alt="Marketing" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Alternating Split-Screen Card: Property Management */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-v-black rounded-[3rem] shadow-2xl border border-slate-800 overflow-hidden flex flex-col lg:flex-row items-center gap-0">
                    <div className="w-full lg:w-1/2 h-[400px] lg:h-auto lg:self-stretch relative">
                        <div className="absolute inset-0 bg-emerald-600 mix-blend-multiply opacity-20 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" alt="Management" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-12 lg:p-20 text-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 text-emerald-400 rounded-2xl mb-8 border border-white/20 backdrop-blur-md">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h2 className="text-4xl font-display font-black text-white mb-6 leading-tight">
                            White-Glove <br />Asset Management
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 font-medium border-l-2 border-emerald-500 pl-4">
                            Ideal for NRIs and multiple-asset owners. We handle day-to-day operations, legal compliance, and tenant relations so your real estate remains a completely passive, high-yield investment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: 'Escrow Accounts', desc: 'Secure rent routing and tax optimization.' },
                                { title: 'Facility Upkeep', desc: '24/7 concierge for repairs and maintenance.' },
                                { title: 'Legal Renewals', desc: 'Automated L&L agreements and POA execution.' },
                                { title: 'Tenant KYC', desc: 'Rigorous behavioral and financial background checks.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <h4 className="font-bold text-emerald-400 mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* High-Prominence Gradient CTA Card */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-emerald-900 via-teal-900 to-v-black rounded-[3rem] p-12 lg:p-20 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] relative overflow-hidden text-center border border-emerald-500/20">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                    <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 relative z-10">
                        Ready to uncomplicate <br />your real estate?
                    </h2>
                    <p className="text-emerald-100/80 max-w-2xl mx-auto mb-12 relative z-10 text-lg font-medium">
                        Submit brief details below. Our mandate specialist curating your micro-market will securely contact you with a preliminary valuation model.
                    </p>

                    <form className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-3 rounded-[2rem] flex flex-col sm:flex-row gap-3 relative z-10 border border-white/20 shadow-2xl" onSubmit={(e) => { e.preventDefault(); alert('Property mandate request submitted'); }}>
                        <select className="px-6 py-4 bg-black/40 border border-white/10 focus:border-emerald-500 text-white font-bold rounded-xl outline-none appearance-none cursor-pointer flex-1 min-w-[200px] hover:bg-black/60 transition-colors">
                            <option>I want to Mandate a Sale</option>
                            <option>I want to Lease Out</option>
                            <option>Require Turnkey Management</option>
                        </select>
                        <input required type="tel" placeholder="Mobile Number" className="flex-1 px-6 py-4 bg-white border border-slate-200 focus:border-emerald-500 text-v-black font-bold rounded-xl outline-none placeholder:font-medium placeholder:text-slate-400" />
                        <input required type="text" placeholder="Locality (e.g. BKC)" className="flex-1 px-6 py-4 bg-white border border-slate-200 focus:border-emerald-500 text-v-black font-bold rounded-xl outline-none placeholder:font-medium placeholder:text-slate-400" />

                        <button type="submit" className="bg-emerald-500 text-v-black px-8 py-4 rounded-xl font-black hover:bg-emerald-400 transition-colors whitespace-nowrap shadow-lg flex items-center justify-center gap-2 group">
                            Generate Valuation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="relative z-10 mt-8 text-xs font-bold uppercase tracking-widest text-emerald-500/50">
                        Strict Data Privacy & NDA Protocol Enforced
                    </p>
                </motion.div>

            </div>
        </main>
    );
}
