import { takeLatest, call, all, put } from "redux-saga/effects";

import { signInSuccess, signInFailure } from "./user-actions";

import userActionTypes from "./user-action-types";

import AuthService from "services/auth-service";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const userData = yield AuthService.login(email, password);
    if (userData.status === "error") {
      yield put(signInFailure(userData.message));
      return;
    }
    yield put(signInSuccess(userData));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/** All user sagas */
export function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
