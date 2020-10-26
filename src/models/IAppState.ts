import { ICaseState } from "./ICaseState";
import { IUserState } from "./IUser";

export interface IAppState {
  case: ICaseState;
  user: IUserState;
}
