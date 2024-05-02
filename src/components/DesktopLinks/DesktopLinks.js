"use client";
import Link from "next/link";
import React from "react";
import { NavLinks } from "../../constants";
import { motion } from "framer-motion";
import styles from "./DesktopLinks.module.css";
function DesktopLinks() {
  const [selectedLink, setSelectedLink] = React.useState(0);

  return (
    <div className={styles.desktop_links}>
      {NavLinks.map((link) => (
        <Link
          href=""
          key={link.id}
          onMouseEnter={() => setSelectedLink(link.id)}
          onMouseLeave={() => setSelectedLink(0)}
          onClick={() => setSelectedLink(link.id)}
        >
          {link.title}
          {selectedLink === link.id && <motion.div layoutId="underline" className={styles.underline} />}
        </Link>
      ))}
    </div>
  );
}

export default DesktopLinks;
