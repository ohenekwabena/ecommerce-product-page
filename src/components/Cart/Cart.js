"use client";
import React from "react";
import UnstyledButton from "../UnstyledButton";
import { Root, Trigger, Portal, Content } from "@radix-ui/react-popover";
import styles from "./Cart.module.css";
import Button from "../Button";
import { CartContext } from "../CartContextProvider";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = React.useContext(CartContext);

  function handleRemoveFromCart(item) {
    removeFromCart(item);
  }

  return (
    <Root>
      <Trigger>
        <img className={styles.cart} src="images/icon-cart.svg" alt="cart" />
      </Trigger>
      <Portal>
        <Content className={styles.content}>
          <div className={styles.cart_title}>
            <h3>Cart</h3>
          </div>
          <ul className={styles.cart_items}>
            <li className={styles.cart_item}>
              <img src="images/image-product-1-thumbnail.jpg" alt="product" className={styles.item_img} />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x 3 <span className={styles.total}>$375.00</span>
                </p>
              </div>
              <UnstyledButton onClick={() => handleRemoveFromCart(item)}>
                <img src="images/icon-delete.svg" alt="delete" className={styles.delete_button} />
              </UnstyledButton>
            </li>
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
