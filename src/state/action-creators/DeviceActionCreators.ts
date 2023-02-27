import { Dispatch } from "redux"
import { Actions } from "../actions/DeviceActions"
import { ReadFirebaseData } from "../firebase/actions/deviceFirebaseActions"

export const Create = () => {
}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadDevice,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}