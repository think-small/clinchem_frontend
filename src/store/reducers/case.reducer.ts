import { ICaseState } from "../../models/ICaseState";
import { caseActions } from "../actions/actions/caseActions";
import { initialState } from "../../models/ICaseState";

export const caseReducer = (
  state: ICaseState = initialState,
  action: caseActions
): ICaseState => {
  switch (action.type) {
    case "POST_NEW_RESULT":
      if (Array.isArray(action.payload))
        return ({
          ...state,
          results: [...state.results, ...action.payload]
        });
      else
        return ({
          ...state,
          results: [...state.results, action.payload]
        });
    case "POST_NEW_NOTES":
      if (Array.isArray(action.payload))
        return ({
          ...state,
          notes: [...state.notes, ...action.payload]
        });
      else
        return ({
          ...state,
          notes: [...state.notes, action.payload]
        });
    case "POST_NEW_HISTORIES":
      if (Array.isArray(action.payload))
        return ({
          ...state,
          history: [...state.history, ...action.payload]
        });
      else
        return ({
          ...state,
          history: [...state.history, action.payload]
        });
    case "IGetNotes":
      return {
        ...state,
        ...action.notes,
      };
    case "IGetHistory":
      return {
        ...state,
        ...action.history,
      };
    case "IGetResult":
      return {
        ...state,
        ...action.results
      }
    default:
      return state;
  }
};
