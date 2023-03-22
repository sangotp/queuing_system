import { Table } from 'antd'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../state/data_types';
import { DeviceCAD, ServiceCAD, ProgressionCAD, ProgressionLiteCAD, ReportCAD, UserRoleCAD, UserCAD, UserActivityLogCAD } from './ColumnsAndDataSource'
import { ArrowLeftIcon, ArrowRightIcon } from './PaginationIcons';
import './styles/TableBody.css'

type TableBodyProps = {
  type: 'Device[]' | 'Service[]' | 'Progression[]' | 'Report[]' | 'UserRole[]' | 'User[]' | 'UserActivityLog[]'
  data:  DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]
  isLite?: boolean
}

const GenerateTable = (type: string, data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[], isLite: boolean | undefined) => {
  switch(type)
  {
    case 'Device[]':
      return (
        <Table pagination={{ pageSize: 9, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination' }} dataSource={DeviceCAD.dataSource(data)} columns={DeviceCAD.Columns} className='table-body-main-table' />
      )
    case 'Service[]':
      return (
        <Table pagination={{ pageSize: 9, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination' }} dataSource={ServiceCAD.dataSource(data)} columns={ServiceCAD.Columns} className='table-body-main-table' />
      )
    case 'Progression[]':
      if (isLite)
      {
        return (
          <Table pagination={{ pageSize: 8, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination absolute-table-pagination' }} dataSource={ProgressionLiteCAD.dataSource(data)} columns={ProgressionLiteCAD.Columns} className='table-body-main-table' />
          )
      }
      return (
        <Table pagination={{ pageSize: 9, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination' }} dataSource={ProgressionCAD.dataSource(data)} columns={ProgressionCAD.Columns} className='table-body-main-table' />
      )
    case 'ProgressionLite[]':
      return (
        <Table dataSource={ProgressionLiteCAD.dataSource(data)} columns={ProgressionLiteCAD.Columns} className='table-body-main-table' />
      )
    case 'Report[]':
      return (
        <Table pagination={{ pageSize: 9, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination' }} dataSource={ReportCAD.dataSource(data)} columns={ReportCAD.Columns} className='table-body-main-table' />
      )
    case 'UserRole[]':
      return (
        <Table pagination={{ pageSize: 9, hideOnSinglePage: true, prevIcon: ArrowLeftIcon, nextIcon: ArrowRightIcon, className:'custom-table-pagination' }} dataSource={UserRoleCAD.dataSource(data)} columns={UserRoleCAD.Columns} className='table-body-main-table' />
      )
    case 'User[]':
      return (
        <Table dataSource={UserCAD.dataSource(data)} columns={UserCAD.Columns} className='table-body-main-table' />
      )
    case 'UserActivityLog[]':
      return (
        <Table dataSource={UserActivityLogCAD.dataSource(data)} columns={UserActivityLogCAD.Columns} className='table-body-main-table' />
      )
    default:
      return null
  }
}

export const TableBody = ({type, data, isLite}: TableBodyProps) => {
  return (
    GenerateTable(type, data, isLite)
  )
}