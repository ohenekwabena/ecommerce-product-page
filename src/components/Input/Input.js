import React from "react";
import styles from "./Input.module.css";

function Input({ type, id, label }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} id={id} name={id} />
    </div>
  );
}

export default Input;
