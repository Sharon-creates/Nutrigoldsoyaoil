import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import NutrigoldLogo from './NutrigoldLogo';

export default function Footer() {
  const { navigate } = useApp();

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Equal Aligned Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="inline-block">
              <NutrigoldLogo className="h-20 sm:h-24" />
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Nigeria’s trusted 100% pure cold-pressed soya oil. Crafted for everyday household cooking, frying, baking, and commercial food production with zero cholesterol.
            </p>
            
            {/* Social Media Links (Instagram, Facebook, TikTok) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01 1.01.55 1.96 1.38 2.49.93.6 2.14.66 3.1.18.91-.44 1.56-1.37 1.63-2.38.08-2.95.03-5.91.04-8.86-.01-3.68.01-7.36-.01-11.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-gold mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-gold transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => navigate('products')} className="hover:text-gold transition-colors">Shop Oil Sizes</button>
              </li>
              <li>
                <button onClick={() => navigate('recipes')} className="hover:text-gold transition-colors">Nigerian Recipes</button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-gold transition-colors">Our Cold-Press Process</button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-gold transition-colors">Wholesale & Distributors</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-lg text-gold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Plot 1, Doro-Webo St, Ajibawo,<br />Atan Ota, Ogun State</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>6, Goldrim Plaza, Ogba, Lagos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:08079248456" className="hover:text-gold transition-colors">08079248456</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:Nutrigold2025@gmail.com" className="hover:text-gold transition-colors">Nutrigold2025@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg text-gold mb-4">Cook With Nutrigold</h4>
            <p className="text-xs text-white/70 mb-3">
              Subscribe for delicious recipes, cooking tips, and wholesale pricing updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Nutrigold updates!'); }} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-cream placeholder:text-white/40 text-xs focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gold text-charcoal font-display font-bold text-xs rounded-xl hover:bg-gold-light transition-colors flex items-center justify-center gap-1"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Nutrigold Nigeria Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green" /> NAFDAC Approved Quality</span>
            <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500" /> Made for Nigerian Kitchens</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
