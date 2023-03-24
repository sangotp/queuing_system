import { Layout } from 'antd'
import { GenerateAuthRoutes } from '../../../utils/Routes/GenerateRoutes'
import './styles/Content.css'

const { Content } = Layout

export const MainContent = () => {
  return (
    <Content className='content-container'>
      {GenerateAuthRoutes()}
    </Content>
  )
}