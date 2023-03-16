import { Button, ButtonProps, Space } from "antd"
import './styles/TableAside.css'

type TableAsideProps = {
  actions: ButtonProps[]
}

export const TableAside = ({ actions }: TableAsideProps) => {
  return (
    <Space direction='vertical' className='table-aside-space'>
      {
        actions.map((action, index) => {
          const { children } = action

          return (
            <Button key={index} {...action} className='table-aside-btn-action'>{children}</Button>
          )
        })
      }
    </Space>
  )
}