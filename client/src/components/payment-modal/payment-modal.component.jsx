import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import DatePicker from "react-datepicker";
import { format, addMonths, differenceInCalendarMonths } from "date-fns";

import SuccessNotification from "components/notification/success-notification.component";
import Button from "components/button/button.component";
import { ReactComponent as CalendarIcon } from "assets/images/calendar-icon.svg";

import { setLocationBeforeLogin } from "store/customer/customer-actions";
import { hidepaymentModal } from "store/customer/customer-actions";

import styles from "./payment-modal.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const PaymentModal = () => {
  const [teacherData, setTeacherData] = useState({});
  const [paymentStatus, setPaymentStatus] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addMonths(new Date(), 1));

  const sessionData = useSelector((state) => state.user.sessionData);
  const selectedTeacherData = useSelector(
    (state) => state.customer.selectedTeacherForPayment
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const ref = React.createRef();

  const paymentProps = {
    email: sessionData ? sessionData.data.email : "",
    name: sessionData.data.fullname,
    amount: "4000000", // Remember, set in kobo!
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    text: "Pay Now",
    onSuccess: (data) => {
      if (data.status === "success") {
        setPaymentStatus("success");
      }
      // dispatch(
      //   saveTransaction(
      //     data,
      //     "4000000",
      //     sessionData.data.id,
      //     selectedTeacherData.id
      //   )
      // );
    },
    // onClose: (data) => {
    //   if (data === "undefined") {
    //     setPaymentStatus("error");
    //   }
    // },
  };

  const handleLogin = (e, value) => {
    e.preventDefault();
    dispatch(hidepaymentModal());
    dispatch(setLocationBeforeLogin(location.pathname));
    history.push(`/account?action=${value}`); //I want it to switch signup/signin depending on the user action
  };

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    setTeacherData(selectedTeacherData);
  }, [selectedTeacherData]);

  const ChangeDateInput = React.forwardRef((props, ref) => (
    <div className={styles.change_date_input} onClick={props.onClick} ref={ref}>
      <CalendarIcon className={styles.calendar} />
      <div className={styles.change_input}>Change Date</div>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.payment_wrapper}>
        {sessionData ? (
          <Fragment>
            <div className={styles.title}>Payment Confirmation</div>
            {paymentStatus === "success" && (
              <SuccessNotification>Payment Successful</SuccessNotification>
            )}
            <div className={styles.payment_info}>
              <div className={styles.info_title}>Selected Teacher</div>
              <div className={styles.info_details}>{teacherData.fullname}</div>
            </div>

            <div className={styles.payment_info}>
              <div className={styles.info_title}>Amount Due</div>
              <div className={styles.info_details}>N40,000.00</div>
            </div>
            <div className={styles.payment_info}>
              <div className={styles.info_title}>Total Period</div>
              <div className={styles.info_details}>
                {`${differenceInCalendarMonths(endDate, startDate)} Months`}
              </div>
            </div>
            <div
              className={`${styles.payment_info} ${
                !endDate ? styles.unchecked : ""
              }`}
            >
              <div className={styles.start_and_end_dates}>
                <div className={styles.start_date}>
                  <div className={styles.info_title}>Start Date</div>
                  <div className={styles.info_details}>
                    {format(startDate, "dd/MM/yyyy")}
                  </div>
                </div>
                <div className={styles.end_date}>
                  <div className={styles.info_title}>End Date</div>
                  <div
                    className={`${styles.info_details} ${
                      !endDate ? styles.end_date_error : ""
                    }`}
                  >
                    {endDate
                      ? format(endDate, "dd/MM/yyyy")
                      : "Select end date"}
                  </div>
                </div>
              </div>
            </div>
            <DatePicker
              selected={startDate}
              onChange={onDateChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              maxDate={addMonths(new Date(), 3)}
              customInput={<ChangeDateInput ref={ref} />}
              selectsRange
              // showMonthYearPicker
              shouldCloseOnSelect={false}
              // showDisabledMonthNavigation
            />
            <div className={styles.pay_button_wrapper}>
              {paymentStatus === "" && endDate ? (
                <PaystackButton {...paymentProps} />
              ) : (
                <Button disabled label={paymentProps.text}></Button>
              )}
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
