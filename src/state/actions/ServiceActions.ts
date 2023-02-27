import { ServiceType } from "../data_types/ServiceType"

export enum Actions {
    CreateService = 'createService',
    ReadService = 'readService',
    UpdateService = 'updateService',
    DeleteService = 'deleteService'
}

type Create = {
    type: Actions.CreateService
}
type Read = {
    type: Actions.ReadService
    payload: ServiceType[]
}
type Update = {
    type: Actions.UpdateService
    payload: ServiceType[]
}
type Delete = {
    type: Actions.DeleteService
    payload: ServiceType[]
}

export type ActionTypes = Create | Read | Update | Delete

export const serviceInitialState = [] as ServiceType[]