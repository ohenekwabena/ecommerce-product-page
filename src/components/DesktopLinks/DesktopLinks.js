"use client";
import Link from "next/link";
import React from "react";
import { NavLinks } from "../../constants";
import { motion } from "framer-motion";
import styles from "./DesktopLinks.module.css";
function DesktopLinks() {
  const [selectedLink, setSelectedLink] = React.useState(0);
  const [hoverId, setHoverId] = React.useState(0);

  function handleMouseEnter(id) {
    setHoverId(id);
  }

  function handleMouseLeave() {
    setHoverId(null);
  }

  return (
    <div className={styles.desktop_links}>
      {NavLinks.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          onMouseEnter={() => handleMouseEnter(link.id)}
          onClick={() => setSelectedLink(link.id)}
          onMouseLeave={handleMouseLeave}
        >
          {link.title}
          {selectedLink === link.id && <motion.div layoutId="underline" className={styles.underline} />}
          {hoverId === link.id && <motion.div layoutId="hover-underline" className={styles.underline} />}
        </Link>
      ))}
    </div>
  );
}

export default DesktopLinks;
