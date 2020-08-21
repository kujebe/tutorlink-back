import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapDataReducer from "./map/map-reducer";
import teacherReducer from "./teacher/teacher-reducer";
import userReducer from "./user/user-reducer";
import errorReducer from "./errors/error-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", ["currentUser"]],
};

const rootReducer = combineReducers({
  mapData: mapDataReducer,
  teacher: teacherReducer,
  user: userReducer,
  errors: errorReducer,
});

export default persistReducer(persistConfig, rootReducer);
