import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Property {
    id: number;
    image: string;
    price: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    isFeatured?: boolean;
}

interface CompareContextType {
    compareList: Property[];
    addToCompare: (property: Property) => void;
    removeFromCompare: (id: number) => void;
    clearCompare: () => void;
    isInCompare: (id: number) => boolean;
}

const CompareContext = createContext<CompareContextType | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
    const [compareList, setCompareList] = useState<Property[]>([]);

    const addToCompare = (property: Property) => {
        if (compareList.length >= 3) return;
        if (compareList.find(p => p.id === property.id)) return;
        setCompareList(prev => [...prev, property]);
    };

    const removeFromCompare = (id: number) => {
        setCompareList(prev => prev.filter(p => p.id !== id));
    };

    const clearCompare = () => setCompareList([]);

    const isInCompare = (id: number) => compareList.some(p => p.id === id);

    return (
        <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }}>
            {children}
        </CompareContext.Provider>
    );
}

export function useCompare() {
    const ctx = useContext(CompareContext);
    if (!ctx) throw new Error('useCompare must be used within CompareProvider');
    return ctx;
}
