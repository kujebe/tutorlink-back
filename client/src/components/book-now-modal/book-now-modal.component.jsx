import React from "react";

import styles from "./book-now-modal.module.scss";

const BookNowModal = ({ toggleModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.payment_form}>
        <div className={styles.close_modal} onClick={toggleModal}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
