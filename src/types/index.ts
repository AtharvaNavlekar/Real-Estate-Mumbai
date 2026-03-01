/**
 * Shared TypeScript interfaces for the Real Estate Mumbai platform.
 * Import from this file rather than defining interfaces in individual components.
 */

/** A residential or commercial property listing */
export interface Property {
    id: number;
    image: string;
    price: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    intent: 'buy' | 'rent' | 'commercial';
    isFeatured?: boolean;
    description?: string;
    amenities?: string[];
    yearBuilt?: number;
    carpetArea?: number;
    superArea?: number;
    parking?: number;
    floor?: number;
    totalFloors?: number;
}

/** A named city neighborhood / micro-market */
export interface Neighborhood {
    id: string;
    name: string;
    image: string;
    avgPrice: string;
    appreciation: string;
    description: string;
    lat?: number;
    lng?: number;
    tags?: string[];
}

/** Market price data point for charting */
export interface MarketRate {
    month: string;
    residential: number;
    commercial: number;
    luxury: number;
}

/** Authenticated user */
export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'buyer' | 'owner' | 'agent';
}

/** Property review / testimonial */
export interface Review {
    id: number;
    author: string;
    avatar?: string;
    rating: number;
    comment: string;
    date: string;
    propertyId?: number;
}

/** Builder / developer profile */
export interface Builder {
    id: string;
    name: string;
    logo?: string;
    projectsCompleted: number;
    yearsActive: number;
    rating: number;
    location: string;
}

/** Gemini AI search parsed intent */
export interface SearchIntent {
    location: string;
    propertyType: string;
    budget: string;
    features: string[];
}
