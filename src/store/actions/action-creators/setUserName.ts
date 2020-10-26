import {
  UserDataActions,
  UserDataActionTypes,
} from "../actions/userDataActions";

export const setUserNameActionCreator = (userName: string): UserDataActions => {
  return {
    type: UserDataActionTypes.SET_USER_NAME,
    userName,
  };
};
