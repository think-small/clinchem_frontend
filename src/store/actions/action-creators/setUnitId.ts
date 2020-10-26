import {
  UserDataActions,
  UserDataActionTypes,
} from "../actions/userDataActions";

export const setUnitIdActionCreator = (unitId: number): UserDataActions => {
  return {
    type: UserDataActionTypes.SET_UNIT_ID,
    unitId,
  };
};
