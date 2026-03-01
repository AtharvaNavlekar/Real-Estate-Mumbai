import React, { useState } from 'react';
import { MessageCircle, PhoneCall, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans">

            <AnimatePresence>
                {/* Form Modal */}
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 w-80 mb-4 overflow-hidden relative"
                    >
                        <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-v-black">
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-xl font-display font-black text-v-black mb-1">Quick Enquiry</h3>
                        <p className="text-xs font-medium text-slate-500 mb-6 border-b border-slate-100 pb-4">Speak to our senior advisory team.</p>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); alert("Enquiry submitted!"); }}>
                            <div>
                                <input required type="text" placeholder="Your Name" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-v-blue" />
                            </div>
                            <div>
                                <input required type="tel" placeholder="Phone Number" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-v-blue" />
                            </div>
                            <div>
                                <textarea required rows={3} placeholder="How can we help you?" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-v-blue"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-v-black text-white hover:bg-v-blue transition-colors px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Sub Menu Floating Buttons */}
                {isOpen && !showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        <button
                            onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                            className="bg-green-500 hover:bg-green-600 text-white shadow-lg p-4 rounded-full flex items-center gap-3 transition-colors pr-6 group"
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span className="font-bold text-sm">WhatsApp</span>
                        </button>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-v-black hover:bg-v-blue text-white shadow-lg p-4 rounded-full flex items-center gap-3 transition-colors pr-6 group"
                        >
                            <PhoneCall className="w-6 h-6" />
                            <span className="font-bold text-sm">Request Callback</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            {!showForm && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-200 text-slate-600 rotate-90' : 'bg-v-blue text-white hover:scale-105'}`}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
                </button>
            )}
        </div>
    );
}
