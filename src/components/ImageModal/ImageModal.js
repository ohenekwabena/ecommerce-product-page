"use client";
import React from "react";
import Modal from "../Modal";
import styles from "./ImageModal.module.css";
import UnstyledButton from "../UnstyledButton";

function ImageModal({ open, close, Images }) {
  const [selectedImage, setSelectedImage] = React.useState("images/image-product-1.jpg");
  function handleThumbnailClick(src) {
    setSelectedImage(src);
  }

  function handleNextClick() {
    const index = Images.indexOf(selectedImage);
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
          <img src="images/icon-close.svg" alt="close" className={styles.close_button} />
        </UnstyledButton>
        <div className={styles.shoe_wrapper}>
          <div>
            <UnstyledButton onClick={handlePreviousClick}>
              <img className={`${styles.image_buttons} ${styles.left}`} src="images/icon-previous.svg" alt="previous" />
            </UnstyledButton>
            <UnstyledButton>
              <img className={styles.shoe} src={selectedImage} alt="product" />
            </UnstyledButton>
            <UnstyledButton onClick={handleNextClick}>
              <img className={`${styles.image_buttons} ${styles.right}`} src="images/icon-next.svg" alt="next" />
            </UnstyledButton>
          </div>
          <div className={styles.thumbnails}>
            <UnstyledButton onClick={() => handleThumbnailClick("images/image-product-1.jpg")}>
              <img className={styles.thumbnail} src="images/image-product-1-thumbnail.jpg" alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick("images/image-product-2.jpg")}>
              <img className={styles.thumbnail} src="images/image-product-2-thumbnail.jpg" alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick("images/image-product-3.jpg")}>
              <img className={styles.thumbnail} src="images/image-product-3-thumbnail.jpg" alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick("images/image-product-4.jpg")}>
              <img className={styles.thumbnail} src="images/image-product-4-thumbnail.jpg" alt="thumbnail" />
            </UnstyledButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
