import React from 'react';
import { useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import RecipeModal from './components/RecipeModal';
import CheckoutModal from './components/CheckoutModal';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import RecipesPage from './pages/RecipesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const { page } = useApp();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ShopPage />;
      case 'recipes':
        return <RecipesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFBF3] text-[#1C1917] font-body selection:bg-gold selection:text-charcoal">
      <Navbar />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Global Modals & Overlay Drawers */}
      <CartDrawer />
      <ProductDetailModal />
      <RecipeModal />
      <CheckoutModal />
    </div>
  );
}
