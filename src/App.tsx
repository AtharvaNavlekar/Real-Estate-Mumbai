/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
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
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-v-gray flex flex-col font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/new-projects" element={<NewProjects />} />
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/neighborhoods/:id" element={<NeighborhoodDetails />} />
          <Route path="/advisory/:id" element={<Advisory />} />
          <Route path="/list-property" element={<OwnerPortal />} />
          <Route path="/property-management" element={<OwnerPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/market-rates" element={<MarketRates />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post-property" element={<PostProperty />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="/ceo" element={<CEO />} />
        </Routes>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
