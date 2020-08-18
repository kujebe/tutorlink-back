import teacherActionTypes from "./teacher-action-types";

const INITIAL_STATE = {
  selectedTeacherSlug: "",
  selectedTeacherDetails: null,
  fetchTeacherDetailsError: null,
};

const teacherReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case teacherActionTypes.SELECT_TEACHER_SLUG:
      return {
        ...state,
        selectedTeacherSlug: payload,
      };

    case teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_SUCCESS:
      return {
        ...state,
        selectedTeacherDetails: payload,
      };

    case teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_FAILURE:
      return {
        ...state,
        fetchTeacherDetailsError: payload,
      };

    default:
      return state;
  }
};

export default teacherReducer;
