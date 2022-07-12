//methods
import { createPortal } from "react-dom";

//styles
import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

//select element in DOM where portal element should display
const portalElement = document.getElementById("overlays");

const Modal = ({ closeModal, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={closeModal} />, portalElement)}
      {createPortal(<div className={styles.overlay}></div>, portalElement)}
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
