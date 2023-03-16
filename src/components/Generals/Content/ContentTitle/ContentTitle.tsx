import { Typography } from 'antd'
import './styles/ContentTitle.css'

type ContentTitleProps = {
  title: string
}

export const ContentTitle = ({ title }: ContentTitleProps) => {
  return (
    <Typography.Title className='content-title'>{title}</Typography.Title>
  )
}