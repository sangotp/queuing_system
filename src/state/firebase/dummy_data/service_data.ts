import { ServiceType } from "../../data_types/ServiceType";

export const services = [
    {id: '201', name: 'Khám tim mạch', desc: 'Chuyên các bệnh lý về tim', activity_status: 1, progression_rules: [0, 1]},
    {id: '202', name: 'Khám sản - Phụ khoa', desc: 'Chuyên các bệnh lý về sản - Phụ khoa', activity_status: 1, progression_rules: [0]},
    {id: '203', name: 'Khám răng hàm mặt', desc: 'Chuyên các bệnh lý về răng hàm mặt', activity_status: 1, progression_rules: [0, 1, 2, 3]},
    {id: '204', name: 'Khám tai mũi họng', desc: 'Chuyên các bệnh lý về tai mũi họng', activity_status: 0, progression_rules: [0, 1, 2]},
    {id: '205', name: 'Khám hô hấp', desc: 'Chuyên các bệnh lý về hô hấp', activity_status: 1, progression_rules: [0, 1, 2]},
    {id: '206', name: 'Khám tổng quát', desc: 'Chuyên các bệnh lý về tổng quát', activity_status: 0, progression_rules: [0, 1, 2]},
] as ServiceType[]