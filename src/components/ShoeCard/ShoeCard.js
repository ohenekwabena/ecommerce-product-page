import React from "react";
import Link from "next/link";
import styles from "./ShoeCard.module.css";
import { formatPrice } from "@/utils";
import Image from "next/image";

function ShoeCard({ name, price, images, discount, OnSale }) {
  function actualPrice(price, discount) {
    return price - price * discount;
  }

  return (
    <Link href={`/shoes/${name}`} className={styles.shoe_link}>
      <article className={styles.wrapper}>
        <div className={styles.shoe_image_wrapper}>
          <Image
            src={images[0]}
            alt={name}
            className={styles.shoe_image}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.row}>
          <p className={styles.name}>{name}</p>
          <div>
            <p className={`${styles.sale_price} ${OnSale ? styles.price_original : ""} `}>{formatPrice(price)}</p>
            {OnSale && <span className={styles.sale_price}>{formatPrice(actualPrice(price, discount))}</span>}
          </div>
        </div>

        <div className={styles.row}>
          {OnSale && (
            <>
              <p className={styles.price_discount}>{`-${Math.round(discount * 100)}%`}</p>
              <p className={styles.on_sale}>Sale</p>
            </>
          )}
        </div>
      </article>
    </Link>
  );
}

export default ShoeCard;
