import React from "react";
import { useSelector } from "react-redux";

import TransactionComponent from "./transaction.component";

import styles from "./dashboard-bottom-styles.module.scss";

const TransactionsList = () => {
  const { transactions } = useSelector((state) => state.customer.customerData);

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>Recent Bookings</h2>
        <span className={styles.count}>{`(${transactions.length})`}</span>
      </div>
      <div className={styles.content}>
        {transactions.map((transaction) => (
          <TransactionComponent
            key={transaction._id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
