import {
  UserDataActions,
  UserDataActionTypes,
} from "../actions/userDataActions";

export const setCaseIdActionCreator = (caseId: number): UserDataActions => {
  return {
    type: UserDataActionTypes.SET_CASE_ID,
    caseId,
  };
};
