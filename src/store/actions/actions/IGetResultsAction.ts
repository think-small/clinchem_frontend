import { Action } from "redux";
import { IResult } from "../../../models/IResult";

export interface IGetResultsAction extends Action<"IGetResult"> {
  results: IResult[];
}
