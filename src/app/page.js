import Button from "@/components/Button";
import styles from "./homepage.module.css";
function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shoe_wrapper}>
        <div>
          <img className={`${styles.image_buttons} ${styles.left}`} src="images/icon-previous.svg" alt="previous" />
          <img className={styles.shoe} src="images/image-product-1.jpg" alt="product" />
          <img className={`${styles.image_buttons} ${styles.right}`} src="images/icon-next.svg" alt="next" />
        </div>
        <div className={styles.thumbnails}>
          <img className={styles.thumbnail} src="images/image-product-1-thumbnail.jpg" alt="thumbnail" />
          <img className={styles.thumbnail} src="images/image-product-2-thumbnail.jpg" alt="thumbnail" />
          <img className={styles.thumbnail} src="images/image-product-3-thumbnail.jpg" alt="thumbnail" />
          <img className={styles.thumbnail} src="images/image-product-4-thumbnail.jpg" alt="thumbnail" />
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.company_title}>Sneaker Company</p>
        <h2 className={styles.shoe_name}>Fall Limited Edition Sneakers</h2>
        <p className={styles.abstract}>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they'll withstand everything the weather can offer
        </p>
        <div className={styles.price_wrapper}>
          <div className={styles.price}>
            <p>$125.00</p>
            <p className={styles.price_discount}>50%</p>
          </div>
          <p className={styles.price_original}>$250.00</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.quantity}>
            <img src="images/icon-minus.svg" alt="" />
            <p>0</p>
            <img src="images/icon-plus.svg" alt="" />
          </div>
          <Button>
            <img src="images/icon-cart-white.svg" alt="" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
