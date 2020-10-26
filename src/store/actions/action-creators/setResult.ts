import {IResult} from "../../../models/IResult";
import {caseActions} from "../actions/caseActions";
import {POST_NEW_RESULT} from "../actions/ActionTypes";

export const setResultActionCreator = (result: IResult | IResult[]): caseActions => {
    return {
        type: POST_NEW_RESULT,
        payload: result
    }
}