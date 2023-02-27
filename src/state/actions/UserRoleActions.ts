import { UserRoleType } from "../data_types/UserRoleType"

export enum Actions {
    CreateRole = 'createRole',
    ReadRole = 'readRole',
    UpdateRole = 'updateRole',
    DeleteRole = 'deleteRole'
}

type Create = {
    type: Actions.CreateRole
}
type Read = {
    type: Actions.ReadRole
    payload: UserRoleType[]
}
type Update = {
    type: Actions.UpdateRole
    payload: UserRoleType[]
}
type Delete = {
    type: Actions.DeleteRole
    payload: UserRoleType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const userRoleInitialState = [] as UserRoleType[]