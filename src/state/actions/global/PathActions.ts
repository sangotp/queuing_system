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

export const pathInitialState = window.location.pathname === '/' ? [window.location.pathname] : window.location.pathname.split('/').filter((path) => path.length > 0) as string[]