import React from "react";
import { Categories } from "../../constants";
import Link from "next/link";
import styles from "./CategoriesNav.module.css";

function CategoriesNav() {
  return (
    <ul className={styles.wrapper}>
      {Categories.map((category) => (
        <li key={category.id} className={styles.category}>
          <Link href={`/collections/${category.title}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoriesNav;
