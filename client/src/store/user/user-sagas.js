import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  emailSignInSuccess,
  emailSignInFailure,
  signUpSuccess,
  signUpFailure,
  sendForgotPasswordMailSuccess,
  sendForgotPasswordMailFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
  logOutSuccess,
  logOutFailure,
} from "./user-actions";
import {
  fetchDashboardDataStart,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
} from "store/customer/customer-actions";
import { setErrors, clearErrors } from "store/errors/error-actions";

import userActionTypes from "./user-action-types";

import AuthService from "services/auth-service";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const response = yield AuthService.login(email, password);
    if (response.status === "error") {
      yield put(emailSignInFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "signinFail",
          ...response,
        })
      );
      return;
    }

    const result = yield fetch(
      "/api/v1/customer/dashboard/" + response.data.id,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: response.data.token,
        },
      }
    );

    const customerResponse = yield result.json();
    if (customerResponse.status === "error") {
      yield put(
        setErrors({
          type: "dashboardDataFail",
          ...customerResponse,
        })
      );
      yield put(fetchDashboardDataFailure());
      return;
    }
    yield put(fetchDashboardDataSuccess(customerResponse.data));
    yield put(clearErrors()); //Clear errors

    yield put(emailSignInSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(emailSignInFailure()); // Disable isAuthentication loading option
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

export function* sendForgotPasswordEmail({ payload }) {
  try {
    const response = yield AuthService.sendPasswordResetMail(payload);
    if (response.status === "error") {
      yield put(sendForgotPasswordMailFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "passwordResetFail",
          ...response,
        })
      );
      return;
    }
    yield put(sendForgotPasswordMailSuccess(response));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(sendForgotPasswordMailFailure()); // Disable isAuthentication loading option
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* resetPassword({ payload }) {
  try {
    const response = yield AuthService.resetPassword(payload);
    if (response.status === "error") {
      yield put(resetPasswordFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "resetPasswordFail",
          ...response,
        })
      );
      return;
    }
    yield put(resetPasswordSuccess(response));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(resetPasswordFailure()); // Disable isAuthentication loading option
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}
export function* logOutUser({ payload }) {
  try {
    const logOutResponse = yield AuthService.logOut(payload);
    if (logOutResponse.status === "error") {
      yield put(logOutFailure()); // Disable isAuthentication loading option
      yield put(
        setErrors({
          type: "logoutFail",
          message: "Invalid session",
        })
      );
      return;
    }
    if (logOutResponse.data.reply === 1) {
      yield put(logOutSuccess());
    }
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(logOutFailure()); // Disable isAuthentication loading option
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

/********* SAGAS TRIGGERS **********/

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser);
}

export function* onSendForgotPasswordEmail() {
  yield takeLatest(
    userActionTypes.SEND_FORGOT_PASSWORD_EMAIL_START,
    sendForgotPasswordEmail
  );
}

export function* onResetPasswordStart() {
  yield takeLatest(userActionTypes.RESET_PASSWORD_START, resetPassword);
}

export function* onLogOutStart() {
  yield takeLatest(userActionTypes.LOG_OUT_START, logOutUser);
}

/** All user sagas */
export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSendForgotPasswordEmail),
    call(onResetPasswordStart),
    call(onLogOutStart),
  ]);
}
