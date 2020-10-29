import { IHistory } from "../../../models/IHistory";
import { POST_NEW_HISTORIES } from "../actions/ActionTypes";
import { caseActions } from "../actions/caseActions";

export const setHistoriesActionCreator = (history: IHistory | IHistory[]): caseActions => {
    return {
        type: POST_NEW_HISTORIES,
        payload: history
    }
}