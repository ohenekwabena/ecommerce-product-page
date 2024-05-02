import React from "react";
import Link from "next/link";
import styles from "./ShoeCard.module.css";
import { formatPrice } from "@/utils";

function ShoeCard({ name, price, images, discount, OnSale }) {
  function actualPrice(price, discount) {
    return price - price * discount;
  }

  return (
    <Link href={`/${name}`} className={styles.shoe_link}>
      <article className={styles.wrapper}>
        <div className={styles.shoe_image_wrapper}>
          <img src={images[0]} alt={name} className={styles.shoe_image} />
        </div>
        <div className={styles.row}>
          <div>
            <p className={styles.name}>{name}</p>
            {OnSale && (
              <>
                <p className={styles.price_discount}>{`-${Math.round(discount * 100)}%`}</p>
                <p className={styles.on_sale}>Sale</p>
              </>
            )}
          </div>
          <div>
            <p className={`${styles.sale_price} ${OnSale ? styles.price_original : ""} `}>{formatPrice(price)}</p>
            {OnSale && <span className={styles.sale_price}>{formatPrice(actualPrice(price, discount))}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ShoeCard;
