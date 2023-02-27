import './App.css';
import { createFirebaseData } from './state/firebase/actions/generalFirebaseActions'; 
import { Routes, Route, Link } from 'react-router-dom'
import { Dashboard, Device, Service, Progression, Report, Roles, Accounts, ActivityHistory, Profile, ForgotPassword, Login, NotFound } from './components'
import { ReadAllFirebaseData } from './utils/ReadAllFirebaseData';

function App() {
  
  // This Function Call Only Once After Component Mount
  ReadAllFirebaseData()

  return (
    <div className="App">
      {/* Generate Dummy Data Button - To Using This button, you need to change display to inline-block or remove style */}
      <button type='button' onClick={createFirebaseData} style={{ display: 'none' }}>Create Data</button>
      {/* --------------------------------------------------------------------------------- */}

      {/* Redirect Component */}
      <Link to='/'>Dashboard</Link>
      <Link to='/device' style={{ marginInline: '1rem' }}>Thiết bị</Link>
      <Link to='/service'>Dịch vụ</Link>
      <Link to='/progression' style={{ marginInline: '1rem' }}>Cấp số</Link>
      <Link to='/report'>Báo cáo</Link>
      <Link to='/role' style={{ marginInline: '1rem' }}>Vai trò</Link>
      <Link to='/account'>Tài khoản</Link>
      <Link to='/log' style={{ marginInline: '1rem' }}>Nhật ký hoạt động</Link>
      <Link to='/profile'>Thông tin cá nhân</Link>

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
  );
}

export default App;
