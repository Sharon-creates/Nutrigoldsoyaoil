import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductBottle from './ProductBottle';
import { X, CheckCircle2, ShoppingBag, Plus, Minus, ShieldCheck, Award } from 'lucide-react';

export default function ProductDetailModal() {
  const { selectedDetailProduct, setSelectedDetailProduct, addToCart, formatCurrency } = useApp();
  const [quantity, setQuantity] = useState(1);

  if (!selectedDetailProduct) return null;

  const handleAdd = () => {
    addToCart(selectedDetailProduct.id, quantity);
    setSelectedDetailProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeInUp">
      <div className="bg-cream rounded-2xl sm:rounded-3xl border border-border max-w-2xl w-full overflow-hidden shadow-2xl relative my-4 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Navigation & Action Bar on Mobile/Desktop */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={() => setSelectedDetailProduct(null)}
            className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-gold text-charcoal font-display font-bold text-xs transition-colors shadow-md active:scale-95"
            aria-label="Back"
          >
            <span className="text-sm leading-none">&larr;</span>
            <span>Back</span>
          </button>

          <button
            onClick={() => setSelectedDetailProduct(null)}
            className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-gold text-charcoal transition-colors shadow-md active:scale-95"
            aria-label="Close Product Details"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Side */}
          <div className="bg-ivory/80 pt-14 pb-6 px-6 sm:p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-border min-h-[220px] sm:min-h-[280px]">
            {selectedDetailProduct.badge && (
              <span className="absolute bottom-3 left-4 sm:top-4 sm:left-4 px-3 py-1 bg-amber text-white font-display font-extrabold text-xs rounded-full shadow-md z-10">
                {selectedDetailProduct.badge}
              </span>
            )}
            
            {/* Bottle image rendered completely without cropping */}
            <div className="w-full h-48 sm:h-64 flex items-center justify-center p-2">
              <ProductBottle
                size={selectedDetailProduct.id}
                className="max-h-full max-w-full drop-shadow-xl"
              />
            </div>
          </div>

          {/* Details Side */}
          <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green bg-green-light px-3 py-1 rounded-full inline-block mb-2 sm:mb-3">
                {selectedDetailProduct.size} Pack
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-charcoal leading-snug">
                {selectedDetailProduct.name}
              </h2>
              <p className="text-warm text-xs sm:text-sm mt-2 leading-relaxed">
                {selectedDetailProduct.longDesc}
              </p>

              {/* Feature List */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDetailProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-border space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-xs font-bold text-warm uppercase tracking-wider sm:hidden">
                  Quantity:
                </span>

                {/* Quantity selector */}
                <div className="flex items-center gap-2 bg-white border border-border rounded-xl px-3 py-1.5 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-gold/20 rounded text-charcoal active:scale-95 transition-transform"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-display font-bold text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-gold/20 rounded text-charcoal active:scale-95 transition-transform"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full py-3.5 btn-primary text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg active:scale-98"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add {quantity} to Cart</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
