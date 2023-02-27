import { progressionInitialState, Actions, ActionTypes } from "../actions/ProgressionActions"
import { ProgressionType } from "../data_types/ProgressionType"

export const progressionReducer = (state: ProgressionType[] = progressionInitialState, action:ActionTypes) => {
    switch(action.type)
    {
        case Actions.CreatProgression:
            return state
        case Actions.ReadProgression:
            // console.log(action.payload)
            return state = action.payload as ProgressionType[]
        case Actions.UpdateProgression:
            return state = action.payload as ProgressionType[]
        case Actions.DeleteProgression:
            return state = action.payload as ProgressionType[]
        default:
            return state
    }
}