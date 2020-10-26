import { IGetHistoryAction } from "./IGetHistoryAction";
import { IGetNotesAction } from "./IGetNotesAction";
import { IGetResultsAction } from "./IGetResultsAction";
import { PostNewResultAction } from "./PostNewResultAction";

export type caseActions =
    | PostNewResultAction
  | IGetHistoryAction
  | IGetNotesAction
  | IGetResultsAction;
