import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types'
import { AccountActivityStatus } from '../../../../../SystemSettings'

type UserDataType = {
  key: string,
} & UserType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'Tên đăng nhập',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Họ tên',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Vai trò',
    dataIndex: 'custom_role',
    key: 'custom_role',
    render: (_, record) => (<Typography.Text>{record.custom_role?.name}</Typography.Text>)
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'activity_status',
    key: 'activity_status',
    render: (_, record) => (<AccountActivityStatus status={record.activity_status} />)
  },
  {
    title: '',
    dataIndex: 'userUpdateAction',
    key: 'userUpdateAction',
    render: (_, record) => (
      <Link to='#'>Cập nhật</Link>
    )
  },
] as ColumnsType<UserDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const users = [] as UserDataType[]
  data.map((user, index) => {
    const cloneUserObj = {} as UserType
    const assignedUserObj = Object.assign(user, cloneUserObj)
    const userDataType = {
      key: index.toString(),
      username: assignedUserObj.username,
      fullname: assignedUserObj.fullname,
      phone_number: assignedUserObj.phone_number,
      email: assignedUserObj.email,
      password: assignedUserObj.password,
      activity_status: assignedUserObj.activity_status,
      user_role_id: assignedUserObj.user_role_id,
      custom_role: assignedUserObj.custom_role,
    } as UserDataType
    return users.push(userDataType)
  })
  return users as UserDataType[]
}