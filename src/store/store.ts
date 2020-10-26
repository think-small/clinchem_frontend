import { createStore, applyMiddleware, Store } from "redux";
import Thunk from "redux-thunk";
import { rootReducer } from "./reducers/root.reducer";
import { IAppState } from "../models/IAppState";

export const configStore = (): Store<IAppState> => {
  return createStore(rootReducer, undefined, applyMiddleware(Thunk), );
};
