import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Award, Users, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

const builders = [
    { id: 1, name: 'Lodha Group', desc: 'India\'s No. 1 real estate developer, known for redefining luxury living and creating iconic landmarks across Mumbai, including The Park and World Towers.', projects: 42, established: 1980, type: 'Ultra-Luxury & Premium', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Godrej Properties', desc: 'Bringing the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry with award-winning residential projects.', projects: 28, established: 1990, type: 'Premium Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Oberoi Realty', desc: 'Focused on developing residential, commercial, retail, and social infrastructure projects that offer a premium lifestyle and unmatched quality.', projects: 15, established: 1998, type: 'Luxury & Commercial', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Hiranandani Group', desc: 'Pioneers in developing mixed-use township models. Hiranandani Gardens in Powai stands as a testament to their community-centric approach.', projects: 12, established: 1978, type: 'Townships', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Rustomjee', desc: 'Renowned for thoughtful design and turning spaces into homes. A dominant player in the western suburbs and premium redevelopment projects.', projects: 35, established: 1996, type: 'Premium & Redevelopment', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
    { id: 6, name: 'K Raheja Corp', desc: 'Leading developers of premium residential, commercial (Mindspace), and retail (Inorbit) spaces with a strong commitment to green building.', projects: 22, established: 1956, type: 'Commercial & Retail', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80' },
];

export default function Builders() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Dark Premium Hero */}
            <div className="bg-v-black border-b border-white/10 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-v-blue rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4" /> Verified Grade-A Developers
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6">
                        Partnering with the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Legends of Real Estate</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        We hold exclusive mandates and strategic channel partnerships with Mumbai's most trusted and capitalized developers, ensuring secure and premium investments.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Builder Directory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {builders.map((builder, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            key={builder.id}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="h-48 relative overflow-hidden bg-slate-100">
                                <img src={builder.image} alt={builder.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-v-black/60 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-3xl font-display font-black text-white drop-shadow-md">{builder.name}</h3>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="inline-block bg-v-blue/10 text-v-blue px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                                    {builder.type}
                                </div>

                                <p className="text-slate-500 mb-6 leading-relaxed flex-1">
                                    {builder.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-100">
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-1"><Building2 className="w-3 h-3" /> Projects</p>
                                        <p className="text-xl font-black text-v-black">{builder.projects}+</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-1"><Award className="w-3 h-3" /> Since</p>
                                        <p className="text-xl font-black text-v-black">{builder.established}</p>
                                    </div>
                                </div>

                                <Link to={`/builders/${builder.id}`} className="w-full bg-slate-50 hover:bg-v-black hover:text-white text-v-black border border-slate-200 py-3.5 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2 group-hover:bg-v-blue group-hover:text-white group-hover:border-v-blue">
                                    View All Projects <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
