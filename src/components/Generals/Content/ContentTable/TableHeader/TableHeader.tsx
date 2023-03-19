import { DeviceActions, ServiceActions, ProgressionActions, ReportActions, UserRoleActions, UserActions, UserActivityLogActions } from './Actions'
import { ReadPath } from '../../../../../utils/RUDPath'
import './Actions/styles/TableHeader.css'

const GenerateActions = (pathName: string) => {
  switch (pathName)
  {
    case 'device':
      return (
        <DeviceActions />
      )
    case 'service':
      return (
        <ServiceActions />
      )
    case 'progression':
      return (
        <ProgressionActions />
      )
    case 'report':
      return (
        <ReportActions />
      )
    case 'role':
      return (
        <UserRoleActions />
      )
    case 'account':
      return (
        <UserActions />
      )
    case 'log':
      return (
        <UserActivityLogActions />
      )
    default:
      return null
  }
}

export const TableHeader = () => {
  const paths = ReadPath()
  return (
    paths[paths.length - 1] && GenerateActions(paths[paths.length - 1].toString())
  )
}