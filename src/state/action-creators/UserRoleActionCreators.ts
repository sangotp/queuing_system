import { Dispatch } from "redux"
import { ReadFirebaseData } from "../firebase/actions/userRoleFirebaseActions"
import { Actions } from "../actions/UserRoleActions"

export const Create = () => {}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadRole,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}