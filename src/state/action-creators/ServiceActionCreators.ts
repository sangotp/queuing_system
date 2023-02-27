import { Dispatch } from "redux"
import { Actions } from "../actions/ServiceActions"
import { ReadFirebaseData } from "../firebase/actions/serviceFirebaseActions"

export const Create = () => {}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadService,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}