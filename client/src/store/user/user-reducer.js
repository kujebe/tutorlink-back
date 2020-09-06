import userActionTypes from "./user-action-types";

const INITIAL_STATE = {
  sessionData: null,
  userData: null,
  profile: null, //for testing. remove
  isAuthenticating: false,
  hideMenu: true,
  forgotPasswordStatus: null,
  resetPasswordStatus: null,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
    case userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_START:
    case userActionTypes.RESET_PASSWORD_START:
    case userActionTypes.GET_PROFILE_START:
      return {
        ...state,
        isAuthenticating: true,
      };
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        sessionData: payload,
        isAuthenticating: false,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        sessionData: null,
        isAuthenticating: false,
        hideMenu: true,
      };
    case userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        forgotPasswordStatus: payload.message,
      };
    case userActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        resetPasswordStatus: payload.message,
      };
    case userActionTypes.CLEAR_FORGOT_PASSWORD_SUCCESS_NOTIFICATION:
    case userActionTypes.CLEAR_RESET_PASSWORD_SUCCESS_NOTIFICATION:
      return {
        ...state,
        forgotPasswordStatus: null,
        resetPasswordStatus: null,
      };
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_FAILURE:
    case userActionTypes.RESET_PASSWORD_FAILURE:
    case userActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
      };
    case userActionTypes.TOGGLE_USER_MENU:
      return {
        ...state,
        hideMenu: !state.hideMenu,
      };
    case userActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
