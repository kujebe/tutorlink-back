import { teacherActionTypes } from "./teacher-action-types";

export const selectTeacherSlug = (teacherSlug) => ({
  type: teacherActionTypes.SELECT_TEACHER_SLUG,
  payload: teacherSlug,
});

export const fetchSelectedTeacherDetailsStart = (teacherSlug) => ({
  type: teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_START,
  payload: teacherSlug,
});

export const fetchSelectedTeacherDetailsSuccess = (teacherDetails) => ({
  type: teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_SUCCESS,
  payload: teacherDetails,
});

export const fetchSelectedTeacherDetailsFailure = (error) => ({
  type: teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_FAILURE,
  payload: error,
});
