import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Heart, User, BadgeCheck, X, Upload, ChevronDown } from 'lucide-react';

export default function Header() {
  // Toggle this Boolean to test logged-in vs logged-out view 
  const isLoggedIn = false;

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 glass-navbar rounded-full px-6 py-3 transition-all duration-300 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-v-black/90 rounded-full flex items-center justify-center shadow-inner backdrop-blur-xl transition-transform group-hover:scale-105">
            <BadgeCheck className="w-6 h-6 text-white drop-shadow-sm" />
          </div>
          <div className="flex flex-col drop-shadow-sm">
            <span className="font-display text-xl font-bold text-v-black tracking-tight leading-none">VERIFIED.</span>
            <span className="text-[10px] font-bold text-slate-800 tracking-widest uppercase mt-1">Real Estate</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-v-black/90 drop-shadow-md">
          <div className="relative group py-2">
            <button className="hover:text-v-blue transition-colors flex items-center gap-1 focus:outline-none">
              Commercial <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            <div className="absolute top-full left-0 w-40 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 translate-y-2 group-hover:translate-y-0">
              <Link to="/commercial?type=buy" className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-medium hover:text-v-blue">Buy</Link>
              <Link to="/commercial?type=rent" className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-medium hover:text-v-blue">Rent</Link>
            </div>
          </div>
          <Link to="/new-projects" className="hover:text-v-blue transition-colors">New Projects</Link>
          <Link to="/neighborhoods" className="hover:text-v-blue transition-colors">Micro-Markets</Link>
          <Link to="/market-rates" className="hover:text-v-blue transition-colors">Market Rates</Link>
          <Link to="/property-management" className="hover:text-v-blue transition-colors">Property Management</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/dashboard" className="p-2 text-slate-600 hover:text-v-black transition-colors">
            <Heart className="w-5 h-5" />
          </Link>

          {!isLoggedIn ? (
            <Link to="/auth" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-v-black transition-colors rounded-full hover:bg-slate-100 border border-transparent shadow-sm hover:shadow-md">
              Log In
            </Link>
          ) : (
            <Link
              to="/profile"
              className="p-2 text-slate-600 hover:text-v-black transition-colors"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </Link>
          )}

          <Link
            to="/post-property"
            className="bg-v-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-v-dark transition-colors shadow-sm inline-flex items-center"
          >
            Post Property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-v-black">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Auth Modal */}
    </>
  );
}
