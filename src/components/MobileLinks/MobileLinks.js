"use client";
import React from "react";
import Modal from "../Modal";
import { NavLinks } from "../../constants";
import { motion } from "framer-motion";
import styles from "./MobileLinks.module.css";
import UnstyledButton from "../UnstyledButton";

function MobileLinks({ show, setShow }) {
  return (
    <Modal open={show} close={() => setShow(false)}>
      <motion.div className={styles.wrapper} initial={{ x: "-100%" }} animate={{ x: 0 }}>
        <UnstyledButton
          onClick={() => {
            setShow(false);
          }}
        >
          <img src="images/icon-close.svg" alt="close" />
        </UnstyledButton>
        <ul className={styles.links}>
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a href="">{link.title}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </Modal>
  );
}

export default MobileLinks;
