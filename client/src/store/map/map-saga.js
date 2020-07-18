import { takeLatest, call, put, all } from "redux-saga/effects";

import { getUserLocationSuccess, getUserLocationFailure } from "./map-actions";
import { getCurrentPositionPromise } from "helpers/map-helpers";

import { mapActionTypes } from "./map-action-types";

export function* getUserLocation() {
  try {
    let currentPosition = {};
    let currentPositionError = null;
    yield getCurrentPositionPromise({
      enableHighAccuracy: true,
      // maximumAge: 1000,
      // timeout: 100000,
    })
      .then(({ coords }) => {
        currentPosition.latitude = coords.latitude;
        currentPosition.longitude = coords.longitude;
      })
      .catch((err) => {
        currentPositionError = err.message;
      });

    if (currentPositionError) {
      yield put(getUserLocationFailure(currentPositionError));
    } else {
      yield put(getUserLocationSuccess(currentPosition));
    }
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
