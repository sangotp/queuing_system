import { reportInitialState, Actions, ActionTypes } from "../actions/ReportActions"
import { ReportType } from "../data_types/ReportType"

export const reportReducer = (state: ReportType[] = reportInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.ReadReport:
            // console.log(action.payload)
            return state = action.payload as ReportType[]
        default:
            return state
    }
}