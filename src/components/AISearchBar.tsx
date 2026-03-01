import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, MapPin, Home, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';

export default function AISearchBar() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Parse this real estate search query into structured data: "${query}"`,
        config: {
          systemInstruction: "You are a real estate AI assistant. Extract the location, property type (e.g., 3BHK, Villa), budget (e.g., < 5 Cr), and a list of specific features from the user's query. If a field is not mentioned, provide a reasonable default or leave it empty.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              location: {
                type: Type.STRING,
                description: "The location or neighborhood mentioned.",
              },
              propertyType: {
                type: Type.STRING,
                description: "The type of property (e.g., 2BHK, 3BHK, Villa, Commercial).",
              },
              budget: {
                type: Type.STRING,
                description: "The budget mentioned, formatted nicely (e.g., < ₹5 Cr).",
              },
              features: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "A list of specific features or amenities mentioned.",
              },
            },
            required: ["location", "propertyType", "budget", "features"],
          },
        },
      });

      const jsonStr = response.text?.trim() || '{}';
      const parsedIntent = JSON.parse(jsonStr);
      
      setResults({
        intent: parsedIntent,
        matches: Math.floor(Math.random() * 20) + 5 // Simulated match count
      });
    } catch (error) {
      console.error("Error parsing query with AI:", error);
      // Fallback
      setResults({
        intent: {
          location: 'Mumbai',
          propertyType: 'Any',
          budget: 'Any',
          features: [query]
        },
        matches: 12
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute -inset-2 bg-v-blue/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative flex flex-col md:flex-row items-center bg-white rounded-full shadow-2xl border border-black/5 overflow-hidden p-2">
          <div className="hidden md:flex pl-6 text-v-blue">
            <Sparkles className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask AI: Find a verified 3BHK in BKC under 5 Cr..."
            className="w-full py-4 px-6 md:px-4 text-lg text-v-black bg-transparent border-none focus:outline-none focus:ring-0 placeholder-slate-400 font-medium"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="w-full md:w-auto bg-v-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSearching ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            ) : (
              <Search className="w-5 h-5" />
            )}
            <span>{isSearching ? 'Analyzing' : 'Search'}</span>
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
            <div className="flex items-center justify-between mb-4 border-b border-black/5 pb-4">
              <h3 className="text-sm font-bold text-v-black uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-v-blue" />
                AI Intent Parsed
              </h3>
              <span className="bg-blue-50 text-v-blue text-xs font-bold px-3 py-1.5 rounded-full">
                {results.matches} Verified Matches
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-v-gray rounded-2xl">
                <MapPin className="w-5 h-5 text-v-black" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Location</p>
                  <p className="font-semibold text-v-black">{results.intent.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-v-gray rounded-2xl">
                <Home className="w-5 h-5 text-v-black" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Type</p>
                  <p className="font-semibold text-v-black">{results.intent.propertyType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-v-gray rounded-2xl">
                <IndianRupee className="w-5 h-5 text-v-black" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Budget</p>
                  <p className="font-semibold text-v-black">{results.intent.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-v-gray rounded-2xl">
                <Sparkles className="w-5 h-5 text-v-black" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Features</p>
                  <p className="font-semibold text-v-black truncate">{results.intent.features.join(', ')}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 flex justify-end">
              <button 
                onClick={() => navigate('/search', { state: { results } })}
                className="text-sm font-bold text-v-black hover:text-v-blue transition-colors flex items-center gap-1"
              >
                View Properties <Search className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
