import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Sparkles, Truck, Factory } from 'lucide-react';

export default function AboutPage() {
  const { navigate } = useApp();

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-amber uppercase tracking-widest bg-gold/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold-dark" /> Our Story & Commitment
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight">
          Crafting Nigeria's Purest Cold-Pressed Soya Oil
        </h1>
        <p className="text-warm text-base sm:text-lg leading-relaxed">
          Nutrigold was founded with a single mission: to provide Nigerian families, chefs, and food creators with pure, nutrient-rich cooking oil that honors true flavor and promotes long-term heart health.
        </p>
      </div>

      {/* Grid Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-border shadow-sm">
        <div className="space-y-6">
          <span className="text-xs font-bold text-green uppercase tracking-widest bg-green-light px-3 py-1 rounded-full">
            Zero Chemical Solvents
          </span>
          <h2 className="font-display font-bold text-3xl text-charcoal">
            The Pure Difference in Every Drop
          </h2>
          <p className="text-warm text-sm leading-relaxed">
            Unlike mass-market refined oils that undergo high-heat chemical solvent extraction, Nutrigold uses precision mechanical cold-pressing. This guarantees that zero harsh chemicals or solvents ever touch your oil.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-charcoal">100% Non-GMO Soya Beans</h4>
                <p className="text-xs text-warm">Sourced directly from verified local Nigerian farmers.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-charcoal">High Natural Vitamin E & Omega 3/6</h4>
                <p className="text-xs text-warm">Cold extraction preserves essential fatty acids naturally.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-charcoal">High Heat Stability for Frying</h4>
                <p className="text-xs text-warm">Resists oxidation and smoking at temperatures up to 238°C.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-ivory p-4 border border-border">
          <img
            src="/assets/about-splash.jpg"
            alt="Nutrigold Pure Soya Oil Extraction"
            className="w-full h-[450px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* 4-STEP COLD PRESS PROCESS */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber uppercase tracking-widest">Transparency First</span>
          <h2 className="font-display font-bold text-3xl text-charcoal">Our 4-Step Production Standards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-border space-y-3">
            <span className="w-9 h-9 rounded-full bg-gold text-charcoal font-display font-extrabold text-sm flex items-center justify-center">1</span>
            <h3 className="font-display font-bold text-lg text-charcoal">Seed Selection</h3>
            <p className="text-warm text-xs leading-relaxed">Top-tier soya beans are double-cleaned and air-sorted to remove impurities.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-border space-y-3">
            <span className="w-9 h-9 rounded-full bg-gold text-charcoal font-display font-extrabold text-sm flex items-center justify-center">2</span>
            <h3 className="font-display font-bold text-lg text-charcoal">Cold Mechanical Press</h3>
            <p className="text-warm text-xs leading-relaxed">Oil is gently expeller-pressed under low temperature to protect natural flavor and nutrients.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-border space-y-3">
            <span className="w-9 h-9 rounded-full bg-gold text-charcoal font-display font-extrabold text-sm flex items-center justify-center">3</span>
            <h3 className="font-display font-bold text-lg text-charcoal">Triple Micro-Filtration</h3>
            <p className="text-warm text-xs leading-relaxed">Passed through cotton filters to ensure pristine clarity and smooth golden color.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-border space-y-3">
            <span className="w-9 h-9 rounded-full bg-gold text-charcoal font-display font-extrabold text-sm flex items-center justify-center">4</span>
            <h3 className="font-display font-bold text-lg text-charcoal">Fresh Batch Bottling</h3>
            <p className="text-warm text-xs leading-relaxed">Sealed in UV-resistant containers to prevent light oxidation and maintain shelf-freshness.</p>
          </div>
        </div>
      </div>

      {/* CTA Footer Card */}
      <div className="bg-charcoal text-cream p-8 sm:p-12 rounded-3xl text-center space-y-6 border-t-4 border-gold">
        <h2 className="font-display font-bold text-3xl text-cream">Experience Nutrigold in Your Kitchen</h2>
        <p className="text-white/80 text-sm max-w-xl mx-auto">
          Order directly online or contact our wholesale department for commercial volume pricing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('products')}
            className="px-8 py-3.5 btn-primary text-sm inline-flex items-center gap-2"
          >
            <span>Order Soya Oil Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
