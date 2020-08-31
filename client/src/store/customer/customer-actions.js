import { customerActionTypes } from "./customer-action-types";

export const showPaymentModal = () => ({
  type: customerActionTypes.SHOW_PAYMENT_MODAL,
});

export const hidepaymentModal = () => ({
  type: customerActionTypes.HIDE_PAYMENT_MODAL,
});
