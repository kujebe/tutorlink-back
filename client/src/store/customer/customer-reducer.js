import customerActionTypes from "./customer-action-types";

const INITIAL_STATE = {
  showPaymentModal: false,
  locationBeforeLogin: "",
  selectedTeacherFromMap: {},
  selectedTeacherForPayment: {},
  lastTransaction: null,
  isLoading: false,
  customerData: {},
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
    case customerActionTypes.FETCH_DASHBOARD_DATA_START:
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
    case customerActionTypes.SAVE_TRANSACTION_FAILURE:
      return {
        isLoading: false,
      };
    case customerActionTypes.FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customerData: payload,
      };
    case customerActionTypes.FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default customerReducer;
