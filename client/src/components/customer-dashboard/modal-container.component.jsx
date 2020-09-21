import React from "react";

import styles from "./modal-container.module.scss";

const ModalContainer = ({ children, closeAction, closeValue, modalTitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{modalTitle}</div>
        <div className={styles.modal_content}>{children}</div>
        <div
          className={styles.close_modal}
          onClick={() => closeAction(closeValue)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
