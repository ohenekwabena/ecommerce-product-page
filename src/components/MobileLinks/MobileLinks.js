"use client";
import React from "react";
import Modal from "../Modal";
import { NavLinks } from "../../constants";
import { motion } from "framer-motion";
import styles from "./MobileLinks.module.css";
import UnstyledButton from "../UnstyledButton";
import Link from "next/link";

function MobileLinks({ show, setShow }) {
  return (
    <Modal open={show} close={() => setShow(false)}>
      <motion.div className={styles.wrapper} initial={{ x: "-100%" }} animate={{ x: 0 }}>
        <UnstyledButton
          onClick={() => {
            setShow(false);
          }}
        >
          <img src="/images/icon-close.svg" alt="close" />
        </UnstyledButton>
        <ul className={styles.links}>
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} onClick={() => setShow(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </Modal>
  );
}

export default MobileLinks;
