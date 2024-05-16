"use client";
import React from "react";
import useEscapeKey from "../../hooks/use-keydown.hook";

export const CartContext = React.createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);
  const [showNotice, setShowNotice] = React.useState(false);
  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(id) {
    const nextCartItems = cartItems.filter((cartItem) => cartItem.ProductID !== id);
    setCartItems(nextCartItems);
  }

  function quantityChange(ProductID, type) {
    const currentCartItem = cartItems.find((item) => item.ProductID === ProductID);
    if (type === "plus") {
      currentCartItem.Quantity += 1;
    } else if (type === "minus") {
      if (currentCartItem.Quantity <= 1) {
        removeFromCart(ProductID);
        return;
      }
      currentCartItem.Quantity -= 1;
    }

    const index = cartItems.findIndex((item) => item.ProductID === ProductID);
    setCartItems([...cartItems.slice(0, index), currentCartItem, ...cartItems.slice(index + 1)]);
  }

  function clearCart() {
    setCartItems([]);
  }

  const handleEscape = React.useCallback(() => {
    setShowNotice(false);
  }, []);

  useEscapeKey("Escape", handleEscape);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, quantityChange, clearCart, showNotice, setShowNotice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
