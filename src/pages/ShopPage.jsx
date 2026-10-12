import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter, ShieldCheck, Sparkles } from 'lucide-react';

export default function ShopPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-amber uppercase tracking-widest bg-gold/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" /> Factory Direct Purity
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight">
          Shop Nutrigold Soya Oil
        </h1>
        <p className="text-warm text-base leading-relaxed">
          From compact 1L bottles for singles to 25L commercial jerry cans for restaurants. Sealed fresh and delivered to your doorstep.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-border shadow-sm">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-5 py-2 rounded-full font-display font-bold text-xs transition-all whitespace-nowrap ${
              filterCategory === 'all'
                ? 'bg-charcoal text-cream shadow-md'
                : 'bg-cream text-charcoal hover:bg-gold/20'
            }`}
          >
            All Sizes ({PRODUCTS.length})
          </button>

          <button
            onClick={() => setFilterCategory('household')}
            className={`px-5 py-2 rounded-full font-display font-bold text-xs transition-all whitespace-nowrap ${
              filterCategory === 'household'
                ? 'bg-charcoal text-cream shadow-md'
                : 'bg-cream text-charcoal hover:bg-gold/20'
            }`}
          >
            Household (1L - 5L)
          </button>

          <button
            onClick={() => setFilterCategory('bulk')}
            className={`px-5 py-2 rounded-full font-display font-bold text-xs transition-all whitespace-nowrap ${
              filterCategory === 'bulk'
                ? 'bg-charcoal text-cream shadow-md'
                : 'bg-cream text-charcoal hover:bg-gold/20'
            }`}
          >
            Commercial Bulk (25L)
          </button>
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-warm absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search oil sizes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-cream border border-border text-xs focus:outline-none focus:border-gold"
          />
        </div>

      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-border space-y-3">
          <p className="text-warm font-display font-bold text-lg">No oil sizes found matching "{searchQuery}"</p>
          <button
            onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
            className="px-5 py-2 btn-primary text-xs"
          >
            Reset Search Filters
          </button>
        </div>
      )}



    </div>
  );
}
