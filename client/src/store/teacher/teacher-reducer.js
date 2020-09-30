import teacherActionTypes from "./teacher-action-types";

const INITIAL_STATE = {
  fetchTeacherDetailsError: null,
};

const teacherReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default teacherReducer;
