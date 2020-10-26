import { Action } from "redux";
import { IHistory } from "../../../models/IHistory";

export interface IGetHistoryAction extends Action<"IGetHistory"> {
  history: IHistory[];
}
