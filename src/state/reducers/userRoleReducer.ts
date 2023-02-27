import { userRoleInitialState, Actions, ActionTypes } from "../actions/UserRoleActions"
import { UserRoleType } from "../data_types/UserRoleType"

export const userRoleReducer = (state: UserRoleType[] = userRoleInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreateRole:
            return state
        case Actions.ReadRole:
            // console.log(action.payload)
            return state = action.payload as UserRoleType[]
        case Actions.UpdateRole:
            return state = action.payload as UserRoleType[]
        case Actions.DeleteRole:
            return state = action.payload as UserRoleType[]
        default:
            return state
    }
}