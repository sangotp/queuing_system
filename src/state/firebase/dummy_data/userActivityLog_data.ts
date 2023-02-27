import { UserActivityLogType } from "../../data_types/UserActivityLogType";

const now = new Date();
export const logs = [
    {current_activity_time: now, ip: '192.168.3.1', action: 'Cập nhật thiết bị', user_id: ''},
    {current_activity_time: now, ip: '192.168.3.2', action: 'Thêm mới dịch vụ', user_id: ''},
    {current_activity_time: now, ip: '192.168.3.3', action: 'Thực hiện cấp số', user_id: ''},
] as UserActivityLogType[]