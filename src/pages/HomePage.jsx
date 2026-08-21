import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { RECIPES } from '../data/recipes';
import ProductCard from '../components/ProductCard';
import ProductBottle from '../components/ProductBottle';
import { ArrowRight, ChefHat, Sparkles } from 'lucide-react';

export default function HomePage() {
  const { navigate, addToCart, setSelectedRecipe } = useApp();

  return (
    <div className="min-h-screen bg-cream">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFFBF3] via-[#FFF3D0]/60 to-[#FFFBF3]">
        
        {/* Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-border text-amber font-display font-semibold text-xs uppercase tracking-widest shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span>100% Pure Soya Cooking Oil</span>
              </div>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-charcoal tracking-tight leading-[1.05]">
                Pure Goodness,<br />
                <span className="gold-shimmer-text">Golden Quality.</span>
              </h1>

              <p className="text-warm text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cold-pressed soya oil, crafted for everyday cooking. High smoke point, zero cholesterol, and rich in Vitamin E — bringing out the best in every meal.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => navigate('products')}
                  className="w-full sm:w-auto px-8 py-4 btn-primary text-base flex items-center justify-center gap-3 shadow-xl"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate('recipes')}
                  className="w-full sm:w-auto px-8 py-4 btn-outline text-base flex items-center justify-center gap-2"
                >
                  <ChefHat className="w-5 h-5" />
                  <span>Explore Recipes</span>
                </button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-4">
                {['✨ Pure Soya', '🔥 High Smoke Point', '💚 Heart Healthy'].map((pill, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/80 border border-border text-xs font-display font-semibold text-charcoal/80">
                    {pill}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Hero Bottles Visual Composition */}
            <div className="relative flex items-center justify-center h-[480px] md:h-[560px]">
              
              {/* Radial Golden Aura */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 340,
                  height: 340,
                  background: 'radial-gradient(circle, rgba(245,168,0,0.22) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
              />

              {/* Floating 1L Bottle */}
              <div className="absolute left-2 md:left-8 bottom-16 animate-float-delay2 opacity-85 hover:opacity-100 transition-opacity">
                <ProductBottle size="1l" className="drop-shadow-xl" style={{ height: 140 }} />
              </div>

              {/* Floating 3L Bottle */}
              <div className="absolute right-4 md:right-12 bottom-20 animate-float-delay opacity-85 hover:opacity-100 transition-opacity">
                <ProductBottle size="3l" className="drop-shadow-xl" style={{ height: 165 }} />
              </div>

              {/* Centerpiece Floating 5L Jerry Can */}
              <div className="relative z-10 animate-float-slow group cursor-pointer" onClick={() => navigate('products', '5l')}>
                <ProductBottle size="5l" className="drop-shadow-2xl group-hover:scale-105 transition-transform" style={{ height: 320 }} />
                
                {/* Ripple Effect Ring */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    animation: 'ripple 3s ease-out infinite',
                    border: '2px solid rgba(245,168,0,0.3)',
                    borderRadius: '50%'
                  }}
                />
              </div>

              {/* Cool Animated Golden Oil Drop */}
              <div className="absolute top-8 right-4 md:right-8 animate-float-delay flex flex-col items-center pointer-events-none">
                <div className="relative w-14 h-18 flex items-center justify-center filter drop-shadow-lg">
                  {/* Glowing background aura */}
                  <div className="absolute inset-0 bg-gold/30 rounded-full blur-md animate-pulse" />
                  
                  <svg viewBox="0 0 100 120" className="w-full h-full transform hover:scale-110 transition-transform duration-500">
                    {/* Golden Liquid Drop Body */}
                    <path
                      d="M50 5 C50 5 15 55 15 75 C15 94.33 30.67 110 50 110 C69.33 110 85 94.33 85 75 C85 55 50 5 50 5 Z"
                      fill="url(#heroOilDropGrad)"
                    />
                    
                    {/* Inner Shimmer Reflection */}
                    <path
                      d="M44 18 C44 18 24 58 24 73 C24 84 31 92 41 94 C34 89 31 79 33 71 C36 59 44 18 44 18 Z"
                      fill="#FFF7E0"
                      opacity="0.8"
                    />
                    
                    {/* Specular Highlight Dot */}
                    <circle cx="62" cy="78" r="4" fill="#FFFFFF" opacity="0.85" />

                    <defs>
                      <linearGradient id="heroOilDropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE49E" />
                        <stop offset="35%" stopColor="#F5A800" />
                        <stop offset="75%" stopColor="#D97000" />
                        <stop offset="100%" stopColor="#B34B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-12 left-6 text-4xl animate-float opacity-70">
                🌿
              </div>

            </div>

          </div>
        </div>



      </section>

      {/* 2. OUR RANGE SECTION */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-ivory rounded-full text-xs font-display font-semibold text-amber mb-3 uppercase tracking-widest">
                Our Range
              </div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal">
                Find Your Perfect<br />
                <span className="gold-shimmer-text">Size</span>
              </h2>
            </div>

            <button
              onClick={() => navigate('products')}
              className="btn-outline px-6 py-3 text-sm flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE NUTRIGOLD DIFFERENCE */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, #FFFBF3 0%, #FFF3D0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-2">
            <div className="inline-block px-3 py-1 bg-ivory rounded-full text-xs font-display font-semibold text-amber uppercase tracking-widest">
              Why Choose Us
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal">
              The Nutrigold Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✨', title: 'Pure & Refined', desc: 'Triple-refined soya oil for a clean, neutral taste that enhances every dish without overpowering it.' },
              { icon: '🔥', title: 'High Smoke Point', desc: 'Perfect for deep frying, stir-frying, and everyday cooking — handles high heat without breaking down.' },
              { icon: '💚', title: 'Heart-Healthy', desc: 'Rich in polyunsaturated fats and Vitamin E. Zero cholesterol, naturally good for your family.' },
              { icon: '🏭', title: 'NAFDAC Approved', desc: 'Certified by Nigerian standards. Every batch tested for purity and quality before leaving our facility.' },
              { icon: '📦', title: 'All Sizes Available', desc: 'From 1L for individuals to 25L for businesses — Nutrigold has the right size for every need.' },
              { icon: '🇳🇬', title: 'Made in Nigeria', desc: 'Proudly produced in Nigeria. Supporting local agriculture and delivering freshness to your table.' }
            ].map((item, idx) => (
              <div key={idx} className="card-hover group p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                <p className="text-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. RECIPES SHOWCASE */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-ivory rounded-full text-xs font-display font-semibold text-amber mb-3 uppercase tracking-widest">
                Delicious Recipes
              </div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal">
                Cook With Nutrigold
              </h2>
            </div>
            <button
              onClick={() => navigate('recipes')}
              className="btn-outline px-6 py-3 text-sm flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore All Recipes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECIPES.slice(0, 3).map(recipe => (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                className="card-hover group rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 bg-ivory overflow-hidden">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber text-white text-xs font-display font-bold px-2.5 py-1 rounded-full uppercase">
                      {recipe.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-amber transition-colors mb-1">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-warm mt-2">
                      <span>⏱ {recipe.prepTime}</span>
                      <span>· {recipe.difficulty}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-border/40 mt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber">View Recipe</span>
                  <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #F5A800 0%, #E07800 50%, #FFD060 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight">
            Ready to Cook Better?
          </h2>
          <p className="text-charcoal/80 text-lg max-w-xl mx-auto">
            Join over 500,000 Nigerian families who trust Nutrigold every day for clean, non-greasy, healthy meals.
          </p>
          <button
            onClick={() => navigate('products')}
            className="bg-charcoal text-white font-display font-extrabold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-charcoal transition-all duration-300 shadow-xl inline-flex items-center gap-3"
          >
            <span>Shop Nutrigold Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
