import searchActionTypes from "./search-action-types";

export const fetchTeachersStart = (fetchData) => ({
  type: searchActionTypes.FETCH_TEACHERS_START,
  payload: fetchData,
});

export const fetchTeachersSuccess = (data) => ({
  type: searchActionTypes.FETCH_TEACHERS_SUCCESS,
  payload: data,
});

export const fetchTeachersFailure = () => ({
  type: searchActionTypes.FETCH_TEACHERS_SUCCESS,
});
