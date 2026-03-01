// Central data service layer — swap these mock functions for real fetch() calls later

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
}

export interface Neighborhood {
    id: string;
    name: string;
    image: string;
    avgPrice: string;
    appreciation: string;
    description: string;
    lat?: number;
    lng?: number;
}

const PROPERTIES: Property[] = [
    { id: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', price: '₹ 12.5 Cr', title: '4 BHK Luxury Apartment', location: 'Bandra West, Mumbai', beds: 4, baths: 4, sqft: 2500, type: 'Apartment', intent: 'buy', isFeatured: true, description: 'A magnificent 4 BHK apartment in the heart of Bandra West with panoramic views and premium finishes.' },
    { id: 2, image: 'https://images.unsplash.com/photo-1600607687931-ceeb66d18f50?q=80&w=800&auto=format&fit=crop', price: '₹ 8.5 Cr', title: '3 BHK Premium Residence', location: 'BKC, Mumbai', beds: 3, baths: 3, sqft: 1800, type: 'Apartment', intent: 'buy', isFeatured: true, description: 'Elegant 3 BHK residence in BKC with world-class amenities.' },
    { id: 3, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', price: '₹ 35.0 Cr', title: '5 BHK Sea-Facing Penthouse', location: 'Worli, Mumbai', beds: 5, baths: 6, sqft: 4500, type: 'Penthouse', intent: 'buy', isFeatured: true },
    { id: 4, image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop', price: '₹ 2.5 L / mo', title: '2 BHK Modern Flat', location: 'Powai, Mumbai', beds: 2, baths: 2, sqft: 1100, type: 'Apartment', intent: 'rent' },
    { id: 5, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', price: '₹ 4.5 Cr', title: '3 BHK Sea-View Apartment', location: 'BKC, Mumbai', beds: 3, baths: 3, sqft: 1650, type: 'Apartment', intent: 'buy', isFeatured: true },
    { id: 6, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', price: '₹ 3.5 L / mo', title: 'Modern 3BHK with Pet Park', location: 'BKC Annexe, Mumbai', beds: 3, baths: 2, sqft: 1400, type: 'Apartment', intent: 'rent' },
    { id: 7, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', price: '₹ 4.9 Cr', title: 'Luxury 3BHK Penthouse', location: 'BKC, Mumbai', beds: 3, baths: 4, sqft: 2100, type: 'Penthouse', intent: 'buy', isFeatured: true },
    { id: 8, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', price: '₹ 15.5 Cr', title: 'Premium Office Space', location: 'BKC, Mumbai', beds: 0, baths: 2, sqft: 3500, type: 'Commercial', intent: 'commercial' },
    { id: 9, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop', price: '₹ 6.2 Cr', title: '3 BHK Heritage Apartment', location: 'South Mumbai', beds: 3, baths: 3, sqft: 1900, type: 'Apartment', intent: 'buy', isFeatured: true },
    { id: 10, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop', price: '₹ 1.8 L / mo', title: '1 BHK Studio Flat', location: 'Andheri West, Mumbai', beds: 1, baths: 1, sqft: 650, type: 'Apartment', intent: 'rent' },
];

const NEIGHBORHOODS: Neighborhood[] = [
    { id: 'bandra-west', name: 'Bandra West', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800', avgPrice: '₹ 45,000/sqft', appreciation: '+12% YoY', description: 'The Queen of Suburbs — vibrant, cosmopolitan, and home to Bollywood celebrities.' },
    { id: 'bkc', name: 'BKC', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800', avgPrice: '₹ 38,000/sqft', appreciation: '+8% YoY', description: 'Mumbai\'s premier commercial and residential hub with world-class infrastructure.' },
    { id: 'worli', name: 'Worli', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800', avgPrice: '₹ 52,000/sqft', appreciation: '+15% YoY', description: 'Luxury sea-facing residences with iconic Bandra-Worli Sea Link views.' },
    { id: 'powai', name: 'Powai', image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800', avgPrice: '₹ 22,000/sqft', appreciation: '+9% YoY', description: 'Knowledge hub with IIT Mumbai, tech parks, and lakeside living.' },
    { id: 'andheri', name: 'Andheri', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800', avgPrice: '₹ 18,000/sqft', appreciation: '+7% YoY', description: 'Largest suburb with excellent connectivity and vibrant lifestyle options.' },
    { id: 'south-mumbai', name: 'South Mumbai', image: 'https://images.unsplash.com/photo-1549969476-db0f22d7c07c?q=80&w=800', avgPrice: '₹ 65,000/sqft', appreciation: '+5% YoY', description: 'The heritage heart of Mumbai — Malabar Hill, Marine Drive, Nariman Point.' },
];

// Simulates an async API call
const delay = (ms = 400) => new Promise(r => setTimeout(r, ms));

export const propertyService = {
    async getProperties(filter?: { intent?: string; search?: string }): Promise<Property[]> {
        await delay();
        return PROPERTIES.filter(p => {
            const matchesIntent = !filter?.intent || filter.intent === 'all' || p.intent === filter.intent;
            const q = filter?.search?.toLowerCase() || '';
            const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
            return matchesIntent && matchesSearch;
        });
    },

    async getPropertyById(id: number): Promise<Property | null> {
        await delay();
        return PROPERTIES.find(p => p.id === id) || null;
    },

    async getFeaturedProperties(): Promise<Property[]> {
        await delay();
        return PROPERTIES.filter(p => p.isFeatured);
    },

    async getNeighborhoods(): Promise<Neighborhood[]> {
        await delay();
        return NEIGHBORHOODS;
    },

    async getNeighborhoodById(id: string): Promise<Neighborhood | null> {
        await delay();
        return NEIGHBORHOODS.find(n => n.id === id) || null;
    },
};

export default propertyService;
