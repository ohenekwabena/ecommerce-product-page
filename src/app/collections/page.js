import ShoeGrid from "@/components/ShoeGrid";
import { Categories } from "@/constants";
import Link from "next/link";
import SHOES from "../../data.json";
import styles from "./collections.module.css";

function Collections() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Collections</h1>
      {Categories.map((category) => {
        const shoesInCategory = SHOES.filter((shoe) => shoe.Tags.includes(category.title));

        return (
          <div key={category.id} className={styles.collection}>
            <Link href={`/collections/${category.title}`} className={styles.collection_link}>
              {category.title} <span className={styles.arrow}>→</span>
            </Link>
            <ShoeGrid shoes={shoesInCategory.slice(0, 4)} />
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
