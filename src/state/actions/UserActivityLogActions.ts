import { UserActivityLogType } from "../data_types/UserActivityLogType"

export enum Actions {
    CreateUserActivityLog = 'createUserActivityLog',
    ReadUserActivityLog = 'read',
    UpdateUserActivityLog = 'updateUserActivityLog',
    DeleteUserActivityLog = 'deleteUserActivityLog'
}

type Create = {
    type: Actions.CreateUserActivityLog
}
type Read = {
    type: Actions.ReadUserActivityLog
    payload: UserActivityLogType[]
}
type Update = {
    type: Actions.UpdateUserActivityLog
    payload: UserActivityLogType[]
}
type Delete = {
    type: Actions.DeleteUserActivityLog
    payload: UserActivityLogType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const userActivityLogInitialState = [] as UserActivityLogType[]