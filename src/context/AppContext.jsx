import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { PRODUCTS } from '../data/products';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [page, setPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('5l');
  const [cartItems, setCartItems] = useState([
    { productId: '5l', quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState(null);

  const navigate = useCallback((targetPage, productId = null) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const addToCart = useCallback((productId, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, quantity }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      return acc + (prod ? prod.price * item.quantity : 0);
    }, 0);
  }, [cartItems]);

  const formatCurrency = useCallback((amount) => {
    return `₦${amount.toLocaleString()}`;
  }, []);

  return (
    <AppContext.Provider value={{
      page,
      selectedProductId,
      cartItems,
      isCartOpen,
      setIsCartOpen,
      selectedRecipe,
      setSelectedRecipe,
      isCheckoutOpen,
      setIsCheckoutOpen,
      selectedDetailProduct,
      setSelectedDetailProduct,
      navigate,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      formatCurrency
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
