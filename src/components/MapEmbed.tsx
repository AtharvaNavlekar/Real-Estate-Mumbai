import React from 'react';
import { MapPin } from 'lucide-react';

interface MapEmbedProps {
    query: string;
    title?: string;
    height?: number;
}

export default function MapEmbed({ query, title = 'Location', height = 350 }: MapEmbedProps) {
    const encodedQuery = encodeURIComponent(query + ', Mumbai, India');
    const src = `https://maps.google.com/maps?q=${encodedQuery}&output=embed&z=15`;

    return (
        <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm">
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 border-b border-black/5">
                <MapPin className="w-4 h-4 text-v-blue" />
                <span className="text-sm font-bold text-v-black">{title}</span>
            </div>
            <iframe
                src={src}
                width="100%"
                height={height}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
                aria-label={`Map showing ${title}`}
            />
        </div>
    );
}
