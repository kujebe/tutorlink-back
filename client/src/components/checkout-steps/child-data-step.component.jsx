import React from "react";
import { useSelector } from "react-redux";

import AddChildForm from "components/customer-dashboard/modal-add-child.component";

const ChildDataStep = () => {
    const children = useSelector((state) => state.customer.customerData.customerChildren);
    if (children.length > 0) {
        return (
            // children.map(child => (
            //     <div>{child.fullname}</div>
            // ))
            <AddChildForm />
        )
    } else {
        return <AddChildForm />
    }
}

export default ChildDataStep;