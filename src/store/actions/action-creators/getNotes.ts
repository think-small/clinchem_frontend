import { Action, ActionCreator, Dispatch } from "redux";
import { INote } from "../../../models/INote";
import { IGetNotesAction} from "../actions/IGetNotesAction";

export const getNotesActionCreator = (caseId : number) => {
    return async (dispatch : Dispatch) => {
        const url = `https://localhost:44366/api/notesandhistory/notes/${caseId}`;
        const notesResponse = await fetch(url);
        const notes : INote[] = await notesResponse.json();
        const action : IGetNotesAction = {
            type: 'IGetNotes',
            notes
        }
    }
}