import { ReadPath } from "./RUDPath"

export const BreadcrumbItemsGenerator = () => {
  // Read Current Path
const paths = ReadPath()

// Path To Breadcrumb Item
const breadcrumbItems = [] as string[]
paths.map((path) => {
    switch(path)
    {
      case '/':
          return breadcrumbItems.push('Dashboard')
      case 'device':
          return breadcrumbItems.push('Thiết bị', 'Danh sách thiết bị')
      case 'service':
          return breadcrumbItems.push('Dịch vụ', 'Danh sách dịch vụ')
      case 'progression':
          return breadcrumbItems.push('Cấp số', 'Danh sách cấp số')
      case 'report':
          return breadcrumbItems.push('Báo cáo', 'Lập báo cáo')
      case 'role':
          return breadcrumbItems.push('Cài đặt hệ thống', 'Quản lý vai trò')
      case 'account':
          return breadcrumbItems.push('Cài đặt hệ thống', 'Quản lý tài khoản')
      case 'log':
          return breadcrumbItems.push('Cài đặt hệ thống', 'Nhật ký hoạt động')
      case 'profile':
          return breadcrumbItems.push('Thông tin cá nhân')
      default:
          return path;
    }
  })
  return breadcrumbItems
}