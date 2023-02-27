import { DeviceType } from "../../data_types/DeviceType"

export const devices = [
    {id: 'KIO_01', type: 'Kiosk', name: 'Kiosk', username: 'Linhkyo011', password: 'CMS', 
    ip: '192.168.1.10', activity_status: 1, connection_status: 1, services_id: ['201', '202']},
    {id: 'KIO_02', type: 'Kiosk', name: 'Kiosk02', username: 'Linhkyo012', password: 'CMS2', 
    ip: '192.168.1.11', activity_status: 0, connection_status: 1, services_id: ['203', '205']},
    {id: 'KIO_03', type: 'Kiosk', name: 'Kiosk03', username: 'Linhkyo013', password: 'CMS3', 
    ip: '192.168.1.12', activity_status: 0, connection_status: 0, services_id: ['205']}
] as DeviceType[]