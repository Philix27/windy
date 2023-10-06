import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import AuthReducer from "../slice/masa_manager";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  version: 1,
  blacklist: ["somethingTemporary"],
};

const rootReducer = combineReducers({
  // persistReducer(authPersistConfig, SignUpFormReducer);
  AuthReducer,
});

export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);
