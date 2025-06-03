import css from "./ModalOverlay.module.css";

import Modal from "react-modal";

const ModalOverlay = ({ children, isOpen, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <button type="button" onClick={onClose} className={css.btn}>
          ×
        </button>
        {children}
      </Modal>
    </div>
  );
};

export default ModalOverlay;
