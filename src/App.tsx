/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CompareBar from './components/CompareBar';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import Properties from './pages/Properties';
import NewProjects from './pages/NewProjects';
import Neighborhoods from './pages/Neighborhoods';
import NeighborhoodDetails from './pages/NeighborhoodDetails';
import Advisory from './pages/Advisory';
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
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { CompareProvider } from './context/CompareContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <CompareProvider>
            <Router>
              <div className="min-h-screen bg-v-gray flex flex-col font-sans">
                <Header />
                <AnimatedRoutes />
                <Footer />                <FloatingActions />
                <CompareBar />
              </div>
            </Router>
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
        className="flex-1 flex flex-col w-full"
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
            <Route path="/advisory/:id" element={<ErrorBoundary section="Advisory"><Advisory /></ErrorBoundary>} />
            <Route path="/list-property" element={<ErrorBoundary section="Owner Portal"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/owner-portal" element={<ErrorBoundary section="Owner Portal"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/property-management" element={<ErrorBoundary section="Property Management"><OwnerPortal /></ErrorBoundary>} />
            <Route path="/contact" element={<ErrorBoundary section="Contact"><Contact /></ErrorBoundary>} />
            <Route path="/about" element={<ErrorBoundary section="About"><About /></ErrorBoundary>} />
            <Route path="/dashboard" element={<ErrorBoundary section="Dashboard"><Dashboard /></ErrorBoundary>} />
            <Route path="/profile" element={<ErrorBoundary section="Profile"><Profile /></ErrorBoundary>} />
            <Route path="/market-rates" element={<ErrorBoundary section="Market Rates"><MarketRates /></ErrorBoundary>} />
            <Route path="/auth" element={<ErrorBoundary section="Authentication"><Auth /></ErrorBoundary>} />
            <Route path="/settings" element={<ErrorBoundary section="Settings"><Settings /></ErrorBoundary>} />
            <Route path="/post-property" element={<ErrorBoundary section="Post Property"><PostProperty /></ErrorBoundary>} />
            <Route path="/commercial" element={<ErrorBoundary section="Commercial"><Commercial /></ErrorBoundary>} />
            <Route path="/news" element={<ErrorBoundary section="News"><News /></ErrorBoundary>} />
            <Route path="/faq" element={<ErrorBoundary section="FAQ"><FAQ /></ErrorBoundary>} />
            <Route path="/builders" element={<ErrorBoundary section="Builders"><Builders /></ErrorBoundary>} />
            <Route path="/ceo" element={<ErrorBoundary section="CEO"><CEO /></ErrorBoundary>} />
            <Route path="/expat-services" element={<ErrorBoundary section="Expat Services"><ExpatServices /></ErrorBoundary>} />
          </Routes>
        </ErrorBoundary>
      </motion.div>
    </AnimatePresence>
  );
}
