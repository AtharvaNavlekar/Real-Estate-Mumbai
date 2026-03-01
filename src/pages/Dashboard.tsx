import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Building2, Settings, LogOut } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

export default function Dashboard() {
    // Mock saved properties
    const savedProperties = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
            price: '₹ 12.5 Cr',
            title: 'Signia High Luxurious Sky Villa',
            location: 'South Mumbai',
            beds: 4,
            baths: 4,
            sqft: 2500,
            type: 'Apartment',
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
            isFeatured: true
        }
    ];

    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
            {/* Sidebar Navigation */}
            {/* Main Content Area */}
            <div className="flex-1 w-full relative">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-v-black tracking-tight">
                        Saved Properties
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Properties you have favorited to view later.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedProperties.map(property => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            </div>
        </main>
    );
}
