import { all, call } from "redux-saga/effects";

import { mapSagas } from "./map/map-sagas";
import { userSagas } from "./user/user-sagas";

export default function* rootSaga() {
  yield all([call(mapSagas), call(userSagas)]);
}
