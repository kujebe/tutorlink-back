import customerActionTypes from "./customer-action-types";
import userActionTypes from "store/user/user-action-types";

const INITIAL_STATE = {
  showPaymentModal: false,
  locationBeforeLogin: "",
  selectedTeacherFromMap: {},
  selectedTeacherForPayment: {},
  selectedTeacherDetails: {},
  lastTransaction: null,
  isLoading: false,
  customerData: {},
  checkoutData: {},
};

const customerReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case customerActionTypes.SELECT_TEACHER_FROM_MAP:
      return {
        ...state,
        selectedTeacherFromMap: payload,
      };

    case customerActionTypes.SHOW_PAYMENT_MODAL:
      return {
        ...state,
        selectedTeacherForPayment: payload,
        showPaymentModal: true,
      };
    case customerActionTypes.HIDE_PAYMENT_MODAL:
      return {
        ...state,
        selectedTeacherForPayment: {},
        showPaymentModal: false,
      };
    case customerActionTypes.SET_LOCATION_BEFORE_LOGIN:
      return {
        ...state,
        locationBeforeLogin: payload,
      };
    case customerActionTypes.CLEAR_LOCATION_BEFORE_LOGIN:
      return {
        ...state,
        locationBeforeLogin: "",
      };
    case customerActionTypes.SAVE_TRANSACTION_START:
    case customerActionTypes.SAVE_NEW_PHONE_NUMBER_START:
    case customerActionTypes.UPDATE_PHONE_NUMBER_START:
    case customerActionTypes.DELETE_PHONE_NUMBER_START:
    case customerActionTypes.UPLOAD_CUSTOMER_AVATAR_START:
    case customerActionTypes.UPDATE_CUSTOMER_PROFILE_START:
    case customerActionTypes.ADD_CHILD_START:
    case customerActionTypes.UPDATE_CHILD_START:
    case customerActionTypes.DELETE_CHILD_START:
    case customerActionTypes.UPDATE_SOCIAL_MEDIA_START:
    case customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case customerActionTypes.SAVE_TRANSACTION_SUCCESS:
      return {
        ...state,
        lastTransaction: payload,
        isLoading: false,
      };
    case customerActionTypes.FETCH_DASHBOARD_DATA_SUCCESS:
    case customerActionTypes.SAVE_NEW_PHONE_NUMBER_SUCCESS:
    case customerActionTypes.UPDATE_PHONE_NUMBER_SUCCESS:
    case customerActionTypes.DELETE_PHONE_NUMBER_SUCCESS:
    case customerActionTypes.UPLOAD_CUSTOMER_AVATAR_SUCCESS:
    case customerActionTypes.UPDATE_CUSTOMER_PROFILE_SUCCESS:
    case customerActionTypes.ADD_CHILD_SUCCESS:
    case customerActionTypes.UPDATE_CHILD_SUCCESS:
    case customerActionTypes.DELETE_CHILD_SUCCESS:
    case customerActionTypes.UPDATE_SOCIAL_MEDIA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customerData: payload,
      };

    case customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedTeacherDetails: payload
      }
    case customerActionTypes.FETCH_DASHBOARD_DATA_FAILURE:
    case customerActionTypes.SAVE_NEW_PHONE_NUMBER_FAILURE:
    case customerActionTypes.SAVE_TRANSACTION_FAILURE:
    case customerActionTypes.UPDATE_PHONE_NUMBER_FAILURE:
    case customerActionTypes.DELETE_PHONE_NUMBER_FAILURE:
    case customerActionTypes.UPLOAD_CUSTOMER_AVATAR_FAILURE:
    case customerActionTypes.ADD_CHILD_FAILURE:
    case customerActionTypes.UPDATE_CHILD_FAILURE:
    case customerActionTypes.DELETE_CHILD_FAILURE:
    case customerActionTypes.UPDATE_SOCIAL_MEDIA_FAILURE:
    case customerActionTypes.FETCH_SELECTED_TEACHER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case userActionTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        customerData: {},
      };
    case customerActionTypes.UPDATE_CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: payload
      }
    default:
      return state;
  }
};

export default customerReducer;
