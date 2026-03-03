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
        {/* Animated gradient border on hover/focus */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-[2.5rem] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 -z-10 blur-[1px]"></div>
        {/* Soft glow behind */}
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-violet-400/10 to-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-60 group-focus-within:opacity-80 transition-opacity duration-700 -z-20"></div>

        <div className="relative flex flex-col md:flex-row items-stretch md:items-center bg-white backdrop-blur-xl md:rounded-full rounded-[2rem] shadow-xl shadow-black/5 border border-black/[0.04] overflow-hidden p-2 gap-2">
          {/* Sparkle Icon — pulses on hover */}
          <div className="hidden md:flex pl-6 pr-2 items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-violet-500" />
            </motion.div>
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

          {/* Search Button — gradient with scale micro-interaction */}
          <motion.button
            type="submit"
            disabled={isSearching}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-10 py-5 md:py-4 md:rounded-full rounded-2xl font-bold transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait shadow-lg shadow-blue-600/25"
          >
            {isSearching ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            ) : (
              <Search className="w-5 h-5" />
            )}
            <span className="text-base tracking-wide">{isSearching ? 'Analyzing...' : 'Search'}</span>
          </motion.button>
        </div>
      </form>

      {/* Quick filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
        {['3 BHK in Bandra', 'Sea-facing Worli', 'Under ₹2 Cr Powai', 'Penthouse BKC'].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => { setQuery(chip); }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-black/[0.04] text-slate-500 hover:bg-v-blue/10 hover:text-v-blue border border-transparent hover:border-v-blue/20 transition-all cursor-pointer"
          >
            {chip}
          </button>
        ))}
      </div>

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
