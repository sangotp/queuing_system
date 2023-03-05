export enum Actions {
    ReadPath = 'readPath',
    UpdatePath = 'updatePath',
    DeletePath = 'deletePath'
}

type Read = {
    type: Actions.ReadPath
}
type Update = {
    type: Actions.UpdatePath
    payload: string[]
}
type Delete = {
    type: Actions.DeletePath
    payload: string[]
}

export type ActionTypes = Read | Update | Delete

export const pathInitialState = [] as string[]