import React, { useEffect, useState } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { ArrowLeft, SlidersHorizontal, MapPin, Home as HomeIcon, IndianRupee, Sparkles } from 'lucide-react';

export default function SearchResults() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { results } = location.state || {};
  const queryLocation = searchParams.get('location');

  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);

  // Mock data for search results based on the AI Search Bar's default intent
  const searchProperties = [
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
      isFeatured: true
    },
    {
      id: 102,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      price: '₹ 3.8 Cr',
      title: 'Modern 3BHK with Pet Park',
      location: 'BKC Annexe, Mumbai',
      beds: 3,
      baths: 2,
      sqft: 1400,
      type: 'Apartment'
    },
    {
      id: 103,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      price: '₹ 4.9 Cr',
      title: 'Luxury 3BHK Penthouse',
      location: 'BKC, Mumbai',
      beds: 3,
      baths: 4,
      sqft: 2100,
      type: 'Penthouse',
      isFeatured: true
    },
    {
      id: 104,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      price: '₹ 4.1 Cr',
      title: 'Premium 3BHK Residence',
      location: 'BKC, Mumbai',
      beds: 3,
      baths: 3,
      sqft: 1550,
      type: 'Apartment'
    },
    {
      id: 105,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      price: '₹ 3.5 Cr',
      title: 'Spacious 3BHK with Balcony',
      location: 'Bandra West, Mumbai',
      beds: 3,
      baths: 3,
      sqft: 1450,
      type: 'Apartment'
    },
    {
      id: 106,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      price: '₹ 4.8 Cr',
      title: 'Ultra-Luxury 3BHK Suite',
      location: 'Worli, Mumbai',
      beds: 3,
      baths: 4,
      sqft: 1900,
      type: 'Apartment',
      isFeatured: true
    }
  ];

  useEffect(() => {
    let filtered = searchProperties;
    
    if (results?.intent?.location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(results.intent.location.toLowerCase()));
    } else if (queryLocation) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(queryLocation.toLowerCase()));
    }
    
    setFilteredProperties(filtered.length > 0 ? filtered : searchProperties);
  }, [results, queryLocation]);

  return (
    <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-v-black mb-4 tracking-tight">
              Verified Properties
            </h1>
            {results?.intent ? (
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-v-black mt-4">
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                  <MapPin className="w-4 h-4 text-v-blue"/> {results.intent.location}
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                  <HomeIcon className="w-4 h-4 text-v-blue"/> {results.intent.propertyType}
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                  <IndianRupee className="w-4 h-4 text-v-blue"/> {results.intent.budget}
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                  <Sparkles className="w-4 h-4 text-v-blue"/> {results.intent.features.join(', ')}
                </span>
              </div>
            ) : queryLocation ? (
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-v-black mt-4">
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                  <MapPin className="w-4 h-4 text-v-blue"/> {queryLocation}
                </span>
              </div>
            ) : (
              <p className="text-slate-500 font-medium">Showing all available verified properties in Mumbai.</p>
            )}
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-black/10 text-v-black px-6 py-3 rounded-full text-sm font-bold hover:bg-v-gray transition-colors shadow-sm whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProperties.map((property) => (
          <Link to={`/property/${property.id}`} key={property.id}>
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
          </Link>
        ))}
      </div>
    </main>
  );
}
