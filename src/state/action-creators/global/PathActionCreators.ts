import { Dispatch } from "redux"
import { Actions } from '../../actions/global/PathActions'

export const Read = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Actions.ReadPath,
    })
  }
}

export const Update = (paths: string[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Actions.UpdatePath,
      payload: paths
    })
  }
}

export const Delete = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Actions.DeletePath,
      payload: [] as string[]
    })
  }
}