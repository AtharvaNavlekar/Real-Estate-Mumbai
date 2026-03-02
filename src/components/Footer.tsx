import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ShieldCheck, QrCode, BadgeCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-v-black text-white pt-24 pb-12 border-t border-white/10 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-v-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-white tracking-tight leading-none">
                  VERIFIED.
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-widest uppercase mt-1">Real Estate</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-sm">
              The intelligence-first real estate engine for Mumbai. We combine deep local market expertise with cutting-edge AI to help you find your perfect property.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-v-blue hover:text-white transition-colors text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-v-blue hover:text-white transition-colors text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-v-blue hover:text-white transition-colors text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-v-blue hover:text-white transition-colors text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/search?type=rent" className="text-slate-400 hover:text-v-blue transition-colors block">Flats on Rent</Link></li>
              <li><Link to="/search?type=buy" className="text-slate-400 hover:text-v-blue transition-colors block">Flats for Sale</Link></li>
              <li><Link to="/commercial?type=rent" className="text-slate-400 hover:text-v-blue transition-colors block">Offices on Rent</Link></li>
              <li><Link to="/commercial?type=buy" className="text-slate-400 hover:text-v-blue transition-colors block">Offices for Sale</Link></li>
              <li><Link to="/neighborhoods" className="text-slate-400 hover:text-v-blue transition-colors block">Micro-Markets</Link></li>
              <li><Link to="/news" className="text-slate-400 hover:text-v-blue transition-colors block">Property News</Link></li>
              <li><Link to="/new-projects" className="text-slate-400 hover:text-v-blue transition-colors block">New Projects</Link></li>
              <li><Link to="/builders" className="text-slate-400 hover:text-v-blue transition-colors block">Top Builders</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="text-slate-400 hover:text-v-blue transition-colors block">About Us</Link></li>
              <li><Link to="/ceo" className="text-slate-400 hover:text-v-blue transition-colors block">About Our CEO</Link></li>
              <li><Link to="/market-rates" className="text-slate-400 hover:text-v-blue transition-colors block">Market Rates</Link></li>
              <li><Link to="/property-management" className="text-slate-400 hover:text-v-blue transition-colors block">Property Management</Link></li>
              <li><Link to="/advisory/expat-services" className="text-slate-400 hover:text-v-blue transition-colors block">Relocation Planner</Link></li>
              <li><Link to="/post-property" className="text-slate-400 hover:text-v-blue transition-colors block">List Your Property</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-v-blue transition-colors block">FAQ's</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-v-blue transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & QR */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-v-blue shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-v-blue shrink-0" />
                <span>+91 0123456789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-v-blue shrink-0" />
                <span>thenavlekar@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 border-b border-white/10 pb-6">
                <Clock className="w-5 h-5 text-v-blue shrink-0" />
                <span>Mon – Sat: 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Middle Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10 border-t border-white/10 mb-6">
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Popular Property Searches</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/search?loc=andheri-west" className="text-slate-400 hover:text-v-blue transition-colors">Flats in Andheri West</Link></li>
              <li><Link to="/search?loc=bandra-east&bhk=2" className="text-slate-400 hover:text-v-blue transition-colors">2 BHK Bandra East</Link></li>
              <li><Link to="/search?loc=lower-parel&bhk=3" className="text-slate-400 hover:text-v-blue transition-colors">3 BHK Lower Parel</Link></li>
              <li><Link to="/search?loc=bandra-west" className="text-slate-400 hover:text-v-blue transition-colors">Flats in Bandra West</Link></li>
              <li><Link to="/search?loc=colaba" className="text-slate-400 hover:text-v-blue transition-colors">Flats in Colaba</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Commercial Spaces</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/commercial?loc=andheri-west" className="text-slate-400 hover:text-v-blue transition-colors">Offices in Andheri West</Link></li>
              <li><Link to="/commercial?loc=powai" className="text-slate-400 hover:text-v-blue transition-colors">Commercial in Powai</Link></li>
              <li><Link to="/commercial?loc=andheri-east" className="text-slate-400 hover:text-v-blue transition-colors">Offices in Andheri East</Link></li>
              <li><Link to="/commercial?loc=bkc" className="text-slate-400 hover:text-v-blue transition-colors">Offices in BKC</Link></li>
              <li><Link to="/commercial?loc=worli" className="text-slate-400 hover:text-v-blue transition-colors">Offices in Worli</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Premium Searches</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/search?type=bungalow&loc=juhu" className="text-slate-400 hover:text-v-blue transition-colors">Bungalows in Juhu</Link></li>
              <li><Link to="/search?loc=juhu&bhk=3&type=buy" className="text-slate-400 hover:text-v-blue transition-colors">3 BHK Juhu on Sale</Link></li>
              <li><Link to="/search?loc=khar-west" className="text-slate-400 hover:text-v-blue transition-colors">Flats in Khar West</Link></li>
              <li><Link to="/search?loc=bkc&bhk=3" className="text-slate-400 hover:text-v-blue transition-colors">3 BHK in BKC</Link></li>
              <li><Link to="/commercial?furnished=true" className="text-slate-400 hover:text-v-blue transition-colors">Furnished Offices Mumbai</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-xs font-medium text-slate-500 text-center">
          <p>Our sister site: <a href="https://thenavlekar.netlify.app/" className="hover:text-v-blue transition-colors">The.Navlekar</a> &bull; <Link to="/builders" className="hover:text-v-blue transition-colors">Builder Projects & RERA</Link></p>
          <p>&copy; {new Date().getFullYear()} Real Estate Mumbai | The.Navlekar — Mumbai Property Exchange</p>
        </div>

      </div>
    </footer>
  );
}
