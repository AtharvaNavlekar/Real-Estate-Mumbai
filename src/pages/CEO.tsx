import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Quote, Building2, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CEO() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Executive Hero */}
            <div className="bg-white pt-32 pb-20 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Executive Portrait (Placeholder) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-2/5 relative"
                        >
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <img src="/profile-photo.png" alt="CEO Portrait" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-v-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-3xl font-display font-black text-white drop-shadow-md">Atharva Deepak Navlekar</h2>
                                    <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mt-1">Founder & Managing Director</p>
                                </div>
                            </div>
                            {/* Decorative Background Elements */}
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-200 rounded-3xl z-0 rounded-tl-[4rem]"></div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-v-black/5 rounded-full blur-3xl z-0"></div>
                        </motion.div>

                        {/* Executive Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-3/5"
                        >
                            <Quote className="w-16 h-16 text-slate-100 mb-6" />
                            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-v-black mb-8 leading-tight">
                                "Our mandate isn't just about selling square footage. It's about engineering <span className="text-v-blue">trust, transparency</span>, and definitive <span className="text-emerald-500">ROI</span> for our clients."
                            </h1>

                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium mb-12">
                                <p>
                                    As the driving force behind RealEstateMumbai.com, Atharva has specialized in navigating Mumbai's complex property cycles, transforming the brokerage into a premier institutional advisory board.
                                </p>
                                <p>
                                    Under his leadership, the firm continues to prioritize data-driven real estate modeling in India, effectively bridging the gap between offshore capital and local Grade-A developers. His expertise lies in high-ticket luxury residential mandates and complex commercial leasing structures.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
                                    <Building2 className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                                    <h4 className="text-3xl font-black text-v-black mb-1">30+</h4>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Years of Trust</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
                                    <TrendingUp className="w-6 h-6 text-v-blue mx-auto mb-3" />
                                    <h4 className="text-3xl font-black text-v-black mb-1">₹5K+</h4>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Cr. Transacted</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
                                    <Award className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                                    <h4 className="text-3xl font-black text-v-black mb-1">15+</h4>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Industry Awards</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Philosophy / Timeline Block */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-v-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-v-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl text-white">
                            <h3 className="text-3xl font-display font-black mb-4">A Vision Built on Fundamentals</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                "The real estate market is noisy. Our job is to filter the noise and present empirical data and exclusive inventory to our stakeholders. We do not chase transactions; we manage long-term wealth portfolios."
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-v-black px-8 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg">
                                Connect with the Desk <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl md:w-1/3">
                            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Key Focus Areas</p>
                            <ul className="space-y-4 text-white font-medium">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Institutional Investments</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-v-blue rounded-full"></div> Ultra-HNI Portfolios</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> Policy & RERA Advisory</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Pan-India Mandates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
