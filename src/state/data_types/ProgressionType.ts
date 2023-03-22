export type ProgressionType = {
    id: string
    customer_name: string
    phone_number: string
    email: string
    status: 0 | 1 | 2 // 0: Queue | 1: Used | 2: skip
    supply_id: string
    service_id: string
    grant_time: Date
    expire_time: Date
    custom_Service?: { id: string, name: string }
    custom_Device?: { id: string, type: string }
    doc_id?: string
}