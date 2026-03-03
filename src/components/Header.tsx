import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Heart, User, BadgeCheck, X, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';

type Language = 'en' | 'hi' | 'mr';

export default function Header() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 glass-navbar rounded-full px-6 py-3 transition-all duration-300 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group" aria-label="Real Estate Mumbai Home">
          <div className="w-10 h-10 bg-v-black/90 rounded-full flex items-center justify-center shadow-inner backdrop-blur-xl transition-transform group-hover:scale-105">
            <BadgeCheck className="w-6 h-6 text-white drop-shadow-sm" />
          </div>
          <div className="flex flex-col drop-shadow-sm">
            <span className="font-display text-xl font-bold text-v-black tracking-tight leading-none">VERIFIED.</span>
            <span className="text-[10px] font-bold text-slate-800 tracking-widest uppercase mt-1">Real Estate</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-v-black/90 drop-shadow-md" aria-label="Main navigation">
          <Link to="/about" className="hover:text-v-blue transition-colors animated-link">About Us</Link>
          <Link to="/new-projects" className="hover:text-v-blue transition-colors animated-link">{t('nav.newProjects')}</Link>
          <Link to="/neighborhoods" className="hover:text-v-blue transition-colors animated-link">{t('nav.neighborhoods')}</Link>
          <Link to="/market-rates" className="hover:text-v-blue transition-colors animated-link">{t('nav.marketRates')}</Link>
          <Link to="/CEO" className="hover:text-v-blue transition-colors animated-link">{t('nav.ownerPortal')}</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">

          <Link to="/favorites" className="relative p-2 text-slate-400 hover:text-amber-500 transition-colors" aria-label="Saved properties">
            <Heart className="w-5 h-5" fill={favorites.length > 0 ? "currentColor" : "none"} />
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-3 h-3 bg-red-500 text-white text-[8px] font-bold rounded-full border-[1.5px] border-white">
                {favorites.length}
              </span>
            )}
          </Link>

          {!user ? (
            <Link to="/auth" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-v-black transition-colors rounded-full hover:bg-slate-100 border border-transparent shadow-sm hover:shadow-md">
              {t('nav.signIn')}
            </Link>
          ) : (
            <div className="relative group">
              <button
                className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="User menu"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </button>
              <div className="absolute top-full right-0 w-44 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 translate-y-2 group-hover:translate-y-0 z-50">
                <span className="px-4 py-2 text-xs text-slate-400 font-medium truncate">{user.name}</span>
                <Link to="/favrate" className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-medium hover:text-v-blue flex items-center gap-2">
                  <User className="w-4 h-4" /> {t('nav.dashboard')}
                </Link>
                <Link to="/profile" className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-medium hover:text-v-blue flex items-center gap-2">
                  <User className="w-4 h-4" /> {t('nav.profile')}
                </Link>
                <hr className="my-1 border-slate-100" />
                <button onClick={handleLogout} className="px-4 py-2 hover:bg-slate-50 text-red-500 font-medium hover:text-red-600 flex items-center gap-2 w-full text-left">
                  <LogOut className="w-4 h-4" /> {t('nav.logout')}
                </button>
              </div>
            </div>
          )}

          <Link
            to="/post-property"
            className="bg-v-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-v-dark transition-colors shadow-sm inline-flex items-center"
          >
            Post Property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-v-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header >

      {/* Mobile Menu */}
      {
        mobileOpen && (
          <div className="fixed inset-0 bg-white z-30 pt-24 px-6 flex flex-col gap-1 text-lg font-bold text-v-black lg:hidden overflow-y-auto pb-32">
            {/* Primary CTA */}
            <Link to="/post-property" onClick={() => setMobileOpen(false)} className="w-full bg-v-black text-white py-4 rounded-2xl text-center text-base font-bold shadow-md mb-4 block">
              Post Property
            </Link>

            {!user && (
              <Link to="/auth" onClick={() => setMobileOpen(false)} className="w-full bg-v-blue text-white py-3.5 rounded-2xl text-center text-base font-bold shadow-sm mb-6 block">
                {t('nav.signIn')}
              </Link>
            )}

            {/* Browse */}
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-2 mb-2 px-1">Browse</span>
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> Home</Link>
            <Link to="/properties?intent=buy" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.buy')}</Link>
            <Link to="/properties?intent=rent" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.rent')}</Link>
            <Link to="/new-projects" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.newProjects')}</Link>

            {/* Explore */}
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-4 mb-2 px-1">Explore</span>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><User className="w-4 h-4 text-slate-400" /> About Us</Link>
            <Link to="/neighborhoods" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.neighborhoods')}</Link>
            <Link to="/market-rates" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.marketRates')}</Link>
            <Link to="/owner-portal" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.ownerPortal')}</Link>

            {user && (
              <>
                {/* Account */}
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-4 mb-2 px-1">Account</span>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="py-3 border-b border-slate-100 flex items-center gap-3"><Heart className="w-4 h-4 text-slate-400" /> {t('nav.dashboard')}</Link>
                <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="py-3 text-red-500 text-left flex items-center gap-3"><LogOut className="w-4 h-4" /> {t('nav.logout')}</button>
              </>
            )}
          </div>
        )
      }
    </>
  );
}
