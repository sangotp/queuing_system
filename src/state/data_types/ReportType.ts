export type ReportType = {
    progression_id: string
    service_id: string
    granted_date: Date
    status: 0 | 1 | 2 // 0: Queue | 1: Used | 2: skip
    supply_id: string
    custom_service?: { id: string, name: string }
    custom_device?: { id: string, type: string }
}