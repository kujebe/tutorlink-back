import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const fetcher = (url, headerValues) =>
  fetch(url, headerValues).then((response) => response.json());

const Transaction = ({ transaction }) => {
  const [transactionData, setTransactionData] = useState({});
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
        .then((response) => setTransactionData(response.data));
    };

    fetchTransaction();
  }, []);

  return <div>{transactionData.fullname}</div>;
};

export default Transaction;
