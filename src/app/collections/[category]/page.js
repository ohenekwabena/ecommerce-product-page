import React from "react";
import styles from "./category.module.css";
import SHOES from "../../../data.json";
import ShoeGrid from "@/components/ShoeGrid";
import CategoriesNav from "@/components/CategoriesNav";

function Category({ params }) {
  const { category } = params;

  const shoeCategory = SHOES.filter((shoe) => shoe.Tags.includes(category));

  return (
    <div>
      <h1 className={styles.header}>{category}</h1>
      <div className={styles.wrapper}>
        <CategoriesNav />
        <ShoeGrid shoes={shoeCategory} />
      </div>
    </div>
  );
}

export default Category;
