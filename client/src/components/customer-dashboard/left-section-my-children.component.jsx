import React, { Fragment, useState } from "react";

import PlusIcon from "components/plus-icon/plus-icon.component";
import Modal from "components/modal/modal.component";
import AddChildModal from "components/customer-dashboard/modal-add-child.component";

import styles from "./left-section.module.scss";

const MyChildren = () => {
  const [openAddChildModal, setOpenAddChildModal] = useState(false);

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
            <div className={styles.content_title}>Name: </div>
            <div className={styles.content_value}>Oluwaseun Kujebe</div>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.content_title}>Address: </div>
            <div className={styles.content_value}>
              4 Tom Johns Avevue, ilupeju lagos
            </div>
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
