import React, { Fragment, useState } from "react";
import StepWizard from 'react-step-wizard';

import Nav from './nav.component';

import StepOne from "components/checkout-step-one/step-one.component";
import StepTwo from "components/checkout-step-two/step-two.component";
import StepThree from "components/checkout-step-three/step-three.component";
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
          <StepOne update={updateForm} hashKey={'basic'} />
          <StepTwo hashKey={'advanced'} />
          <StepThree hashKey={'last'} />
        </StepWizard>
        {SW && <Steps SW={SW} />}
      </div>
      <div className={styles.summary_wrapper}>Summary</div>
    </div>

  )
}

export default CheckoutPage;
