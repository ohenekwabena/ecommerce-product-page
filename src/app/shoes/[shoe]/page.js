"use client";
import React from "react";
import styles from "./shoepage.module.css";
import ImageView from "@/components/ImageView";
import SHOES from "@/data.json";
import UnstyledButton from "@/components/UnstyledButton";
import Button from "@/components/Button";
import { formatPrice } from "@/utils";
import { CartContext } from "@/components/CartContextProvider";
function ShoesPage({ params }) {
  const { shoe } = params;

  const shoeName = shoe.replaceAll("%20", " ");

  const shoeInfo = SHOES.filter((shoe) => shoe.ProductName === shoeName);

  const { ProductName, ProductID, SalePrice, Description, Images, OnSale, Discount } = shoeInfo[0];

  const { cartItems, addToCart, quantityChange } = React.useContext(CartContext);

  const currentCartItem = cartItems.find((item) => item.ProductID === ProductID);

  function actualPrice(price, discount) {
    return price - price * discount;
  }

  const cartItem = {
    ProductName: shoeInfo[0].ProductName,
    ProductID: shoeInfo[0].ProductID,
    SalePrice: shoeInfo[0].OnSale ? actualPrice(shoeInfo[0].SalePrice, shoeInfo[0].Discount) : shoeInfo[0].SalePrice,
    Image: shoeInfo[0].Images[0],
    OnSale: shoeInfo[0].OnSale,
    Discount: shoeInfo[0].Discount,
    Quantity: 1,
  };

  function handleAddToCart() {
    if (currentCartItem === null || currentCartItem === undefined) {
      addToCart(cartItem);
    }
  }

  function handleQuantityChange(type) {
    quantityChange(ProductID, type);
  }

  return (
    <div className={styles.wrapper}>
      <ImageView Images={Images.slice(0, 4)} />
      <div className={styles.description}>
        <p className={styles.company_title}>Sneaker Company</p>
        <h2 className={styles.shoe_name}>{ProductName}</h2>
        <p className={styles.abstract}>{Description}</p>
        <div className={styles.price_wrapper}>
          <div className={styles.price}>
            <p>{OnSale ? formatPrice(actualPrice(SalePrice, Discount)) : formatPrice(SalePrice)}</p>
            {OnSale && <p className={styles.price_discount}>{`-${Math.round(Discount * 100)}%`}</p>}
          </div>
          {OnSale && <p className={styles.price_original}>{formatPrice(SalePrice)}</p>}
        </div>
        <div className={styles.actions}>
          <div className={styles.quantity}>
            <UnstyledButton onClick={() => handleQuantityChange("minus")} disabled={currentCartItem === undefined}>
              <img src="/images/icon-minus.svg" alt="" />
            </UnstyledButton>
            <p>{currentCartItem ? currentCartItem.Quantity : 0}</p>
            <UnstyledButton onClick={() => handleQuantityChange("plus")} disabled={currentCartItem === undefined}>
              <img src="/images/icon-plus.svg" alt="" />
            </UnstyledButton>
          </div>
          <Button onClick={handleAddToCart} disabled={currentCartItem !== undefined}>
            <img src="/images/icon-cart-white.svg" alt="" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoesPage;
