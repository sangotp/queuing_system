import { AccountActivityStatusEnum } from "./AccountActivityStatusEnum"
import { Status } from "../../../Generals/Status/Status"

type AccountActivityStatusProps = {
  status: number
}

export const AccountActivityStatus = ({status}: AccountActivityStatusProps) => {
  switch(status)
  {
    case AccountActivityStatusEnum.Inactive:
      return <Status color='red' text='Ngưng hoạt động' />
    case AccountActivityStatusEnum.Active:
      return <Status color='green' text='Hoạt động' />
    default:
      return null
  }
}