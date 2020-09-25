import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import EditIcon from "components/edit-icon/edit-icon.component";
import PlusIcon from "components/plus-icon/plus-icon.component";
import TrashIcon from "components/trash-icon/trash-icon.component";
import Modal from "components/modal/modal.component";
import AddChildModal from "components/customer-dashboard/modal-add-child.component";

import styles from "./left-section.module.scss";

const MyChildren = () => {
  const [openAddChildModal, setOpenAddChildModal] = useState(false);
  const children = useSelector(
    (state) => state.customer.customerData.customerChildren
  );

  const updateChildData = (value, index) => {
    // setUpdateIndex(index);
    // setNumberToUpdate(value);
    // setOpenUpdatePhoneModal(true);
  };

  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.title}>My Children</div>
          <div className={styles.edit_profile}>
            <PlusIcon action={setOpenAddChildModal} status={true} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            {children.length > 0 ? (
              children.map((child, idx) => (
                <div key={child._id} className={styles.value_and_action}>
                  <div className={styles.content_value}>{child.fullname}</div>
                  <div className={styles.action_icon}>
                    <EditIcon
                      action={updateChildData}
                      value={child}
                      index={idx}
                    />
                  </div>
                  <div className={styles.action_icon}>
                    <TrashIcon action={updateChildData} value={child} />
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.content_value}>Add Children</div>
            )}
          </div>
        </div>
      </div>
      {openAddChildModal && (
        <Modal>
          <AddChildModal closeModal={setOpenAddChildModal} />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyChildren;
