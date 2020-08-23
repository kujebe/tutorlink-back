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

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const toggleUserMenu = () => ({
  type: userActionTypes.TOGGLE_USER_MENU,
});
