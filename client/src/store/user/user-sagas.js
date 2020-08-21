import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "./user-actions";
import { setErrors, clearErrors } from "store/errors/error-actions";

import userActionTypes from "./user-action-types";

import AuthService from "services/auth-service";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const response = yield AuthService.login(email, password);
    if (response.status === "error") {
      yield put(signInFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "signinFail",
          ...response,
        })
      );
      return;
    }
    yield put(signInSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(signInFailure()); // Disable isAuthentication loading option
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* signUpUser({
  payload: { fullname, email, password, password_confirm, role },
}) {
  try {
    const signUpResponse = yield AuthService.signUp(
      fullname,
      email,
      password,
      password_confirm,
      role
    );
    if (signUpResponse.status === "error") {
      yield put(signUpFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "signupFail",
          ...signUpResponse,
        })
      );
      return;
    }
    yield put(signUpSuccess(signUpResponse));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(signUpFailure()); // Disable isAuthentication loading option
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* signOutUser() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    put(signOutFailure(error.message));
  }
}

/********* SAGAS TRIGGERS **********/

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutUser);
}

/** All user sagas */
export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
