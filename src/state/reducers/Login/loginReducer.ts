import { loginInitialState, Actions, ActionTypes } from "../../actions/Login/LoginActions"
import { UserLoginType } from "../../data_types"

export const loginReducer = (state: UserLoginType = loginInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.Login:
            return state = action.payload
        case Actions.Logout:
            return state = action.payload
        default:
            return state
    }
}