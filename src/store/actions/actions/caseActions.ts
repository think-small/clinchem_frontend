import { IGetHistoryAction } from "./IGetHistoryAction";
import { IGetNotesAction } from "./IGetNotesAction";
import { IGetResultsAction } from "./IGetResultsAction";
import { PostNewResultAction } from "./PostNewResultAction";
import {PostNewNotesAction} from "./PostNewNotesAction";
import {PostNewHistoriesAction} from "./PostNewHistoriesAction";

export type caseActions =
    | PostNewResultAction
    | PostNewNotesAction
    | PostNewHistoriesAction
  | IGetHistoryAction
  | IGetNotesAction
  | IGetResultsAction;
