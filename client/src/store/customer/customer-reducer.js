import { customerActionTypes } from "./customer-action-types";

const INITIAL_STATE = {
  showPaymentModal: false,
  locationBeforeLogin: "",
  selectedTeacherFromMap: {},
  selectedTeacherForPayment: {},
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

    default:
      return state;
  }
};

export default customerReducer;
