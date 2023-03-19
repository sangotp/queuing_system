import { Button, ButtonProps } from 'antd'
import './styles/QsButton.css'

export const Cancel = (props:ButtonProps) => {
  const { children } = props

  return (
    <Button {...props} className={props.className ? `qs-cancel-btn ${props.className}` : 'qs-cancel-btn'}>{children}</Button>
  )
}

export const Submit = (props:ButtonProps) => {
  const { children } = props

  return (
    <Button {...props} className={props.className ? `qs-submit-btn ${props.className}` : 'qs-submit-btn'}>{children}</Button>
  )
}