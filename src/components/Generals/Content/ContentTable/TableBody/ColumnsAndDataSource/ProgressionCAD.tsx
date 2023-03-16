import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types'
import { DateAndTimeFormatter } from '../../../../../../utils/FormatDate'
import { ProgressionStatus } from '../../../../../Progression'

type ProgressionDataType = {
  key: string,
} & ProgressionType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'customer_name',
    key: 'customer_name',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'custom_Service',
    key: 'custom_Service',
    render: (_, record) => (<Typography.Text>{record.custom_Service?.name}</Typography.Text>)
  },
  {
    title: 'Thời gian cấp',
    dataIndex: 'grant_time',
    key: 'grant_time',
    render: (_, record) => (<Typography.Text>{DateAndTimeFormatter('-', 'time', record.grant_time!)}</Typography.Text>)
  },
  {
    title: 'Hạn sử dụng',
    dataIndex: 'expire_time',
    key: 'expire_time',
    render: (_, record) => (<Typography.Text>{DateAndTimeFormatter('-', 'time', record.expire_time!)}</Typography.Text>)
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => (<ProgressionStatus status={record.status} />)
  },
  {
    title: 'Nguồn cấp',
    dataIndex: 'custom_Device',
    key: 'custom_Device',
    render: (_, record) => (<Typography.Text>{record.custom_Device?.type}</Typography.Text>)
  },
  {
    title: '',
    dataIndex: 'progressionDetailsAction',
    key: 'progressionDetailsAction',
    render: (_, record) => (
      <Link to='#'>Chi tiết</Link>
    )
  },
] as ColumnsType<ProgressionDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const progressions = [] as ProgressionDataType[]
  data.map((progression, index) => {
    const cloneProgressionObj = {} as ProgressionType
    const assignedProgressionObj = Object.assign(progression, cloneProgressionObj)
    const progressionDataType = {
      key: index.toString(),
      id: assignedProgressionObj.id,
      customer_name: assignedProgressionObj.customer_name,
      phone_number: assignedProgressionObj.phone_number,
      email: assignedProgressionObj.email,
      status: assignedProgressionObj.status,
      supply_id: assignedProgressionObj.supply_id,
      service_id: assignedProgressionObj.service_id,
      grant_time: assignedProgressionObj.grant_time,
      expire_time: assignedProgressionObj.expire_time,
      custom_Service: assignedProgressionObj.custom_Service,
      custom_Device: assignedProgressionObj.custom_Device,
    } as ProgressionDataType
    return progressions.push(progressionDataType)
  })
  return progressions as ProgressionDataType[]
}