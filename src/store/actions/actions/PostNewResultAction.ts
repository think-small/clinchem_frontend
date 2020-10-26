import { IResult } from "../../../models/IResult";
import { POST_NEW_RESULT } from "./ActionTypes";

export interface PostNewResultAction {
    type: typeof POST_NEW_RESULT;
    payload: IResult | IResult[];
}