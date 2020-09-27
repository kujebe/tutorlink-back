import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteChildStart } from "store/customer/customer-actions";

import EditIcon from "components/edit-icon/edit-icon.component";
import PlusIcon from "components/plus-icon/plus-icon.component";
import TrashIcon from "components/trash-icon/trash-icon.component";
import Modal from "components/modal/modal.component";
import AddChildModal from "components/customer-dashboard/modal-add-child.component";
import UpdateChildModal from "components/customer-dashboard/modal-update-child.component";

import styles from "./left-section.module.scss";

const MyChildren = () => {
  const [openAddChildModal, setOpenAddChildModal] = useState(false);
  const [openUpdateChildModal, setOpenUpdateChildModal] = useState(false);
  const [childData, setChildData] = useState(null);
  const [childIndex, setChildIndex] = useState(null);

  const children = useSelector(
    (state) => state.customer.customerData.customerChildren
  );
  // const { isLoading } = useSelector((state) => state.customer);
  const { token, id } = useSelector((state) => state.user.sessionData);

  const dispatch = useDispatch();

  const updateChildData = (value, index) => {
    setChildIndex(index);
    setChildData(value);
    setOpenUpdateChildModal(true);
  };

  const deletePhoneNumber = (index) => {
    dispatch(
      deleteChildStart({
        user: id,
        token,
        index,
      })
    );
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
                    <TrashIcon action={deletePhoneNumber} value={idx} />
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
      {openUpdateChildModal && (
        <Modal>
          <UpdateChildModal
            closeModal={setOpenUpdateChildModal}
            value={childData}
            index={childIndex}
          />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyChildren;
