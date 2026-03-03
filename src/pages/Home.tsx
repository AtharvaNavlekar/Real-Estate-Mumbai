import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AISearchBar from '../components/AISearchBar';
import PropertyCard from '../components/PropertyCard';
import NeighborhoodCard from '../components/NeighborhoodCard';
import { ArrowRight, ShieldCheck, TrendingUp, Users, BadgeCheck, Star, Quote } from 'lucide-react';
import westernLineMarketData from '../data/westernLineMarketData.json';

export default function Home() {
  const defaultImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  ];

  const featuredProperties = westernLineMarketData.zones[0].stations.slice(0, 4).map((station, i) => {
    let beds = 4;
    let sqft = 2500;
    let price = (station.avgPricePerSqft * sqft / 10000000).toFixed(2);
    return {
      id: 1000 + i,
      image: defaultImages[i % defaultImages.length],
      price: `₹ ${price} Cr`,
      title: `${beds} BHK Luxury ${station.avgPricePerSqft > 50000 ? 'Penthouse' : 'Apartment'}`,
      location: `${station.name}, Mumbai`,
      beds: beds,
      baths: beds,
      sqft: sqft,
      type: station.avgPricePerSqft > 50000 ? 'Penthouse' : 'Apartment',
      isFeatured: true
    };
  });

  const defaultNeighborhoodImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop'
  ];

  const neighborhoods = westernLineMarketData.zones.slice(0, 4).map((zone, i) => {
    // Create a nice slug for the link
    let slugName = zone.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return {
      id: 2000 + i,
      image: defaultNeighborhoodImages[i % defaultNeighborhoodImages.length],
      name: zone.name,
      slugName: slugName,
      propertyCount: zone.stations.reduce((acc, st) => acc + (st.upcomingProjects ? st.upcomingProjects.length + 5 : 5), 0) * 10,
      description: `Premium real estate in ${zone.name}, featuring ${zone.stations.length} major stations including ${zone.stations[0].name} and ${zone.stations[zone.stations.length - 1].name}.`
    }
  });

  return (
    <main className="flex-1 flex flex-col">
      <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
            alt="Mumbai Luxury Real Estate"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-v-gray/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto mb-10 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-v-blue" />
              <span className="font-bold tracking-widest uppercase text-xs sm:text-sm text-v-black">
                The New Standard of Real Estate
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-display font-bold text-v-black leading-[0.85] tracking-tighter mb-6 sm:mb-8">
              VERIFIED.<br />
              <span className="text-slate-400">REAL ESTATE.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium px-2">
              Experience the future of property search. AI-driven, data-backed, and 100% verified listings in Mumbai's most premium neighborhoods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            <AISearchBar />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <span className="text-v-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Curated Selection</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-v-black tracking-tight">Featured Properties</h2>
          </div>
          <Link to="/properties" className="flex items-center gap-2 text-v-black font-bold hover:text-v-blue transition-colors group uppercase tracking-wider text-sm">
            View All Properties
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <PropertyCard
                id={property.id}
                image={property.image}
                price={property.price}
                title={property.title}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                type={property.type}
                isFeatured={property.isFeatured}
              />
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Micro-Markets Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-32 px-4 md:px-8 bg-v-black w-full"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="text-v-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Location Intelligence</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight">Explore Micro-Markets</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Discover premium neighborhoods across Mumbai. Our data-driven insights help you make informed investment decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, idx) => (
              <motion.div
                key={neighborhood.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={`/neighborhoods/${neighborhood.slugName}`} className="relative group rounded-3xl overflow-hidden h-96 cursor-pointer border border-white/10 block">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-v-blue font-bold text-xs uppercase tracking-widest mb-2">{neighborhood.propertyCount} Properties</span>
                    <h3 className="text-3xl font-display font-bold text-white mb-3 tracking-tight">{neighborhood.name}</h3>

                    <div className="overflow-hidden">
                      <p className="text-slate-300 text-sm mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {neighborhood.description}
                      </p>
                      <div className="flex items-center text-white text-sm font-bold uppercase tracking-wider transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        Explore Area <ArrowRight className="w-4 h-4 ml-2 text-v-blue" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us / Trust Indicators */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <span className="text-v-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">The Advantage</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-v-black mb-6 sm:mb-8 tracking-tight leading-tight">Redefining Real Estate with Intelligence</h2>
            <p className="text-slate-600 mb-12 leading-relaxed text-lg">
              We go beyond traditional listings. Our platform leverages AI and predictive analytics to match you with properties that fit your lifestyle and investment goals perfectly.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-7 h-7 text-v-blue" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-v-black mb-2">RERA Verified Listings</h4>
                  <p className="text-slate-600">Every property on our platform undergoes strict verification for legal compliance and RERA registration.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <TrendingUp className="w-7 h-7 text-v-blue" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-v-black mb-2">Predictive Price Analytics</h4>
                  <p className="text-slate-600">Access 5-year historical data and AI-driven price forecasts for every micro-market in Mumbai.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Users className="w-7 h-7 text-v-blue" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-v-black mb-2">Dedicated Concierge</h4>
                  <p className="text-slate-600">Get end-to-end assistance from property shortlisting to legal documentation and final handover.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-v-black rounded-[2.5rem] transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury Real Estate Agent"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] border border-white/10"
              referrerPolicy="no-referrer"
            />
            {/* Floating Stat Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-black/5 flex items-center gap-6">
              <div className="text-6xl font-display font-bold text-v-black tracking-tighter">15<span className="text-v-blue">+</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials / Success Stories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 sm:py-24 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-16 gap-4">
          <div>
            <span className="text-v-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Client Success</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-v-black tracking-tight">Stories of Trust.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ananya Desai",
              role: "Tech Executive",
              image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop",
              text: "The data-driven approach changed everything for us. We knew exactly what the fair price was before even stepping into the property.",
              property: "Bought in BKC"
            },
            {
              name: "Vikram Singhania",
              role: "NRI Investor",
              image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop",
              text: "Managing investments from Dubai is tough, but their verified listings and remote walkthroughs made the entire process completely frictionless.",
              property: "Invested in Worli"
            },
            {
              name: "Pooja & Rahul",
              role: "First-time Buyers",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop",
              text: "From property discovery to getting our RERA documents verified, our dedicated concierge held our hand through every single administrative hurdle.",
              property: "Bought in Powai"
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-xl transition-shadow relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-v-blue/10 transition-colors" />
              <div className="flex items-center gap-1 text-yellow-400 mb-6 relative">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 border-t border-black/5 pt-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover text-xs italic text-slate-400" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-v-black text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-slate-500">{testimonial.role}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-xs font-bold text-v-blue">{testimonial.property}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MumbaiPro-Ready",
            "url": "https://mumbaipro-ready.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mumbaipro-ready.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </main>
  );
}
