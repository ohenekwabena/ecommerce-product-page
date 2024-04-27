import React from "react";
import styles from "./UnstyledButton.module.css";

function UnstyledButton({ children, ...props }) {
  return (
    <button {...props} className={styles.button_wrapper}>
      {children}
    </button>
  );
}

export default UnstyledButton;
