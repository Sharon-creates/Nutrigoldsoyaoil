import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

import NutrigoldLogo from './NutrigoldLogo';

export default function Navbar() {
  const { navigate, cartCount, page, setIsCartOpen } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Recipes', id: 'recipes' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    navigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-border shadow-sm py-2' : 'bg-cream/90 backdrop-blur-md py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Official Nutrigold Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center group text-left focus:outline-none hover:scale-105 transition-transform"
          >
            <NutrigoldLogo className="h-28 sm:h-32 py-1" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/70 p-1.5 rounded-full border border-border/60 shadow-inner">
            {navLinks.map((link) => {
              const isActive = page === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-5 py-2 rounded-full font-display font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-charcoal text-cream shadow-md scale-105'
                      : 'text-charcoal/80 hover:text-charcoal hover:bg-gold/20'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-gold text-charcoal font-bold hover:bg-gold-dark hover:text-white transition-all shadow-md active:scale-95 flex items-center gap-2"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline font-display text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-charcoal text-gold text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-cream animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white border border-border text-charcoal hover:bg-gold/20 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-border animate-fadeInUp px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = page === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-display font-bold text-base transition-all ${
                    isActive
                      ? 'bg-gold text-charcoal shadow-sm'
                      : 'text-charcoal hover:bg-gold/10'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
            <div className="pt-2 mt-2 border-t border-border/50">
              <button
                onClick={() => {
                  navigate('products');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 btn-primary flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Shop Nutrigold Soya Oil
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
