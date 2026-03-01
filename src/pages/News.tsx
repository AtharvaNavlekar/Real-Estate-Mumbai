import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, TrendingUp, Building2, Landmark } from 'lucide-react';

const featuredArticle = {
    title: "Mumbai Property Registrations Hit 10-Year High in Q1",
    excerpt: "The luxury residential segment in South Mumbai and BKC continues to drive unprecedented stamp duty collections, signaling strong HNI confidence.",
    category: "Market Trends",
    author: "Research Desk",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
};

const articles = [
    { id: 1, title: 'Impact of New Coastal Road on Worli Real Estate', category: 'Infrastructure', date: 'Mar 12, 2025', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80' },
    { id: 2, title: 'RERA Updates: What the New Escrow Rules Mean for Buyers', category: 'Regulatory', date: 'Mar 10, 2025', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Commercial Leasing Trends: The Return to the Office', category: 'Commercial', date: 'Mar 08, 2025', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
    { id: 4, title: 'Top 5 Emerging Micro-Markets in MMR', category: 'Market Trends', date: 'Mar 05, 2025', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Expat Housing Allowances Adjusted for 2025', category: 'Global Desk', date: 'Mar 01, 2025', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80' },
    { id: 6, title: 'The Rise of Branded Residences in South Mumbai', category: 'Luxury', date: 'Feb 28, 2025', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
];

export default function News() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-black text-v-black mb-4 tracking-tight">Mumbai Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-blue to-teal-500">Intelligence</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Data-driven insights, policy updates, and market analysis curating the pulse of India's largest property market.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Featured Article - Magazine Style */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 mb-16 group cursor-pointer lg:h-[500px] flex flex-col lg:flex-row relative">
                    <div className="lg:w-3/5 h-64 lg:h-full relative overflow-hidden">
                        <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-v-black/80 via-v-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white"></div>
                    </div>

                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-white">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-emerald-100 inline-flex items-center gap-1.5">
                                <TrendingUp className="w-3 h-3" /> {featuredArticle.category}
                            </span>
                            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {featuredArticle.date}
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-display font-black text-v-black mb-4 leading-tight group-hover:text-v-blue transition-colors">
                            {featuredArticle.title}
                        </h2>

                        <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                            {featuredArticle.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="text-sm font-bold text-v-black">By {featuredArticle.author}</div>
                            <div className="bg-slate-50 p-2.5 rounded-full group-hover:bg-v-blue transition-colors border border-slate-200 group-hover:border-v-blue">
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Categories / Filter Tab */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    {['All Articles', 'Market Trends', 'Infrastructure', 'Regulatory', 'Commercial', 'Luxury'].map((cat, i) => (
                        <button key={i} className={`px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-sm border ${i === 0 ? 'bg-v-black text-white border-v-black' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-v-black'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <motion.div key={article.id} whileHover={{ y: -5 }} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-slate-100 group cursor-pointer flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-v-black uppercase tracking-widest shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                                    <Clock className="w-3 h-3" /> {article.date}
                                </div>
                                <h3 className="text-xl font-bold text-v-black mb-4 leading-snug group-hover:text-v-blue transition-colors">
                                    {article.title}
                                </h3>
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-v-blue text-sm font-bold tracking-wide">Read Article</span>
                                    <ArrowRight className="w-4 h-4 text-v-blue group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
