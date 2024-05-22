"use client";
import React from "react";
import Modal from "../Modal";
import { motion } from "framer-motion";
import styles from "./ImageModal.module.css";
import UnstyledButton from "../UnstyledButton";
import closeButton from "../../../public/images/icon-close.svg";
import nextImage from "../../../public/images/icon-next.svg";
import previousImage from "../../../public/images/icon-previous.svg";
import Image from "next/image";

function ImageModal({ open, close, Images }) {
  const [selectedImage, setSelectedImage] = React.useState(Images[0]);
  function handleThumbnailClick(src) {
    setSelectedImage(src);
  }

  function handleNextClick() {
    const imageIndex = Images.indexOf(selectedImage);
    const index = imageIndex === -1 ? 0 : imageIndex;
    if (index < Images.length - 1) {
      setSelectedImage(Images[index + 1]);
      return;
    }

    setSelectedImage(Images[0]);
  }

  function handlePreviousClick() {
    const index = Images.indexOf(selectedImage);
    if (index > 0) {
      setSelectedImage(Images[index - 1]);
      return;
    }
    setSelectedImage(Images[Images.length - 1]);
  }

  return (
    <Modal open={open} close={() => close(false)} className={styles.modal_content}>
      <div className={styles.wrapper}>
        <UnstyledButton onClick={() => close(false)}>
          <Image
            src={closeButton}
            alt="close"
            className={styles.close_button}
            sizes="(100vw, 100vh)"
            style={{ width: 24, height: 24 }}
          />
        </UnstyledButton>
        <div className={styles.shoe_wrapper}>
          <div>
            <UnstyledButton onClick={handlePreviousClick}>
              <Image className={`${styles.image_buttons} ${styles.left}`} src={previousImage} alt="previous" />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                className={styles.shoe}
                src={selectedImage || Images[0]}
                alt="product"
                sizes="(100vw, 100vh)"
                width={450}
                height={450}
              />
            </UnstyledButton>
            <UnstyledButton onClick={handleNextClick}>
              <Image className={`${styles.image_buttons} ${styles.right}`} src={nextImage} alt="next" />
            </UnstyledButton>
          </div>
          <div className={styles.thumbnails}>
            {Images.map((image, index) => {
              const isSelected = image === selectedImage || (index === 0 && !selectedImage);
              return (
                <UnstyledButton key={index} onClick={() => handleThumbnailClick(image)}>
                  {isSelected && <motion.div layoutId="selected-border-modal" className={styles.selected} />}
                  <Image
                    className={`${styles.thumbnail} ${isSelected ? styles.fade : ""}`}
                    src={image}
                    alt="thumbnail"
                    sizes="(100vw, 100vh)"
                    width={80}
                    height={80}
                  />
                </UnstyledButton>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
