import { Action, ActionCreator, Dispatch } from "redux";
import { INote } from "../../../models/INote";
import { IGetHistoryAction} from "../actions/IGetHistoryAction";
import {IHistory} from "../../../models/IHistory";

export const getHistoryActionCreator = (caseId : number) => {
    return async (dispatch : Dispatch) => {
        const url = `https://localhost:44366/api/notesandhistory/notes/${caseId}`;
        const notesResponse = await fetch(url);
        const history : IHistory[] = await notesResponse.json();
        const action : IGetHistoryAction = {
            type: 'IGetHistory',
            history
        }
    }
}