import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deletePhoneNumberStart } from "store/customer/customer-actions";

import EditIcon from "components/edit-icon/edit-icon.component";
import PlusIcon from "components/plus-icon/plus-icon.component";
import TrashIcon from "components/trash-icon/trash-icon.component";
import Modal from "components/modal/modal.component";
import AddNewPhoneNumber from "components/customer-dashboard/modal-add-phone-number.component";
import UpdatePhoneNumber from "components/customer-dashboard/modal-update-phone-number.component";
import Spinner from "components/spinner/spinner.component";

import styles from "./left-section.module.scss";

const MyTelephone = () => {
  const [openNewPhoneModal, setOpenNewPhoneModal] = useState(false);
  const [openUpdatePhoneModal, setOpenUpdatePhoneModal] = useState(false);
  const [updateIndex, setUpdateIndex] = useState("");
  const [numberToUpdate, setNumberToUpdate] = useState("");

  const telephone = useSelector(
    (state) => state.customer.customerData.telephone
  );
  const { isLoading } = useSelector((state) => state.customer);
  const { token, id } = useSelector((state) => state.user.sessionData);

  const dispatch = useDispatch();

  const deletePhoneNumber = (phoneNumber) => {
    dispatch(
      deletePhoneNumberStart({
        user: id,
        token,
        phoneNumber,
      })
    );
  };

  const updatePhoneNumber = (value, index) => {
    setUpdateIndex(index);
    setNumberToUpdate(value);
    setOpenUpdatePhoneModal(true);
  };

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.title}>My Phone Numbers</div>
          <div className={styles.action_icon}>
            {telephone.length < 3 && (
              <PlusIcon action={setOpenNewPhoneModal} status={true} />
            )}
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.content}>
            <div className={styles.content_wrapper}>
              {telephone.length > 0 ? (
                telephone.map((phone, idx) => (
                  <div key={phone} className={styles.value_and_action}>
                    <div className={styles.content_value}>{phone}</div>
                    <div className={styles.action_icon}>
                      <EditIcon
                        action={updatePhoneNumber}
                        value={phone}
                        index={idx}
                      />
                    </div>
                    <div className={styles.action_icon}>
                      <TrashIcon action={deletePhoneNumber} value={phone} />
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.content_value}>Add a phone number</div>
              )}
            </div>
          </div>
        )}
      </div>
      {openNewPhoneModal && (
        <Modal>
          <AddNewPhoneNumber closeModal={setOpenNewPhoneModal} />
        </Modal>
      )}
      {openUpdatePhoneModal && (
        <Modal>
          <UpdatePhoneNumber
            closeModal={setOpenUpdatePhoneModal}
            value={numberToUpdate}
            index={updateIndex}
          />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyTelephone;
