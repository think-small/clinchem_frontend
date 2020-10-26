import { IUserState, initialState } from "../../models/IUser";
import {
  UserDataActions,
  UserDataActionTypes,
} from "../actions/actions/userDataActions";

export const userReducer = (
  state: IUserState = initialState,
  action: UserDataActions
): IUserState => {
  switch (action.type) {
    case UserDataActionTypes.SET_UNIT_ID:
      return {
        ...state,
        selectedUnitId: action.unitId,
      };
    case UserDataActionTypes.SET_CASE_ID:
      return {
        ...state,
        selectedCaseId: action.caseId,
      };
    case UserDataActionTypes.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};
