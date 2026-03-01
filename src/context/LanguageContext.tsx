import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Record<string, string>> = {
    en: {
        'nav.buy': 'Buy',
        'nav.rent': 'Rent',
        'nav.commercial': 'Commercial',
        'nav.newProjects': 'New Projects',
        'nav.neighborhoods': 'Neighborhoods',
        'nav.marketRates': 'Market Rates',
        'nav.ownerPortal': 'Owner Portal',
        'nav.signIn': 'Sign In',
        'nav.dashboard': 'Dashboard',
        'nav.profile': 'Profile',
        'nav.logout': 'Logout',
        'home.hero.title': 'Find Your Dream Property in Mumbai',
        'home.hero.subtitle': 'Explore thousands of verified listings across Mumbai\'s most sought-after neighborhoods.',
        'home.search.placeholder': 'Search by locality, project, or landmark...',
        'home.featured': 'Featured Properties',
        'footer.tagline': 'Mumbai\'s most trusted real estate platform.',
        'compare.title': 'Compare Properties',
        'compare.clear': 'Clear All',
        'compare.now': 'Compare Now',
    },
    hi: {
        'nav.buy': 'खरीदें',
        'nav.rent': 'किराया',
        'nav.commercial': 'व्यावसायिक',
        'nav.newProjects': 'नई परियोजनाएं',
        'nav.neighborhoods': 'इलाके',
        'nav.marketRates': 'बाज़ार भाव',
        'nav.ownerPortal': 'मालिक पोर्टल',
        'nav.signIn': 'साइन इन',
        'nav.dashboard': 'डैशबोर्ड',
        'nav.profile': 'प्रोफ़ाइल',
        'nav.logout': 'लॉग आउट',
        'home.hero.title': 'मुंबई में अपना सपना घर खोजें',
        'home.hero.subtitle': 'मुंबई के सबसे प्रतिष्ठित इलाकों में हज़ारों सत्यापित लिस्टिंग एक्सप्लोर करें।',
        'home.search.placeholder': 'इलाका, प्रोजेक्ट या लैंडमार्क खोजें...',
        'home.featured': 'विशेष संपत्तियां',
        'footer.tagline': 'मुंबई का सबसे भरोसेमंद रियल एस्टेट प्लेटफॉर्म।',
        'compare.title': 'संपत्तियों की तुलना करें',
        'compare.clear': 'सब हटाएं',
        'compare.now': 'अभी तुलना करें',
    },
    mr: {
        'nav.buy': 'खरेदी करा',
        'nav.rent': 'भाड्याने',
        'nav.commercial': 'व्यावसायिक',
        'nav.newProjects': 'नवीन प्रकल्प',
        'nav.neighborhoods': 'परिसर',
        'nav.marketRates': 'बाजार दर',
        'nav.ownerPortal': 'मालक पोर्टल',
        'nav.signIn': 'साइन इन',
        'nav.dashboard': 'डॅशबोर्ड',
        'nav.profile': 'प्रोफाइल',
        'nav.logout': 'लॉग आउट',
        'home.hero.title': 'मुंबईत तुमचे स्वप्नातील घर शोधा',
        'home.hero.subtitle': 'मुंबईच्या सर्वात मागणीच्या परिसरांमध्ये हजारो सत्यापित यादी शोधा।',
        'home.search.placeholder': 'परिसर, प्रकल्प किंवा खूण शोधा...',
        'home.featured': 'वैशिष्ट्यीकृत मालमत्ता',
        'footer.tagline': 'मुंबईचे सर्वात विश्वासार्ह रिअल इस्टेट व्यासपीठ।',
        'compare.title': 'मालमत्ता तुलना करा',
        'compare.clear': 'सर्व काढा',
        'compare.now': 'आता तुलना करा',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        return (localStorage.getItem('re-mumbai-lang') as Language) || 'en';
    });

    const setLanguage = (lang: Language) => {
        localStorage.setItem('re-mumbai-lang', lang);
        setLanguageState(lang);
    };

    const t = (key: string) => {
        return translations[language][key] || translations['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
