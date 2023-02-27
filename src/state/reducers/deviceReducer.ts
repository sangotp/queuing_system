import { deviceInitialState, Actions, ActionTypes } from "../actions/DeviceActions"
import { DeviceType } from "../data_types/DeviceType"

export const deviceReducer = (state: DeviceType[] = deviceInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreateDevice:
            return state
        case Actions.ReadDevice:
            // console.log(action.payload)
            return state = action.payload as DeviceType[]
        case Actions.UpdateDevice:
            return state = action.payload as DeviceType[]
        case Actions.DeleteDevice:
            return state = action.payload as DeviceType[]
        default:
            return state
    }
}