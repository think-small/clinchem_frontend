import { INote } from "../../../models/INote";
import { POST_NEW_NOTES } from "./ActionTypes";

export interface PostNewNotesAction {
    type: typeof POST_NEW_NOTES;
    payload: INote | INote[]
}