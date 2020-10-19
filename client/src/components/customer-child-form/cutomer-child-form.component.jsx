import React, { Fragment } from "react";

import FormInput from "components/form-input/form-input.component";

const CustomerChildForm = ({ state, changeAction }) => {

    return (
        <Fragment>
            <FormInput
                type="text"
                name="fullname"
                value={state.fullname}
                onChange={changeAction}
                label="Child full name"
                required
            />
            <FormInput
                type="number"
                name="age"
                value={state.age}
                onChange={changeAction}
                label="Child age"
                required
            />
            <FormInput
                type="text"
                name="school"
                value={state.school}
                onChange={changeAction}
                label="Child school"
                required
            />
            <FormInput
                type="text"
                name="class"
                value={state.class}
                onChange={changeAction}
                label="Child class"
                required
            />
            <FormInput
                type="text"
                name="gender"
                value={state.gender}
                onChange={changeAction}
                label="Child Gender"
                required
            />
        </Fragment>
    )
}

export default CustomerChildForm;