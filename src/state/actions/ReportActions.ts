import { ReportType } from "../data_types/ReportType"

export enum Actions {
    ReadReport = 'readReport'
}

type Read = {
    type: Actions.ReadReport,
    payload: ReportType[]
}

export type ActionTypes = Read

export const reportInitialState = [] as ReportType[]