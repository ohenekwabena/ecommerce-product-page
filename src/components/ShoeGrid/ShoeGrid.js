import React from "react";
import styles from "./ShoeGrid.module.css";
import ShoeCard from "../ShoeCard";
function ShoeGrid({ shoes }) {
  return (
    <div className={styles.wrapper}>
      {shoes.map(({ ProductID, ProductName, SalePrice, Images, OnSale, Discount }) => (
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
