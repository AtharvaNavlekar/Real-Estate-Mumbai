import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NeighborhoodCardProps {
  image: string;
  name: string;
  propertyCount: number;
  description: string;
}

export default function NeighborhoodCard({ image, name, propertyCount, description }: NeighborhoodCardProps) {
  return (
    <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-gold-400 font-medium text-sm mb-1">{propertyCount} Properties</span>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">{name}</h3>
        
        <div className="overflow-hidden">
          <p className="text-slate-300 text-sm mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {description}
          </p>
          <div className="flex items-center text-gold-400 text-sm font-semibold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            Explore Area <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
