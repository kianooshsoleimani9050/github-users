import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
export const rootReducer = combineReducers({
  usersData: userReducer,
});
