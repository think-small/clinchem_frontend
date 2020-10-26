import { Action } from "redux";
import { INote } from "../../../models/INote";

export interface IGetNotesAction extends Action<"IGetNotes"> {
  notes: INote[];
}
