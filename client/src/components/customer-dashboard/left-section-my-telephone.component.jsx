import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import EditIcon from "components/edit-icon/edit-icon.component";
import PlusIcon from "components/plus-icon/plus-icon.component";
import Modal from "components/modal/modal.component";
// import ModalContainer from "./modal-container.component";
// import FormInput from "components/form-input/form-input.component";
import AddNewPhoneNumber from "components/customer-dashboard/modal-add-phone-number.component";

import styles from "./left-section.module.scss";

const MyTelephone = () => {
  const [openNewPhoneModal, setOpenNewPhoneModal] = useState(false);
  const telephone = useSelector(
    (state) => state.customer.customerData.telephone
  );

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.title}>My Phone Numbers</div>
          <div className={styles.action_icon}>
            <PlusIcon action={setOpenNewPhoneModal} status={true} />
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
      {openNewPhoneModal && (
        <Modal>
          <AddNewPhoneNumber closeModal={setOpenNewPhoneModal} />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyTelephone;
