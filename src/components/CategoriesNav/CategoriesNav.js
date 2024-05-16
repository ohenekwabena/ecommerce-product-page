"use client";
import React from "react";
import { Categories } from "../../constants";
import Link from "next/link";
import styles from "./CategoriesNav.module.css";
import { usePathname } from "next/navigation";

function CategoriesNav() {
  const pathname = usePathname();

  return (
    <ul className={styles.wrapper}>
      {Categories.map((category) => (
        <li key={category.id} className={styles.category}>
          <Link
            href={`/collections/${category.title}`}
            className={`${styles.link} ${pathname === `/collections/${category.title}` ? styles.active : ""}`}
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoriesNav;