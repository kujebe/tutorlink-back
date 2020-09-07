import userActionTypes from "./user-action-types";

export const signUpStart = (userData) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userData,
});

export const signUpSuccess = (data) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpFailure = () => ({
  type: userActionTypes.SIGN_UP_FAILURE,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (token) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: token,
});

export const emailSignInFailure = () => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
});

export const resetPasswordStart = (resetData) => ({
  type: userActionTypes.RESET_PASSWORD_START,
  payload: resetData,
});

export const resetPasswordSuccess = (data) => ({
  type: userActionTypes.RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFailure = () => ({
  type: userActionTypes.RESET_PASSWORD_FAILURE,
});

export const sendForgotPasswordMailStart = (email) => ({
  type: userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_START,
  payload: email,
});

export const sendForgotPasswordMailSuccess = (data) => ({
  type: userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_SUCCESS,
  payload: data,
});

export const sendForgotPasswordMailFailure = () => ({
  type: userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_FAILURE,
});

export const clearForgotPasswordSuccessNotice = () => ({
  type: userActionTypes.CLEAR_FORGOT_PASSWORD_SUCCESS_NOTIFICATION,
});

export const clearResetPasswordSuccessNotice = () => ({
  type: userActionTypes.CLEAR_RESET_PASSWORD_SUCCESS_NOTIFICATION,
});

export const logOutStart = (token) => ({
  type: userActionTypes.LOG_OUT_START,
  payload: token,
});
export const logOutSuccess = () => ({
  type: userActionTypes.LOG_OUT_SUCCESS,
});

export const logOutFailure = () => ({
  type: userActionTypes.LOG_OUT_FAILURE,
});

export const toggleUserMenu = () => ({
  type: userActionTypes.TOGGLE_USER_MENU,
});

export const getProfileStart = (token) => ({
  type: userActionTypes.GET_PROFILE_START,
  payload: token,
});

export const getProfileSuccess = (profileData) => ({
  type: userActionTypes.GET_PROFILE_SUCCESS,
  payload: profileData,
});

export const getProfileFailure = () => ({
  type: userActionTypes.GET_PROFILE_FAILURE,
});
