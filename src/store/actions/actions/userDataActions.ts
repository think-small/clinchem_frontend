export type UserDataActions =
  | ISetUnitIdAction
  | ISetUserNameAction
  | ISetCaseIdAction;

export enum UserDataActionTypes {
  SET_UNIT_ID = "SET_UNIT_ID",
  SET_CASE_ID = "SET_CASE_ID",
  SET_USER_NAME = "SET_USER_NAME",
}

interface ISetUnitIdAction {
  type: UserDataActionTypes.SET_UNIT_ID;
  unitId: number;
}

interface ISetUserNameAction {
  type: UserDataActionTypes.SET_USER_NAME;
  userName: string;
}

interface ISetCaseIdAction {
  type: UserDataActionTypes.SET_CASE_ID;
  caseId: number;
}
