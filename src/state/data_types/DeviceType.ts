export type DeviceType = {
    id: string
    type: 'Kiosk' | 'Display counter'
    name: string
    username: string
    password: string
    ip: string
    activity_status: 0 | 1 // 0: Inactive | 1: Active
    connection_status: 0 | 1 // 0: Disconnected | 1: Connected
    services_id: string[]
    customServices?: {id:string, name: string}[] // optional key: value
}