import { Layout, theme } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Device, Service, Progression, Report, Roles, Accounts, ActivityHistory, Profile, ForgotPassword, Login, NotFound } from '../../index'

const { Content } = Layout

export const MainContent = () => {
  const { 
    token: {colorBgContainer} 
  } = theme.useToken()

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        {/* Route Endpoint Config */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/device' element={<Device />} />
          <Route path='/service' element={<Service />} />
          <Route path='/progression' element={<Progression />} />
          <Route path='/report' element={<Report />} />
          <Route path='/role' element={<Roles />} />
          <Route path='/account' element={<Accounts />} />
          <Route path='/log' element={<ActivityHistory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Content>
  )
}