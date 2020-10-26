import { combineReducers } from "redux";
import { caseReducer } from "./case.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  case: caseReducer,
});
