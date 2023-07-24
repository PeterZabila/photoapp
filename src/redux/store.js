import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth'

const rootReducer = combineReducers({ auth: authReducer});

export const store = configureStore({
    reducer: rootReducer
  });
  
  export default store;