import { IHistory } from "../../../models/IHistory";
import { POST_NEW_HISTORIES } from "./ActionTypes";

export interface PostNewHistoriesAction {
    type: typeof POST_NEW_HISTORIES,
    payload: IHistory | IHistory[]
}