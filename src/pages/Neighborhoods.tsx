import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import westernLineMarketData from '../data/westernLineMarketData.json';

export default function Neighborhoods() {
  const defaultNeighborhoodImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop'
  ];

  const neighborhoods = westernLineMarketData.zones.map((zone, i) => {
    let slugName = zone.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    let avgZonePrice = Math.round(zone.stations.reduce((acc, st) => acc + st.avgPricePerSqft, 0) / zone.stations.length);
    let topHighlights = zone.stations.slice(0, 3).map(s => s.name);

    return {
      id: 10 + i,
      slug: slugName,
      image: defaultNeighborhoodImages[i % defaultNeighborhoodImages.length],
      name: zone.name,
      propertyCount: zone.stations.reduce((acc, st) => acc + (st.upcomingProjects ? st.upcomingProjects.length + 5 : 5), 0) * 10,
      description: `Explore the vibrant real estate market of ${zone.name}. Spanning ${zone.stations.length} major stations and offering diverse properties from luxury highrises to modern flats.`,
      avgPrice: `₹ ${avgZonePrice.toLocaleString('en-IN')} / sq.ft`,
      trend: `+${(Math.random() * 5 + 3).toFixed(1)}%`,
      highlights: topHighlights
    };
  });

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
