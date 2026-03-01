import React, { useState, useEffect } from 'react';
import {
    Upload, Home, IndianRupee, MapPin, Building2, CheckCircle2,
    ChevronRight, Info, ShieldCheck, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PostProperty() {
    const [activeSection, setActiveSection] = useState('basic');

    const sections = [
        { id: 'basic', title: 'Basic Information', icon: Home },
        { id: 'pricing', title: 'Pricing & Location', icon: IndianRupee },
        { id: 'verification', title: 'Verification Details', icon: ShieldCheck },
        { id: 'media', title: 'Media & Photos', icon: Building2 },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Property listing submitted for review!');
    };

    // Scroll spy for the sticky sidebar
    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(`section-${s.id}`));
            const scrollPosition = window.scrollY + 300; // offset

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    if (activeSection !== sections[i].id) {
                        setActiveSection(sections[i].id);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <main className="flex-1 pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full font-sans selection:bg-v-blue/20 selection:text-v-blue">

            {/* Header */}
            <div className="mb-12 max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-widest text-v-blue mb-6">
                        <Building2 className="w-4 h-4" /> Property Submission
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-v-black tracking-tight mb-4 drop-shadow-sm">
                        List Your Premium Asset
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Join verified.realestate's exclusive portfolio. Reach high-net-worth individuals, NRIs, and top corporate clients looking for unparalleled spaces.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 relative">

                {/* Sticky Sidebar Navigation */}
                <div className="lg:w-80 shrink-0 relative hidden lg:block">
                    <div className="sticky top-32 bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100 overflow-hidden">

                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-v-blue/5 rounded-full blur-3xl pointer-events-none"></div>

                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 font-display">Listing Progress</h3>

                        <div className="relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-slate-100"></div>

                            <ul className="space-y-6 relative z-10">
                                {sections.map((section, idx) => {
                                    const isActive = activeSection === section.id;
                                    const Icon = section.icon;
                                    return (
                                        <li key={section.id}>
                                            <button
                                                onClick={() => scrollToSection(section.id)}
                                                className={`flex items-start gap-4 text-left w-full transition-all duration-300 group ${isActive ? 'opacity-100 translate-x-2' : 'opacity-60 hover:opacity-100 hover:translate-x-1'}`}
                                            >
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 shadow-sm transition-colors duration-300 ${isActive ? 'bg-v-blue border-blue-100 text-white' : 'bg-white border-slate-100 text-slate-400 group-hover:border-slate-200 group-hover:text-v-black'}`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <div className="pt-2">
                                                    <p className={`font-bold transition-colors duration-300 ${isActive ? 'text-v-blue' : 'text-slate-600 group-hover:text-v-black'}`}>
                                                        {idx + 1}. {section.title}
                                                    </p>
                                                </div>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Form Sections (Scrolling Canvas) */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* SECTION 1: Basic Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            id="section-basic"
                            className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border transition-colors duration-500 ${activeSection === 'basic' ? 'border-v-blue/20 ring-1 ring-v-blue/10 bg-gradient-to-b from-blue-50/30 to-white' : 'border-slate-100'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-v-black rounded-xl text-white flex items-center justify-center shadow-md">
                                    <Home className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-black text-v-black leading-tight">Basic Information</h2>
                                    <p className="text-sm font-medium text-slate-500">The foundational details of your asset.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Property Title Tagline</label>
                                    <input required type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black placeholder:text-slate-400" placeholder="e.g. 4 BHK Sea-Facing Ultra Luxury Apartment in Worli" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Property Intent</label>
                                    <div className="flex gap-4">
                                        <label className="flex-1 relative cursor-pointer group">
                                            <input type="radio" name="intent" className="peer sr-only" defaultChecked />
                                            <div className="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-v-blue peer-checked:bg-blue-50/50 flex flex-col items-center justify-center gap-2 transition-all hover:border-slate-300">
                                                <span className="font-bold text-slate-600 peer-checked:text-v-blue group-hover:text-v-black transition-colors">For Sale</span>
                                            </div>
                                            <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-v-blue flex items-center justify-center bg-white transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-v-blue scale-0 peer-checked:scale-100 transition-transform"></div>
                                            </div>
                                        </label>
                                        <label className="flex-1 relative cursor-pointer group">
                                            <input type="radio" name="intent" className="peer sr-only" />
                                            <div className="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-v-blue peer-checked:bg-blue-50/50 flex flex-col items-center justify-center gap-2 transition-all hover:border-slate-300">
                                                <span className="font-bold text-slate-600 peer-checked:text-v-blue group-hover:text-v-black transition-colors">For Rent</span>
                                            </div>
                                            <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-v-blue flex items-center justify-center bg-white transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-v-blue scale-0 peer-checked:scale-100 transition-transform"></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Asset Type</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black appearance-none cursor-pointer">
                                            <option>Premium Apartment</option>
                                            <option>Sky Villa / Penthouse</option>
                                            <option>Independent Bungalow</option>
                                            <option>Grade-A Commercial Space</option>
                                            <option>Retail Boutique</option>
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* SECTION 2: Pricing & Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            id="section-pricing"
                            className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border transition-colors duration-500 ${activeSection === 'pricing' ? 'border-amber-500/30 ring-1 ring-amber-500/10 bg-gradient-to-b from-amber-50/30 to-white' : 'border-slate-100'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-amber-500 rounded-xl text-white flex items-center justify-center shadow-md">
                                    <IndianRupee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-black text-v-black leading-tight">Pricing & Geography</h2>
                                    <p className="text-sm font-medium text-slate-500">Valuation and exact global coordinates.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Expected Valuation (₹)</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <span className="text-slate-400 font-bold">₹</span>
                                        </div>
                                        <input required type="text" className="w-full pl-10 pr-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-bold text-v-black placeholder:text-slate-400 placeholder:font-medium" placeholder="e.g. 15.5 Cr" />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Info className="w-3.5 h-3.5 text-amber-500" />
                                        <p className="text-[11px] font-bold uppercase text-amber-600/80 tracking-wide">Market rate matching enabled</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Micro-Market / Area</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input required type="text" className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-v-black placeholder:text-slate-400" placeholder="South Mumbai, Bandra West, etc." />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Tower / Building Name & Address</label>
                                    <textarea rows={2} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-v-black placeholder:text-slate-400 resize-none" placeholder="Exact building name, street, and landmark..."></textarea>
                                </div>
                            </div>
                        </motion.div>

                        {/* SECTION 3: Verification */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            id="section-verification"
                            className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border transition-colors duration-500 ${activeSection === 'verification' ? 'border-emerald-500/30 ring-1 ring-emerald-500/10 bg-gradient-to-b from-emerald-50/30 to-white' : 'border-slate-100'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-500 rounded-xl text-white flex items-center justify-center shadow-md">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="flex-1 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-display font-black text-v-black leading-tight">Trust & Verification</h2>
                                        <p className="text-sm font-medium text-slate-500">Legal transparencies and deep specifics.</p>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 text-emerald-700">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Required</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">MahaRERA Reg No. (Optional for Old Builds)</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-v-black placeholder:text-slate-400 font-mono text-sm uppercase" placeholder="P5180000..." />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Property Age</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-v-black appearance-none cursor-pointer">
                                            <option>Under Construction (Pre-Launch)</option>
                                            <option>New / Ready to Move</option>
                                            <option>1-5 Years Old</option>
                                            <option>5-10 Years Old</option>
                                            <option>Heritage / 15+ Years</option>
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Deep Description & Luxury Annotations</label>
                                    <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-v-black placeholder:text-slate-400 leading-relaxed resize-none" placeholder="Detail the Italian marble flooring, specific bespoke amenities, uninterrupted sea views, automation systems, and exclusive lifestyle offerings..."></textarea>
                                </div>
                            </div>
                        </motion.div>

                        {/* SECTION 4: Media Upload */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            id="section-media"
                            className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border transition-colors duration-500 ${activeSection === 'media' ? 'border-v-blue/30 ring-1 ring-v-blue/10 bg-gradient-to-b from-blue-50/30 to-white' : 'border-slate-100'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-v-black rounded-xl text-white flex items-center justify-center shadow-md">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-black text-v-black leading-tight">Visual Assets</h2>
                                    <p className="text-sm font-medium text-slate-500">High-resolution imagery is critical for premium valuation.</p>
                                </div>
                            </div>

                            <div className="border-2 border-dashed border-v-blue/30 bg-v-blue/[0.02] rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-v-blue/[0.04] transition-all duration-300 group">
                                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                                    <Upload className="w-8 h-8 text-v-blue" />
                                </div>
                                <h3 className="font-display font-black text-2xl text-v-black mb-2">Drop your media here</h3>
                                <p className="text-slate-500 font-medium mb-6 max-w-sm">
                                    Support for raw files, 4K video tours, and high-res photography. Maximum 50MB per file.
                                </p>
                                <button type="button" className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-v-black shadow-sm hover:border-v-blue hover:text-v-blue transition-colors">
                                    Browse Device Files
                                </button>
                            </div>
                        </motion.div>

                        {/* Submit Action Area */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4"
                        >
                            <p className="text-sm font-medium text-slate-500 max-w-md">
                                All submitted properties undergo a rigorous <span className="font-bold text-v-black">48-hour title verification</span> process before being actively listed on the MLS network.
                            </p>
                            <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-v-black to-slate-800 text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg group">
                                Broadcast Listing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                    </form>
                </div>
            </div>
        </main>
    );
}
