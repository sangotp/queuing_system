import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../state/data_types'
import { DateAndTimeFormatter } from '../../../../../../utils/FormatDate'
import { ProgressionStatus } from '../../../../../Progression'

type ReportDataType = {
  key: string,
} & ReportType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'Số thứ tự',
    dataIndex: 'progression_id',
    key: 'progression_id',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'custom_service',
    key: 'custom_service',
    render: (_, record) => (<Typography.Text>{record.custom_service?.name}</Typography.Text>)
  },
  {
    title: 'Thời gian cấp',
    dataIndex: 'granted_date',
    key: 'granted_date',
    render: (_, record) => (<Typography.Text>{DateAndTimeFormatter('-', 'time', record.granted_date)}</Typography.Text>)
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => (<ProgressionStatus status={record.status} />)
  },
  {
    title: 'Nguồn cấp',
    dataIndex: 'custom_device',
    key: 'custom_device',
    render: (_, record) => (<Typography.Text>{ record.custom_device?.type }</Typography.Text>)
  },
] as ColumnsType<ReportDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const reports = [] as ReportDataType[]
  data.map((report, index) => {
    const cloneReportObj = {} as ReportType
    const assignedReportObj = Object.assign(report, cloneReportObj)
    const reportDataType = {
      key: index.toString(),
      progression_id: assignedReportObj.progression_id,
      service_id: assignedReportObj.service_id,
      granted_date: assignedReportObj.granted_date,
      status: assignedReportObj.status,
      supply_id: assignedReportObj.supply_id,
      custom_service: assignedReportObj.custom_service,
      custom_device: assignedReportObj.custom_device,
    } as ReportDataType
    return reports.push(reportDataType)
  })
  return reports as ReportDataType[]
}