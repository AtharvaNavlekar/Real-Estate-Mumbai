import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, BellOff, Heart, CheckCircle } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../hooks/useNotifications';
import propertyService, { Property } from '../services/propertyService';

export default function Dashboard() {
    const { user } = useAuth();
    const { requestPermission, sendNotification, isGranted, isSupported } = useNotifications();
    const [alertsEnabled, setAlertsEnabled] = useState(isGranted);
    const [savedProperties, setSavedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        propertyService.getFeaturedProperties().then(props => {
            setSavedProperties(props.slice(0, 4));
            setLoading(false);
        });
    }, []);

    const handleEnableAlerts = async () => {
        const granted = await requestPermission();
        setAlertsEnabled(granted);
        if (granted) {
            setTimeout(() => {
                sendNotification(
                    'Price Drop Alert — Bandra West',
                    '4 BHK Luxury Apartment is now ₹11.9 Cr (was ₹12.5 Cr). Act fast!'
                );
            }, 10000);
        }
    };

    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-v-black tracking-tight">
                        {user ? `Welcome, ${user.name.split(' ')[0]}` : 'Saved Properties'}
                    </h1>
                    <p className="text-slate-500 mt-2">Properties you have favorited to view later.</p>
                </div>

                {/* Price Alerts Toggle */}
                {isSupported() && (
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <button
                            onClick={alertsEnabled ? undefined : handleEnableAlerts}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors border ${alertsEnabled
                                    ? 'bg-green-50 border-green-200 text-green-700 cursor-default'
                                    : 'bg-v-black border-v-black text-white hover:bg-v-blue'
                                }`}
                            aria-label={alertsEnabled ? 'Price alerts are enabled' : 'Enable price drop alerts'}
                            disabled={alertsEnabled}
                        >
                            {alertsEnabled ? (
                                <><CheckCircle className="w-4 h-4" /> Alerts Enabled</>
                            ) : (
                                <><Bell className="w-4 h-4" /> Enable Price Alerts</>
                            )}
                        </button>
                        {alertsEnabled && (
                            <p className="text-xs text-slate-400">
                                You'll receive a demo alert in 10 seconds.
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Saved Properties', value: savedProperties.length, icon: Heart },
                    { label: 'Active Searches', value: '3', icon: null },
                    { label: 'Viewings Scheduled', value: '2', icon: null },
                    { label: 'Enquiries Sent', value: '7', icon: null },
                ].map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                        <p className="text-3xl font-display font-bold text-v-black">{value}</p>
                    </div>
                ))}
            </div>

            {/* Saved Properties Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-72 bg-slate-100 rounded-3xl animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedProperties.map(property => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            )}
        </main>
    );
}
