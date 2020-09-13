import customerActionTypes from "./customer-action-types";

export const selectTeacherFromMap = (teacherData) => ({
  type: customerActionTypes.SELECT_TEACHER_FROM_MAP,
  payload: teacherData,
});

export const showPaymentModal = (selectedTeacherData) => ({
  type: customerActionTypes.SHOW_PAYMENT_MODAL,
  payload: selectedTeacherData,
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

export const saveTransactionStart = (transactionData) => ({
  type: customerActionTypes.SAVE_TRANSACTION_START,
  payload: transactionData,
});

export const saveTransactionSuccess = (transactionResponseData) => ({
  type: customerActionTypes.SAVE_TRANSACTION_SUCCESS,
  payload: transactionResponseData,
});

export const saveTransactionFailure = () => ({
  type: customerActionTypes.SAVE_TRANSACTION_FAILURE,
});
