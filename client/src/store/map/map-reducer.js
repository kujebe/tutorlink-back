import { mapActionTypes } from "./map-action-types";

const INITIAL_STATE = {
  userLocation: null,
  userLocationError: null,
  selectedTeacher: "",
};

const mapDataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case mapActionTypes.GET_USER_LOCATION_SUCCESS:
      return {
        ...state,
        userLocation: payload,
      };

    case mapActionTypes.GET_USER_LOCATION_FAILURE:
      return {
        ...state,
        userLocationError: payload,
      };

    case mapActionTypes.SELECT_TEACHER_FOR_DETAILS:
      return {
        ...state,
        selectedTeacher: payload,
      };

    default:
      return {
        state,
      };
  }
};

export default mapDataReducer;
