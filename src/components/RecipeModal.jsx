import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { X, Clock, ChefHat, Check, ShoppingBag, Sparkles, Globe, Award } from 'lucide-react';

export default function RecipeModal() {
  const { selectedRecipe, setSelectedRecipe, addToCart, formatCurrency } = useApp();

  if (!selectedRecipe) return null;

  const recProduct = PRODUCTS.find(p => p.id === selectedRecipe.recommendedProductId) || PRODUCTS[0];

  const handleBuyOil = () => {
    addToCart(recProduct.id, 1);
    setSelectedRecipe(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fadeInUp">
      <div className="bg-cream rounded-2xl sm:rounded-3xl border border-border max-w-3xl w-full overflow-hidden shadow-2xl relative my-4 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Header Hero Image & Navigation */}
        <div className="relative min-h-[220px] h-60 sm:h-72 overflow-hidden bg-charcoal flex-shrink-0">
          <img
            src={selectedRecipe.imageUrl}
            alt={selectedRecipe.title}
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&auto=format';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
          
          {/* Top Buttons: Back & Close */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 flex items-center justify-between">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-gold text-charcoal font-display font-bold text-xs transition-colors shadow-md active:scale-95"
              aria-label="Back to Recipes"
            >
              <span className="text-sm leading-none">&larr;</span>
              <span>Back</span>
            </button>

            <button
              onClick={() => setSelectedRecipe(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-gold text-charcoal transition-colors shadow-md active:scale-95"
              aria-label="Close Recipe"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-cream space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              {selectedRecipe.isNutrigoldRecipe ? (
                <span className="bg-gold text-charcoal font-display font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-charcoal" /> Nutrigold Recipe
                </span>
              ) : (
                <span className="bg-amber text-white font-display font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {selectedRecipe.cuisine || 'International'}
                </span>
              )}

              {selectedRecipe.category && (
                <span className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase font-medium">
                  {selectedRecipe.category}
                </span>
              )}
              
              <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold" /> {selectedRecipe.prepTime || '25-40 min'}
              </span>
              <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                <ChefHat className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold" /> {selectedRecipe.difficulty || 'Medium'}
              </span>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-3xl text-cream leading-tight line-clamp-2">
              {selectedRecipe.title}
            </h2>
            {selectedRecipe.description && (
              <p className="text-white/85 text-xs sm:text-sm max-w-xl line-clamp-2 sm:line-clamp-none">
                {selectedRecipe.description}
              </p>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1">
          
          {/* Recommended Oil Callout Banner */}
          <div className="bg-gradient-to-r from-gold/20 via-ivory to-gold/20 p-4 sm:p-5 rounded-2xl border border-gold/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold text-charcoal flex items-center justify-center font-display font-extrabold text-lg shadow-sm flex-shrink-0">
                {recProduct.size}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber block">Chef's Recommended Cooking Oil</span>
                <h4 className="font-display font-bold text-base text-charcoal">{recProduct.name}</h4>
                <p className="text-xs text-warm">{recProduct.shortDesc}</p>
              </div>
            </div>

            <button
              onClick={handleBuyOil}
              className="w-full sm:w-auto px-5 py-3 sm:py-2.5 btn-primary text-xs flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add {recProduct.size} Oil to Cart</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Ingredients Column */}
            <div className="md:col-span-1 space-y-4 bg-white p-4 sm:p-5 rounded-2xl border border-border">
              <h3 className="font-display font-bold text-base sm:text-lg text-charcoal border-b border-border pb-2">
                Ingredients ({selectedRecipe.ingredients ? selectedRecipe.ingredients.length : 0})
              </h3>
              <ul className="space-y-2.5 text-xs text-charcoal">
                {selectedRecipe.ingredients && selectedRecipe.ingredients.map((item, i) => {
                  const ingText = typeof item === 'string' ? item : item.ingredient;
                  const measureText = typeof item === 'object' && item.measure ? item.measure : '';
                  return (
                    <li key={i} className="flex items-start gap-2 border-b border-border/30 pb-1.5 last:border-0">
                      <Check className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                      <div className="flex justify-between w-full">
                        <span className="font-medium text-charcoal">{ingText}</span>
                        {measureText && <span className="text-warm font-semibold ml-1">{measureText}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Preparation Steps Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-display font-bold text-base sm:text-lg text-charcoal border-b border-border pb-2">
                Step-by-Step Cooking Instructions
              </h3>
              <ol className="space-y-3 sm:space-y-4">
                {selectedRecipe.steps && selectedRecipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4 items-start bg-white p-3.5 sm:p-4 rounded-2xl border border-border">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold text-charcoal font-display font-extrabold text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm flex items-center gap-1 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" /> Cooked best with Nutrigold 100% Pure Soya Oil
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-charcoal font-display font-bold text-xs text-charcoal hover:bg-charcoal hover:text-cream transition-colors text-center"
            >
              &larr; Back to Recipes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
