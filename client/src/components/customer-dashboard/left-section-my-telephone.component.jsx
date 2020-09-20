import React from "react";
import { useSelector } from "react-redux";

import EditIcon from "components/edit-icon/edit-icon.component";
import PlusIcon from "components/plus-icon/plus-icon.component";

import styles from "./left-section.module.scss";

const MyTelephone = () => {
  const telephone = useSelector(
    (state) => state.customer.customerData.telephone
  );
  console.log(telephone.length);
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>My Phone Numbers</div>
        <div className={styles.action_icon}>
          <PlusIcon />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper}>
          {telephone.length > 0 ? (
            telephone.map((phone) => (
              <div className={styles.value_and_action}>
                <div className={styles.content_value}>{phone}</div>
                <div className={styles.action_icon}>
                  <EditIcon />
                </div>
              </div>
            ))
          ) : (
            <div className={styles.content_value}>Add a phone number</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTelephone;
