import { pathInitialState, Actions, ActionTypes } from "../../actions/global/PathActions";

export const PathReducer = (state: String[] = pathInitialState, action: ActionTypes) => {
  switch(action.type)
  {
    case Actions.ReadPath:
      return state
    case Actions.UpdatePath:
      return state = action.payload
    case Actions.DeletePath:
      return state = action.payload
    default:
      return state
  }
}