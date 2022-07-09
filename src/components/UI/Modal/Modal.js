import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.closeModal} />, portalElement)}
      {createPortal(<div className={styles.overlay}></div>, portalElement)}
      <div className={styles.wrapper}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
