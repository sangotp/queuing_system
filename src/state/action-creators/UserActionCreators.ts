import { Dispatch } from "redux"
import { ReadFirebaseData } from "../firebase/actions/userFirebaseActions"
import { Actions } from "../actions/UserActions"

export const Create = () => {}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadUser,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}