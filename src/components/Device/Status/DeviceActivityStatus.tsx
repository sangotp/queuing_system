import { Status } from "../../Generals"
import { DeviceActivityStatusEnum } from "./DeviceActivityStatusEnum"

type DeviceActivityStatusProps = {
  status: number
}

export const DeviceActivityStatus = ({status}: DeviceActivityStatusProps) => {
  switch(status)
  {
    case DeviceActivityStatusEnum.Active:
      return <Status color='green' text='Hoạt động' />
    case DeviceActivityStatusEnum.InActive:
      return <Status color='red' text='Ngưng hoạt động' />
    default:
      return null
  }
}