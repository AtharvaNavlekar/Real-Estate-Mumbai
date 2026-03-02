import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight, Share2 } from 'lucide-react';

const articlesData: Record<number, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    body: string[];
}> = {
    0: {
        title: 'Mumbai Real Estate Crosses 1 Lakh Crore in Annual Sales',
        category: 'Market Trends',
        date: 'March 15, 2025',
        readTime: '5 min read',
        author: 'Research Desk',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        body: [
            'Mumbai\'s real estate market has achieved a historic milestone, crossing 1 lakh crore in annual residential sales for the first time. This marks a 28% increase over the previous year and signals a fundamental shift in buyer sentiment and market dynamics.',
            'The surge is driven by multiple factors: pent-up demand from the COVID era, infrastructure developments like the Mumbai Metro, Coastal Road, and Trans-Harbour Link, and a flight to quality among homebuyers who are now prioritizing branded developers and verified properties.',
            'South Mumbai and BKC continue to command the highest price premium, with average rates crossing 45,000 per sq ft. However, the real growth story lies in emerging micro-markets like Andheri West, Powai, and Thane, where price appreciation has outpaced traditional premium corridors.',
            'Industry experts believe this is just the beginning. With the Mumbai Metropolitan Region (MMR) infrastructure transformation accelerating, and global investors increasingly viewing Mumbai as a safe-haven market, the outlook for 2025-2027 remains exceptionally bullish.',
            'For buyers, the message is clear: the window of opportunity in growth corridors is narrowing. Properties in areas with upcoming metro connectivity, coastal road access, or social infrastructure upgrades are likely to see 15-20% appreciation in the next 24 months.'
        ]
    },
    1: {
        title: 'Impact of New Coastal Road on Worli Real Estate',
        category: 'Infrastructure',
        date: 'Mar 12, 2025',
        readTime: '4 min read',
        author: 'Urban Planning Desk',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        body: [
            'The Mumbai Coastal Road, now partially operational, is transforming Worli into one of the most connected neighborhoods in South Mumbai. Travel time from Worli to Marine Drive has dropped from 45 minutes to under 10 minutes during peak hours.',
            'This dramatic improvement in connectivity is already reflected in property prices. Worli sea-face apartments have seen a 12-15% price appreciation since the coastal road announcement, with premium projects now commanding 60,000-80,000 per sq ft.',
            'Developers are responding with a wave of new launches. Three major ultra-luxury projects are expected in the Worli-Prabhadevi belt this year, targeting the 10-50 crore segment.',
            'The coastal road also creates a premium "address effect" \u2014 properties with direct coastal road access are being marketed as a new category of Mumbai luxury, comparable to waterfront living in global cities like Dubai and Singapore.'
        ]
    },
    2: {
        title: 'Metro Line 3 to Transform Andheri-BKC Corridor',
        category: 'Transport',
        date: 'Mar 8, 2025',
        readTime: '4 min read',
        author: 'Infrastructure Team',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
        body: [
            'Mumbai Metro Line 3 (Aqua Line) connecting Colaba to SEEPZ is set to revolutionize the Andheri-BKC corridor. With 27 stations across 33.5 km, this underground metro will dramatically reduce commute times across Mumbai\'s commercial heart.',
            'The BKC station is expected to be one of the busiest in the network, serving the financial district that houses major banks, consulting firms, and the National Stock Exchange. Properties within a 500-meter radius of Metro 3 stations are already commanding a 10-15% premium.',
            'For commercial real estate, the impact is even more significant. Grade-A office rentals near Metro 3 stations are forecast to increase by 20-25% upon full commissioning, as multinational tenants prioritize transit-oriented locations.',
            'Residential developers in Andheri West, Marol, and Chakala are repositioning their projects as "metro-connected living" \u2014 a narrative that resonates strongly with young professionals and dual-income families.'
        ]
    },
    3: {
        title: 'NRI Investment in Mumbai Property Surges 40%',
        category: 'Investment',
        date: 'Mar 5, 2025',
        readTime: '3 min read',
        author: 'NRI Advisory Desk',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        body: [
            'Non-Resident Indian (NRI) investment in Mumbai real estate has surged 40% year-over-year, driven by favorable exchange rates, RERA transparency, and a strong rental yield narrative.',
            'The UAE, US, and Singapore remain the top source markets for NRI buyers. Two-thirds of NRI purchases are concentrated in the 2-5 crore segment, with Bandra, Andheri West, and Powai being the most popular locations.',
            'Digital transformation has been a key enabler. Virtual tours, online documentation, and RERA-verified listings have made it possible for NRIs to complete property purchases without visiting India.',
            'Experts recommend that NRI buyers focus on RERA-registered projects from Grade-A developers and prioritize locations with upcoming infrastructure connectivity for maximum capital appreciation.'
        ]
    },
    4: {
        title: 'Redevelopment Wave Reshaping South Mumbai\'s Skyline',
        category: 'Development',
        date: 'Mar 1, 2025',
        readTime: '5 min read',
        author: 'Research Desk',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
        body: [
            'South Mumbai is undergoing its most significant transformation in decades, as cluster redevelopment projects and SRA schemes replace aging chawls and dilapidated buildings with modern high-rises.',
            'The Girgaon-Tardeo-Parel belt alone has over 50 active redevelopment projects, with a combined development potential exceeding 20 million sq ft. This is creating a new supply of premium apartments in locations that haven\'t seen new inventory in 30+ years.',
            'For existing residents, redevelopment offers free upgraded housing plus a corpus fund. For buyers, it creates opportunities to own in blue-chip South Mumbai addresses at prices 20-30% below comparable new launches.',
            'However, redevelopment comes with risks \u2014 delays, developer disputes, and regulatory hurdles are common. Buyers should verify RERA registration, confirm developer track records, and assess possession timelines carefully.'
        ]
    },
    5: {
        title: 'The Rise of Branded Residences in South Mumbai',
        category: 'Luxury',
        date: 'Feb 28, 2025',
        readTime: '4 min read',
        author: 'Luxury Division',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        body: [
            'Branded residences \u2014 homes developed in partnership with luxury hospitality brands like Four Seasons, Ritz-Carlton, and Armani \u2014 are emerging as the hottest segment in Mumbai\'s ultra-luxury market.',
            'These properties command a 25-40% price premium over comparable non-branded luxury projects, with prices starting at 80,000 per sq ft and going up to 1.5 lakh per sq ft for the most exclusive addresses.',
            'The appeal goes beyond branding. Residents enjoy hotel-level services including concierge, housekeeping, fine dining, spa access, and priority reservations at the hotel\'s global properties.',
            'Mumbai currently has three branded residence projects in various stages of development, all located in the Worli-Lower Parel-BKC corridor. Industry sources suggest at least two more global hotel brands are in advanced talks for Mumbai partnerships.'
        ]
    }
};

const relatedArticles = [
    { id: 1, title: 'Impact of New Coastal Road on Worli Real Estate', category: 'Infrastructure', date: 'Mar 12, 2025', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80' },
    { id: 3, title: 'NRI Investment in Mumbai Property Surges 40%', category: 'Investment', date: 'Mar 5, 2025', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
    { id: 5, title: 'The Rise of Branded Residences in South Mumbai', category: 'Luxury', date: 'Feb 28, 2025', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
];

export default function NewsArticle() {
    const { id } = useParams<{ id: string }>();
    const article = articlesData[Number(id)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <main className="flex-1 min-h-screen flex items-center justify-center bg-v-gray">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-black text-v-black mb-4">Article Not Found</h1>
                    <p className="text-slate-500 mb-8">The article you are looking for does not exist.</p>
                    <Link to="/news" className="bg-v-black text-white px-8 py-4 rounded-full font-bold hover:bg-v-blue transition-colors">
                        Back to News
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Hero */}
            <div className="bg-v-black border-b border-white/10 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-15" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/80 to-v-black/40" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/news" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> All News
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block bg-v-blue/20 text-v-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-v-blue/30">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight mb-6">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-medium">
                            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Article Body */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-10 shadow-xl">
                            <img src={article.image} alt={article.title} className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {article.body.map((paragraph, idx) => (
                                <p key={idx} className="text-slate-600 text-lg leading-relaxed mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Tags & Share */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-slate-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tags:</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{article.category}</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">Mumbai</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">Real Estate</span>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-v-blue transition-colors">
                                <Share2 className="w-4 h-4" /> Share Article
                            </button>
                        </div>
                    </motion.article>

                    {/* Sidebar */}
                    <aside>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="text-lg font-display font-bold text-v-black mb-6">Related Articles</h3>
                            <div className="space-y-6">
                                {relatedArticles.filter(a => a.id !== Number(id)).map(a => (
                                    <Link to={`/news/${a.id}`} key={a.id} className="group flex gap-4">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                            <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-v-blue">{a.category}</span>
                                            <h4 className="text-sm font-bold text-v-black group-hover:text-v-blue transition-colors leading-snug">{a.title}</h4>
                                            <span className="text-xs text-slate-400 mt-1 block">{a.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white mt-10">
                                <h3 className="text-lg font-display font-bold mb-3">Stay Updated</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Get the latest Mumbai real estate news and market insights delivered to your inbox.</p>
                                <Link to="/contact" className="block w-full text-center bg-v-blue text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors">
                                    Subscribe Now
                                </Link>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
