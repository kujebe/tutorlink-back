import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { currencyConverter } from "utils/utils";

import styles from "./transaction.module.scss";

import { ReactComponent as UserProfile } from "assets/images/user-profile-icon.svg";

const Transaction = ({ transaction }) => {
  const [teacherData, setTeacherData] = useState({});
  const { token } = useSelector((state) => state.user.sessionData);

  useEffect(() => {
    const fetchTransaction = () => {
      fetch(
        "/api/v1/customer/get-teacher-for-transaction/" + transaction.teacher,
        {
          headers: {
            authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then((response) => setTeacherData(response.data));
    };

    fetchTransaction();
  }, [token, transaction.teacher]);

  console.log(teacherData);
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {teacherData.profilePhoto ? (
          <img
            src={`${process.env.PUBLIC_URL}/images/profile/${teacherData.profilePhoto}`}
            alt="User profile"
          />
        ) : (
          <UserProfile />
        )}
      </div>
      <div className={styles.teacher_name}>{teacherData.fullname}</div>
      <div className={styles.transaction_date}>
        {format(new Date(transaction.createdAt), "PP")}
      </div>
      <div className={styles.transaction_amount}>
        {currencyConverter(transaction.amount / 100)}
      </div>
      <div className={styles.transaction_status}>
        {transaction.transactionStatus}
      </div>
    </div>
  );
};

export default Transaction;
