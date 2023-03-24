import type { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types'

type UserRoleDataType = {
  key: string,
} & UserRoleType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'Tên vai trò',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số người dùng',
    dataIndex: 'user_count',
    key: 'user_count',
  },
  {
    title: 'Mô tả',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '',
    dataIndex: 'userRoleUpdateAction',
    key: 'userRoleUpdateAction',
    render: (_, record) => (
      <Link to={`/role/update/${record.key}`} state={
        {
          roleId: record.key
        }
      }>Cập nhật</Link>
    )
  },
] as ColumnsType<UserRoleDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const roles = [] as UserRoleDataType[]
  data.map((role) => {
    const cloneRoleObj = {} as UserRoleType
    const assignedRoleObj = Object.assign(role, cloneRoleObj)
    const roleDataType = {
      key: assignedRoleObj.doc_id,
      name: assignedRoleObj.name,
      desc: assignedRoleObj.desc,
      features_authorization: assignedRoleObj.features_authorization,
      user_count: assignedRoleObj.user_count,
      doc_id: assignedRoleObj.doc_id,
    } as UserRoleDataType
    return roles.push(roleDataType)
  })
  return roles as UserRoleDataType[]
}