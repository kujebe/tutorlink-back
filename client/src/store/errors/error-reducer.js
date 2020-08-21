import errorActionTypes from "./error-action-types";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case errorActionTypes.SET_ERRORS:
      return {
        ...payload,
      };
    case errorActionTypes.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
