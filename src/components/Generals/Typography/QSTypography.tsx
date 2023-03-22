import { Typography, Space } from "antd"
import type { TitleProps } from "antd/es/typography/Title"
import type { TextProps } from "antd/es/typography/Text"
import './styles/QSTypography.css'

type GroupProps = {
  title?: React.ReactNode
  children?: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  className?: string
}

export const Title = (props:TitleProps) => {
  const { children, className } = props

  return (
    <Typography.Title {...props} className={className ? `qs-typography-title ${className}`: 'qs-typography-title'}>{children}</Typography.Title>
  )
}

export const Text = (props:TextProps) => {
  const { children, className } = props

  return (
    <Typography.Text {...props} className={className ? `qs-typography-text ${className}`: 'qs-typography-text'}>{children}</Typography.Text>
  )
}

export const Button = (props:TextProps) => {
  const { children } = props

  return (
    <Typography.Text {...props} className='qs-typography-btn'>{children}</Typography.Text>
  )
}

const generateTitle = (title: React.ReactNode) => {
  const generateTitle = typeof title === typeof '' ? 
  <Typography.Title level={3} className='qs-typography-group-title'>{title}</Typography.Title> :
  <div className='qs-typography-group-title-node'>
    {title}
  </div>

  return generateTitle
}

const generateContent = (content: React.ReactNode) => {
  const generateTitle = typeof content === typeof '' ? 
  <Typography.Text className='qs-typography-group-children'>{content}</Typography.Text> :
  <div className='qs-typography-group-children-node'>
    {content}
  </div>

  return generateTitle
}

export const Group = (props: GroupProps) => {
  const { title, children, direction, className } = props

  return (
    <Space direction={direction} className={className ? `qs-typography-group ${className}` : 'qs-typography-group'}>
      {generateTitle(title)}
      {generateContent(children)}
    </Space>
  )
}