import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { PaystackButton } from "react-paystack";

import { setLocationBeforeLogin } from "store/customer/customer-actions";

import { hidepaymentModal } from "store/customer/customer-actions";

import styles from "./payment-modal.module.scss";

const PaymentModal = () => {
  const [teacherData, setTeacherData] = useState({});
  const publicKey = "pk_test_0f6783900b5b931dcc6518e048b6e35df4b85dab";
  const amount = 4000000; // Remember, set in kobo!
  const sessionData = useSelector((state) => state.user.sessionData);
  const selectedTeacherData = useSelector(
    (state) => state.customer.selectedTeacherForPayment
  );

  const componentProps = {
    email: sessionData ? sessionData.email : "",
    amount,
    // name: fullname,
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();

  const handleLogin = (e, value) => {
    e.preventDefault();
    dispatch(hidepaymentModal());
    dispatch(setLocationBeforeLogin(location.pathname));
    history.push(`/account?action=${value}`); //I want it to switch signup/signin depending on the user action
  };

  useEffect(() => {
    setTeacherData(selectedTeacherData);
  }, [selectedTeacherData]);

  return (
    <div className={styles.container}>
      <div className={styles.payment_wrapper}>
        {sessionData ? (
          <Fragment>
            <div className={styles.title}>Payment Confirmation</div>
            <div className={styles.payment_info_wrapper}>
              <div className={styles.payment_info}>
                <div className={styles.info_left}>Hiring:</div>{" "}
                <div className={styles.info_right}>{teacherData.fullname}</div>
              </div>
              <div className={styles.payment_info}>
                <div className={styles.info_left}>Period:</div>{" "}
                <div className={styles.info_right}>1 Month</div>
              </div>
              <div className={styles.payment_info}>
                <div className={styles.info_left}>Amount Due:</div>{" "}
                <div className={styles.info_right}>N40,000.00</div>
              </div>
            </div>
            <div className={styles.pay_button_wrapper}>
              <PaystackButton {...componentProps} />
            </div>
          </Fragment>
        ) : (
          <div className={styles.notice}>
            Please
            <span
              className={styles.link}
              onClick={(event) => handleLogin(event, "login")}
            >
              Login
            </span>
            or
            <span
              className={styles.link}
              onClick={(event) => handleLogin(event, "register")}
            >
              Register
            </span>
          </div>
        )}

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
