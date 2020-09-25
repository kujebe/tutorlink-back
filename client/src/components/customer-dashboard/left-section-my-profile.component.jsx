import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import EditIcon from "components/edit-icon/edit-icon.component";
import Modal from "components/modal/modal.component";
import UpdateProfileModal from "components/customer-dashboard/modal-update-profile.component";

import styles from "./left-section.module.scss";

const MyProfile = () => {
  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false);
  const { address } = useSelector((state) => state.customer.customerData);
  const { fullname } = useSelector((state) => state.user.sessionData);

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.title}>My Profile</div>
          <div className={styles.action_icon}>
            <div onClick={() => setOpenUpdateProfileModal(true)}>
              <EditIcon />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <div className={styles.content_title}>Name: </div>
            <div className={styles.content_value}>{fullname}</div>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.content_title}>Address: </div>
            <div className={styles.content_value}>{address ? address : ""}</div>
          </div>
        </div>
      </div>
      {openUpdateProfileModal && (
        <Modal>
          <UpdateProfileModal closeModal={setOpenUpdateProfileModal} />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyProfile;
