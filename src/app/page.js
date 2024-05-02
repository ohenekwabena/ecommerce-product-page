import Button from "@/components/Button";
import styles from "./homepage.module.css";
import UnstyledButton from "@/components/UnstyledButton";
import ImageView from "@/components/ImageView";
import { Images } from "../constants";
import ShoeGrid from "@/components/ShoeGrid";

function Home() {
  // return (
  //   <div className={styles.wrapper}>
  //     <ImageView Images={Images} />
  //     <div className={styles.description}>
  //       <p className={styles.company_title}>Sneaker Company</p>
  //       <h2 className={styles.shoe_name}>Fall Limited Edition Sneakers</h2>
  //       <p className={styles.abstract}>
  //         These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
  //         they'll withstand everything the weather can offer
  //       </p>
  //       <div className={styles.price_wrapper}>
  //         <div className={styles.price}>
  //           <p>$125.00</p>
  //           <p className={styles.price_discount}>50%</p>
  //         </div>
  //         <p className={styles.price_original}>$250.00</p>
  //       </div>
  //       <div className={styles.actions}>
  //         <div className={styles.quantity}>
  //           <UnstyledButton>
  //             <img src="images/icon-minus.svg" alt="" />
  //           </UnstyledButton>
  //           <p>0</p>
  //           <UnstyledButton>
  //             <img src="images/icon-plus.svg" alt="" />
  //           </UnstyledButton>
  //         </div>
  //         <Button>
  //           <img src="images/icon-cart-white.svg" alt="" />
  //           Add to cart
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return <ShoeGrid />;
}

export default Home;
