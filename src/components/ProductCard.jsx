import React from 'react';
import { useApp } from '../context/AppContext';
import ProductBottle from './ProductBottle';
import { ShoppingBag, CheckCircle2, Star } from 'lucide-react';

const formatCapacity = (size) => {
  if (!size) return '';
  const s = size.toUpperCase();
  if (s === '1L') return '1 Liter';
  if (s === '3L') return '3 Liters';
  if (s === '5L') return '5 Liters';
  if (s === '25L') return '25 Liters';
  return `${size} Liter`;
};

export default function ProductCard({ product }) {
  const { addToCart, setSelectedDetailProduct } = useApp();

  return (
    <div className="bg-white rounded-3xl border border-border overflow-hidden card-hover flex flex-col justify-between group shadow-md">
      <div>
        {/* Card Header Image Container */}
        <div 
          onClick={() => setSelectedDetailProduct(product)}
          className="relative h-64 overflow-hidden bg-ivory/50 flex items-center justify-center p-6 border-b border-border/40 cursor-pointer"
        >
          {/* Render Bottle */}
          <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <ProductBottle size={product.id} className="max-h-52 drop-shadow-lg" />
          </div>
        </div>

        {/* Product Meta */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-green bg-green-light px-2.5 py-1 rounded-full">
              {formatCapacity(product.size)}
            </span>
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold" />
              ))}
            </div>
          </div>

          <h3 
            onClick={() => setSelectedDetailProduct(product)}
            className="font-display font-bold text-xl text-charcoal hover:text-amber cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          <p className="text-warm text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Features Pills */}
          <div className="mt-4 space-y-1.5">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 border-t border-border/40 mt-4">
        <button
          onClick={() => addToCart(product.id, 1)}
          className="w-full btn-primary py-3 text-sm flex items-center justify-center gap-2 shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
