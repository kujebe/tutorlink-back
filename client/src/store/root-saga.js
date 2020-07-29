import { all, call } from "redux-saga/effects";

import { mapSagas } from "./map/map-sagas";

export default function* rootSaga() {
  yield all([call(mapSagas)]);
}
