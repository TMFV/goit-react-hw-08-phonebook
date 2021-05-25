//import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducer from "./app/app-reducer";
import authReducer from "./auth/auth-reducers";

console.log(getDefaultMiddleware());
/* const rootReducer = combineReducers({
  app: appReducer,
}); */
//console.log(process.env);
//const store = createStore(rootReducer, composeWithDevTools());
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
