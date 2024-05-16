"use client";
import React from "react";
import Modal from "../Modal";
import styles from "./Checkout.module.css";
import { formatPrice } from "../../utils";
import { CartContext } from "../CartContextProvider";
import Input from "../Input";
import Button from "../Button";

function Checkout({ show, setShow }) {
  const { cartItems, setShowNotice } = React.useContext(CartContext);

  const totalCartPrice = cartItems.reduce((total, item) => total + item.SalePrice * item.Quantity, 0);

  function handleFormSubmit(e) {
    e.preventDefault();
    setShow(false);
    setShowNotice(true);
  }

  return (
    <Modal open={show} close={() => setShow(false)} className={styles.wrapper}>
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>
          Total Amount: <span className={styles.price}>{formatPrice(totalCartPrice)}</span>
        </p>
        <Input type="text" id="name" label="Full Name" />
        <Input type="email" id="email" label="Email Address" />
        <Input type="tel" id="phone" label="Phone Number" />
        <div className={styles.row_input}>
          <Input type="text" id="address" label="Address" />
          <Input type="text" id="city" label="City" />
        </div>
        <Button>Submit</Button>
      </form>
    </Modal>
  );
}

export default Checkout;
