import { useSelector } from "react-redux"
import type { reducerTypes } from "../../state/reducers"
import type { DeviceType, ServiceType } from "../../state/data_types"

export const Device = (id: string) => {
  const devices = useSelector((state:reducerTypes) => state.devices)

  return devices.find((device) => device.id === id) as DeviceType
}

export const Service = (id: string) => {
  const services = useSelector((state:reducerTypes) => state.services)

  return services.find((service) => service.id === id) as ServiceType
}