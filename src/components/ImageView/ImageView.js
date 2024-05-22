"use client";
import React from "react";
import styles from "./ImageView.module.css";
import UnstyledButton from "../UnstyledButton";
import ImageModal from "../ImageModal";
import { motion } from "framer-motion";
import nextImage from "../../../public/images/icon-next.svg";
import previousImage from "../../../public/images/icon-previous.svg";
import Image from "next/image";

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
          <Image className={`${styles.image_buttons} ${styles.left}`} src={previousImage} alt="previous" />
        </UnstyledButton>
        <UnstyledButton onClick={handleImageClick} disabled={isDisabled}>
          <Image
            className={styles.shoe}
            src={selectedImage}
            alt="product"
            sizes="(100vw, 100vh)"
            width={450}
            height={450}
            style={{ width: "100%" }}
          />
        </UnstyledButton>
        <UnstyledButton onClick={handleNextClick}>
          <Image className={`${styles.image_buttons} ${styles.right}`} src={nextImage} alt="next" />
        </UnstyledButton>
      </div>
      <div className={styles.thumbnails}>
        {Images.map((image, index) => {
          const isSelected = image === selectedImage;
          return (
            <UnstyledButton key={index} onClick={() => handleThumbnailClick(image)}>
              {isSelected && <motion.div layoutId="selected-border" className={styles.selected} />}
              <Image
                className={`${styles.thumbnail} ${isSelected ? styles.fade : ""}`}
                src={image}
                alt="thumbnail"
                sizes="(100vw, 100vh)"
                width={100}
                height={100}
                style={{ width: "100%" }}
              />
            </UnstyledButton>
          );
        })}
      </div>
      <ImageModal open={openModal} close={setOpenModal} Images={modalImages} />
    </div>
  );
}

export default ImageView;
