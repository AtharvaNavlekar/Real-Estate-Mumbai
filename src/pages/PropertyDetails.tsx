import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, BadgeCheck, Phone, MessageCircle, TrendingUp, ShieldCheck, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const priceHistoryData = [
  { year: '2020', price: 10.5 },
  { year: '2021', price: 11.2 },
  { year: '2022', price: 11.8 },
  { year: '2023', price: 12.1 },
  { year: '2024', price: 12.5 },
  { year: '2025', price: 13.2 },
  { year: '2026', price: 14.0 }, // Predicted
];

export default function PropertyDetails() {
  const { id } = useParams();
  const [isContacting, setIsContacting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(100000000); // 10 Cr default
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  // EMI Calculation Logic
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const getEmiBreakdown = () => {
    const emi = calculateEMI();
    const totalPayment = emi * loanTenure * 12;
    const totalInterest = totalPayment - loanAmount;
    return [
      { name: 'Principal Amount', value: loanAmount, color: '#0066FF' }, // v-blue
      { name: 'Total Interest', value: totalInterest, color: '#94a3b8' } // slate-400
    ];
  };

  const emiData = getEmiBreakdown();

  // Mock property data
  const property = {
    id: id,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    ],
    price: '₹ 12.5 Cr',
    title: '4 BHK Luxury Apartment',
    location: 'Bandra West, Mumbai',
    beds: 4,
    baths: 4,
    sqft: 2500,
    type: 'Apartment',
    status: 'Ready to Move',
    rera: 'P51800001234',
    description: 'Experience unparalleled luxury in this exquisite 4 BHK apartment located in the heart of Bandra West. Boasting panoramic sea views, state-of-the-art amenities, and a meticulously designed interior, this residence offers a lifestyle of absolute comfort and elegance. The property features a spacious living area, a modern modular kitchen, and four well-appointed bedrooms with en-suite bathrooms. Residents can enjoy exclusive access to a rooftop infinity pool, a fully equipped gymnasium, and a private clubhouse.',
    amenities: ['Sea View', 'Infinity Pool', 'Gymnasium', 'Clubhouse', '24/7 Security', 'Power Backup', 'Smart Home Automation', 'Reserved Parking'],
    agent: {
      name: 'Rohan Sharma',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop'
    }
  };

  const handleWhatsApp = () => {
    setIsContacting(true);
    const message = `Hi ${property.agent.name}, I'm interested in the property: ${property.title} (${property.price}) located at ${property.location}. Please share more details.`;
    const whatsappUrl = `https://wa.me/${property.agent.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsContacting(false);
  };

  return (
    <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
      </Link>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[50vh] min-h-[400px]">
        <div className="md:col-span-2 rounded-3xl overflow-hidden relative">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute top-6 left-6 flex gap-3">
            <span className="bg-v-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
              {property.status}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-v-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-v-blue" /> RERA Verified
            </span>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4 h-full">
          <div className="flex-1 rounded-3xl overflow-hidden">
            <img src={property.images[1]} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden relative" onClick={() => setShowGallery(true)}>
            <img src={property.images[2]} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
              <span className="text-white font-bold tracking-widest uppercase">View All Photos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header Info */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-v-black tracking-tight">{property.title}</h1>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-slate-500 hover:text-v-black hover:bg-slate-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-colors ${isSaved ? 'bg-red-50 text-red-500 border-red-200' : 'text-slate-500 hover:text-red-500 hover:bg-slate-50'}`}
                >
                  <Heart className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
            <p className="text-lg text-slate-500 flex items-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-v-blue" /> {property.location}
            </p>

            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Bed className="w-6 h-6 text-v-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Bedrooms</p>
                  <p className="text-xl font-bold text-v-black">{property.beds}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Bath className="w-6 h-6 text-v-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Bathrooms</p>
                  <p className="text-xl font-bold text-v-black">{property.baths}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Square className="w-6 h-6 text-v-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Area</p>
                  <p className="text-xl font-bold text-v-black">{property.sqft} sq.ft</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-display font-bold text-v-black mb-4">About this Property</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-display font-bold text-v-black mb-6">Premium Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-v-gray rounded-2xl">
                  <BadgeCheck className="w-5 h-5 text-v-blue" />
                  <span className="font-semibold text-v-black">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-v-gray p-8 rounded-3xl border border-black/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-v-black mb-2 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-v-blue" /> Price Analytics
                </h3>
                <p className="text-slate-500">Historical data and AI-driven 5-year forecast.</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Current Value</p>
                <p className="text-3xl font-display font-bold text-v-black">{property.price}</p>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistoryData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dx={-10} tickFormatter={(value) => `₹${value}Cr`} />
                  <Tooltip
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number | undefined) => [`₹${value ?? 0} Cr`, 'Price']}
                    labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                  />
                  <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-v-blue"></div> Historical Data
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-v-blue border-dashed"></div> AI Forecast
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Contact */}
        <div className="lg:col-span-1 space-y-8">
          <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-2xl border border-black/5">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Asking Price</p>
              <h2 className="text-5xl font-display font-bold text-v-black tracking-tight">{property.price}</h2>
              <p className="text-sm text-slate-500 mt-2">EMI starts at ₹{calculateEMI().toLocaleString('en-IN')} / month</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-v-gray rounded-2xl mb-8">
              <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold text-v-black text-lg">{property.agent.name}</p>
                <p className="text-sm text-slate-500">Verified Agent</p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                disabled={isContacting}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
              <button
                onClick={() => setShowInquiryForm(true)}
                className="w-full bg-v-black hover:bg-v-dark text-white px-6 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Request Callback
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-black/5">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-slate-500">RERA ID</span>
                <span className="font-bold text-v-black">{property.rera}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Property ID</span>
                <span className="font-bold text-v-black">MPR-{property.id || '101'}</span>
              </div>
            </div>
          </div>

          {/* EMI Calculator Widget - Premium Upgrade */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-v-black p-8 rounded-[2.5rem] shadow-2xl mt-8 relative overflow-hidden text-white border border-slate-700/50">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-v-blue rounded-full blur-[100px] opacity-20 pointer-events-none -mt-10 -mr-10"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-black text-white mb-2">Financial Modeler</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">Visualize your mortgage payload and interest distribution.</p>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="space-y-8">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                    <div className="flex justify-between mb-4 items-end gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Principal</label>
                      <span className="text-xl font-black text-white font-display whitespace-nowrap">₹ {(loanAmount / 10000000).toFixed(2)} Cr</span>
                    </div>
                    <input
                      type="range"
                      min="1000000"
                      max="500000000"
                      step="1000000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-v-blue outline-none focus:ring-2 focus:ring-v-blue/50"
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                    <div className="flex justify-between mb-4 items-end gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Interest Rate</label>
                      <span className="text-xl font-black text-white font-display whitespace-nowrap">{interestRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="6"
                      max="12"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-v-blue outline-none focus:ring-2 focus:ring-v-blue/50"
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                    <div className="flex justify-between mb-4 items-end gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Tenure</label>
                      <span className="text-xl font-black text-white font-display whitespace-nowrap">{loanTenure} Yrs</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-v-blue outline-none focus:ring-2 focus:ring-v-blue/50"
                    />
                  </div>
                </div>

                {/* Donut Chart & Results */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={emiData}
                          cx="50%"
                          cy="50%"
                          startAngle={90}
                          endAngle={-270}
                          innerRadius={65}
                          outerRadius={85}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {emiData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number | undefined) => `₹ ${((value ?? 0) / 100000).toFixed(1)} L`}
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontWeight: 'bold', color: '#fff' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2 whitespace-nowrap">Est. EMI</p>
                      <p className="text-xl font-black text-white whitespace-nowrap">₹ {(calculateEMI() / 100000).toFixed(2)}L</p>
                    </div>
                  </div>

                  {/* Legends */}
                  <div className="w-full space-y-3 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-sm">
                    {emiData.map((data, idx) => (
                      <div key={idx} className="flex justify-between items-center pr-2 gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-3 h-3 rounded-full shadow-sm shrink-0" style={{ backgroundColor: data.color }}></div>
                          <span className="text-slate-300 font-medium font-sans text-xs truncate">{data.name}</span>
                        </div>
                        <span className="font-bold text-white whitespace-nowrap shrink-0">₹ {(data.value / 10000000).toFixed(2)} Cr</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] bg-v-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl h-[80vh] flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar">
            {property.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${property.title} ${idx + 1}`}
                className="w-full h-full object-contain shrink-0 snap-center rounded-2xl"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-[100] bg-v-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-in zoom-in-95">
            <button
              onClick={() => setShowInquiryForm(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-v-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-3xl font-display font-bold text-v-black mb-2">Request callback</h3>
            <p className="text-slate-500 mb-8">Our luxury real estate concierges will get back to you immediately.</p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowInquiryForm(false); alert('Request submitted successfully!'); }}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                <input required type="text" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="e.g. Rahul Sharma" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                <input required type="tel" className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" placeholder="+91" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message (Optional)</label>
                <textarea className="w-full p-4 rounded-xl border border-black/10 bg-v-gray focus:outline-none focus:ring-1 focus:ring-v-blue" rows={3} placeholder="I want to know more about this property..."></textarea>
              </div>
              <button type="submit" className="w-full bg-v-black text-white py-4 rounded-full font-bold hover:bg-v-blue transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
