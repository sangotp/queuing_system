import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types';
import { ServiceActivityStatus } from '../../../../../Services';

type ServiceDataType = {
  key: string,
} & ServiceType


export const Columns = [
  {
    title: 'Mã dịch vụ',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mô tả',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'activity_status',
    key: 'activity_status',
    render: (_, record) => (<ServiceActivityStatus status={record.activity_status} />)
  },
  {
    title: '',
    dataIndex: 'serviceDetailsAction',
    key: 'serviceDetailsAction',
    render: (_, record) => (
      <Link to='#'>Chi tiết</Link>
    )
  },
  {
    title: '',
    dataIndex: 'serviceUpdateAction',
    key: 'serviceUpdateAction',
    render: (_, record) => (
      <Link to='#'>Cập nhật</Link>
    )
  },
] as ColumnsType<ServiceDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const services = [] as ServiceDataType[]
  data.map((service) => {
    const cloneServiceObj = {} as ServiceType
    const assignedServiceObj = Object.assign(service, cloneServiceObj)
    const serviceDataType = {
      key: assignedServiceObj.id,
      name: assignedServiceObj.name,
      desc: assignedServiceObj.desc,
      activity_status: assignedServiceObj.activity_status,
      progression_rules: assignedServiceObj.progression_rules,
    } as ServiceDataType
    return services.push(serviceDataType)
  })
  return services as ServiceDataType[]
}