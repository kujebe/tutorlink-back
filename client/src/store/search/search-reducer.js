import searchActionTypes from "./search-action-types";

const INITIAL_STATE = {
  teachersList: null,
  totalTeachers: 0,
  paginationPage: 1,
  limit: 4,
  numberOfPages:
    totalTeachers % limit === 0
      ? Math.floor(totalTeachers / limit)
      : Math.floor(totalTeachers / limit) + 1,
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
        teachersList: paload.data,
        totalTeachers: payload.count,
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
