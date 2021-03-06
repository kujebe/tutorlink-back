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

export const uploadCustomerAvatarStart = (uploadData) => ({
  type: customerActionTypes.UPLOAD_CUSTOMER_AVATAR_START,
  payload: uploadData,
});

export const uploadCustomerAvatarSuccess = (customerData) => ({
  type: customerActionTypes.UPLOAD_CUSTOMER_AVATAR_SUCCESS,
  payload: customerData,
});

export const uploadCustomerAvatarFailure = () => ({
  type: customerActionTypes.UPLOAD_CUSTOMER_AVATAR_FAILURE,
});

export const updateProfileStart = (data) => ({
  type: customerActionTypes.UPDATE_CUSTOMER_PROFILE_START,
  payload: data,
});

export const updateProfileSuccess = (customerData) => ({
  type: customerActionTypes.UPDATE_CUSTOMER_PROFILE_SUCCESS,
  payload: customerData,
});

export const updateProfileFailure = () => ({
  type: customerActionTypes.UPDATE_CUSTOMER_PROFILE_FAILURE,
});

export const addChildStart = (data) => ({
  type: customerActionTypes.ADD_CHILD_START,
  payload: data,
});

export const addChildSuccess = (customerData) => ({
  type: customerActionTypes.ADD_CHILD_SUCCESS,
  payload: customerData,
});

export const addChildFailure = () => ({
  type: customerActionTypes.ADD_CHILD_FAILURE,
});

export const updateChildStart = (data) => ({
  type: customerActionTypes.UPDATE_CHILD_START,
  payload: data,
});

export const updateChildSuccess = (customerData) => ({
  type: customerActionTypes.UPDATE_CHILD_SUCCESS,
  payload: customerData,
});

export const updateChildFailure = () => ({
  type: customerActionTypes.UPDATE_CHILD_FAILURE,
});

export const deleteChildStart = (data) => ({
  type: customerActionTypes.DELETE_CHILD_START,
  payload: data,
});

export const deleteChildSuccess = (customerData) => ({
  type: customerActionTypes.DELETE_CHILD_SUCCESS,
  payload: customerData,
});

export const deleteChildFailure = () => ({
  type: customerActionTypes.DELETE_CHILD_FAILURE,
});

export const updateSocialMediaStart = (data) => ({
  type: customerActionTypes.UPDATE_SOCIAL_MEDIA_START,
  payload: data,
});

export const updateSocialMediaSuccess = (customerData) => ({
  type: customerActionTypes.UPDATE_SOCIAL_MEDIA_SUCCESS,
  payload: customerData,
});

export const updateSocialMediaFailure = () => ({
  type: customerActionTypes.UPDATE_SOCIAL_MEDIA_FAILURE,
});

export const fetchSelectedTeacherDetailsStart = (teacherSlug) => ({
  type: customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_START,
  payload: teacherSlug,
});

export const fetchSelectedTeacherDetailsSuccess = (teacherDetails) => ({
  type: customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_SUCCESS,
  payload: teacherDetails,
});

export const fetchSelectedTeacherDetailsFailure = () => ({
  type: customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_FAILURE,
});

export const updateCheckoutData = (data) => ({
  type: customerActionTypes.UPDATE_CHECKOUT_DATA,
  payload: data
});