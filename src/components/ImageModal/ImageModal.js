"use client";
import React from "react";
import Modal from "../Modal";
import styles from "./ImageModal.module.css";
import UnstyledButton from "../UnstyledButton";

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
          <img src="/images/icon-close.svg" alt="close" className={styles.close_button} />
        </UnstyledButton>
        <div className={styles.shoe_wrapper}>
          <div>
            <UnstyledButton onClick={handlePreviousClick}>
              <img
                className={`${styles.image_buttons} ${styles.left}`}
                src="/images/icon-previous.svg"
                alt="previous"
              />
            </UnstyledButton>
            <UnstyledButton>
              <img className={styles.shoe} src={selectedImage || Images[0]} alt="product" />
            </UnstyledButton>
            <UnstyledButton onClick={handleNextClick}>
              <img className={`${styles.image_buttons} ${styles.right}`} src="/images/icon-next.svg" alt="next" />
            </UnstyledButton>
          </div>
          <div className={styles.thumbnails}>
            <UnstyledButton onClick={() => handleThumbnailClick(Images[0])}>
              <img className={styles.thumbnail} src={Images[0]} alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick(Images[1])}>
              <img className={styles.thumbnail} src={Images[1]} alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick(Images[2])}>
              <img className={styles.thumbnail} src={Images[2]} alt="thumbnail" />
            </UnstyledButton>
            <UnstyledButton onClick={() => handleThumbnailClick(Images[3])}>
              <img className={styles.thumbnail} src={Images[3]} alt="thumbnail" />
            </UnstyledButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
