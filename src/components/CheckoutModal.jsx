import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { X, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '2348079248456';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, clearCart } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSent, setIsSent] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the product list lines
    const productLines = cartItems
      .map((item) => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (!product) return null;
        return `• ${product.name} - ${product.size} × ${item.quantity}`;
      })
      .filter(Boolean)
      .join('\n');

    // Build the WhatsApp message
    const message = 
`Hello Nutrigold, I would like to request the prices for the following products:

${productLines}

Customer Name: ${formData.name}
Phone: ${formData.phone}

Please send me the prices and total cost. Thank you.`;

    // Encode & open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    clearCart();
    handleClose();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSent(false);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeInUp">
      <div className="bg-cream rounded-3xl border border-border max-w-lg w-full overflow-hidden shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white hover:bg-gold text-charcoal transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSent ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="border-b border-border pb-4">
              <span className="text-xs font-bold text-green uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <MessageCircle className="w-4 h-4" /> Price Request via WhatsApp
              </span>
              <h2 className="font-display font-bold text-2xl text-charcoal">Request Nutrigold Prices</h2>
              <p className="text-xs text-warm mt-1">
                Enter your name and phone number. We'll open WhatsApp with your cart details so our team can send you the prices and total cost directly.
              </p>
            </div>

            {/* Order Summary (no prices) */}
            <div className="bg-white rounded-2xl border border-border p-4 space-y-2">
              <h3 className="font-display font-bold text-sm text-charcoal mb-3">Your Selected Products</h3>
              {cartItems.map((item) => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                if (!product) return null;
                return (
                  <div key={item.productId} className="flex items-center justify-between text-xs py-2 border-b border-border/40 last:border-0">
                    <div className="flex items-center gap-2">
                      <img src={product.image} alt={product.name} className="w-8 h-8 rounded-lg object-cover border border-border" />
                      <div>
                        <span className="font-bold text-charcoal block">{product.name}</span>
                        <span className="text-warm">{product.size} bottle</span>
                      </div>
                    </div>
                    <span className="font-display font-bold text-charcoal">× {item.quantity}</span>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chidi Okafor"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1">Your Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0801 234 5678"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <p className="text-[11px] text-warm/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green flex-shrink-0" />
                WhatsApp will open with your cart details pre-filled. Just press Send.
              </p>

              <button
                type="submit"
                className="w-full py-4 btn-primary text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open WhatsApp & Request Prices</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-green/20 border-2 border-green text-green flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-green uppercase tracking-widest bg-green/10 px-3 py-1 rounded-full">
                WhatsApp Opened!
              </span>
              <h2 className="font-display font-bold text-3xl text-charcoal">Request Sent, {formData.name}!</h2>
              <p className="text-sm text-warm max-w-md mx-auto">
                Your cart has been shared on WhatsApp. Our Nutrigold team will reply with prices and total cost shortly.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-border max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                <MessageCircle className="w-4 h-4 text-green" />
                <span className="font-bold text-charcoal">Nutrigold WhatsApp</span>
                <span className="text-warm ml-auto">08079248456</span>
              </div>
              <p className="text-warm leading-relaxed">
                If WhatsApp didn't open, message us manually at <strong className="text-charcoal">08079248456</strong> and mention you submitted a price request.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 btn-primary text-sm inline-flex items-center gap-2"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
