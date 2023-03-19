import { Button, ButtonProps, Space } from "antd"
import './styles/QsAsideActions.css'

type TableAsideProps = {
  actions: ButtonProps[]
}

export const QsAsideActions = ({ actions }: TableAsideProps) => {
  return (
    <Space direction='vertical' className='qs-aside qs-aside-space qs-aside-fixed'>
      {
        actions.map((action, index) => {
          const { children } = action

          return (
            <Button key={index} {...action} className={action.className ? `${action.className} qs-aside-btn-action` : 'qs-aside-btn-action'}>{children}</Button>
          )
        })
      }
    </Space>
  )
}