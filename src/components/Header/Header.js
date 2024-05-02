"use client";
import React from "react";
import styles from "./Header.module.css";
import DesktopLinks from "../DesktopLinks";
import MobileLinks from "../MobileLinks";
import UnstyledButton from "../UnstyledButton";
import Cart from "../Cart";
import Link from "next/link";
import Spacer from "../Spacer";
function Header() {
  const [showMobileLinks, setShowMobileLinks] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <UnstyledButton onClick={() => setShowMobileLinks(!showMobileLinks)}>
          <img className={styles.menu} src="/images/icon-menu.svg" alt="menu" />
        </UnstyledButton>
        <MobileLinks show={showMobileLinks} setShow={setShowMobileLinks} />
        <Link href="/">
          <img className={styles.logo} src="/images/logo.svg" alt="site logo" />
        </Link>
        <Spacer />
        <DesktopLinks />
        <Cart />
        <img className={styles.avatar} src="/images/image-avatar.png" alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;
