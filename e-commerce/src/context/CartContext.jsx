// src/context/CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // New: Wishlist state
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const productId = product._id || product.id;
      const existing = prev.find((item) => (item._id || item.id) === productId);
      if (existing) {
        return prev.map((item) =>
          (item._id || item.id) === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => (item._id || item.id) !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          (item._id || item.id) === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const productId = product._id || product.id;
      if (prev.find((item) => (item._id || item.id) === productId)) {
        return prev; // Already in wishlist
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => (item._id || item.id) !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => (item._id || item.id) === id);
  };

  const getTotalWishlistItems = () => {
    return wishlist.length;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getTotalWishlistItems,
        user,
        setUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}