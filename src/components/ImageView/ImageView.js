"use client";
import React from "react";
import styles from "./ImageView.module.css";
import UnstyledButton from "../UnstyledButton";
import ImageModal from "../ImageModal";
import { motion } from "framer-motion";

function ImageView({ Images }) {
  const [selectedImage, setSelectedImage] = React.useState(Images[0]);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalImages, setModalImages] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setIsDisabled(viewportWidth < 450);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  function handleImageClick() {
    setOpenModal(true);
    const prevImages = [...Images];
    const index = prevImages.indexOf(selectedImage);
    prevImages.splice(index, 1);

    setModalImages([selectedImage, ...prevImages]);
  }

  return (
    <div className={styles.shoe_wrapper}>
      <div>
        <UnstyledButton onClick={handlePreviousClick}>
          <img className={`${styles.image_buttons} ${styles.left}`} src="/images/icon-previous.svg" alt="previous" />
        </UnstyledButton>
        <UnstyledButton onClick={handleImageClick} disabled={isDisabled}>
          <img className={styles.shoe} src={selectedImage} alt="product" />
        </UnstyledButton>
        <UnstyledButton onClick={handleNextClick}>
          <img className={`${styles.image_buttons} ${styles.right}`} src="/images/icon-next.svg" alt="next" />
        </UnstyledButton>
      </div>
      <div className={styles.thumbnails}>
        {Images.map((image, index) => {
          const isSelected = image === selectedImage;
          return (
            <UnstyledButton key={index} onClick={() => handleThumbnailClick(image)}>
              {isSelected && <motion.div layoutId="selected-border" className={styles.selected} />}
              <img className={`${styles.thumbnail} ${isSelected ? styles.fade : ""}`} src={image} alt="thumbnail" />
            </UnstyledButton>
          );
        })}
      </div>
      <ImageModal open={openModal} close={setOpenModal} Images={modalImages} />
    </div>
  );
}

export default ImageView;
