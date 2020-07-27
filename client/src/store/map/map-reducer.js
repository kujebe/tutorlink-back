import { mapActionTypes } from "./map-action-types";

const INITIAL_STATE = {
  userLocation: [],
  userLocationError: null,
};

const mapDataReducer = (state = INITIAL_STATE, { payload, type }) => {
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

    default:
      return state;
  }
};

export default mapDataReducer;
