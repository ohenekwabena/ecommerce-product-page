"use client";
import React from "react";
import styles from "./Toast.module.css";
import { X, Info } from "react-feather";
import { CartContext } from "../CartContextProvider";

function Toast() {
  const { showNotice, setShowNotice } = React.useContext(CartContext);

  if (!showNotice) {
    return null;
  }

  return (
    <div className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      <div className={styles.toastWrapper}>
        <div className={`${styles.toast} ${styles.notice}`}>
          <div className={styles.iconContainer}>
            <Info size={24} />
          </div>
          <p className={styles.content}>Thanks for your Order! We will ship your goods as soon as possible.</p>
          <button
            className={styles.closeButton}
            aria-label="Dismiss message"
            aria-live="off"
            onClick={() => setShowNotice(false)}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
