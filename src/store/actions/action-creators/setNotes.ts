import {INote} from "../../../models/INote";
import {caseActions} from "../actions/caseActions";
import {POST_NEW_NOTES} from "../actions/ActionTypes";

export const setNotesActionCreator = (notes: INote | INote[]): caseActions => {
    return {
        type: POST_NEW_NOTES,
        payload: notes
    }
}