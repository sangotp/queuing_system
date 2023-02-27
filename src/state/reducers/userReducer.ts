import { userInitialState, Actions, ActionTypes } from "../actions/UserActions"
import { UserType } from "../data_types/UserType"

export const userReducer = (state: UserType[] = userInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreateUser:
            return state
        case Actions.ReadUser:
            // console.log(action.payload)
            return state = action.payload as UserType[]
        case Actions.UpdateUser:
            return state = action.payload as UserType[]
        case Actions.DeleteUser:
            return state = action.payload as UserType[]
        default:
            return state
    }
}