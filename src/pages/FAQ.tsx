import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircleQuestion, PhoneCall, Mail } from 'lucide-react';

const faqs = [
    {
        category: "Leasing & Renting",
        questions: [
            { q: "What is the standard Lock-in period for commercial leases in Mumbai?", a: "Typically, Grade A commercial spaces in Mumbai demand a lock-in period of 3 years on a 5-year lease or 5 years on a 9-year lease, depending on the CAPEX invested by the landlord or tenant." },
            { q: "Do you assist with expat lease registrations?", a: "Yes, our Expat Relocation desk handles end-to-end lease registration (Leave & License Agreements), police verification, and society NOCs mandatory for foreign nationals residing in Mumbai." }
        ]
    },
    {
        category: "Buying & Investment",
        questions: [
            { q: "How is Stamp Duty calculated in Maharashtra?", a: "As of 2024, the stamp duty in Mumbai is generally 5% of the agreement value or Ready Reckoner rate (whichever is higher), plus a 1% metro cess, bringing the total to 6%. Female property buyers receive a 1% concession." },
            { q: "Can NRIs buy commercial property in India?", a: "Yes, under FEMA regulations, Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) can freely purchase commercial and residential properties in India, except for agricultural land, plantation property, or farmhouses." }
        ]
    },
    {
        category: "Mandates & Property Management",
        questions: [
            { q: "What does your Property Management mandate cover?", a: "Our mandate covers tenant sourcing, background verification, lease negotiation & registration, rent collection tracking, quarterly property inspections, and handling society/maintenance compliance on behalf of the NRI/HNI owner." },
            { q: "Are your brokerage fees standardized?", a: "Our advisory fees adhere to institutional standards. Generally, we charge exactly 1 month's rent for leasing transactions and 1-2% of the transaction value for outright sales, payable upon successful execution." }
        ]
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>("cat0-q0");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Header */}
            <div className="bg-v-black pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <MessageCircleQuestion className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Questions</span></h1>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                        Clear, authoritative answers regarding real estate regulations, leasing standards, and investment structures in Mumbai.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">

                {/* FAQ Categories */}
                <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 md:p-12">
                    {faqs.map((category, catIdx) => (
                        <div key={catIdx} className={catIdx !== 0 ? 'mt-12' : ''}>
                            <h2 className="text-xl font-display font-black text-v-black mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-v-blue"></span> {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((item, qIdx) => {
                                    const id = `cat${catIdx}-q${qIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={qIdx} className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-v-blue bg-blue-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                                            <button
                                                onClick={() => toggleAccordion(id)}
                                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                            >
                                                <span className={`font-bold pr-8 ${isOpen ? 'text-v-blue' : 'text-v-black'}`}>{item.q}</span>
                                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-v-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-5 pt-0 text-slate-600 leading-relaxed font-medium">
                                                            <p className="border-t border-slate-200/60 pt-4 mt-2">{item.a}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-12 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-emerald-500/5">
                    <h3 className="text-2xl font-display font-black text-v-black mb-4">Still have a specific query?</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto font-medium">Our advisory desk is available 6 days a week to handle complex regulatory or transactional inquiries natively.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:+919820075868" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-v-black text-white px-8 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                            <PhoneCall className="w-4 h-4" /> Call the Desk
                        </a>
                        <a href="mailto:info@realestatemumbai.com" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-v-black border border-slate-200 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
                            <Mail className="w-4 h-4" /> Email Us
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
