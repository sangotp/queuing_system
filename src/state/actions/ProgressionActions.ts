import { ProgressionType } from "../data_types/ProgressionType"

export enum Actions {
    CreatProgression = 'createProgression',
    ReadProgression = 'readProgression',
    UpdateProgression = 'updateProgression',
    DeleteProgression = 'deleteProgression'
}

type Create = {
    type: Actions.CreatProgression
}
type Read = {
    type: Actions.ReadProgression
    payload: ProgressionType[]
}
type Update = {
    type: Actions.UpdateProgression
    payload: ProgressionType[]
}
type Delete = {
    type: Actions.DeleteProgression
    payload: ProgressionType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const progressionInitialState = [] as ProgressionType[]