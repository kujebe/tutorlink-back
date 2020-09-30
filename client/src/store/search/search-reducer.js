import searchActionTypes from "./search-action-types";

const INITIAL_STATE = {
  teachersList: null,
  teachersCount: 0,
  page: 1,
  limit: 4,
  isLoading: false,
};

const searchReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case searchActionTypes.FETCH_TEACHERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case searchActionTypes.FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        teachersList: payload.data,
        teachersCount: payload.count,
        page: payload.page,
        isLoading: false,
      };
    case searchActionTypes.FETCH_TEACHERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
