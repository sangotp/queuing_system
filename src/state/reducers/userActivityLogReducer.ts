import { userActivityLogInitialState, Actions, ActionTypes } from "../actions/UserActivityLogActions"
import { UserActivityLogType } from "../data_types/UserActivityLogType"

export const userActivityLogReducer = (state: UserActivityLogType[] = userActivityLogInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreateUserActivityLog:
            return state
        case Actions.ReadUserActivityLog:
            // console.log(action.payload)
            return state = action.payload as UserActivityLogType[]
        case Actions.UpdateUserActivityLog:
            return state = action.payload as UserActivityLogType[]
        case Actions.DeleteUserActivityLog:
            return state = action.payload as UserActivityLogType[]
        default:
            return state
    }
}