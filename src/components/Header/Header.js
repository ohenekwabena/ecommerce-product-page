import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.menu} src="images/icon-menu.svg" alt="menu" />
      <img className={styles.logo} src="images/logo.svg" alt="site logo" />
      <img src="images/icon-cart.svg" alt="cart" />
      <img className={styles.avatar} src="images/image-avatar.png" alt="user avatar" />
    </div>
  );
}

export default Header;
