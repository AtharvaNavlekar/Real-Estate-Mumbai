import React, { useState } from 'react';
import {
    Upload, Home, IndianRupee, MapPin, Building2, CheckCircle2,
    ChevronRight, Info, ShieldCheck, ArrowRight, ArrowLeft,
    Check, Bed, Bath, Square, Star, Camera, FileText, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Step types ───────────────────────────────────────────────────────────────

const STEPS = [
    { id: 1, title: 'Property Basics', icon: Home, color: 'bg-v-black' },
    { id: 2, title: 'Pricing & Location', icon: IndianRupee, color: 'bg-amber-500' },
    { id: 3, title: 'Features & Legal', icon: ShieldCheck, color: 'bg-emerald-500' },
    { id: 4, title: 'Photos & Media', icon: Camera, color: 'bg-indigo-500' },
    { id: 5, title: 'Review & Submit', icon: CheckCircle2, color: 'bg-v-blue' },
];

const propertyTypes = [
    { label: 'Apartment', icon: Building2 },
    { label: 'Penthouse', icon: Star },
    { label: 'Bungalow', icon: Home },
    { label: 'Commercial', icon: Building2 },
    { label: 'Villa', icon: Home },
    { label: 'Studio', icon: Square },
];

const amenitiesList = [
    'Sea View', 'Infinity Pool', 'Gymnasium', 'Clubhouse',
    '24/7 Security', 'Power Backup', 'Smart Home', 'Reserved Parking',
    'Concierge', 'Pet Friendly', 'Terrace Garden', 'Modular Kitchen',
];

const neighborhoods = [
    'Bandra West', 'Worli', 'Lower Parel', 'BKC',
    'Juhu', 'Andheri West', 'Powai', 'Colaba',
    'Dadar', 'Prabhadevi', 'Goregaon East', 'Malad',
];

// ─── Helper input ─────────────────────────────────────────────────────────────

function FormField({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{label}</label>
            {children}
            {hint && <p className="mt-1.5 text-[11px] text-slate-400 font-medium flex items-center gap-1"><Info className="w-3 h-3" />{hint}</p>}
        </div>
    );
}

function StyledInput({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black placeholder:text-slate-400"
        />
    );
}

function StyledSelect({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <div className="relative">
            <select
                {...props}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black appearance-none cursor-pointer"
            >
                {children}
            </select>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
        </div>
    );
}

// ─── Step components ──────────────────────────────────────────────────────────

function Step1({ data, setData }: { data: Record<string, string>; setData: (d: Record<string, string>) => void }) {
    const [intent, setIntent] = useState(data.intent || 'sale');
    const [type, setType] = useState(data.type || '');

    const update = (key: string, value: string) => {
        if (key === 'intent') setIntent(value);
        if (key === 'type') setType(value);
        setData({ ...data, [key]: value });
    };

    return (
        <div className="space-y-8">
            <FormField label="Listing Intent">
                <div className="grid grid-cols-2 gap-4">
                    {[{ v: 'sale', l: 'For Sale' }, { v: 'rent', l: 'For Rent' }].map(opt => (
                        <button
                            key={opt.v}
                            type="button"
                            onClick={() => update('intent', opt.v)}
                            className={`p-5 rounded-2xl border-2 font-bold text-base transition-all ${intent === opt.v ? 'border-v-blue bg-blue-50 text-v-blue' : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'}`}
                        >
                            {opt.l}
                        </button>
                    ))}
                </div>
            </FormField>

            <FormField label="Property Type">
                <div className="grid grid-cols-3 gap-3">
                    {propertyTypes.map(pt => {
                        const Icon = pt.icon;
                        return (
                            <button
                                key={pt.label}
                                type="button"
                                onClick={() => update('type', pt.label)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 font-bold text-sm transition-all ${type === pt.label ? 'border-v-blue bg-blue-50 text-v-blue' : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'}`}
                            >
                                <Icon className="w-5 h-5" />
                                {pt.label}
                            </button>
                        );
                    })}
                </div>
            </FormField>

            <FormField label="Property Title">
                <StyledInput placeholder="e.g. 4 BHK Luxury Sea-View Apartment in Worli" onChange={e => update('title', e.target.value)} defaultValue={data.title} />
            </FormField>

            <div className="grid grid-cols-3 gap-4">
                <FormField label="Bedrooms">
                    <StyledSelect onChange={e => update('beds', e.target.value)} defaultValue={data.beds}>
                        <option value="">Select</option>
                        {['1', '2', '3', '4', '5', '6+'].map(n => <option key={n}>{n}</option>)}
                    </StyledSelect>
                </FormField>
                <FormField label="Bathrooms">
                    <StyledSelect onChange={e => update('baths', e.target.value)} defaultValue={data.baths}>
                        <option value="">Select</option>
                        {['1', '2', '3', '4', '5+'].map(n => <option key={n}>{n}</option>)}
                    </StyledSelect>
                </FormField>
                <FormField label="Area (sq.ft)">
                    <StyledInput type="number" placeholder="2500" onChange={e => update('area', e.target.value)} defaultValue={data.area} />
                </FormField>
            </div>
        </div>
    );
}

function Step2({ data, setData }: { data: Record<string, string>; setData: (d: Record<string, string>) => void }) {
    const [area, setArea] = useState(data.neighborhood || '');
    const update = (key: string, value: string) => setData({ ...data, [key]: value });

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Expected Valuation (₹)" hint="Enter in Crore — e.g. 12.5 for ₹12.5 Cr">
                    <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                        <StyledInput type="text" className="pl-10" placeholder="12.5 Cr" onChange={e => update('price', e.target.value)} defaultValue={data.price} />
                    </div>
                </FormField>
                <FormField label="Price per sq.ft">
                    <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                        <StyledInput type="text" placeholder="28,400" onChange={e => update('ppsf', e.target.value)} defaultValue={data.ppsf} />
                    </div>
                </FormField>
            </div>

            <FormField label="Neighbourhood">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {neighborhoods.map(n => (
                        <button
                            key={n}
                            type="button"
                            onClick={() => { setArea(n); update('neighborhood', n); }}
                            className={`px-3 py-2.5 rounded-xl border font-bold text-sm transition-all ${area === n ? 'border-v-blue bg-blue-50 text-v-blue' : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'}`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </FormField>

            <FormField label="Full Address / Landmark">
                <textarea
                    rows={2}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black placeholder:text-slate-400 resize-none"
                    placeholder="Tower name, street, society name, nearest landmark..."
                    onChange={e => update('address', e.target.value)}
                    defaultValue={data.address}
                />
            </FormField>
        </div>
    );
}

function Step3({ data, setData }: { data: Record<string, string>; setData: (d: Record<string, string>) => void }) {
    const [selected, setSelected] = useState<string[]>(data.amenities ? data.amenities.split(',') : []);
    const update = (key: string, value: string) => setData({ ...data, [key]: value });

    const toggleAmenity = (a: string) => {
        const next = selected.includes(a) ? selected.filter(s => s !== a) : [...selected, a];
        setSelected(next);
        update('amenities', next.join(','));
    };

    return (
        <div className="space-y-8">
            <FormField label="Amenities">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {amenitiesList.map(a => (
                        <button
                            key={a}
                            type="button"
                            onClick={() => toggleAmenity(a)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-semibold text-sm transition-all ${selected.includes(a) ? 'border-v-blue bg-blue-50 text-v-blue' : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'}`}
                        >
                            {selected.includes(a) && <Check className="w-3.5 h-3.5 shrink-0" />}
                            {a}
                        </button>
                    ))}
                </div>
            </FormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="MahaRERA Registration No." hint="Optional for pre-2017 buildings">
                    <input
                        type="text"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono text-sm uppercase text-v-black placeholder:normal-case placeholder:font-sans placeholder:text-slate-400"
                        placeholder="P5180000..."
                        onChange={e => update('rera', e.target.value)}
                        defaultValue={data.rera}
                    />
                </FormField>
                <FormField label="Property Age">
                    <StyledSelect onChange={e => update('age', e.target.value)} defaultValue={data.age}>
                        <option>Under Construction (Pre-Launch)</option>
                        <option>New / Ready to Move</option>
                        <option>1–5 Years Old</option>
                        <option>5–10 Years Old</option>
                        <option>Heritage / 15+ Years</option>
                    </StyledSelect>
                </FormField>
            </div>

            <FormField label="Detailed Description">
                <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-v-blue/20 focus:border-v-blue transition-all font-medium text-v-black placeholder:text-slate-400 leading-relaxed resize-none"
                    placeholder="Describe the Italian marble flooring, panoramic sea views, automation systems, and exclusive lifestyle offerings..."
                    onChange={e => update('desc', e.target.value)}
                    defaultValue={data.desc}
                />
            </FormField>
        </div>
    );
}

function Step4() {
    return (
        <div className="space-y-6">
            <div className="border-2 border-dashed border-v-blue/30 bg-v-blue/[0.02] rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-v-blue/[0.04] transition-all group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    <Upload className="w-8 h-8 text-v-blue" />
                </div>
                <h3 className="font-display font-black text-2xl text-v-black mb-2">Drop your media here</h3>
                <p className="text-slate-500 font-medium mb-6 max-w-sm">
                    Raw files, 4K video tours, high-res photography. Minimum 5 photos. Maximum 50MB per file.
                </p>
                <input type="file" multiple accept="image/*,video/*" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-v-black shadow-sm hover:border-v-blue hover:text-v-blue transition-colors cursor-pointer">
                    Browse Device Files
                </label>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {['Exterior', 'Living Room', 'Master Bedroom', 'Kitchen', 'Bathrooms', 'View'].map((room, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:border-v-blue hover:text-v-blue transition-colors cursor-pointer">
                        <Camera className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{room}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Step5({ data }: { data: Record<string, string> }) {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-3xl p-8 border border-black/5">
                <h3 className="text-lg font-display font-bold text-v-black mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-v-blue" /> Listing Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: 'Title', value: data.title || '—' },
                        { label: 'Intent', value: data.intent === 'rent' ? 'For Rent' : 'For Sale' },
                        { label: 'Type', value: data.type || '—' },
                        { label: 'Price', value: data.price ? `₹ ${data.price}` : '—' },
                        { label: 'Area', value: data.area ? `${data.area} sq.ft` : '—' },
                        { label: 'Neighbourhood', value: data.neighborhood || '—' },
                        { label: 'Bedrooms', value: data.beds || '—' },
                        { label: 'RERA', value: data.rera || 'Not provided' },
                    ].map((row, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 border border-black/5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{row.label}</p>
                            <p className="font-bold text-v-black truncate">{row.value}</p>
                        </div>
                    ))}
                </div>
                {data.amenities && (
                    <div className="mt-4 bg-white rounded-2xl p-4 border border-black/5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Amenities</p>
                        <div className="flex flex-wrap gap-2">
                            {data.amenities.split(',').filter(Boolean).map(a => (
                                <span key={a} className="text-xs font-bold px-3 py-1 bg-blue-50 text-v-blue rounded-full">{a}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                    <p className="font-bold text-v-black mb-1">48-Hour Title Verification</p>
                    <p className="text-slate-500 text-sm">All submitted properties undergo a rigorous legal and physical verification process before going live on the MLS network.</p>
                </div>
            </div>
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PostProperty() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const goNext = () => step < STEPS.length && setStep(s => s + 1);
    const goPrev = () => step > 1 && setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="flex-1 flex items-center justify-center py-32 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    </div>
                    <h1 className="text-4xl font-display font-black text-v-black mb-4">Listing Submitted!</h1>
                    <p className="text-slate-500 text-lg mb-3">Your property is under our 48-hour verification review.</p>
                    <p className="text-slate-400 text-sm mb-10">You'll receive an email and WhatsApp confirmation shortly.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => { setSubmitted(false); setStep(1); setData({}); }} className="px-6 py-3 border border-black/10 rounded-full font-bold text-v-black hover:bg-slate-50 transition-colors">
                            Submit Another
                        </button>
                        <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-v-black text-white px-6 py-3 rounded-full font-bold hover:bg-v-blue transition-colors">
                            <Phone className="w-4 h-4" /> Call Our Team
                        </a>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="flex-1 pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto w-full font-sans">

            {/* Page Header */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-widest text-v-blue mb-5">
                    <Building2 className="w-4 h-4" /> Property Submission
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-v-black tracking-tight mb-3">
                    List Your Premium Asset
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl">
                    Reach high-net-worth buyers, NRIs, and corporate clients through Mumbai's most trusted verified property network.
                </p>
            </div>

            {/* Step Progress Bar */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-2">
                    {STEPS.map((s, i) => {
                        const Icon = s.icon;
                        const done = step > s.id;
                        const active = step === s.id;
                        return (
                            <React.Fragment key={s.id}>
                                <div className="flex flex-col items-center gap-1">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border-2 ${done ? 'bg-emerald-500 border-emerald-500 text-white' : active ? 'bg-v-black border-v-black text-white' : 'bg-white border-slate-200 text-slate-400'}`}>
                                        {done ? <Check className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest hidden md:block ${active ? 'text-v-black' : 'text-slate-400'}`}>
                                        {s.title}
                                    </span>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > s.id ? 'bg-emerald-400' : 'bg-slate-200'}`} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
                <p className="text-sm text-slate-400 font-medium mt-2 md:hidden">
                    Step {step} of {STEPS.length}: <span className="text-v-black font-bold">{STEPS[step - 1].title}</span>
                </p>
            </div>

            {/* Step Card */}
            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-black/5"
                    >
                        {/* Section Header */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className={`w-14 h-14 ${STEPS[step - 1].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                {React.createElement(STEPS[step - 1].icon, { className: 'w-7 h-7 text-white' })}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {step} of {STEPS.length}</p>
                                <h2 className="text-2xl font-display font-black text-v-black">{STEPS[step - 1].title}</h2>
                            </div>
                        </div>

                        {step === 1 && <Step1 data={data} setData={setData} />}
                        {step === 2 && <Step2 data={data} setData={setData} />}
                        {step === 3 && <Step3 data={data} setData={setData} />}
                        {step === 4 && <Step4 />}
                        {step === 5 && <Step5 data={data} />}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        type="button"
                        onClick={goPrev}
                        className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold border border-black/10 text-v-black hover:bg-slate-50 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>

                    <div className="flex items-center gap-2">
                        {STEPS.map((_, i) => (
                            <div
                                key={i}
                                className={`rounded-full transition-all ${step === i + 1 ? 'w-6 h-2 bg-v-black' : 'w-2 h-2 bg-slate-200'}`}
                            />
                        ))}
                    </div>

                    {step < STEPS.length ? (
                        <button
                            type="button"
                            onClick={goNext}
                            className="flex items-center gap-2 bg-v-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-v-blue transition-colors group"
                        >
                            Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-gradient-to-r from-v-blue to-blue-700 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all group"
                        >
                            Broadcast Listing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </form>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                {[
                    { icon: ShieldCheck, label: '48-hr Verification' },
                    { icon: CheckCircle2, label: 'RERA Compliant' },
                    { icon: Building2, label: '5,000+ Elite Brokers' },
                ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-v-blue" />
                        {label}
                    </div>
                ))}
            </div>
        </main>
    );
}
