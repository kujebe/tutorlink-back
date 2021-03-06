import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchTeachersSuccess, fetchTeachersFailure } from "./search-actions";
import { setErrors, clearErrors } from "store/errors/error-actions";
import searchActionTypes from "./search-action-types";

export function* fetchTeachers({ payload: { page, limit, userLocation } }) {
  try {
    const result = yield fetch(
      `/api/v1/teachers/search/?page=${page}&limit=${limit}&longitude=${userLocation[1]}&latitude=${userLocation[0]}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const response = yield result.json();
    if (response.status === "error") {
      yield put(
        setErrors({
          type: "fetchTeachersListFail",
          ...response,
        })
      );
      yield put(fetchTeachersFailure());
      return;
    }
    yield put(fetchTeachersSuccess({ ...response, page }));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(fetchTeachersFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

/********* SAGAS TRIGGERS **********/
export function* onFetchTeachersStart() {
  yield takeLatest(searchActionTypes.FETCH_TEACHERS_START, fetchTeachers);
}

/** All search sagas */
export function* searchSagas() {
  yield all([call(onFetchTeachersStart)]);
}
