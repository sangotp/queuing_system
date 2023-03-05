import { ProgressionType } from "../../data_types/ProgressionType";

const now = new Date(); // Date Now
const day_after = new Date(now.setDate(now.getDate() + 5)) // 5 day after
export const progressions = [
    {id: '2010001', customer_name: 'Nguyễn Thị Thùy Dung', grant_time: new Date(), expire_time: day_after, 
    status: 1, supply_id: 'KIO_01', service_id: '201', phone_number: '0948523623', email: 'thuydung@gmail.com'},
    {id: '2020001', customer_name: 'Nguyễn Thiên Chinh', grant_time: new Date(), expire_time: day_after, 
    status: 0, supply_id: 'KIO_02', service_id: '202', phone_number: '0948523624', email: 'thienchinh@gmail.com'},
    {id: '2030001', customer_name: 'Võ Thị Kim Liên', grant_time: new Date(), expire_time: day_after, 
    status: 2, supply_id: 'KIO_02', service_id: '203', phone_number: '0948523625', email: 'kimlien@gmail.com'},
    {id: '2040001', customer_name: 'Hoàng Nguyễn Quốc Huy', grant_time: new Date(), expire_time: day_after, 
    status: 1, supply_id: 'KIO_03', service_id: '204', phone_number: '0948523626', email: 'quochuy@gmail.com'},
    {id: '2050001', customer_name: 'Võ Ngọc Lan Nhi', grant_time: new Date(), expire_time: day_after, 
    status: 2, supply_id: 'KIO_01', service_id: '205', phone_number: '0948523627', email: 'lannhi@gmail.com'},
    {id: '2060001', customer_name: 'Nguyễn Thị Trúc My', grant_time: new Date(), expire_time: day_after, 
    status: 0, supply_id: 'KIO_02', service_id: '206', phone_number: '0948523628', email: 'trucmy@gmail.com'},
    {id: '2020001', customer_name: 'Nguyễn Trung Toàn', grant_time: new Date(), expire_time: day_after, 
    status: 1, supply_id: 'KIO_02', service_id: '202', phone_number: '0948523629', email: 'trungtoan@gmail.com'},
    {id: '2040001', customer_name: 'Phạm Hồng Ngọc', grant_time: new Date(), expire_time: day_after, 
    status: 2, supply_id: 'KIO_01', service_id: '204', phone_number: '0948523630', email: 'hongngoc@gmail.com'},
] as ProgressionType[]