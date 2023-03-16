import { ReadPath } from "./RUDPath"

export const BreadcrumbItemsGenerator = () => {
  // Read Current Path
const paths = ReadPath()
    // Path Defined
    const dashboard = JSON.stringify(['/'])
    const device = JSON.stringify(['device'])
    const deviceCreate = JSON.stringify(['device', 'create'])
    const service = JSON.stringify(['service'])
    const progression = JSON.stringify(['progression'])
    const report = JSON.stringify(['report'])
    const role = JSON.stringify(['role'])
    const account = JSON.stringify(['account'])
    const log = JSON.stringify(['log'])
    const profile = JSON.stringify(['profile'])

    // Path To Breadcrumb Item
    const breadcrumbItems = [] as string[]

    switch(JSON.stringify(paths))
    {
        case dashboard:
            breadcrumbItems.push('Dashboard')
            break;
        case device:
            breadcrumbItems.push('Thiết bị', 'Danh sách thiết bị')
            break;
        case deviceCreate:
            breadcrumbItems.push('Thiết bị', 'Danh sách thiết bị', 'Thêm thiết bị')
            break;
        case service:
            breadcrumbItems.push('Dịch vụ', 'Danh sách dịch vụ')
            break;
        case progression:
            breadcrumbItems.push('Cấp số', 'Danh sách cấp số')
            break;
        case report:
            breadcrumbItems.push('Báo cáo', 'Lập báo cáo')
            break;
        case role:
            breadcrumbItems.push('Cài đặt hệ thống', 'Quản lý vai trò')
            break;
        case account:
            breadcrumbItems.push('Cài đặt hệ thống', 'Quản lý tài khoản')
            break;
        case log:
            breadcrumbItems.push('Cài đặt hệ thống', 'Nhật ký hoạt động')
            break;
        case profile:
            breadcrumbItems.push('Thông tin cá nhân')
            break;
        default:
    }

    return breadcrumbItems
}