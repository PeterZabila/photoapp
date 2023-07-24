import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth'
import commentsReducer from '../reducers/comments'

const rootReducer = combineReducers({ auth: authReducer, comments: commentsReducer});

export const store = configureStore({
    reducer: rootReducer
  });
  
  export default store;