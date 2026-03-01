import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="mb-16 text-center">
                <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-v-black mb-6 tracking-tight">
                    Get in Touch
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                    Our real estate concierges are ready to assist you. Whether you're looking to buy, sell, or invest in Mumbai, we're here to help.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-v-black rounded-t-3xl"></div>
                    <h3 className="text-3xl font-display font-bold text-v-black mb-8">Send us a Message</h3>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! We will get back to you shortly.'); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="Rohit" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="Sharma" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                            <input required type="email" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="rohit@example.com" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                            <input required type="tel" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="+91" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">I am looking to...</label>
                            <select className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue appearance-none">
                                <option>Buy a Property</option>
                                <option>Rent a Property</option>
                                <option>Sell my Property</option>
                                <option>Schedule a Consultation</option>
                                <option>Other Enquiry</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                            <textarea required rows={4} className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="Tell us more about your requirements..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-v-black text-white py-4 rounded-full font-bold hover:bg-v-blue transition-colors mt-4">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8 lg:pl-12">
                    <div className="bg-v-gray p-8 rounded-3xl border border-black/5">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Corporate Headquarters</h4>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <MapPin className="w-5 h-5 text-v-blue" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-v-black text-lg mb-1">Our Office</h5>
                                    <p className="text-slate-600 leading-relaxed">
                                        Level 8, Vibgyor Towers,<br />
                                        Bandra Kurla Complex (BKC),<br />
                                        Mumbai, Maharashtra 400051
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Phone className="w-5 h-5 text-v-blue" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-v-black text-lg mb-1">Phone</h5>
                                    <p className="text-slate-600">+91 98765 43210</p>
                                    <p className="text-slate-600">022 4567 8900</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Mail className="w-5 h-5 text-v-blue" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-v-black text-lg mb-1">Email</h5>
                                    <p className="text-slate-600">hello@verified.realestate</p>
                                    <p className="text-slate-600">careers@verified.realestate</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Clock className="w-5 h-5 text-v-blue" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-v-black text-lg mb-1">Hours</h5>
                                    <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-slate-600">Sunday: Closed (By Appt Only)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-black/5 h-[400px] bg-slate-200 relative">
                        {/* Map Placeholder */}
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                            alt="Mumbai Map"
                            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                                <div className="w-3 h-3 bg-v-blue rounded-full animate-ping"></div>
                                <span className="font-bold text-v-black">We are here in BKC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
