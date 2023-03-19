import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Device, DetailsDevice, UpdateDevice, AddDevice, Service, Progression, Report, Roles, Accounts, ActivityHistory, Profile, ForgotPassword, Login, NotFound } from '../../index'
import './styles/Content.css'

const { Content } = Layout

export const MainContent = () => {
  return (
    <Content className='content-container'>
      {/* Route Endpoint Config */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/device' element={<Device />} />
        <Route path='/device/details/:id' element={<DetailsDevice />} />
        <Route path='/device/update/:id' element={<UpdateDevice />} />
        <Route path='/device/create' element={<AddDevice />} />
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