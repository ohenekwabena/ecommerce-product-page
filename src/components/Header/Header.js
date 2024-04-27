import React from "react";
import styles from "./Header.module.css";
import DesktopLinks from "../DesktopLinks";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.menu} src="images/icon-menu.svg" alt="menu" />
        <img className={styles.logo} src="images/logo.svg" alt="site logo" />
        <DesktopLinks />
        <button>
          <img className={styles.cart} src="images/icon-cart.svg" alt="cart" />
        </button>
        <img className={styles.avatar} src="images/image-avatar.png" alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;
