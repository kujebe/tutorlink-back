import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  saveTransactionSuccess,
  saveTransactionFailure,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
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
    const saveTxnResponse = yield result.json();
    if (saveTxnResponse.status === "error") {
      yield put(
        setErrors({
          type: "saveTransactionFail",
          ...saveTxnResponse,
        })
      );
      yield put(saveTransactionFailure());
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
    yield put(saveTransactionFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* fetchDashboardData({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/dashboard/" + payload.userId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: payload.token,
      },
      // body: JSON.stringify(payload),
    });
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
  } catch (error) {
    yield put(fetchDashboardDataFailure());
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

export function* onFetchCustomerDashboardData() {
  yield takeLatest(
    customerActionTypes.FETCH_DASHBOARD_DATA_START,
    fetchDashboardData
  );
}

/** All user sagas */
export function* customerSagas() {
  yield all([call(onSaveTransactionStart), call(onFetchCustomerDashboardData)]);
}
