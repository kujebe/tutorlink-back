import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  saveTransactionSuccess,
  saveTransactionFailure,
  saveNewPhoneNumberSuccess,
  saveNewPhoneNumberFailure,
} from "./customer-actions";
import { setErrors, clearErrors } from "store/errors/error-actions";

import customerActionTypes from "./customer-action-types";

export function* saveTransaction({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/save-transaction", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: payload.token,
      },
      body: JSON.stringify(payload),
    });
    const response = yield result.json();
    if (response.status === "error") {
      yield put(
        setErrors({
          type: "saveTransactionFail",
          ...response,
        })
      );
      yield put(saveTransactionFailure());
      return;
    }
    yield put(
      saveTransactionSuccess(
        response.data.transactions[response.data.transactions.length - 1]
      )
    );
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(saveTransactionFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* saveNewPhoneNumer({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/save-new-phone-number", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: payload.token,
      },
      body: JSON.stringify(payload),
    });
    const response = yield result.json();
    if (response.status === "error") {
      yield put(
        setErrors({
          type: "saveTransactionFail",
          ...response,
        })
      );
      yield put(saveNewPhoneNumberFailure());
      return;
    }
    yield put(saveNewPhoneNumberSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(saveTransactionFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

/********* SAGAS TRIGGERS **********/

export function* onSaveTransactionStart() {
  yield takeLatest(customerActionTypes.SAVE_TRANSACTION_START, saveTransaction);
}

export function* onSaveNewPhoneNumberStart() {
  yield takeLatest(
    customerActionTypes.SAVE_NEW_PHONE_NUMBER_START,
    saveNewPhoneNumer
  );
}

/** All user sagas */
export function* customerSagas() {
  yield all([call(onSaveTransactionStart), call(onSaveNewPhoneNumberStart)]);
}
