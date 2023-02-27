import { UserRoleType } from "../../data_types/UserRoleType";

export const roles = [
    {name: 'Superadmin', desc: 'Thực hiện nhiệm vụ kiểm soát toàn bộ website', features_authorization: ['Tất cả']},
    {name: 'Admin', desc: 'Thực hiện nhiệm vụ kiểm soát một phần website', features_authorization: ['Chức năng X', 'Chức năng Y', 'Chức năng Z']},
    {name: 'Quản lý', desc: 'Thực hiện nhiệm vụ quản lý website', features_authorization: ['Chức năng X', 'Chức năng Y']},
    {name: 'Kế toán', desc: 'Thực hiện nhiệm vụ thống kê số liệu và tổng hợp số liệu', features_authorization: ['Chức năng X']},
    {name: 'Lễ tân', desc: 'Thực hiện nhiệm vụ cấp số', features_authorization: ['Chức năng Z']},
    {name: 'Bác sĩ', desc: 'Thực hiện nhiệm vụ khám chữa bệnh và kiểm tra thông tin khách hàng', features_authorization: ['Chức năng Y']},
] as UserRoleType[]