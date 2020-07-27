import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapDataReducer from "./map/map-reducer";
import teacherReducer from "./teacher/teacher-reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  mapData: mapDataReducer,
  teacher: teacherReducer,
});

export default persistReducer(persistConfig, rootReducer);
