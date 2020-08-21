import userActionTypes from "./user-action-types";

const INITIAL_STATE = {
  currentUser: null,
  isAuthenticating: false,
  hideMenu: true,
};

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isAuthenticating: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isAuthenticating: false,
      };
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isAuthenticating: true,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAuthenticating: false,
        hideMenu: true,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
      };
    case userActionTypes.TOGGLE_USER_MENU:
      return {
        ...state,
        hideMenu: !state.hideMenu,
      };
    default:
      return state;
  }
};

export default userReducer;
