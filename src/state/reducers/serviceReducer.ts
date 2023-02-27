import { serviceInitialState, Actions, ActionTypes } from "../actions/ServiceActions"
import { ServiceType } from "../data_types/ServiceType"

export const serviceReducer = (state: ServiceType[] = serviceInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreateService:
            return state
        case Actions.ReadService:
            // console.log(action.payload)
            return state = action.payload as ServiceType[]
        case Actions.UpdateService:
            return state = action.payload as ServiceType[]
        case Actions.DeleteService:
            return state = action.payload as ServiceType[]
        default:
            return state
    }
}