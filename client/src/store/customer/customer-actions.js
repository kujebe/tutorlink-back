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

export const fetchDashboardDataSuccess = (customerData) => ({
  type: customerActionTypes.FETCH_DASHBOARD_DATA_SUCCESS,
  payload: customerData,
});

export const fetchDashboardDataFailure = () => ({
  type: customerActionTypes.FETCH_DASHBOARD_DATA_FAILURE,
});

export const saveNewPhoneNumberStart = (phoneNumberData) => ({
  type: customerActionTypes.SAVE_NEW_PHONE_NUMBER_START,
  payload: phoneNumberData,
});

export const saveNewPhoneNumberSuccess = (customerData) => ({
  type: customerActionTypes.SAVE_NEW_PHONE_NUMBER_SUCCESS,
  payload: customerData,
});

export const saveNewPhoneNumberFailure = () => ({
  type: customerActionTypes.SAVE_NEW_PHONE_NUMBER_FAILURE,
});

export const updatePhoneNumberStart = (phoneNumberData) => ({
  type: customerActionTypes.UPDATE_PHONE_NUMBER_START,
  payload: phoneNumberData,
});

export const updatePhoneNumberSuccess = (customerData) => ({
  type: customerActionTypes.UPDATE_PHONE_NUMBER_SUCCESS,
  payload: customerData,
});

export const updatePhoneNumberFailure = () => ({
  type: customerActionTypes.UPDATE_PHONE_NUMBER_FAILURE,
});

export const deletePhoneNumberStart = (phoneNumberData) => ({
  type: customerActionTypes.DELETE_PHONE_NUMBER_START,
  payload: phoneNumberData,
});

export const deletePhoneNumberSuccess = (customerData) => ({
  type: customerActionTypes.DELETE_PHONE_NUMBER_SUCCESS,
  payload: customerData,
});

export const deletePhoneNumberFailure = () => ({
  type: customerActionTypes.DELETE_PHONE_NUMBER_FAILURE,
});
