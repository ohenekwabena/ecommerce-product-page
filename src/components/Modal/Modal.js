import React from "react";
import { Root, Portal, Overlay, Content } from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";

function Modal({ children, open, close, ...delegated }) {
  return (
    <Root open={open} onOpenChange={close}>
      <Portal>
        <Overlay className={styles.backdrop}>
          <Content {...delegated}>{children}</Content>
        </Overlay>
      </Portal>
    </Root>
  );
}

export default Modal;
