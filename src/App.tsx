/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';
import CompareBar from './components/CompareBar';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import Properties from './pages/Properties';
import NewProjects from './pages/NewProjects';
import Neighborhoods from './pages/Neighborhoods';
import NeighborhoodDetails from './pages/NeighborhoodDetails';
import Advisory from './pages/Advisory';
import Advisor from './pages/Advisor';
import OwnerPortal from './pages/OwnerPortal';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MarketRates from './pages/MarketRates';
import Auth from './pages/Auth';
import Settings from './pages/Settings';
import PostProperty from './pages/PostProperty';
import Commercial from './pages/Commercial';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Builders from './pages/Builders';
import CEO from './pages/CEO';
import ExpatServices from './pages/ExpatServices';
import BuilderDetails from './pages/BuilderDetails';
import NewsArticle from './pages/NewsArticle';
import ProjectDetails from './pages/ProjectDetails';
import Analytics from './pages/Analytics';
import Favorites from './pages/Favorites';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { CompareProvider } from './context/CompareContext';
import { LanguageProvider } from './context/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <CompareProvider>
            <FavoritesProvider>
              <Router>
                <div className="min-h-screen bg-v-gray flex flex-col font-sans">
                  <ScrollToTop />
                  <Header />
                  <AnimatedRoutes />
                  <Footer />
                  <FloatingActions />
                  <CompareBar />
                </div>
              </Router>
            </FavoritesProvider>
          </CompareProvider>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full"
      >
        <ErrorBoundary section="AppRoutes">
          <Routes location={location}>
            <Route path="/" element={<ErrorBoundary section="Home"><Home /></ErrorBoundary>} />
            <Route path="/search" element={<ErrorBoundary section="Search"><SearchResults /></ErrorBoundary>} />
            <Route path="/property/:id" element={<ErrorBoundary section="Property Details"><PropertyDetails /></ErrorBoundary>} />
            <Route path="/properties" element={<ErrorBoundary section="Properties"><Properties /></ErrorBoundary>} />
            <Route path="/new-projects" element={<ErrorBoundary section="New Projects"><NewProjects /></ErrorBoundary>} />
            <Route path="/neighborhoods" element={<ErrorBoundary section="Neighborhoods"><Neighborhoods /></ErrorBoundary>} />
            <Route path="/neighborhoods/:id" element={<ErrorBoundary section="Neighborhood Details"><NeighborhoodDetails /></ErrorBoundary>} />
            <Route path="/advisor" element={<ErrorBoundary section="Advisor"><Advisor /></ErrorBoundary>} />
            <Route path="/advisory/:id" element={<ErrorBoundary section="Advisory"><Advisory /></ErrorBoundary>} />
            <Route path="/favorites" element={<ErrorBoundary section="Favorites"><Favorites /></ErrorBoundary>} />
            <Route path="/list-property" element={<ErrorBoundary section="Owner Portal"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/owner-portal" element={<ErrorBoundary section="Owner Portal"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/property-management" element={<ErrorBoundary section="Property Management"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/contact" element={<ErrorBoundary section="Contact"><Contact /></ErrorBoundary>} />
            <Route path="/about" element={<ErrorBoundary section="About"><About /></ErrorBoundary>} />
            <Route path="/dashboard" element={<ErrorBoundary section="Dashboard"><ProtectedRoute><Dashboard /></ProtectedRoute></ErrorBoundary>} />
            <Route path="/profile" element={<ErrorBoundary section="Profile"><ProtectedRoute><Profile /></ProtectedRoute></ErrorBoundary>} />
            <Route path="/market-rates" element={<ErrorBoundary section="Market Rates"><MarketRates /></ErrorBoundary>} />
            <Route path="/auth" element={<ErrorBoundary section="Authentication"><Auth /></ErrorBoundary>} />
            <Route path="/settings" element={<ErrorBoundary section="Settings"><ProtectedRoute><Settings /></ProtectedRoute></ErrorBoundary>} />
            <Route path="/post-property" element={<ErrorBoundary section="Post Property"><ProtectedRoute><PostProperty /></ProtectedRoute></ErrorBoundary>} />
            <Route path="/commercial" element={<ErrorBoundary section="Commercial"><Commercial /></ErrorBoundary>} />
            <Route path="/news" element={<ErrorBoundary section="News"><News /></ErrorBoundary>} />
            <Route path="/faq" element={<ErrorBoundary section="FAQ"><FAQ /></ErrorBoundary>} />
            <Route path="/builders" element={<ErrorBoundary section="Builders"><Builders /></ErrorBoundary>} />
            <Route path="/ceo" element={<ErrorBoundary section="CEO"><CEO /></ErrorBoundary>} />
            <Route path="/expat-services" element={<ErrorBoundary section="Expat Services"><ExpatServices /></ErrorBoundary>} />
            <Route path="/builders/:id" element={<ErrorBoundary section="Builder Details"><BuilderDetails /></ErrorBoundary>} />
            <Route path="/news/:id" element={<ErrorBoundary section="News Article"><NewsArticle /></ErrorBoundary>} />
            <Route path="/new-projects/:id" element={<ErrorBoundary section="Project Details"><ProjectDetails /></ErrorBoundary>} />
            <Route path="/analytics" element={<ErrorBoundary section="Analytics"><ProtectedRoute><Analytics /></ProtectedRoute></ErrorBoundary>} />
          </Routes>
        </ErrorBoundary>
      </motion.div>
    </AnimatePresence>
  );
}
