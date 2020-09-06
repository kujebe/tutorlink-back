import { customerActionTypes } from "./customer-action-types";

export const showPaymentModal = () => ({
  type: customerActionTypes.SHOW_PAYMENT_MODAL,
});

export const hidepaymentModal = () => ({
  type: customerActionTypes.HIDE_PAYMENT_MODAL,
});

export const setLocationBeforeLogin = (location) => ({
  type: customerActionTypes.SET_LOCATION_BEFORE_LOGIN,
  payload: location,
});

export const clearLocationBeforeLogin = () => ({
  type: customerActionTypes.CLEAR_LOCATION_BEFORE_LOGIN,
});
