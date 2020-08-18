import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapDataReducer from "./map/map-reducer";
import teacherReducer from "./teacher/teacher-reducer.js";
import userReducer from "./user/user-reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", ["currentUser"]],
};

const rootReducer = combineReducers({
  mapData: mapDataReducer,
  teacher: teacherReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
