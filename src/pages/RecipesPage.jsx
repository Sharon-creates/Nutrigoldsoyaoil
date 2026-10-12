import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NUTRIGOLD_RECIPES } from '../data/recipes';
import { searchMealDbRecipes } from '../services/recipeApi';
import { ChefHat, Clock, Search, ArrowRight, Sparkles, Award, Globe, Loader2 } from 'lucide-react';

export default function RecipesPage() {
  const { setSelectedRecipe, navigate } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [apiRecipes, setApiRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { label: 'All Recipes', id: 'all' },
    { label: 'Nigerian Classics', id: 'nigerian' },
    { label: 'Breakfast', id: 'breakfast' },
    { label: 'Lunch', id: 'lunch' },
    { label: 'Dinner', id: 'dinner' },
    { label: 'Snacks', id: 'snacks' },
  ];

  // Fetch API recipes when search query or category changes
  useEffect(() => {
    let isMounted = true;
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        let results = [];
        if (searchQuery.trim().length > 0) {
          results = await searchMealDbRecipes(searchQuery.trim());
        } else if (activeCategory !== 'nigerian') {
          // Fetch default API items based on active category
          const searchTerm = activeCategory === 'all' ? 'c' : activeCategory;
          results = await searchMealDbRecipes(searchTerm);
        }
        if (isMounted) {
          setApiRecipes(results);
        }
      } catch (err) {
        console.error('Error fetching recipes:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(fetchRecipes, 300);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery, activeCategory]);

  // Filter local Nutrigold Nigerian recipes
  const filteredLocalRecipes = NUTRIGOLD_RECIPES.filter(recipe => {
    const matchesCategory = activeCategory === 'all' || 
                            activeCategory === 'nigerian' || 
                            recipe.category === activeCategory || 
                            recipe.mealType === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
                          recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter API recipes
  const filteredApiRecipes = (activeCategory === 'nigerian' ? [] : apiRecipes).filter(recipe => {
    const matchesSearch = searchQuery.trim() === '' ||
                          recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Combine local recipes first, followed by API recipes
  const combinedRecipes = [...filteredLocalRecipes, ...filteredApiRecipes];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      
      {/* Top Navigation Bar with Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-charcoal hover:bg-gold/20 transition-all font-display font-semibold text-xs sm:text-sm shadow-sm active:scale-95"
          aria-label="Back to Home"
        >
          <ArrowRight className="w-4 h-4 rotate-180 text-charcoal" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <span className="text-xs font-bold text-amber uppercase tracking-widest bg-gold/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <ChefHat className="w-4 h-4 text-gold-dark" /> Kitchen Companion
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-tight">
          Nigerian & International Recipes
        </h1>
        <p className="text-warm text-sm sm:text-base leading-relaxed px-2">
          Master authentic Nigerian delicacies and global favorites with step-by-step cooking guides, exact ingredient measurements, and recommended Nutrigold Soya Oil sizes.
        </p>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-border shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
              }}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-cream shadow-md scale-105'
                  : 'bg-cream text-charcoal hover:bg-gold/20'
              }`}
            >
              {cat.label} {cat.id === 'nigerian' && `(${NUTRIGOLD_RECIPES.length})`}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-warm absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search recipes (e.g. Jollof, Egusi, Chicken)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-full bg-cream border border-border text-xs focus:outline-none focus:border-gold"
          />
          {isLoading && (
            <Loader2 className="w-4 h-4 text-amber absolute right-3.5 top-3 animate-spin" />
          )}
        </div>
      </div>

      {/* Loading Skeleton State */}
      {isLoading && combinedRecipes.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl border border-border overflow-hidden h-96 animate-pulse">
              <div className="h-52 bg-ivory" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-border/50 rounded w-1/3" />
                <div className="h-6 bg-border/50 rounded w-2/3" />
                <div className="h-3 bg-border/30 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : combinedRecipes.length > 0 ? (
        /* Recipes Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {combinedRecipes.map((recipe, idx) => (
            <div
              key={recipe.id || idx}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-white rounded-3xl border border-border overflow-hidden card-hover cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Recipe Image Container */}
                <div className="relative h-52 bg-ivory overflow-hidden">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&auto=format';
                    }}
                  />

                  {/* Badge: Nutrigold vs API Cuisine */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    {recipe.isNutrigoldRecipe ? (
                      <span className="bg-gold text-charcoal font-display font-extrabold text-xs px-3 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-charcoal" /> Nutrigold Recipe
                      </span>
                    ) : (
                      <span className="bg-charcoal/80 backdrop-blur-md text-gold font-display font-bold text-xs px-3 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5" /> {recipe.cuisine || 'International'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Recipe Meta */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-warm mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> {recipe.prepTime || '30 min'}</span>
                    <span className="flex items-center gap-1"><ChefHat className="w-3.5 h-3.5 text-gold" /> {recipe.difficulty || 'Medium'}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-amber transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>

                  <p className="text-warm text-xs mt-2 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-amber">View Ingredients & Steps</span>
                <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-white rounded-3xl border border-border space-y-4 max-w-xl mx-auto p-8 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-ivory flex items-center justify-center text-charcoal">
            <ChefHat className="w-8 h-8 text-warm" />
          </div>
          <h3 className="font-display font-bold text-xl text-charcoal">No recipes found matching "{searchQuery}"</h3>
          <p className="text-warm text-xs">
            Try searching for classic Nigerian terms like "Jollof", "Egusi", "Plantain", "Chicken", or clear search filters.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="px-6 py-2.5 btn-primary text-xs inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Show All Recipes</span>
          </button>
        </div>
      )}

    </div>
  );
}
