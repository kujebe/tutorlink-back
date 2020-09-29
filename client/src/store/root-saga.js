import { all, call } from "redux-saga/effects";

import { mapSagas } from "./map/map-sagas";
import { userSagas } from "./user/user-sagas";
import { customerSagas } from "./customer/customer-sagas";
import { searchSagas } from "./search/search-sagas";

export default function* rootSaga() {
  yield all([
    call(mapSagas),
    call(userSagas),
    call(customerSagas),
    call(searchSagas),
  ]);
}
