import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Bell, Key, MapPin, Building2, Save } from 'lucide-react';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile Information', icon: User },
        { id: 'security', label: 'Password & Security', icon: Shield },
        { id: 'preferences', label: 'Property Preferences', icon: Building2 },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">

            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 shrink-0">
                <h1 className="text-3xl font-display font-bold text-v-black tracking-tight mb-8">
                    Account Settings
                </h1>
                <nav className="flex flex-col gap-2">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors w-full ${isActive
                                        ? 'bg-v-black text-white shadow-md'
                                        : 'text-slate-500 hover:bg-white hover:text-v-black hover:shadow-sm'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        )
                    })}
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full relative">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 min-h-[500px]"
                >
                    {activeTab === 'profile' && (
                        <div className="space-y-8 max-w-2xl">
                            <div>
                                <h2 className="text-2xl font-bold text-v-black mb-1">Profile Information</h2>
                                <p className="text-slate-500 text-sm">Update your personal data and how others see you on the platform.</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-md shrink-0">
                                    <User className="w-10 h-10 text-slate-400" />
                                </div>
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-v-black hover:bg-slate-50 transition-colors">
                                    Change Avatar
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                                    <input type="text" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" defaultValue="Arjun" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" defaultValue="Mehta" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                    <input type="email" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" defaultValue="arjun.mehta@example.com" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" defaultValue="+91 98765 43210" />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex justify-end">
                                <button className="flex items-center gap-2 bg-v-black hover:bg-v-blue text-white px-6 py-3 rounded-full font-bold transition-colors">
                                    <Save className="w-4 h-4" /> Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-8 max-w-2xl">
                            <div>
                                <h2 className="text-2xl font-bold text-v-black mb-1">Password & Security</h2>
                                <p className="text-slate-500 text-sm">Manage your password and secure your account.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Current Password</label>
                                    <div className="relative">
                                        <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input type="password" className="w-full p-3.5 pl-12 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" placeholder="Enter current password" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">New Password</label>
                                    <input type="password" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" placeholder="Enter new password" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Confirm New Password</label>
                                    <input type="password" className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue transition-all" placeholder="Confirm new password" />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-100 rounded-xl mb-6">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-orange-900">Two-Factor Authentication</span>
                                        <span className="text-sm text-orange-800/70">Add an extra layer of security to your account.</span>
                                    </div>
                                    <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-bold hover:bg-orange-200 transition-colors">
                                        Enable 2FA
                                    </button>
                                </div>

                                <div className="flex justify-end">
                                    <button className="flex items-center gap-2 bg-v-black hover:bg-v-blue text-white px-6 py-3 rounded-full font-bold transition-colors">
                                        <Save className="w-4 h-4" /> Update Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div className="space-y-8 max-w-2xl">
                            <div>
                                <h2 className="text-2xl font-bold text-v-black mb-1">Property Preferences</h2>
                                <p className="text-slate-500 text-sm">Tell us what you're looking for to receive better recommendations.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Preferred Locations</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['South Mumbai', 'Bandra West', 'Juhu', 'Worli'].map(loc => (
                                            <div key={loc} className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                                                <span className="text-sm font-medium text-v-black">{loc}</span>
                                                <button className="text-slate-400 hover:text-red-500">&times;</button>
                                            </div>
                                        ))}
                                        <button className="flex items-center gap-1 text-sm font-bold text-v-blue px-3 py-1.5 hover:bg-blue-50 rounded-full transition-colors">
                                            + Add Location
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Property Type</label>
                                        <select className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue">
                                            <option>Any</option>
                                            <option>Apartment</option>
                                            <option>Villa</option>
                                            <option>Commercial</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Budget Range</label>
                                        <select className="w-full p-3.5 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-2 focus:ring-v-blue">
                                            <option>Any</option>
                                            <option>₹ 1 Cr - ₹ 5 Cr</option>
                                            <option>₹ 5 Cr - ₹ 15 Cr</option>
                                            <option>₹ 15 Cr+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex justify-end">
                                <button className="bg-v-black text-white px-6 py-3 rounded-full font-bold hover:bg-v-blue transition-colors">
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="space-y-8 max-w-2xl">
                            <div>
                                <h2 className="text-2xl font-bold text-v-black mb-1">Email Notifications</h2>
                                <p className="text-slate-500 text-sm">Control what messages you receive from us.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: 'New Properties', desc: 'Alerts when properties matching your preferences are listed.' },
                                    { title: 'Price Drops', desc: 'Updates when a saved property lowers its asking price.' },
                                    { title: 'Market Insights', desc: 'Weekly newsletter on Mumbai real estate trends.' },
                                    { title: 'Account Activity', desc: 'Important logical security alerts and updates.' }
                                ].map((item, idx) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                        <input type="checkbox" defaultChecked={idx !== 2} className="mt-1 h-5 w-5 rounded border-slate-300 text-v-blue focus:ring-v-blue" />
                                        <div>
                                            <h4 className="font-bold text-v-black">{item.title}</h4>
                                            <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex justify-end">
                                <button className="bg-v-black text-white px-6 py-3 rounded-full font-bold hover:bg-v-blue transition-colors">
                                    Update Preferences
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
