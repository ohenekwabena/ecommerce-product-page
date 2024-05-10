import React from "react";
import styles from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button className={styles.wrapper} {...props}>
      <p>{children}</p>
    </button>
  );
}

export default Button;
