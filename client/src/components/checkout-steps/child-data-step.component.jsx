import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select';

import PlusIcon from "components/plus-icon/plus-icon.component";
import Modal from "components/modal/modal.component";
import AddChildModal from "components/customer-dashboard/modal-add-child.component";

const selectStyles = {
    control: (styles) => (
        {
            ...styles,
            margin: "20px 0",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "1px solid #aaaaaa",
            borderLeft: "none",
            borderRadius: "none",
            boxShadow: "none"
        }
    )
}

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
            <Select
                options={childrenOptions}
                isMulti
                styles={selectStyles}
                isClearable={true}
                isSearchable={true}
                placeholder="Select Children"
                onChange={(selectedOptions) => setState({ ...state, children: selectedOptions })}
            />
            <PlusIcon action={setOpenAddChildModal} status={true} />

            {openAddChildModal && (
                <Modal>
                    <AddChildModal closeModal={setOpenAddChildModal} />
                </Modal>
            )}
        </Fragment>
    )

}

export default ChildDataStep;