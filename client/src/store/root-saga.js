import { all, call } from "redux-saga/effects";

import { mapSagas } from "./map/map-saga";

export default function* rootSaga() {
  yield all([call(mapSagas)]);
}
