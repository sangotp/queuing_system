import { Typography } from "antd"
import './styles/CardOverall.css'

type CardOverallTitleProps = {
  text: string
}
export const CardOverallTitle = ({text}: CardOverallTitleProps) => {
  return (
    <Typography.Title level={3} className='card-overall-title'>{text}</Typography.Title>
  )
}