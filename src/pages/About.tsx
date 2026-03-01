import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, ShieldCheck, Award, Users } from 'lucide-react';

export default function About() {
    return (
        <main className="flex-1 pt-32 pb-20 w-full">
            {/* Hero Section */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20 text-center">
                <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-v-black mb-6 tracking-tight">
                    Trust. Transparency. <span className="text-slate-300">Technology.</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
                    For over three decades, we have been the silent force behind Mumbai's most significant real estate transactions. We aren't just brokers; we are your strategic real estate partners.
                </p>
            </section>

            {/* Legacy Image */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32 h-[50vh] min-h-[400px]">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2000&auto=format&fit=crop"
                        alt="Mumbai Skyline Legacy"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 flex flex-wrap gap-8">
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                            <p className="text-5xl font-display font-bold text-v-black">33<span className="text-v-blue">+</span></p>
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mt-1">Years of Legacy</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                            <p className="text-5xl font-display font-bold text-v-black">10k<span className="text-v-blue">+</span></p>
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mt-1">Happy Families</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                            <p className="text-5xl font-display font-bold text-v-black">₹5k<span className="text-v-blue">+</span></p>
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mt-1">Cr. in Transactions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-v-black text-white py-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-v-blue font-bold tracking-widest uppercase text-xs mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">The MumbaiPro Difference</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-v-blue" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-display">Absolute Verification</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Every listing on our platform goes through a 40-point legal and physical verification process. If it's not verified, it's not here.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-v-blue" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-display">Data-Driven Accuracy</h4>
                            <p className="text-slate-400 leading-relaxed">
                                We remove emotional bias from pricing. Our AI algorithms analyze 50+ data points to provide you with the exact fair market value.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-v-blue" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-display">Concierge Service</h4>
                            <p className="text-slate-400 leading-relaxed">
                                A dedicated expert stays with you from the first property tour to negotiating terms and handing over the keys.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-v-blue" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-display">Zero Spam Policy</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Your data is sacred. We never sell your information, and our agents only call you when you explicitly request a callback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership / CTA */}
            <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="bg-v-gray rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-black/5">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-v-black mb-6 tracking-tight">Ready to find your dream home?</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Join thousands of satisfied clients who have discovered their perfect property through MumbaiPro. Our experts are ready to guide you.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/properties" className="bg-v-black text-white px-8 py-4 rounded-full font-bold hover:bg-v-blue transition-colors">
                                Browse Properties
                            </Link>
                            <Link to="/contact" className="bg-white border border-black/10 text-v-black px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
                                Contact an Expert
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0 relative">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                            alt="Expert Advisor"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-v-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-white font-bold text-xl">Arjun Mehta</p>
                            <p className="text-slate-300 text-sm font-medium">Head of Luxury Sales</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
