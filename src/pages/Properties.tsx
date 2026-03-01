import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { ArrowLeft, SlidersHorizontal, Search, LayoutGrid, List as ListIcon, ChevronDown } from 'lucide-react';

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const [searchParams] = useSearchParams();
  const intentFilter = searchParams.get('intent') || 'all'; // 'buy', 'rent', 'commercial'

  // Mock data for all properties
  const allProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      price: '₹ 12.5 Cr',
      title: '4 BHK Luxury Apartment',
      location: 'Bandra West, Mumbai',
      beds: 4,
      baths: 4,
      sqft: 2500,
      type: 'Apartment',
      intent: 'buy',
      isFeatured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687931-ceeb66d18f50?q=80&w=800&auto=format&fit=crop',
      price: '₹ 8.5 Cr',
      title: '3 BHK Premium Residence',
      location: 'BKC, Mumbai',
      beds: 3,
      baths: 3,
      sqft: 1800,
      type: 'Apartment',
      intent: 'buy',
      isFeatured: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      price: '₹ 35.0 Cr',
      title: '5 BHK Sea-Facing Penthouse',
      location: 'Worli, Mumbai',
      beds: 5,
      baths: 6,
      sqft: 4500,
      type: 'Penthouse',
      intent: 'buy',
      isFeatured: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop',
      price: '₹ 2.5 L / mo',
      title: '2 BHK Modern Flat',
      location: 'Powai, Mumbai',
      beds: 2,
      baths: 2,
      sqft: 1100,
      type: 'Apartment',
      intent: 'rent'
    },
    {
      id: 101,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      price: '₹ 4.5 Cr',
      title: '3 BHK Sea-View Apartment',
      location: 'BKC, Mumbai',
      beds: 3,
      baths: 3,
      sqft: 1650,
      type: 'Apartment',
      intent: 'buy',
      isFeatured: true
    },
    {
      id: 102,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      price: '₹ 3.5 L / mo',
      title: 'Modern 3BHK with Pet Park',
      location: 'BKC Annexe, Mumbai',
      beds: 3,
      baths: 2,
      sqft: 1400,
      type: 'Apartment',
      intent: 'rent'
    },
    {
      id: 103,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      price: '₹ 4.9 Cr',
      title: 'Luxury 3BHK Penthouse',
      location: 'BKC, Mumbai',
      beds: 3,
      baths: 4,
      sqft: 2100,
      type: 'Penthouse',
      intent: 'buy',
      isFeatured: true
    },
    {
      id: 104,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      price: '₹ 15.5 Cr',
      title: 'Premium Office Space',
      location: 'BKC, Mumbai',
      beds: 0,
      baths: 2,
      sqft: 3500,
      type: 'Commercial',
      intent: 'commercial'
    }
  ];

  // Parse price string to number for sorting (e.g., "₹ 12.5 Cr" -> 125000000)
  const parsePrice = (priceStr: string) => {
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    if (priceStr.includes('Cr')) return num * 10000000;
    if (priceStr.includes('L') || priceStr.includes('Lakh')) return num * 100000;
    return num;
  };

  const filteredProperties = allProperties.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIntent = intentFilter === 'all' || p.intent === intentFilter;
    return matchesSearch && matchesIntent;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return parsePrice(a.price) - parsePrice(b.price);
    if (sortBy === 'price-high') return parsePrice(b.price) - parsePrice(a.price);
    return 0; // 'recommended' default
  });

  return (
    <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-v-black mb-4 tracking-tight">
              {intentFilter === 'buy' ? 'Properties for Sale' :
                intentFilter === 'rent' ? 'Properties for Rent' :
                  intentFilter === 'commercial' ? 'Commercial Spaces' :
                    'All Properties'}
            </h1>
            <p className="text-slate-500 font-medium">Browse our complete collection of verified luxury properties across Mumbai.</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <input
                type="text"
                placeholder="Search by location or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-v-blue focus:ring-1 focus:ring-v-blue transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>

            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-black/10 text-v-black pl-6 pr-10 py-3 rounded-full text-sm font-bold hover:bg-v-gray transition-colors shadow-sm cursor-pointer outline-none focus:ring-1 focus:ring-v-blue"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>

            <div className="flex bg-white border border-black/10 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-v-gray text-v-blue' : 'text-slate-500 hover:text-v-black'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-v-gray text-v-blue' : 'text-slate-500 hover:text-v-black'}`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 border px-6 py-3 rounded-full text-sm font-bold transition-colors shadow-sm whitespace-nowrap ${showFilters ? 'bg-v-black text-white border-v-black' : 'bg-white border-black/10 text-v-black hover:bg-v-gray'}`}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Expandable Filter Panel */}
        {showFilters && (
          <div className="mt-6 p-6 bg-white border border-black/10 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Property Type</label>
              <select className="w-full p-3 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Villa</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Min Price</label>
              <select className="w-full p-3 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue">
                <option>Any</option>
                <option>₹ 1 Cr</option>
                <option>₹ 5 Cr</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Max Price</label>
              <select className="w-full p-3 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue">
                <option>Any</option>
                <option>₹ 10 Cr</option>
                <option>₹ 50 Cr</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Bedrooms</label>
              <select className="w-full p-3 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue">
                <option>Any</option>
                <option>1+ BHK</option>
                <option>2+ BHK</option>
                <option>3+ BHK</option>
                <option>4+ BHK</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className={viewMode === 'grid'
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        : "flex flex-col gap-6"
      }>
        {filteredProperties.map((property) => (
          <Link to={`/property/${property.id}`} key={property.id} className={viewMode === 'list' ? 'flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-xl transition-all w-full h-[300px]' : ''}>
            {viewMode === 'list' ? (
              <>
                <div className="w-full md:w-2/5 h-full relative p-2">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  {property.isFeatured && (
                    <div className="absolute top-4 left-4 bg-v-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                      Featured
                    </div>
                  )}
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-3xl font-display font-bold text-v-black tracking-tight">{property.title}</h3>
                      <p className="text-2xl font-display font-bold text-v-blue">{property.price}</p>
                    </div>
                    <p className="text-slate-500 font-medium mb-6">{property.location}</p>
                    <p className="text-slate-600 line-clamp-2">This premium {property.type.toLowerCase()} offers luxurious amenities and is located in the highly sought-after neighborhood of {property.location.split(',')[0]}.</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm font-bold text-slate-700 bg-v-gray p-4 rounded-2xl w-fit mt-4">
                    <span className="flex items-center gap-2">{property.beds} Beds</span>
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span className="flex items-center gap-2">{property.baths} Baths</span>
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span className="flex items-center gap-2">{property.sqft} sqft</span>
                  </div>
                </div>
              </>
            ) : (
              <PropertyCard
                image={property.image}
                price={property.price}
                title={property.title}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                type={property.type}
                isFeatured={property.isFeatured}
              />
            )}
          </Link>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-slate-500 font-medium">No properties found matching your search.</p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-4 text-v-blue font-bold hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </main>
  );
}
