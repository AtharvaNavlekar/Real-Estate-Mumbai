import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building2, Award, ArrowLeft, ArrowRight, MapPin, ShieldCheck, Calendar, Users, TrendingUp, Star } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const builders: Record<number, {
    name: string;
    desc: string;
    projects: number;
    established: number;
    type: string;
    image: string;
    longDesc: string;
    headquarters: string;
    totalArea: string;
    highlights: string[];
}> = {
    1: {
        name: 'Lodha Group', desc: "India's No. 1 real estate developer, known for redefining luxury living and creating iconic landmarks across Mumbai.", projects: 42, established: 1980, type: 'Ultra-Luxury & Premium', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
        longDesc: "Lodha Group (now Macrotech Developers) is India's largest real estate developer by sales. Founded in 1980, they have redefined luxury living with projects like Lodha The Park, World Towers, and Lodha Altamount — consistently setting new benchmarks for design, amenity standards, and build quality across Mumbai's most coveted micro-markets.",
        headquarters: 'Lower Parel, Mumbai', totalArea: '90M+ sq ft developed',
        highlights: ['India\'s No. 1 developer by sales', 'Iconic World Towers in Lower Parel', 'Trump Tower Mumbai partnership', 'Palava smart city — Asia\'s largest']
    },
    2: {
        name: 'Godrej Properties', desc: 'Bringing the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry.', projects: 28, established: 1990, type: 'Premium Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        longDesc: "Godrej Properties Limited (GPL) brings the Godrej Group's 127-year legacy of trust and excellence to real estate. Known for award-winning residential projects, Godrej Properties consistently ranks among India's top 3 developers with a development portfolio spanning Mumbai, NCR, Bangalore, and Pune.",
        headquarters: 'Vikhroli, Mumbai', totalArea: '60M+ sq ft pipeline',
        highlights: ['127-year Godrej Group legacy', 'IGBC Green Building certifications', 'Godrej BKC — iconic commercial landmark', 'Winner — Builder of the Year 2024']
    },
    3: {
        name: 'Oberoi Realty', desc: 'Focused on premium residential, commercial, retail, and social infrastructure projects.', projects: 15, established: 1998, type: 'Luxury & Commercial', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
        longDesc: "Oberoi Realty is Mumbai's most premium luxury developer, known for impeccable quality and iconic projects like Oberoi Esquire, Sky City, and the forthcoming Three Sixty West in Worli. Their attention to detail, European-standard finishes, and post-handover service set them apart in the ultra-luxury segment.",
        headquarters: 'Goregaon East, Mumbai', totalArea: '45M+ sq ft developed',
        highlights: ['Three Sixty West — Mumbai\'s tallest twin towers', 'Oberoi Mall & Commerz collaboration', 'Premium Worli & Borivali portfolio', 'Highest price realization per sq ft in Mumbai']
    },
    4: {
        name: 'Hiranandani Group', desc: 'Pioneers in developing mixed-use township models with a community-centric approach.', projects: 12, established: 1978, type: 'Townships', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
        longDesc: "The Hiranandani Group pioneered the concept of integrated township development in Mumbai with Hiranandani Gardens, Powai — a self-contained urban ecosystem. Their masterplanning philosophy creates walkable, green, and infrastructure-rich communities that have become benchmarks for township development across India.",
        headquarters: 'Powai, Mumbai', totalArea: '30M+ sq ft developed',
        highlights: ['Hiranandani Gardens — India\'s first integrated township', 'Neo-classical architectural signature', 'Powai, Thane & Chennai townships', 'Hospital, schools & retail within townships']
    },
    5: {
        name: 'Rustomjee', desc: 'Renowned for thoughtful design and a dominant player in the western suburbs.', projects: 35, established: 1996, type: 'Premium & Redevelopment', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        longDesc: "Rustomjee (Keystone Realtors) is one of Mumbai's most loved developers, known for creating beautifully designed homes that balance luxury, functionality, and value. Their expertise in slum rehabilitation and redevelopment projects has transformed entire neighborhoods across Mumbai's western suburbs.",
        headquarters: 'Bandra West, Mumbai', totalArea: '35M+ sq ft developed',
        highlights: ['Listed on BSE & NSE', 'Rustomjee Crown — BKC flagship', 'Specialists in SRA redevelopment', 'Winner — Most Trusted Brand 2024']
    },
    6: {
        name: 'K Raheja Corp', desc: 'Leading developers of premium residential, commercial (Mindspace), and retail (Inorbit) spaces.', projects: 22, established: 1956, type: 'Commercial & Retail', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        longDesc: "K Raheja Corp is one of India's oldest and most respected real estate conglomerates, with a 65+ year legacy spanning residential, commercial, retail, and hospitality. Their brands — Mindspace (IT parks), Inorbit (malls), and Chalet Hotels — are household names, and their commitment to green building certifications is industry-leading.",
        headquarters: 'Worli, Mumbai', totalArea: '80M+ sq ft developed',
        highlights: ['Mindspace Business Parks — REIT listed', 'Inorbit Mall chain across India', 'Chalet Hotels — premium hospitality', '68-year development legacy']
    }
};

// Sample projects for each builder
const builderProjects = [
    { id: 101, name: 'Signature Tower', location: 'BKC', price: '₹4.5 Cr', bedrooms: 3, sqft: 1850, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', tag: 'Ready to Move' },
    { id: 102, name: 'Lakeside Residences', location: 'Powai', price: '₹2.8 Cr', bedrooms: 2, sqft: 1200, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', tag: 'Under Construction' },
    { id: 103, name: 'Marina Bay', location: 'Worli', price: '₹7.2 Cr', bedrooms: 4, sqft: 2800, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', tag: 'New Launch' },
    { id: 104, name: 'Green Valley', location: 'Andheri West', price: '₹1.9 Cr', bedrooms: 2, sqft: 980, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80', tag: 'Ready to Move' },
    { id: 105, name: 'Imperial Heights', location: 'Lower Parel', price: '₹5.5 Cr', bedrooms: 3, sqft: 2200, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', tag: 'Possession 2026' },
    { id: 106, name: 'The Crest', location: 'Bandra West', price: '₹8.9 Cr', bedrooms: 4, sqft: 3100, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', tag: 'Ultra Premium' },
];

export default function BuilderDetails() {
    const { id } = useParams<{ id: string }>();
    const builder = builders[Number(id)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!builder) {
        return (
            <main className="flex-1 min-h-screen flex items-center justify-center bg-v-gray">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-black text-v-black mb-4">Builder Not Found</h1>
                    <p className="text-slate-500 mb-8">The builder you're looking for doesn't exist.</p>
                    <Link to="/builders" className="bg-v-black text-white px-8 py-4 rounded-full font-bold hover:bg-v-blue transition-colors">
                        Back to Builders
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-v-gray font-sans min-h-screen pb-24">

            {/* Hero */}
            <div className="bg-v-black border-b border-white/10 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={builder.image} alt={builder.name} className="w-full h-full object-cover opacity-15" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/80 to-v-black/40" />
                </div>
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-v-blue rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/builders" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> All Builders
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md">
                                <ShieldCheck className="w-4 h-4" /> Verified Developer
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-4">
                                {builder.name}
                            </h1>
                            <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed mb-8">
                                {builder.desc}
                            </p>

                            {/* Stats Row */}
                            <div className="flex flex-wrap gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md min-w-[140px]">
                                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        <Building2 className="w-3.5 h-3.5" /> Projects
                                    </div>
                                    <p className="text-3xl font-black text-white">{builder.projects}+</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md min-w-[140px]">
                                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        <Calendar className="w-3.5 h-3.5" /> Since
                                    </div>
                                    <p className="text-3xl font-black text-white">{builder.established}</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md min-w-[140px]">
                                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        <MapPin className="w-3.5 h-3.5" /> HQ
                                    </div>
                                    <p className="text-sm font-bold text-white">{builder.headquarters}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-4 block">About the Developer</span>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-v-black tracking-tight mb-6">
                                {builder.name} — {builder.type}
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                {builder.longDesc}
                            </p>
                            <p className="text-slate-400 text-sm font-medium">
                                <strong className="text-v-black">Total Development:</strong> {builder.totalArea}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="w-5 h-5 text-amber-400" />
                                <h3 className="text-lg font-display font-bold">Key Highlights</h3>
                            </div>
                            <ul className="space-y-4">
                                {builder.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                        <span className="text-slate-300 text-sm font-medium leading-relaxed">{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Projects Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <span className="text-v-blue font-bold text-xs uppercase tracking-[0.3em] mb-2 block">Portfolio</span>
                            <h2 className="text-3xl font-display font-black text-v-black tracking-tight">
                                Projects by {builder.name}
                            </h2>
                        </div>
                        <span className="text-sm font-bold text-slate-400">{builderProjects.length} Projects</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {builderProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <Link to={`/property/${project.id}`} className="group block bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                                    <div className="h-52 relative overflow-hidden">
                                        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-v-black text-xs font-bold px-3 py-1.5 rounded-full">
                                            {project.tag}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-display font-bold text-v-black mb-1 group-hover:text-v-blue transition-colors">{project.name}</h3>
                                        <p className="text-sm text-slate-400 flex items-center gap-1 mb-4">
                                            <MapPin className="w-3.5 h-3.5" /> {project.location}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <span className="text-lg font-black text-v-black">{project.price}</span>
                                            <span className="text-xs text-slate-400 font-bold">{project.bedrooms} BHK · {project.sqft} sq ft</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-br from-v-blue via-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 top-0 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4 tracking-tight">
                            Interested in {builder.name} projects?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                            Get exclusive pre-launch access, pricing, and floor plans directly from our advisory team.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="bg-white text-v-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                                Schedule a Consultation
                            </Link>
                            <Link to="/properties" className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-transform hover:scale-105 active:scale-95">
                                Browse All Properties
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
