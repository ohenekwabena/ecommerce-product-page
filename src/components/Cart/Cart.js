"use client";
import React from "react";
import UnstyledButton from "../UnstyledButton";
import { Root, Trigger, Portal, Content } from "@radix-ui/react-popover";
import styles from "./Cart.module.css";
import Button from "../Button";
import { CartContext } from "../CartContextProvider";
import { formatPrice } from "@/utils";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = React.useContext(CartContext);

  console.log(cartItems);
  function handleRemoveFromCart(id) {
    removeFromCart(id);
  }

  const totalQuantity = cartItems.reduce((total, item) => total + item.Quantity, 0);

  return (
    <Root>
      <Trigger className={styles.trigger}>
        <img className={styles.cart} src="/images/icon-cart.svg" alt="cart" />
        <span className={styles.badge} key={totalQuantity}>
          {totalQuantity}
        </span>
      </Trigger>
      <Portal>
        <Content className={styles.content}>
          <div className={styles.cart_title}>
            <h3>Cart</h3>
          </div>
          <ul className={styles.cart_items}>
            {cartItems.length > 0 ? (
              cartItems.map(({ ProductName, SalePrice, Image, OnSale, Discount, ProductID, Quantity }) => {
                function actualPrice(price, discount) {
                  return price - price * discount;
                }

                const shoePrice = OnSale ? actualPrice(SalePrice, Discount) : SalePrice;

                return (
                  <li className={styles.cart_item} key={ProductID}>
                    <img src={Image} alt="product" className={styles.item_img} />
                    <div className={styles.product_details}>
                      <p>{ProductName}</p>
                      <p>
                        {formatPrice(shoePrice)} x {Quantity}
                        {"   "}
                        <span className={styles.total}>{formatPrice(shoePrice * Quantity)}</span>
                      </p>
                    </div>
                    <UnstyledButton onClick={() => handleRemoveFromCart(ProductID)}>
                      <img src="/images/icon-delete.svg" alt="delete" className={styles.delete_button} />
                    </UnstyledButton>
                  </li>
                );
              })
            ) : (
              <p className={styles.empty}>Your cart is empty</p>
            )}
          </ul>
          <div className={styles.checkout}>
            <Button>Checkout</Button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}

export default Cart;
