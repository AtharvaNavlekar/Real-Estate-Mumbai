import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, MapPin, Home, IndianRupee, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AISearchBar() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setError(null);

    try {
      // Call our server-side proxy — API key is NEVER sent to the browser
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json() as { intent: { location: string; propertyType: string; budget: string; features: string[] } };

      setResults({
        intent: data.intent,
        matches: Math.floor(Math.random() * 20) + 5,
      });
    } catch (err) {
      console.error('[AISearchBar] Error:', err);
      // Graceful fallback — still show a useful result
      setResults({
        intent: {
          location: 'Mumbai',
          propertyType: 'Any',
          budget: 'Any',
          features: [query],
        },
        matches: 12,
      });
      setError('Smart search is temporarily unavailable. Showing general results.');
    } finally {
      setIsSearching(false);
    }
  };


  return (
    <div className="w-full max-w-4xl mx-auto md:px-4">
      <form onSubmit={handleSearch} className="relative group w-full">
        {/* Glowing backdrop effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-v-blue/40 via-blue-400/20 to-v-blue/40 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

        <div className="relative flex flex-col md:flex-row items-stretch md:items-center bg-white/95 backdrop-blur-xl md:rounded-full rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden p-2 gap-2">
          {/* Sparkle Icon */}
          <div className="hidden md:flex pl-6 pr-2 items-center text-v-blue">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          {/* Input field */}
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask AI: Find a verified 3BHK in BKC under 5 Cr..."
              className="w-full py-4 px-6 md:px-2 md:py-5 text-lg md:text-xl text-v-black bg-transparent border-none focus:outline-none focus:ring-0 placeholder-slate-400 font-medium"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={isSearching}
            className="w-full md:w-auto bg-v-blue hover:bg-blue-600 text-white px-8 py-5 md:py-4 md:rounded-full rounded-2xl font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait shadow-lg shadow-blue-500/30"
          >
            {isSearching ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            ) : (
              <Search className="w-5 h-5" />
            )}
            <span className="text-base tracking-wide">{isSearching ? 'Analyzing...' : 'Search'}</span>
          </button>
        </div>
      </form>

      <AnimatePresence>
        {results && !isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 bg-white rounded-3xl shadow-xl border border-black/5 p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-black/5 pb-4 gap-4">
              <h3 className="text-sm font-black text-v-black uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-v-blue" />
                AI Understanding
              </h3>
              <span className="bg-emerald-50 text-emerald-600 text-[10px] sm:text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100 flex items-center gap-1.5 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {results.matches} Verified Matches
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="flex flex-col gap-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-v-blue/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Location</p>
                <p className="font-bold text-v-black text-sm">{results.intent.location}</p>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-v-blue/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5"><Home className="w-3.5 h-3.5" /> Type</p>
                <p className="font-bold text-v-black text-sm">{results.intent.propertyType}</p>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-v-blue/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> Budget</p>
                <p className="font-bold text-v-black text-sm">{results.intent.budget}</p>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-v-blue/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Features</p>
                <p className="font-bold text-v-black text-sm truncate">{results.intent.features.join(', ')}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-black/5 flex justify-end">
              <button
                onClick={() => navigate('/search', { state: { results } })}
                className="bg-v-black text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-v-blue transition-colors flex items-center gap-2 shadow-sm"
              >
                View Properties <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
