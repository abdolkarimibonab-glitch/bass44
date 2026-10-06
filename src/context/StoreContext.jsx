import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const StoreContext = createContext(null);

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load('atrya_cart', []));
  const [wishlist, setWishlist] = useState(() => load('atrya_wishlist', []));
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => { localStorage.setItem('atrya_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('atrya_wishlist', JSON.stringify(wishlist)); }, [wishlist]);

  const notify = useCallback((message) => {
    setToast({ message, id: Date.now() });
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, 99) } : i));
      }
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.salePrice ?? product.price,
        image: product.image,
        qty,
      }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((id, qty) => {
    setCart((prev) => (qty <= 0
      ? prev.filter((i) => i.id !== id)
      : prev.map((i) => (i.id === id ? { ...i, qty: Math.min(qty, 99) } : i))));
  }, []);

  const removeFromCart = useCallback((id) => setCart((prev) => prev.filter((i) => i.id !== id)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);
  const inWishlist = useCallback((id) => wishlist.includes(id), [wishlist]);

  const value = useMemo(() => ({
    cart, wishlist, cartOpen, toast,
    setCartOpen, addToCart, updateQty, removeFromCart, clearCart,
    toggleWishlist, inWishlist, notify,
    cartCount: cart.reduce((s, i) => s + i.qty, 0),
    cartTotal: cart.reduce((s, i) => s + i.qty * i.price, 0),
  }), [cart, wishlist, cartOpen, toast, addToCart, updateQty, removeFromCart, clearCart, toggleWishlist, notify]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}
