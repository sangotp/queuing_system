import { ServiceActivityStatusEnum } from "./ServiceActivityStatusEnum"
import { Status } from "../../Generals/Status/Status"

type ServiceActivityStatusProps = {
  status: number
}

export const ServiceActivityStatus = ({status}: ServiceActivityStatusProps) => {
  switch(status)
  {
    case ServiceActivityStatusEnum.Inactive:
      return <Status color='red' text='Ngưng hoạt động' />
    case ServiceActivityStatusEnum.Active:
      return <Status color='green' text='Hoạt động' />
    default:
      return null
  }
}