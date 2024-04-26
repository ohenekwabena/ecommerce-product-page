import React from "react";
import styles from "./button.module.css";

function Button({ children }) {
  return (
    <button className={styles.wrapper}>
      <p>{children}</p>
    </button>
  );
}

export default Button;
