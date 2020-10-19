import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select';

import PlusIcon from "components/plus-icon/plus-icon.component";
import Modal from "components/modal/modal.component";
import AddChildModal from "components/customer-dashboard/modal-add-child.component";

import styles from "./checkout-steps.module.scss";
import { reactSelectStyles } from "helpers/style-helpers";

const ChildDataStep = () => {
    const [state, setState] = useState({
        children: []
    })
    const [openAddChildModal, setOpenAddChildModal] = useState(false);
    const children = useSelector((state) => state.customer.customerData.customerChildren);

    const childrenOptions =
        children.map(child => (
            { value: child._id, label: child.fullname }
        ));

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={styles.title}>Child Data</div>
                <Select
                    options={childrenOptions}
                    isMulti
                    styles={reactSelectStyles}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Select Children"
                    onChange={(selectedOptions) => setState({ ...state, children: selectedOptions })}
                />
                <div className={styles.child_select}>
                    <PlusIcon action={setOpenAddChildModal} status={true} />
                    <div className={styles.text}>Add Child</div>
                </div>
            </div>

            {openAddChildModal && (
                <Modal>
                    <AddChildModal closeModal={setOpenAddChildModal} />
                </Modal>
            )}

        </Fragment>
    )

}

export default ChildDataStep;