import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, BadgeCheck, LucideIcon, ArrowLeftRight } from 'lucide-react';
import { useCompare } from '../context/CompareContext';

export interface PropertyMetric {
  icon: LucideIcon;
  value: string | number;
}

interface PropertyCardProps {
  key?: React.Key;
  image: string;
  price: string;
  title: string;
  location: string;
  type: string;
  isFeatured?: boolean;
  // Legacy props for residential properties
  beds?: number;
  baths?: number;
  sqft?: number;
  // Flexible metrics for commercial/projects
  metrics?: PropertyMetric[];
  // Optional children overlay (e.g. "Manage Listing" button on dashboard)
  actionOverlay?: React.ReactNode;
}

export default function PropertyCard({ image, price, title, location, beds, baths, sqft, type, isFeatured, metrics, actionOverlay, id }: PropertyCardProps & { id?: number }) {
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompare();
  // Try to split price beautifully if it contains " / ", " onwards", etc.
  const formatPrice = (priceStr: string) => {
    if (priceStr.includes(' / ')) {
      const parts = priceStr.split(' / ');
      return (
        <>
          {parts[0]} /<br />{parts[1]}
        </>
      );
    }
    return priceStr;
  };

  // Determine what metrics to show
  const displayMetrics: PropertyMetric[] = metrics || [];

  if (!metrics && (beds !== undefined || baths !== undefined || sqft !== undefined)) {
    if (beds !== undefined) displayMetrics.push({ icon: Bed, value: beds });
    if (baths !== undefined) displayMetrics.push({ icon: Bath, value: baths });
    if (sqft !== undefined) displayMetrics.push({ icon: Square, value: sqft });
  }

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 hover:border-black/20 hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer p-2 h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isFeatured && (
            <span className="bg-v-black text-white text-[10px] font-bold px-3 py-2 rounded-full uppercase tracking-widest shadow-md">
              Featured
            </span>
          )}
          <span className="bg-white/95 text-v-black text-[11px] font-black px-4 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
            {type}
          </span>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          className="absolute top-4 right-4 w-11 h-11 bg-white flex items-center justify-center rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm"
          aria-label={`Save ${title}`}
        >
          <Heart className="w-5 h-5" />
        </button>
        {id !== undefined && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const p = { id, image, price, title, location, beds: beds ?? 0, baths: baths ?? 0, sqft: sqft ?? 0, type, isFeatured };
              isInCompare(id) ? removeFromCompare(id) : addToCompare(p);
            }}
            className={`absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm ${isInCompare(id) ? 'bg-v-blue text-white' : compareList.length >= 3 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-600 hover:bg-v-blue hover:text-white'}`}
            disabled={!isInCompare(id) && compareList.length >= 3}
            aria-label={isInCompare(id) ? `Remove ${title} from comparison` : `Add ${title} to comparison`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            {isInCompare(id) ? 'Comparing' : 'Compare'}
          </button>
        )}
        {actionOverlay && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {actionOverlay}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3 gap-2">
          <h4 className="font-display text-xl font-black text-v-black tracking-tight whitespace-nowrap">{formatPrice(price)}</h4>
          <div className="flex items-center gap-1 bg-blue-50 text-blue-500 px-2.5 py-1 rounded-xl shrink-0">
            <BadgeCheck className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
          </div>
        </div>

        <h3 className="font-bold text-base text-v-black mb-1 line-clamp-2 group-hover:text-v-blue transition-colors leading-snug">{title}</h3>
        <p className="text-slate-400 flex items-center gap-1 mb-4 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5 shrink-0" /> <span className="line-clamp-1">{location}</span>
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center flex-wrap gap-x-4 gap-y-2 text-v-black pb-1">
          {displayMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 shrink-0">
                <Icon className="w-4 h-4 text-slate-400" />
                <span className="font-bold text-sm text-v-black">{metric.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
