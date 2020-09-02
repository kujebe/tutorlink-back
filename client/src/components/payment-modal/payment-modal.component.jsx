import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";

import { hidepaymentModal } from "store/customer/customer-actions";

import styles from "./payment-modal.module.scss";

const PaymentModal = () => {
  const publicKey = "pk_test_0f6783900b5b931dcc6518e048b6e35df4b85dab";
  const amount = 1000000; // Remember, set in kobo!
  const {
    user: { fullname, email },
  } = useSelector((state) => state.user.currentUser);

  const componentProps = {
    email,
    amount,
    name: fullname,
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.payment_form}>
        <PaystackButton {...componentProps} />
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
