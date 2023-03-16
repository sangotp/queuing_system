import { Space } from "antd"
import './styles/ContentSpace.css'

type ContentSpaceProps = {
  children: React.ReactNode
}

export const ContentSpace = ({ children }: ContentSpaceProps) => {
  return (
    <Space direction='vertical' size={[0, 0]} className='content-space'>
      {children}
    </Space>
  )
}