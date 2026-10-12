import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import NutrigoldLogo from './NutrigoldLogo';

export default function Footer() {
  const { navigate } = useApp();

  return (
    <footer className="bg-charcoal text-cream border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-2.5 sm:col-span-2 lg:col-span-1 -mt-2">
            <div>
              <img
                src="/assets/footer-logo.png"
                alt="Nutrigold"
                className="h-32 sm:h-36 object-contain filter contrast-125 brightness-110 drop-shadow-[0_2px_10px_rgba(245,168,0,0.25)]"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed -mt-1">
              Nigeria's trusted 100% pure cold-pressed soya oil. Crafted for household cooking, frying, baking, and commercial food production with zero cholesterol.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-0.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nutrigoldsoyaoil?igsh=YWhsemN2YW43amNu"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Nutrigold on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61566229362856"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Nutrigold on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@nutrigoldsoyaoil?_r=1&_t=ZS-95jKGbusos8"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                aria-label="Nutrigold on TikTok"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01 1.01.55 1.96 1.38 2.49.93.6 2.14.66 3.1.18.91-.44 1.56-1.37 1.63-2.38.08-2.95.03-5.91.04-8.86-.01-3.68.01-7.36-.01-11.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-base text-gold tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Shop Oil Sizes', page: 'products' },
                { label: 'Nigerian Recipes', page: 'recipes' },
                { label: 'Our Cold-Press Process', page: 'about' },
                { label: 'Wholesale & Distributors', page: 'contact' },
              ].map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-base text-gold tracking-wide uppercase">
              Reach Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-snug">
                  Plot 1, Doro-Webo St, Ajibawo,<br />Atan Ota, Ogun State
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-snug">
                  6, Goldrim Plaza, Ogba, Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:08123453429"
                    className="text-sm text-white/90 hover:text-gold transition-colors duration-200 font-semibold"
                  >
                    08123453429
                  </a>
                  <span className="text-[11px] text-white/50">Call / Customer Care</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="https://wa.me/2348079248456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-green transition-colors duration-200 font-semibold"
                  >
                    08079248456
                  </a>
                  <span className="text-[11px] text-green/80 font-medium">WhatsApp Orders</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:Nutrigold2025@gmail.com"
                  className="text-sm text-white/70 hover:text-gold transition-colors duration-200 break-all"
                >
                  Nutrigold2025@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-base text-gold tracking-wide uppercase">
              Cook With Us
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Subscribe for recipes, cooking tips, and wholesale pricing updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Nutrigold updates!');
              }}
              className="flex flex-col gap-2.5"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-cream placeholder:text-white/35 text-sm focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-gold text-charcoal font-display font-bold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-1.5"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nutrigold Nigeria Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green" />
              NAFDAC Approved Quality
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-red-500" />
              Made for Every Kitchen
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
