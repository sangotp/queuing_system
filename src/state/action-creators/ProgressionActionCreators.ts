import { Dispatch } from "redux"
import { Actions } from "../actions/ProgressionActions"
import { ReadFirebaseData } from "../firebase/actions/progressionFirebaseActions"

export const Create = () => {}
export const Read = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.ReadProgression,
            payload: await ReadFirebaseData()
        })
    }
}
export const Update = () => {}
export const Delete = () => {}