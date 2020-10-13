import React from "react";

import FormInput from "components/form-input/form-input.component";

import styles from "./checkout-steps.module.scss";

const StepOne = (props) => {
    // console.log(props)
    return (
        <div className={styles.wrapper}>
            <FormInput />
        </div>
    )
}

export default StepOne;