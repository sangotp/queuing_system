import { UserType } from "../data_types/UserType"

export enum Actions {
    CreateUser = 'createUser',
    ReadUser = 'readUser',
    UpdateUser = 'updateUser',
    DeleteUser = 'deleteUser'
}

type Create = {
    type: Actions.CreateUser
}
type Read = {
    type: Actions.ReadUser
    payload: UserType[]
}
type Update = {
    type: Actions.UpdateUser
    payload: UserType[]
}
type Delete = {
    type: Actions.DeleteUser
    payload: UserType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const userInitialState = [] as UserType[]