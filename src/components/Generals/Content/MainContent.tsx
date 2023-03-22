import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Device, DetailsDevice, UpdateDevice, AddDevice, Service, AddService, DetailsService, UpdateDetailsService, Progression, AddProgression, DetailsProgression, Report, Roles, AddRole, UpdateRole, Accounts, UpdateAccount, AddAccount, ActivityHistory, Profile, ForgotPassword, Login, NotFound } from '../../index'
import './styles/Content.css'

const { Content } = Layout

export const MainContent = () => {
  return (
    <Content className='content-container'>
      {/* Route Endpoint Config */}
      <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Dashboard />} />

        {/* Device */}
        <Route path='/device' element={<Device />} />
        <Route path='/device/details/:id' element={<DetailsDevice />} />
        <Route path='/device/update/:id' element={<UpdateDevice />} />
        <Route path='/device/create' element={<AddDevice />} />

        {/* Service */}
        <Route path='/service' element={<Service />} />
        <Route path='/service/details/:id' element={<DetailsService />} />
        <Route path='/service/update/:id' element={<UpdateDetailsService />} />
        <Route path='/service/create' element={<AddService />} />

        {/* Progression */}
        <Route path='/progression' element={<Progression />} />
        <Route path='/progression/details/:id' element={<DetailsProgression />} />
        <Route path='/progression/create' element={<AddProgression />} />

        {/* Report */}
        <Route path='/report' element={<Report />} />

        {/* Role */}
        <Route path='/role' element={<Roles />} />
        <Route path='/role/create' element={<AddRole />} />
        <Route path='/role/update/:id' element={<UpdateRole />} />

        {/* Account */}
        <Route path='/account' element={<Accounts />} />
        <Route path='/account/create' element={<AddAccount />} />
        <Route path='/account/update/:id' element={<UpdateAccount />} />

        {/* Log */}
        <Route path='/log' element={<ActivityHistory />} />

        {/* Login */}
        <Route path='/login' element={<Login />} />

        {/* Forgot Password */}
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        
        {/* Profile */}
        <Route path='/profile' element={<Profile />} />

        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Content>
  )
}