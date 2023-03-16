import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types'
import { DateAndTimeFormatter } from '../../../../../../utils/FormatDate'

type UserActivityLogDataType = {
  key: string,
} & UserActivityLogType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'Tên đăng nhập',
    dataIndex: 'custom_user',
    key: 'custom_user',
    render: (_, record) => (<Typography.Text>{record.custom_user?.username}</Typography.Text>)
  },
  {
    title: 'Thời gian tác động',
    dataIndex: 'current_activity_time',
    key: 'current_activity_time',
    render: (_, record) => (<Typography.Text>{DateAndTimeFormatter('', 'date', record.current_activity_time, 'showFullTime')}</Typography.Text>)
  },
  {
    title: 'IP thực hiện',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Thao tác thực hiện',
    dataIndex: 'action',
    key: 'action',
  },
] as ColumnsType<UserActivityLogDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const logs = [] as UserActivityLogDataType[]
  data.map((log, index) => {
    const cloneLogObj = {} as UserActivityLogType
    const assignedLogObj = Object.assign(log, cloneLogObj)
    const logDataType = {
      key: index.toString(),
      current_activity_time: assignedLogObj.current_activity_time,
      ip: assignedLogObj.ip,
      action: assignedLogObj.action,
      user_id: assignedLogObj.user_id,
      custom_user: assignedLogObj.custom_user,
    } as UserActivityLogDataType
    return logs.push(logDataType)
  })
  return logs as UserActivityLogDataType[]
}