import React from "react";
import { useDispatch } from "react-redux";

import { hidepaymentModal } from "store/customer/customer-actions";

import styles from "./payment-modal.module.scss";

const PaymentModal = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.payment_form}>
        <div
          className={styles.close_modal}
          onClick={() => dispatch(hidepaymentModal())}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
