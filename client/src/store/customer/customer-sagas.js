import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  saveTransactionSuccess,
  saveTransactionFailure,
  saveNewPhoneNumberSuccess,
  saveNewPhoneNumberFailure,
  updatePhoneNumberSuccess,
  updatePhoneNumberFailure,
  deletePhoneNumberSuccess,
  deletePhoneNumberFailure,
  uploadCustomerAvatarSuccess,
  uploadCustomerAvatarFailure,
  updateProfileSuccess,
  updateProfileFailure,
  addChildSuccess,
  addChildFailure,
  updateChildSuccess,
  updateChildFailure,
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
          type: "savePhoneNumberFail",
          ...response,
        })
      );
      yield put(saveNewPhoneNumberFailure());
      return;
    }
    yield put(saveNewPhoneNumberSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(saveNewPhoneNumberFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* updatePhoneNumber({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/update-phone-number", {
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
          type: "updatePhoneNumberFail",
          ...response,
        })
      );
      yield put(updatePhoneNumberFailure());
      return;
    }
    yield put(updatePhoneNumberSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(updatePhoneNumberFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* deletePhoneNumber({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/delete-phone-number", {
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
          type: "deletePhoneNumberFail",
          ...response,
        })
      );
      yield put(deletePhoneNumberFailure());
      return;
    }
    yield put(deletePhoneNumberSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(deletePhoneNumberFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* updateCustomerProfile({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/update-profile", {
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
          type: "updateProfileFail",
          ...response,
        })
      );
      yield put(updateProfileFailure());
      return;
    }
    yield put(updateProfileSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(updateProfileFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* addChild({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/add-child", {
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
          type: "addChildFail",
          ...response,
        })
      );
      yield put(addChildFailure());
      return;
    }
    yield put(addChildSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(addChildFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* updateChild({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/update-child", {
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
          type: "updateChildFail",
          ...response,
        })
      );
      yield put(updateChildFailure());
      return;
    }
    yield put(updateChildSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(updateChildFailure());
    yield put(
      setErrors({
        type: "serverFail",
        ...error,
      })
    );
  }
}

export function* uploadCustomerAvatar({ payload }) {
  try {
    const result = yield fetch("/api/v1/customer/update-profile-photo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        authorization: payload.token,
      },
      body: payload.formData,
    });
    const response = yield result.json();
    if (response.status === "error") {
      yield put(
        setErrors({
          type: "deletePhoneNumberFail",
          ...response,
        })
      );
      yield put(uploadCustomerAvatarFailure());
      return;
    }
    yield put(uploadCustomerAvatarSuccess(response.data));
    yield put(clearErrors()); //Clear errors
  } catch (error) {
    yield put(uploadCustomerAvatarFailure());
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

export function* onUpdatePhoneNumberStart() {
  yield takeLatest(
    customerActionTypes.UPDATE_PHONE_NUMBER_START,
    updatePhoneNumber
  );
}

export function* onDeletePhoneNumberStart() {
  yield takeLatest(
    customerActionTypes.DELETE_PHONE_NUMBER_START,
    deletePhoneNumber
  );
}

export function* onUploadCustomerAvatarStart() {
  yield takeLatest(
    customerActionTypes.UPLOAD_CUSTOMER_AVATAR_START,
    uploadCustomerAvatar
  );
}

export function* onUpdateCustomerProfileStart() {
  yield takeLatest(
    customerActionTypes.UPDATE_CUSTOMER_PROFILE_START,
    updateCustomerProfile
  );
}

export function* onAddChildStart() {
  yield takeLatest(customerActionTypes.ADD_CHILD_START, addChild);
}

export function* onUpdateChildStart() {
  yield takeLatest(customerActionTypes.UPDATE_CHILD_START, updateChild);
}

/** All user sagas */
export function* customerSagas() {
  yield all([
    call(onSaveTransactionStart),
    call(onSaveNewPhoneNumberStart),
    call(onUpdatePhoneNumberStart),
    call(onDeletePhoneNumberStart),
    call(onUploadCustomerAvatarStart),
    call(onUpdateCustomerProfileStart),
    call(onAddChildStart),
    call(onUpdateChildStart),
  ]);
}
