import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchSelectedTeacherDetailsSuccess,
  fetchSelectedTeacherDetailsFailure,
} from "./teacher-actions";

import { teacherActionTypes } from "./teacher-action-types";

export const fetcher = (param) =>
  fetch(`http://localhost:5000/api/v1/teachers/${param}`).then((response) =>
    response.json()
  );

export function* fetchTeacherDetails({ payload }) {
  try {
    console.log(payload);
    const data = yield fetcher(payload);
    yield put(fetchSelectedTeacherDetailsSuccess(data));
    // if (error) {
    //   yield fetchSelectedTeacherDetailsFailure(data);
    // }
  } catch (error) {
    yield put(fetchSelectedTeacherDetailsFailure(error.message));
  }
}

export function* onFetchTeacherDetails() {
  yield takeLatest(
    teacherActionTypes.FETCH_SELECTED_TEACHER_DETAILS_START,
    fetchTeacherDetails
  );
}

export function* teachersSagas() {
  yield all([call(onFetchTeacherDetails)]);
}
