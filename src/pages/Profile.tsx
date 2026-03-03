import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    MapPin, BadgeCheck, Star, Clock, CalendarDays,
    Share2, Edit, CheckCircle2, LayoutGrid, Heart, Mail, Phone, Settings, LogOut, BarChart3
} from 'lucide-react';
import Analytics from './Analytics';
import PropertyCard from '../components/PropertyCard';

export default function Profile() {
    const [activeTab, setActiveTab] = useState<'portfolio' | 'about' | 'analytics'>('portfolio');

    // Mock Data
    const user = {
        name: "Atharva Deepak Navlekar",
        title: "Luxury Real Estate Consultant",
        location: "South Mumbai",
        about: "With over 12 years of specialized experience in the Mumbai luxury real estate market, I curate exclusive living experiences for discerning clients. My portfolio includes some of the most sought-after penthouses, sea-facing villas, and premium commercial spaces in South Mumbai and BKC. I believe in a white-glove approach, ensuring absolute transparency, privacy, and seamless transactions.",
        stats: {
            followers: "15.2k",
            following: "850",
            listings: "24",
        },
        skills: ["Luxury Properties", "High-Net-Worth Negotiation", "Comparative Market Analysis", "Premium Management"],
        performance: {
            rating: "4.9",
            reviewsCount: 156,
            responseTime: "< 1 hour",
            memberSince: "Aug 2021"
        },
        contact: {
            email: "rohit.excellence@example.com",
            phone: "+91 98765 43210"
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: user.name,
                    text: `Check out ${user.name}'s profile on Real Estate Mumbai`,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Profile link copied to clipboard");
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const properties = [
        { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop", price: "12.5 Cr", title: "Signia High Luxurious Sky Villa", loc: "South Mumbai", status: "Active" },
        { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop", price: "8.5 Cr", title: "3 BHK Premium Residence", loc: "BKC, Mumbai", status: "Under Offer" },
        { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", price: "25.0 Cr", title: "Sea Facing Penthouse", loc: "Worli, Mumbai", status: "Draft" }
    ];

    return (
        <main className="flex-1 pb-24 w-full bg-slate-50 font-sans selection:bg-v-blue/20 selection:text-v-blue">

            {/* Elegant Cover Image */}
            <div className="h-[240px] md:h-[320px] w-full relative">
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop"
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* Centered Profile Header */}
                <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 -mt-24 sm:-mt-32 mb-10 relative border border-slate-100 flex flex-col items-center text-center">

                    {/* Share / Edit Buttons */}
                    <div className="absolute top-6 right-6 flex items-center gap-3 hidden sm:flex">
                        <button onClick={handleShare} className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer ring-1 ring-slate-200">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <Link to="/settings" className="bg-v-black hover:bg-v-blue text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-md">
                            <Edit className="w-4 h-4" /> Edit
                        </Link>
                    </div>

                    {/* Avatar */}
                    <div className="relative mb-6">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-v-black text-white flex items-center justify-center border-4 border-white shadow-lg mx-auto overflow-hidden">
                            <span className="font-display font-medium text-5xl">A</span>
                        </div>
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 bg-v-blue rounded-full flex items-center justify-center border-4 border-white shadow-sm" title="Verified Professional">
                            <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                    </div>

                    {/* Info */}
                    <h1 className="font-display font-bold text-3xl sm:text-4xl text-v-black tracking-tight mb-2">{user.name}</h1>
                    <p className="text-lg font-medium text-slate-600 mb-4">{user.title}</p>

                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                        <MapPin className="w-4 h-4 text-v-blue" />
                        {user.location}
                        <span className="w-1 h-1 rounded-full bg-slate-300 mx-2"></span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600">Verified</span>
                    </div>

                    {/* Stats Divider */}
                    <div className="w-full flex justify-center mt-10 border-t border-slate-100 pt-8">
                        <div className="flex items-center gap-12 sm:gap-24">
                            <div className="text-center group cursor-pointer">
                                <p className="text-2xl font-bold text-v-black font-display group-hover:text-v-blue transition-colors">{user.stats.followers}</p>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">Followers</p>
                            </div>
                            <div className="w-px h-12 bg-slate-100 hidden sm:block"></div>
                            <div className="text-center group cursor-pointer">
                                <p className="text-2xl font-bold text-v-black font-display group-hover:text-v-blue transition-colors">{user.stats.following}</p>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">Following</p>
                            </div>
                            <div className="w-px h-12 bg-slate-100 hidden sm:block"></div>
                            <div className="text-center group cursor-pointer">
                                <p className="text-2xl font-bold text-v-blue font-display">{user.stats.listings}</p>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">Listings</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-4 mt-8 w-full sm:hidden">
                        <Link to="/settings" className="flex-1 bg-v-black text-white py-3 rounded-full text-sm font-bold shadow-sm flex items-center justify-center gap-2">
                            <Edit className="w-4 h-4" /> Edit Profile
                        </Link>
                        <button onClick={handleShare} className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-600">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Tabs & Content */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content Area */}
                    <div className="flex-1">

                        {/* Tabs Navigation */}
                        <div className="flex items-center gap-8 mb-8 border-b border-slate-200">
                            <button
                                onClick={() => setActiveTab('portfolio')}
                                className={`pb-4 text-[15px] font-bold tracking-wide transition-colors relative ${activeTab === 'portfolio' ? 'text-v-black' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="flex items-center gap-2"><LayoutGrid className="w-4 h-4" /> Properties</span>
                                {activeTab === 'portfolio' && (
                                    <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-v-black" />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`pb-4 text-[15px] font-bold tracking-wide transition-colors relative ${activeTab === 'about' ? 'text-v-black' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="flex items-center gap-2">Overview & Skills</span>
                                {activeTab === 'about' && (
                                    <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-v-black" />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('analytics')}
                                className={`pb-4 text-[15px] font-bold tracking-wide transition-colors relative ${activeTab === 'analytics' ? 'text-v-black' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Market Analytics</span>
                                {activeTab === 'analytics' && (
                                    <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-v-black" />
                                )}
                            </button>
                        </div>

                        {/* Portfolio Content */}
                        {activeTab === 'portfolio' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {properties.map((prop, idx) => (
                                    <PropertyCard
                                        key={idx}
                                        id={7000 + idx}
                                        title={prop.title}
                                        location={prop.loc}
                                        price={prop.price}
                                        image={prop.img}
                                        type={prop.status}
                                        isFeatured={prop.status === "Active"}
                                        metrics={[]}
                                        actionOverlay={
                                            <button className="w-full py-2.5 bg-white text-v-black text-sm font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
                                                Manage Listing
                                            </button>
                                        }
                                    />
                                ))}
                            </motion.div>
                        )}

                        {/* Analytics Content */}
                        {activeTab === 'analytics' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                                <Analytics />
                            </motion.div>
                        )}

                        {/* About Content */}
                        {activeTab === 'about' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <h2 className="text-xl font-display font-bold text-v-black mb-4">Professional Summary</h2>
                                    <p className="text-slate-600 leading-relaxed text-[16px]">
                                        {user.about}
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <h2 className="text-xl font-display font-bold text-v-black mb-5">Areas of Expertise</h2>
                                    <div className="flex flex-wrap gap-3">
                                        {user.skills.map((skill, index) => (
                                            <span key={index} className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:border-v-blue hover:text-v-blue transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </div>

                    {/* Sidebar Area */}
                    <div className="w-full lg:w-[320px] shrink-0 space-y-6">

                        {/* Performance Card */}
                        <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-[13px] font-bold text-v-black uppercase tracking-widest mb-6 px-1">Performance</h3>

                            <div className="space-y-6 px-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                                        <Star className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1.5 mb-1">
                                            <span className="text-2xl font-display font-bold text-v-black leading-none">{user.performance.rating}</span>
                                            <span className="text-xs font-bold text-slate-400">/ 5.0</span>
                                        </div>
                                        <p className="text-xs font-medium text-slate-500">{user.performance.reviewsCount} verified reviews</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-v-blue" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-display font-bold text-v-black leading-none mb-1">{user.performance.responseTime}</span>
                                        <p className="text-xs font-medium text-slate-500">Avg. response time</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                                        <CalendarDays className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-display font-bold text-v-black leading-none mb-1">{user.performance.memberSince}</span>
                                        <p className="text-xs font-medium text-slate-500">Member since</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Advanced Settings */}
                        <div className="bg-v-black text-white rounded-[2rem] p-6 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-v-blue rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-6 px-1 relative z-10">Account Details</h3>

                            <div className="space-y-4 mb-6 relative z-10 px-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-full">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold truncate">{user.contact.email}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-full">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold">{user.contact.phone}</p>
                                </div>
                            </div>

                            <div className="space-y-2 relative z-10 pt-4 border-t border-white/10">
                                <Link to="/settings" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold text-white">
                                    <Settings className="w-4 h-4 text-slate-400" /> Account Settings
                                </Link>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-colors text-sm font-bold">
                                    <LogOut className="w-4 h-4" /> Sign Out
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}