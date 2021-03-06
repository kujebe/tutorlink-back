import React, { useEffect, useState } from "react";
import StepWizard from 'react-step-wizard';

import Nav from './nav.component';

import ScheduleStep from "components/checkout-steps/schedule-step.component";
import CheckoutSummary from "components/checkout-summary/checkout-summary.component";
import ChildDataStep from "components/checkout-steps/child-data-step.component";
import StepThree from "components/checkout-steps/step-three.component";
import Steps from "components/form-wizard-steps/form-wizard-steps.component"

import styles from "./checkout.module.scss";
import transitions from "./transitions.module.scss";

/** Demo of using instance */

const CheckoutPage = () => {

  const [state, updateState] = useState({
    form: {},
    transitions: {
      enterRight: `${transitions.animated} ${transitions.enterRight}`,
      enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
      exitRight: `${transitions.animated} ${transitions.exitRight}`,
      exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
      intro: `${transitions.animated} ${transitions.intro}`,
    },
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {
    console.log(stats);
  };

  const setInstance = SW => updateState({
    ...state,
    SW,
  });

  const { SW } = state;

  return (
    <div className={styles.checkout_container}>
      <div className={styles.wizard_wrapper} >
        <StepWizard
          className={styles.wizard}
          initialStep={1}
          onStepChange={onStepChange}
          // transitions={state.transitions} // comment out for default transitions
          nav={<Nav />}
          instance={setInstance}
          isHashEnabled={true}
        >
          <ScheduleStep update={updateForm} hashKey={'Schedule'} />
          <ChildDataStep hashKey={'Child Data'} />
          <StepThree hashKey={'last'} />
        </StepWizard>
        {SW && <Steps SW={SW} />}
      </div>
      <CheckoutSummary />
    </div>

  )
}

export default CheckoutPage;
