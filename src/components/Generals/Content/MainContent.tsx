import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Device, Service, Progression, Report, Roles, Accounts, ActivityHistory, Profile, ForgotPassword, Login, NotFound } from '../../index'

const { Content } = Layout

export const MainContent = () => {
  return (
    <Content>
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
    </Content>
  )
}