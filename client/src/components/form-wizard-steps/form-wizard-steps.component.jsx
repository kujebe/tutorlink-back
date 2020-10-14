import React from "react";

import styles from "./form-wizard-steps.module.scss";

const Steps = ({ SW: { previousStep, nextStep, state: { activeStep } } }) => {

    return (
        <div className={styles.steps}>
            {/*<h4>Control from outside component</h4>*/}
            <button onClick={previousStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    )
};

export default Steps;