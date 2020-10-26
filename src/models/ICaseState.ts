import { INote } from "./INote";
import { IHistory } from "./IHistory";
import { IResult } from "./IResult";

export interface ICaseState {
  readonly unitId: number | null;
  readonly unitName: string;
  readonly caseId: number | null;
  readonly notes: INote[];
  readonly history: IHistory[];
  readonly results: IResult[];
}

export const initialState : ICaseState = {
  unitId: null,
  unitName: "",
  caseId: null,
  notes: [],
  history: [],
  results: []
}
