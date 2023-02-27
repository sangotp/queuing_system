import { Dispatch } from "redux"
import { ReadFirebaseData } from "../firebase/actions/userActivityLogActions"
import { Actions } from "../actions/UserActivityLogActions"

export const Create = () => {}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadUserActivityLog,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}