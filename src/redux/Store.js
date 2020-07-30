import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./messagesReducer";
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";


let reducers = combineReducers({
  Profile: profileReducer,
  Messages: messagesReducer,
  Users:usersReducer,
  auth:authReducer,
  form: formReducer,
  app: appReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;


