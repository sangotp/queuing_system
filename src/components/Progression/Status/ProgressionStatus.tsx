import { ProgressionStatusEnum } from "./ProgressionStatusEnum"
import { Status } from "../../Generals/Status/Status"

type ProgressionStatusProps = {
  status: number
}

export const ProgressionStatus = ({status}: ProgressionStatusProps) => {
  switch(status)
  {
    case ProgressionStatusEnum.Queue:
      return <Status color='blue' text='Đang chờ' />
    case ProgressionStatusEnum.Used:
      return <Status color='grey' text='Đã sử dụng' />
    case ProgressionStatusEnum.Skip:
      return <Status color='red' text='Bỏ qua' />
    default:
      return null
  }
}