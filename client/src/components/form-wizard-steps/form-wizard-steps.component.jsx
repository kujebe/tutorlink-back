import React from "react";

const Steps = ({ SW: { previousStep, nextStep, state: { activeStep } } }) => {

    return (
        <div>
            <h4>Control from outside component</h4>
            <button onClick={previousStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    )
};

export default Steps;