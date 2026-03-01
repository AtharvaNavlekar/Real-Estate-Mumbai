import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeftRight } from 'lucide-react';
import { useCompare } from '../context/CompareContext';

export default function CompareBar() {
    const { compareList, removeFromCompare, clearCompare } = useCompare();
    const [showModal, setShowModal] = useState(false);

    if (compareList.length === 0) return null;

    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/10 shadow-2xl px-4 py-3"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Compare:</span>
                        {compareList.map(p => (
                            <div key={p.id} className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1.5 text-sm font-medium text-v-black">
                                <span className="max-w-[120px] truncate">{p.title}</span>
                                <button
                                    onClick={() => removeFromCompare(p.id)}
                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                    aria-label={`Remove ${p.title} from comparison`}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                        {compareList.length < 3 && (
                            <span className="text-xs text-slate-400 font-medium">+ Add {3 - compareList.length} more</span>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={clearCompare}
                            className="text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
                            aria-label="Clear comparison list"
                        >
                            Clear All
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            disabled={compareList.length < 2}
                            className="flex items-center gap-2 bg-v-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-v-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Open property comparison modal"
                        >
                            <ArrowLeftRight className="w-4 h-4" />
                            Compare Now
                        </button>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showModal && <CompareModal onClose={() => setShowModal(false)} />}
            </AnimatePresence>
        </>
    );
}

function CompareModal({ onClose }: { onClose: () => void }) {
    const { compareList } = useCompare();

    const rows: { label: string; key: keyof typeof compareList[0] }[] = [
        { label: 'Price', key: 'price' },
        { label: 'Location', key: 'location' },
        { label: 'Type', key: 'type' },
        { label: 'Bedrooms', key: 'beds' },
        { label: 'Bathrooms', key: 'baths' },
        { label: 'Area (sqft)', key: 'sqft' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh]"
            >
                <div className="flex items-center justify-between p-6 border-b border-black/5">
                    <h2 className="text-2xl font-display font-bold text-v-black">Property Comparison</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                        aria-label="Close comparison modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 overflow-x-auto">
                    {/* Photo Row */}
                    <div className={`grid gap-4 mb-6`} style={{ gridTemplateColumns: `200px repeat(${compareList.length}, 1fr)` }}>
                        <div />
                        {compareList.map(p => (
                            <div key={p.id} className="rounded-2xl overflow-hidden aspect-video">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                        ))}
                    </div>

                    {/* Title Row */}
                    <div className={`grid gap-4 mb-6`} style={{ gridTemplateColumns: `200px repeat(${compareList.length}, 1fr)` }}>
                        <div />
                        {compareList.map(p => (
                            <h3 key={p.id} className="font-display font-bold text-lg text-v-black leading-tight">{p.title}</h3>
                        ))}
                    </div>

                    {/* Data Rows */}
                    {rows.map((row, i) => (
                        <div
                            key={row.key}
                            className={`grid gap-4 py-4 border-b border-black/5`}
                            style={{ gridTemplateColumns: `200px repeat(${compareList.length}, 1fr)` }}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center">{row.label}</span>
                            {compareList.map(p => (
                                <span key={p.id} className="font-bold text-v-black">{String(p[row.key])}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
