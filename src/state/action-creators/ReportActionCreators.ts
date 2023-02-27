import { Dispatch } from "redux";
import { Actions } from "../actions/ReportActions";
import { ReadFirebaseData } from "../firebase/actions/reportFirebaseActions";

export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadReport,
            payload: await ReadFirebaseData()
        })
    }
}