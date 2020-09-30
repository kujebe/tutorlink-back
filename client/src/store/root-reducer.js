import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapDataReducer from "./map/map-reducer";
import teacherReducer from "./teacher/teacher-reducer";
import userReducer from "./user/user-reducer";
import SearchReducer from "./search/search-reducer";
import errorReducer from "./errors/error-reducer";
import customerReducer from "./customer/customer-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "errors", "mapData", "teacher", "customer"],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  blacklist: [
    "hideMenu",
    "forgotPasswordStatus",
    "isAuthenticating",
    "resetPasswordStatus",
  ],
};

const customerPersistConfig = {
  key: "customer",
  storage: storage,
  blacklist: [
    "selectedTeacherForPayment",
    "locationBeforeLogin",
    "isLoading",
    "showPaymentModal",
  ],
};

const mapPersistConfig = {
  key: "mapData",
  storage: storage,
  blacklist: [
    "userLocationError",
  ],
};

const rootReducer = combineReducers({
  teacher: teacherReducer,
  errors: errorReducer,
  search: SearchReducer,
  mapData: persistReducer(mapPersistConfig, mapDataReducer),
  user: persistReducer(userPersistConfig, userReducer),
  customer: persistReducer(customerPersistConfig, customerReducer),
});

export default persistReducer(persistConfig, rootReducer);
