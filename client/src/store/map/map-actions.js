import { mapActionTypes } from "./map-action-types";

export const getUserLocationStart = () => ({
  type: mapActionTypes.GET_USER_LOCATION_START,
});

export const getUserLocationSuccess = (userLocation) => ({
  type: mapActionTypes.GET_USER_LOCATION_SUCCESS,
  payload: userLocation,
});

export const getUserLocationFailure = (errorMessage) => ({
  type: mapActionTypes.GET_USER_LOCATION_FAILURE,
  payload: errorMessage,
});

export const selectTeacherForDetails = (teacherSlug) => ({
  type: mapActionTypes.SELECT_TEACHER_FOR_DETAILS,
  payload: teacherSlug,
});
