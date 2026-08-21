import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartCount,
    setIsCheckoutOpen,
    navigate
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity animate-fadeInUp"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream shadow-2xl flex flex-col border-l border-border animate-slideInLeft">
          
          {/* Header */}
          <div className="p-5 bg-white border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-dark" />
              <h2 className="font-display font-bold text-xl text-charcoal">Your Cart ({cartCount})</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gold/20 text-warm hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* WhatsApp Price Request Banner */}
          <div className="bg-green/10 p-4 border-b border-green/20 flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-green flex-shrink-0" />
            <p className="text-xs text-charcoal font-medium leading-snug">
              Prices are provided on request via <strong className="text-green">WhatsApp</strong>. Add items and tap <strong>"Request Prices"</strong> to get your custom quote.
            </p>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-ivory border border-border flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-warm/60" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal">Your cart is empty</h3>
                <p className="text-sm text-warm max-w-xs mx-auto">
                  Explore our pure cold-pressed soya oil bottles and jerry cans.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('products');
                  }}
                  className="px-6 py-2.5 btn-primary text-sm inline-flex items-center gap-2"
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                if (!product) return null;
                return (
                  <div key={item.productId} className="p-3.5 bg-white rounded-2xl border border-border flex gap-3 shadow-sm hover:border-gold/50 transition-colors">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-ivory border border-border/50 flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-display font-bold text-sm text-charcoal">{product.name}</h4>
                            <span className="text-[10px] font-bold text-amber uppercase tracking-wide">{product.size} bottle</span>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="text-warm/60 hover:text-red-600 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 bg-cream border border-border rounded-lg px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="p-1 text-charcoal hover:bg-gold/20 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-display font-bold text-xs w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="p-1 text-charcoal hover:bg-gold/20 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-warm">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-border space-y-3">
              <p className="text-[11px] text-warm/80 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green" /> 100% Quality Guaranteed | Sealed Fresh Bottle
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 btn-primary flex items-center justify-center gap-2 text-base shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Request Prices via WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
