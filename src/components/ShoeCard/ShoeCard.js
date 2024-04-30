import React from "react";
import Link from "next/link";
import styles from "./ShoeCard.module.css";

function ShoeCard({ name, price, images, discount, OnSale }) {
  return (
    <Link>
      <article>
        <div>
          <img src={images[0]} alt={name} />
        </div>
        <div className={styles.row}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.discount}>{discount}</p>
          <p className={styles.onSale}>{OnSale}</p>
        </div>
      </article>
    </Link>
  );
}

export default ShoeCard;
