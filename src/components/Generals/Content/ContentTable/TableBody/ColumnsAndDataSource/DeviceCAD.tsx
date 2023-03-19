import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types';
import { DeviceConnectionStatus, DeviceActivityStatus } from '../../../../../Device';
import './styles/ColumnAndDataSource.css'

type DeviceDataType = {
  key: string,
} & DeviceType

// type DataType = DeviceDataType & ServiceDataType
// {
//   key: string,
// } & DeviceType | ServiceType | ProgressionType | ReportType | UserRoleType | UserType | UserActivityLogType

const { Paragraph } = Typography

export const Columns = [
  {
    title: 'Mã thiết bị',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Địa chỉ IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'activity_status',
    key: 'activity_status',
    render: (_, record) => (<DeviceActivityStatus status={record.activity_status} />)
  },
  {
    title: 'Trạng thái kết nối',
    dataIndex: 'connection_status',
    key: 'connection_status',
    render: (_, record) => (<DeviceConnectionStatus status={record.connection_status} />)
  },
  {
    title: 'Dịch vụ sử dụng',
    dataIndex: 'customServices',
    key: 'customServices',
    render: (_, record) => (<Paragraph className='paragraph-ellipsis' ellipsis={{ rows: 1, expandable: true, symbol: 'Xem thêm' }}>{record.customServices?.map((customService, index) => {
      if(index < record.customServices?.length! -1)
      {
          return `${customService.name}, `
      }
      return customService.name
    })}</Paragraph>)
  },
  {
    title: undefined,
    dataIndex: 'deviceDetailsAction',
    key: 'deviceDetailsAction',
    render: (_, record: DeviceDataType) => (
      <Link to={`/device/details/${record.key}`}>Chi tiết</Link>
    )
  },
  {
    title: undefined,
    dataIndex: 'deviceUpdateAction',
    key: 'deviceUpdateAction',
    render: (_, record: DeviceDataType) => (
      <Link to={`/device/update/${record.key}`}>Cập nhật</Link>
    )
  },
] as ColumnsType<DeviceDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const devices = [] as DeviceDataType[]
  data.map((device) => {
    const cloneDeviceObj = {} as DeviceType
    const assignedDeviceObj = Object.assign(device, cloneDeviceObj)
    const deviceDataType = {
      key: assignedDeviceObj.id,
      type: assignedDeviceObj.type,
      name: assignedDeviceObj.name,
      username: assignedDeviceObj.username,
      password: assignedDeviceObj.password,
      ip: assignedDeviceObj.ip,
      activity_status: assignedDeviceObj.activity_status,
      connection_status: assignedDeviceObj.connection_status,
      services_id: assignedDeviceObj.services_id,
      customServices: assignedDeviceObj.customServices
    } as DeviceDataType
    return devices.push(deviceDataType)
  })
  return devices as DeviceDataType[]
}