export interface IUserState {
  selectedUnitId: number;
  selectedCaseId: number;
  userName: string;
}

export const initialState = {
  selectedUnitId: 0,
  selectedCaseId: 0,
  userName: "",
};
