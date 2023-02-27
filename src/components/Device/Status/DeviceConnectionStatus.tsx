import { DeviceConnectionStatusEnum } from "./DeviceConnectionStatusEnum"
import { Status } from "../../Generals/Status/Status"

type DeviceConnectionStatusProps = {
  status: number
}

export const DeviceConnectionStatus = ({status}: DeviceConnectionStatusProps) => {
  switch(status)
  {
    case DeviceConnectionStatusEnum.Disconnected:
      return <Status color='red' text="Mất kết nối" />
    case DeviceConnectionStatusEnum.Connected:
      return <Status color='green' text="Kết nối" />
    default:
      return null
  }
}