import React from "react";
import styles from "./ShoeGrid.module.css";
import SHOES from "../../data.json";
import ShoeCard from "../ShoeCard";
function ShoeGrid() {
  return (
    <div className={styles.wrapper}>
      {SHOES.map(({ ProductID, ProductName, SalePrice, Images, OnSale, Discount }) => (
        <ShoeCard
          key={ProductID}
          name={ProductName}
          price={SalePrice}
          images={Images}
          OnSale={OnSale}
          discount={Discount}
        />
      ))}
    </div>
  );
}

export default ShoeGrid;
