import { customerActionTypes } from "./customer-action-types";

const INITIAL_STATE = {
  showPaymentModal: false,
};

const customerReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case customerActionTypes.SHOW_PAYMENT_MODAL:
      return {
        ...state,
        showPaymentModal: true,
      };
    case customerActionTypes.HIDE_PAYMENT_MODAL:
      return {
        ...state,
        showPaymentModal: false,
      };

    default:
      return state;
  }
};

export default customerReducer;
