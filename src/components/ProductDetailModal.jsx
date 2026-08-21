import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeInUp">
      <div className="bg-cream rounded-3xl border border-border max-w-2xl w-full overflow-hidden shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedDetailProduct(null)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-gold text-charcoal transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Side */}
          <div className="bg-ivory p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-border">
            {selectedDetailProduct.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-amber text-white font-display font-extrabold text-xs rounded-full shadow-md">
                {selectedDetailProduct.badge}
              </span>
            )}
            <img
              src={selectedDetailProduct.image}
              alt={selectedDetailProduct.name}
              className="max-h-72 w-full object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green bg-green-light px-3 py-1 rounded-full inline-block mb-3">
                {selectedDetailProduct.size} Pack
              </span>
              <h2 className="font-display font-bold text-2xl text-charcoal">
                {selectedDetailProduct.name}
              </h2>
              <p className="text-warm text-xs mt-2 leading-relaxed">
                {selectedDetailProduct.longDesc}
              </p>

              {/* Nutrition Facts Table */}
              <div className="mt-5 bg-white p-3.5 rounded-2xl border border-border">
                <h4 className="font-display font-bold text-xs text-charcoal uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Award className="w-4 h-4 text-gold" /> Nutrition Facts (Per 100ml)
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  {selectedDetailProduct.nutritionPer100ml.map((fact, i) => (
                    <div key={i} className="flex justify-between border-b border-border/40 py-1">
                      <span className="text-warm font-medium">{fact.label}:</span>
                      <span className="font-bold text-charcoal">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature List */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {selectedDetailProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-warm uppercase font-bold tracking-wider block">Price</span>
                  <span className="font-display font-extrabold text-2xl text-amber">
                    {formatCurrency(selectedDetailProduct.price * quantity)}
                  </span>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center gap-2 bg-white border border-border rounded-xl px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-gold/20 rounded text-charcoal"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-display font-bold text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-gold/20 rounded text-charcoal"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full py-3.5 btn-primary text-base flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add {quantity} to Cart ({formatCurrency(selectedDetailProduct.price * quantity)})</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
