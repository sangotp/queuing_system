import { Typography } from "antd"
import './styles/CardMeta.css'

type CardMetaStatusDescProps = {
  totalCount: number,
  color: string
}

export const CardMetaStatusDesc = ({totalCount, color}: CardMetaStatusDescProps) => {
  return (
    <Typography.Text className='card-meta-status-desc-text' style={{ color: `${color}` }}>{totalCount}</Typography.Text>
  )
}