"use client";
import React from "react";

export const CartContext = React.createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);
  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const value = { cartItems, addToCart, removeFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
