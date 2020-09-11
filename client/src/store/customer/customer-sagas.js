import { takeLatest, call, all, put } from "redux-saga/effects";

import { saveTransactionSuccess } from "./customer-actions";
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
    const saveTxnResponse = yield result.json();
    if (saveTxnResponse.status === "error") {
      yield put(
        setErrors({
          type: "saveTransactionFail",
          ...saveTxnResponse,
        })
      );
      return;
    }
    yield put(
      saveTransactionSuccess(
        saveTxnResponse.data.transactions[
          saveTxnResponse.data.transactions.length - 1
        ]
      )
    );
    yield put(clearErrors()); //Clear errors
  } catch (error) {
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

/** All user sagas */
export function* customerSagas() {
  yield all([call(onSaveTransactionStart)]);
}
