import { ProgressionType } from "../../data_types/ProgressionType";

const now = new Date(); // Date Now
const day_after = new Date(now.setDate(now.getDate() + 5)) // 5 day after
export const progressions = [
    {id: '2010001', customer_name: 'Khách hàng A', grant_time: new Date(), expire_time: day_after, 
    status: 1, supply_id: 'KIO_01', service_id: '201', phone_number: '0948523623', email: 'cusA@gmail.com'},
    {id: '2020001', customer_name: 'Khách hàng B', grant_time: new Date(), expire_time: day_after, 
    status: 0, supply_id: 'KIO_02', service_id: '202', phone_number: '0948523624', email: 'cusB@gmail.com'},
    {id: '2030001', customer_name: 'Khách hàng C', grant_time: new Date(), expire_time: day_after, 
    status: 2, supply_id: 'KIO_02', service_id: '203', phone_number: '0948523625', email: 'cusC@gmail.com'}
] as ProgressionType[]