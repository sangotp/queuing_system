import { Typography } from "antd"
import type { TitleProps } from "antd/es/typography/Title"
import type { TextProps } from "antd/es/typography/Text"
import './styles/QSTypography.css'

export const Title = (props:TitleProps) => {
  const { children } = props

  return (
    <Typography.Title {...props} className='qs-typography-title'>{children}</Typography.Title>
  )
}

export const Text = (props:TextProps) => {
  const { children } = props

  return (
    <Typography.Text {...props} className='qs-typography-text'>{children}</Typography.Text>
  )
}