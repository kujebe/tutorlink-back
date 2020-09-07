import { customerActionTypes } from "./customer-action-types";

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
