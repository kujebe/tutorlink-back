const userActionTypes = {
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  EMAIL_SIGN_IN_SUCCESS: "EMAIL_SIGN_IN_SUCCESS",
  EMAIL_SIGN_IN_FAILURE: "EMAIL_SIGN_IN_FAILURE",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
  RESET_PASSWORD_START: "RESET_PASSWORD_START",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
  CLEAR_RESET_PASSWORD_SUCCESS_NOTIFICATION:
    "CLEAR_RESET_PASSWORD_SUCCESS_NOTIFICATION",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  TOGGLE_USER_MENU: "TOGGLE_USER_MENU",
  SEND_FORGOT_PASSWORD_EMAIL_START: "SEND_FORGOT_PASSWORD_EMAIL_START",
  SEND_FORGOT_PASSWORD_EMAIL_SUCCESS: "SEND_FORGOT_PASSWORD_EMAIL_SUCCESS",
  SEND_FORGOT_PASSWORD_EMAIL_FAILURE: "SEND_FORGOT_PASSWORD_EMAIL_FAILURE",
  CLEAR_FORGOT_PASSWORD_SUCCESS_NOTIFICATION:
    "CLEAR_FORGOT_PASSWORD_SUCCESS_NOTIFICATION",
};

export default userActionTypes;
