import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, MessageSquare, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'retail',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Nutrigold! My name is ${formData.name || 'a customer'}. I would like to make an inquiry about: ${formData.message || 'your products'}. Phone: ${formData.phone || 'N/A'}`);
    window.open(`https://wa.me/2348079248456?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-amber uppercase tracking-widest bg-gold/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-gold-dark" /> Get In Touch
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight">
          Contact Us & Wholesale Inquiries
        </h1>
        <p className="text-warm text-base leading-relaxed">
          Have questions about home delivery, bulk 25L jerry cans, or becoming a regional Nutrigold distributor? Our team is ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-border space-y-6">
            <h3 className="font-display font-bold text-2xl text-charcoal">Our Locations</h3>
            
            <div className="space-y-4 text-sm text-charcoal">
              {/* HQ */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-border/50">
                <MapPin className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase text-warm mb-0.5">Headquarters</h4>
                  <p className="font-semibold text-charcoal leading-relaxed">
                    Plot 1, Doro-Webo Street, Ajibawo,<br />
                    Atan Ota, Ogun State
                  </p>
                </div>
              </div>

              {/* Branch */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-border/50">
                <Building2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase text-warm mb-0.5">Lagos Branch</h4>
                  <p className="font-semibold text-charcoal leading-relaxed">
                    6, Goldrim Plaza, Off Yayabator Road<br />
                    by Ajayi Junction, Ogba, Lagos State
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-border/50">
                <Phone className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase text-warm mb-0.5">Phone</h4>
                  <a href="tel:08079248456" className="font-semibold text-charcoal hover:text-amber transition-colors">
                    08079248456
                  </a>
                  <p className="text-xs text-warm mt-0.5">Mon – Sat: 8:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-green/10 border border-green/30">
                <MessageCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase text-green mb-0.5">WhatsApp</h4>
                  <a
                    href="https://wa.me/2348079248456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-charcoal hover:text-green transition-colors"
                  >
                    08079248456
                  </a>
                  <p className="text-xs text-warm mt-0.5">For price enquiries & orders</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-border/50">
                <Mail className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase text-warm mb-0.5">Email</h4>
                  <a href="mailto:Nutrigold2025@gmail.com" className="font-semibold text-charcoal hover:text-amber transition-colors">
                    Nutrigold2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-green/10 p-6 rounded-3xl border border-green/30 space-y-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green" />
              <h4 className="font-display font-bold text-base text-charcoal">Chat with Us Directly</h4>
            </div>
            <p className="text-xs text-warm leading-relaxed">
              The fastest way to get prices, place bulk orders, or inquire about distribution is via WhatsApp. Our team typically replies within minutes.
            </p>
            <a
              href="https://wa.me/2348079248456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green text-white font-display font-bold text-xs rounded-full hover:bg-green/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: 08079248456
            </a>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-charcoal mb-1">Send Us a Message</h3>
                  <p className="text-xs text-warm">Fill out the form below and our sales desk will respond within 2 hours. Or chat us directly on WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Mrs. Funke Adeleke"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 0803 123 4567"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="funke@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase mb-1">Inquiry Purpose *</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border text-sm focus:outline-none focus:border-gold"
                    >
                      <option value="retail">Home Household Purchase</option>
                      <option value="restaurant">Restaurant / Catering Bulk Supply</option>
                      <option value="distributor">Regional Wholesale Distributorship</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase mb-1">Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us what size or volume you need..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border text-sm focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full py-4 btn-primary text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-4 bg-green text-white font-display font-bold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-green/80 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-green/10 text-green flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal">Message Sent Successfully!</h3>
                <p className="text-sm text-warm max-w-md mx-auto">
                  Thank you, <strong className="text-charcoal">{formData.name}</strong>. Our sales team will contact you at <strong className="text-charcoal">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 btn-primary text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
