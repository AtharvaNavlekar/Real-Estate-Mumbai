import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PropertyCard from '../components/PropertyCard';
import {
  Search, LayoutGrid, List as ListIcon, SlidersHorizontal,
  ChevronDown, X, MapPin, Bed, Bath, Square, BadgeCheck,
  Heart, ArrowRight, ArrowLeftRight, TrendingUp, TrendingDown, Star
} from 'lucide-react';
import westernLineMarketData from '../data/westernLineMarketData.json';

// ─── Data ─────────────────────────────────────────────────────────────────────

const baseProperties = [
  { id: 1, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', price: '₹ 12.5 Cr', title: '4 BHK Luxury Apartment', location: 'Bandra West, Mumbai', beds: 4, baths: 4, sqft: 2500, type: 'Apartment', intent: 'buy', isFeatured: true },
  { id: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', price: '₹ 8.5 Cr', title: '3 BHK Premium Residence', location: 'BKC, Mumbai', beds: 3, baths: 3, sqft: 1800, type: 'Apartment', intent: 'buy', isFeatured: true },
  { id: 3, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop', price: '₹ 35.0 Cr', title: '5 BHK Sea-Facing Penthouse', location: 'Worli, Mumbai', beds: 5, baths: 6, sqft: 4500, type: 'Penthouse', intent: 'buy', isFeatured: true },
  { id: 4, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', price: '₹ 2.5 L / mo', title: '2 BHK Modern Flat', location: 'Powai, Mumbai', beds: 2, baths: 2, sqft: 1100, type: 'Apartment', intent: 'rent' },
  { id: 101, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', price: '₹ 4.5 Cr', title: '3 BHK Sea-View Apartment', location: 'BKC, Mumbai', beds: 3, baths: 3, sqft: 1650, type: 'Apartment', intent: 'buy', isFeatured: true },
  { id: 102, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', price: '₹ 3.5 L / mo', title: 'Modern 3BHK with Pet Park', location: 'BKC Annexe, Mumbai', beds: 3, baths: 2, sqft: 1400, type: 'Apartment', intent: 'rent' },
  { id: 103, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', price: '₹ 4.9 Cr', title: 'Luxury 3BHK Penthouse', location: 'BKC, Mumbai', beds: 3, baths: 4, sqft: 2100, type: 'Penthouse', intent: 'buy', isFeatured: true },
  { id: 104, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', price: '₹ 15.5 Cr', title: 'Premium Office Space', location: 'BKC, Mumbai', beds: 0, baths: 2, sqft: 3500, type: 'Commercial', intent: 'commercial' },
];

const defaultImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
];

const generateProperties = () => {
  let generated: any[] = [...baseProperties];
  let idCounter = 500;

  westernLineMarketData.zones.forEach(zone => {
    zone.stations.forEach(station => {
      // Residential Buy
      let bedsBuy = station.avgPricePerSqft > 40000 ? 4 : 2;
      let sqftBuy = bedsBuy * 600 + 200;
      let priceBuy = (station.avgPricePerSqft * sqftBuy / 10000000).toFixed(2);
      generated.push({
        id: idCounter++,
        image: defaultImages[idCounter % defaultImages.length],
        price: `₹ ${priceBuy} Cr`,
        title: `${bedsBuy} BHK ${station.avgPricePerSqft > 45000 ? 'Luxury ' : ''}Apartment`,
        location: `${station.name}, Mumbai`,
        beds: bedsBuy,
        baths: bedsBuy,
        sqft: sqftBuy,
        type: station.avgPricePerSqft > 50000 ? 'Penthouse' : 'Apartment',
        intent: 'buy',
        isFeatured: station.avgPricePerSqft > 55000
      });

      // Commercial or Rent
      if (station.propertyTypes.some(t => t.toLowerCase().includes('commercial'))) {
        let sqftComm = 2500;
        let priceComm = (station.avgPricePerSqft * sqftComm / 10000000).toFixed(2);
        generated.push({
          id: idCounter++,
          image: defaultImages[idCounter % defaultImages.length],
          price: `₹ ${priceComm} Cr`,
          title: `Premium Office Space (${station.name})`,
          location: `${station.name}, Mumbai`,
          beds: 0,
          baths: 2,
          sqft: sqftComm,
          type: 'Commercial',
          intent: 'commercial',
          isFeatured: false
        });
      } else {
        let rentBeds = 2;
        let rentPriceLakhs = (station.avgPricePerSqft * 1000 * 0.03 / 12 / 100000).toFixed(1);
        generated.push({
          id: idCounter++,
          image: defaultImages[idCounter % defaultImages.length],
          price: `₹ ${rentPriceLakhs} L / mo`,
          title: `${rentBeds} BHK Modern Flat`,
          location: `${station.name}, Mumbai`,
          beds: rentBeds,
          baths: 2,
          sqft: rentBeds * 500 + 100,
          type: 'Apartment',
          intent: 'rent',
          isFeatured: false
        });
      }
    });
  });
  return generated;
};

export const allProperties = generateProperties();

const intentTabs = [
  { value: 'all', label: 'All' },
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
  { value: 'commercial', label: 'Commercial' },
];

const sortOptions = [
  { value: 'recommended', label: 'Recommended', icon: Star },
  { value: 'price-low', label: 'Price: Low to High', icon: TrendingUp },
  { value: 'price-high', label: 'Price: High to Low', icon: TrendingDown },
];

// ─── Custom Sort Dropdown ─────────────────────────────────────────────────────

function SortDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = sortOptions.find(o => o.value === value) || sortOptions[0];
  const SelIcon = selected.icon;

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 bg-white border border-black/10 text-v-black pl-4 pr-3 py-2.5 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap"
      >
        <SelIcon className="w-4 h-4 text-slate-400" />
        {selected.label}
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white border border-black/10 rounded-2xl shadow-2xl shadow-black/10 z-50 overflow-hidden w-52 py-1"
          >
            {sortOptions.map(opt => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.value}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-left transition-colors ${value === opt.value ? 'bg-v-blue text-white' : 'text-v-black hover:bg-slate-50'}`}
                >
                  <Icon className="w-4 h-4 opacity-70" /> {opt.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── List Card ────────────────────────────────────────────────────────────────

function ListCard({ property }: { property: typeof allProperties[0] }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/15 hover:shadow-2xl transition-all duration-400"
    >
      <div className="sm:w-80 h-56 sm:h-auto relative shrink-0 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {property.isFeatured && (
          <span className="absolute top-4 left-4 bg-v-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow">
            Featured
          </span>
        )}
        <span className="absolute bottom-4 left-4 bg-white/95 text-v-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow">
          {property.type}
        </span>
      </div>
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-display font-black text-v-black tracking-tight group-hover:text-v-blue transition-colors leading-tight">
              {property.title}
            </h3>
            <div className="shrink-0">
              <p className="text-xl font-display font-black text-v-blue whitespace-nowrap">{property.price}</p>
              <div className="flex items-center gap-1 justify-end mt-1">
                <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Verified</span>
              </div>
            </div>
          </div>
          <p className="flex items-center gap-1.5 text-slate-400 text-sm mb-4 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" /> {property.location}
          </p>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            This premium {property.type.toLowerCase()} offers luxurious amenities and is located in the highly sought-after neighbourhood of {property.location.split(',')[0]}.
          </p>
        </div>
        <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
            {property.beds > 0 && <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-slate-400" />{property.beds} Beds</span>}
            {property.baths > 0 && <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" />{property.baths} Baths</span>}
            <span className="flex items-center gap-1.5"><Square className="w-4 h-4 text-slate-400" />{property.sqft} sqft</span>
          </div>
          <span className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-v-blue group-hover:gap-2.5 transition-all">
            View Details <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [activeIntent, setActiveIntent] = useState('all');
  const [searchParams] = useSearchParams();

  // Honour URL intent param on mount
  useEffect(() => {
    const intent = searchParams.get('intent') || 'all';
    setActiveIntent(intent);
  }, [searchParams]);

  const parsePrice = (p: string) => {
    const n = parseFloat(p.replace(/[^0-9.]/g, ''));
    if (p.includes('Cr')) return n * 10000000;
    if (p.includes('L')) return n * 100000;
    return n;
  };

  const filtered = allProperties
    .filter(p => {
      const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchIntent = activeIntent === 'all' || p.intent === activeIntent;
      return matchSearch && matchIntent;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return parsePrice(a.price) - parsePrice(b.price);
      if (sortBy === 'price-high') return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });

  const pageTitle = activeIntent === 'buy' ? 'Properties for Sale' :
    activeIntent === 'rent' ? 'Properties for Rent' :
      activeIntent === 'commercial' ? 'Commercial Spaces' : 'All Properties';

  return (
    <main className="flex-1 w-full">

      {/* ── Sticky Top Bar ───────────────────────────────────────────────── */}
      <div className="bg-v-black pt-28 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title row */}
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">{pageTitle}</h1>
              <p className="text-slate-400 text-sm font-medium mt-1">
                {filtered.length} verified {filtered.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>
            {/* View toggle */}
            <div className="flex bg-white/10 border border-white/20 rounded-full p-1 gap-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white text-v-black' : 'text-white/60 hover:text-white'}`}
                title="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white text-v-black' : 'text-white/60 hover:text-white'}`}
                title="List view"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Intent Tabs + Search + Sort row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Intent Pills */}
            <div className="flex bg-white/10 border border-white/20 rounded-full p-1 gap-1">
              {intentTabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveIntent(tab.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeIntent === tab.value ? 'bg-white text-v-black shadow' : 'text-white/60 hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search by location or name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-v-blue/50 text-sm font-medium backdrop-blur-md"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort */}
            <SortDropdown value={sortBy} onChange={setSortBy} />

            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters(f => !f)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${showFilters ? 'bg-v-blue text-white shadow-lg shadow-blue-500/30' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters {showFilters && <X className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Filter Panel ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white border-b border-black/5 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Property Type', options: ['All Types', 'Apartment', 'Penthouse', 'Villa', 'Commercial', 'Bungalow'] },
                { label: 'Min Price', options: ['Any', '₹ 1 Cr', '₹ 2 Cr', '₹ 5 Cr', '₹ 10 Cr'] },
                { label: 'Max Price', options: ['Any', '₹ 5 Cr', '₹ 10 Cr', '₹ 25 Cr', '₹ 50 Cr+'] },
                { label: 'Bedrooms', options: ['Any', '1+ BHK', '2+ BHK', '3+ BHK', '4+ BHK', '5+ BHK'] },
              ].map(filter => (
                <div key={filter.label}>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{filter.label}</label>
                  <div className="flex flex-wrap gap-2">
                    {filter.options.map((o, i) => (
                      <button
                        key={o}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${i === 0 ? 'bg-v-blue text-white border-transparent shadow-[0_2px_10px_rgba(37,99,235,0.2)]' : 'bg-white border-black/10 text-slate-600 hover:bg-slate-50 hover:border-black/20'}`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-28"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-xl font-bold text-slate-400">No properties found</p>
              <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
              <button onClick={() => { setSearchTerm(''); setActiveIntent('all'); }} className="mt-6 px-6 py-2.5 bg-v-black text-white rounded-full text-sm font-bold hover:bg-v-blue transition-colors">
                Clear All Filters
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/property/${p.id}`}>
                    <PropertyCard
                      image={p.image}
                      price={p.price}
                      title={p.title}
                      location={p.location}
                      beds={p.beds}
                      baths={p.baths}
                      sqft={p.sqft}
                      type={p.type}
                      isFeatured={p.isFeatured}
                      id={p.id}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-5"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ListCard property={p} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
