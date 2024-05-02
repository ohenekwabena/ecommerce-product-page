import React from "react";
import SHOES from "../data.json";
import ShoeGrid from "@/components/ShoeGrid";
import CategoriesNav from "@/components/CategoriesNav";
import styles from "./homepage.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <CategoriesNav />
      <ShoeGrid shoes={SHOES} />
    </div>
  );
}

export default Home;
