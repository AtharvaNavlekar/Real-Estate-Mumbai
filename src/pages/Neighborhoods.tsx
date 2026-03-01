import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

export default function Neighborhoods() {
  const neighborhoods = [
    {
      id: 1,
      slug: 'bandra-west',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
      name: 'Bandra West',
      propertyCount: 450,
      description: 'The Queen of Suburbs, known for its vibrant culture and premium sea-facing apartments.',
      avgPrice: '₹ 85,000 / sq.ft',
      trend: '+5.2%',
      highlights: ['Sea Link Access', 'Premium Cafes', 'Heritage Architecture']
    },
    {
      id: 2,
      slug: 'bkc',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      name: 'BKC',
      propertyCount: 320,
      description: 'Mumbai\'s premier business district, offering ultra-luxury residences and commercial spaces.',
      avgPrice: '₹ 75,000 / sq.ft',
      trend: '+8.1%',
      highlights: ['Business Hub', 'Luxury Malls', 'Excellent Connectivity']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop',
      name: 'Worli',
      propertyCount: 280,
      description: 'Iconic skyline views and high-end developments define this prestigious South Mumbai locality.',
      avgPrice: '₹ 95,000 / sq.ft',
      trend: '+4.5%',
      highlights: ['Sea Face', 'High-rises', 'Premium Lifestyle']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=800&auto=format&fit=crop',
      name: 'Powai',
      propertyCount: 510,
      description: 'A perfect blend of nature and modern infrastructure, popular among tech professionals.',
      avgPrice: '₹ 45,000 / sq.ft',
      trend: '+6.8%',
      highlights: ['Powai Lake', 'Hiranandani Gardens', 'Tech Parks']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
      name: 'Juhu',
      propertyCount: 180,
      description: 'Exclusive beachfront living preferred by Bollywood celebrities and industrialists.',
      avgPrice: '₹ 1,10,000 / sq.ft',
      trend: '+3.2%',
      highlights: ['Juhu Beach', 'Celebrity Homes', 'Luxury Villas']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      name: 'Andheri West',
      propertyCount: 650,
      description: 'A bustling hub of entertainment, dining, and diverse residential options.',
      avgPrice: '₹ 35,000 / sq.ft',
      trend: '+7.5%',
      highlights: ['Lokhandwala', 'Metro Connectivity', 'Vibrant Nightlife']
    }
  ];

  return (
    <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-display font-bold text-v-black mb-6 tracking-tight">
          Mumbai Micro-Markets
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-3xl">
          Explore the most sought-after neighborhoods in Mumbai. Dive deep into market trends, average prices, and lifestyle highlights to find your perfect location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoods.map((neighborhood) => (
          <div key={neighborhood.id} className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/20 hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden m-2 rounded-2xl">
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-v-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h3 className="text-3xl font-display font-bold text-white tracking-tight">{neighborhood.name}</h3>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {neighborhood.propertyCount} Props
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                {neighborhood.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-black/5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Avg Price</p>
                  <p className="font-bold text-v-black">{neighborhood.avgPrice}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">YoY Trend</p>
                  <p className="font-bold text-green-600">{neighborhood.trend}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-v-gray text-v-black text-xs font-semibold px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={`/neighborhoods/${neighborhood.slug || 'bandra-west'}`} className="mt-auto w-full bg-v-black text-white py-4 rounded-full font-bold hover:bg-v-blue transition-colors flex items-center justify-center gap-2">
                View Market Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
