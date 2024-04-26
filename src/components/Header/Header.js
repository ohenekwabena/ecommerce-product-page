import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.menu} src="images/icon-menu.svg" alt="menu" />
        <img className={styles.logo} src="images/logo.svg" alt="site logo" />
        <div className={styles.desktop_links}>
          <Link href="#">Collections</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
        <button>
          <img className={styles.cart} src="images/icon-cart.svg" alt="cart" />
        </button>
        <img className={styles.avatar} src="images/image-avatar.png" alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;
