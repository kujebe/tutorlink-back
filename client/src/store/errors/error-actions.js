import errorActionTypes from "./error-action-types";

export const setErrors = (errors) => ({
  type: errorActionTypes.SET_ERRORS,
  payload: errors,
});

export const clearErrors = () => ({
  type: errorActionTypes.CLEAR_ERRORS,
});
