const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// In-memory cache for API requests
const cache = new Map();

/**
 * Transforms a raw MealDB meal object into our standard Recipe object
 */
export function transformMealDbRecipe(meal) {
  if (!meal) return null;

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : 'To taste'
      });
    }
  }

  // Parse instructions into steps
  let steps = [];
  if (meal.strInstructions) {
    steps = meal.strInstructions
      .split(/\r?\n|\r/)
      .map(s => s.trim())
      .filter(s => s.length > 5 && !s.toLowerCase().startsWith('step'));
    
    if (steps.length === 0) {
      steps = [meal.strInstructions];
    }
  } else {
    steps = ['Prepare ingredients as listed and combine according to standard culinary technique.'];
  }

  // Map category / meal type
  const area = meal.strArea || 'International';
  const category = meal.strCategory || 'Main Dish';

  // Recommend oil product size based on complexity / category
  let recommendedProductId = '1l';
  if (['Beef', 'Lamb', 'Pork', 'Curry', 'Stew'].includes(category)) {
    recommendedProductId = '3l';
  } else if (['Seafood', 'Chicken', 'Vegetarian', 'Side'].includes(category)) {
    recommendedProductId = '1l';
  } else if (['Pasta', 'Dessert'].includes(category)) {
    recommendedProductId = '1l';
  }

  return {
    id: `api-${meal.idMeal}`,
    mealDbId: meal.idMeal,
    isNutrigoldRecipe: false,
    title: meal.strMeal,
    category: category.toLowerCase(),
    cuisine: area,
    mealType: category.toLowerCase(),
    imageUrl: meal.strMealThumb || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&auto=format',
    prepTime: '25-45 min',
    difficulty: 'Medium',
    description: `${area} ${category} recipe from international culinary collection.`,
    ingredients,
    steps,
    recommendedProductId
  };
}

/**
 * Search recipes from TheMealDB by keyword query
 */
export async function searchMealDbRecipes(query = '') {
  const cacheKey = `search:${query.toLowerCase().trim()}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    const recipes = (data.meals || []).map(transformMealDbRecipe).filter(Boolean);
    cache.set(cacheKey, recipes);
    return recipes;
  } catch (err) {
    console.warn('TheMealDB API error:', err);
    return [];
  }
}

/**
 * Fetch a single recipe from TheMealDB by meal ID
 */
export async function fetchMealDbRecipeById(mealId) {
  const cleanId = mealId.replace('api-', '');
  const cacheKey = `id:${cleanId}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${cleanId}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    if (data.meals && data.meals.length > 0) {
      const recipe = transformMealDbRecipe(data.meals[0]);
      cache.set(cacheKey, recipe);
      return recipe;
    }
    return null;
  } catch (err) {
    console.warn('TheMealDB API lookup error:', err);
    return null;
  }
}
