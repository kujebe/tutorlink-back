import { takeLatest, call, put, all } from "redux-saga/effects";

import { getUserLocationSuccess, getUserLocationFailure } from "./map-actions";
import { getCurrentPositionPromise } from "helpers/map-helpers";

import { mapActionTypes } from "./map-action-types";

export function* getUserLocation() {
  try {
    let currentPosition = [];
    yield getCurrentPositionPromise().then((latlong) => {
      currentPosition = latlong;
    });
    yield put(getUserLocationSuccess(currentPosition));
  } catch (error) {
    yield put(getUserLocationFailure(error.message));
  }
}

export function* getUserLocationStart() {
  yield takeLatest(mapActionTypes.GET_USER_LOCATION_START, getUserLocation);
}

export function* mapSagas() {
  yield all([call(getUserLocationStart)]);
}
