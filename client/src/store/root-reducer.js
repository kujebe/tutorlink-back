import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapDataReducer from "./map/map-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mapData"],
};

const rootReducer = combineReducers({
  mapData: mapDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
