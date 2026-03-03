import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SavedProperty {
    id: number | string;
    image: string;
    price: string;
    title: string;
    location: string;
    type: string;
    beds?: number;
    baths?: number;
    sqft?: number;
    isFeatured?: boolean;
}

interface FavoritesContextType {
    favorites: SavedProperty[];
    addToFavorites: (property: SavedProperty) => void;
    removeFromFavorites: (id: number | string) => void;
    isFavorite: (id: number | string) => boolean;
    clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<SavedProperty[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('realEstateFavorites');
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse favorites', e);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('realEstateFavorites', JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    const addToFavorites = (property: SavedProperty) => {
        setFavorites(prev => {
            if (prev.some(p => p.id === property.id)) return prev;
            return [...prev, property];
        });
    };

    const removeFromFavorites = (id: number | string) => {
        setFavorites(prev => prev.filter(p => p.id !== id));
    };

    const isFavorite = (id: number | string) => {
        return favorites.some(p => p.id === id);
    };

    const clearFavorites = () => setFavorites([]);

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}
