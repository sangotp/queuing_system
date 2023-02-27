import { DeviceType } from "../data_types/DeviceType"

export enum Actions {
    CreateDevice = 'createDevice',
    ReadDevice = 'readDevice',
    UpdateDevice = 'updateDevice',
    DeleteDevice = 'deleteDevice'
}

type Create = {
    type: Actions.CreateDevice
}
type Read = {
    type: Actions.ReadDevice
    payload: DeviceType[]
}
type Update = {
    type: Actions.UpdateDevice
    payload: DeviceType[]
}
type Delete = {
    type: Actions.DeleteDevice
    payload: DeviceType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const deviceInitialState = [] as DeviceType[]