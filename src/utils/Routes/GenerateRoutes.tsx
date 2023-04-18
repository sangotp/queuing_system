import { Routes, Route } from 'react-router-dom';
import { Dashboard, Device, AddDevice, DetailsDevice, UpdateDevice, Service, AddService, DetailsService, UpdateDetailsService, Progression, AddProgression, DetailsProgression, Report, Roles, AddRole, UpdateRole, Accounts, AddAccount, UpdateAccount, ActivityHistory, Profile, Login, ForgotPassword, ResetPassword, NotFound } from '../../components'
import { GlobalRoutes } from '../../Routes/GlobalRoutes';
import { useLocation } from 'react-router-dom';

/* Function: Generate Guest Routes */
export const GenerateGuestRoutes = () => {
  // use Location Hook
  const location = useLocation();

  // Consider Valid Routes
  let isValidRoute = false;
  const globalRoutes = GlobalRoutes()
  globalRoutes.map((route) => {
    if (!isValidRoute && route === window.location.pathname)
      isValidRoute = true
    return route
  })
  // console.log(isValidRoute, window.location.pathname)

  if (isValidRoute)
  {
    switch (window.location.pathname) {
      case '/forgotpassword':
        return (
          <Routes>
            <Route path='/forgotpassword' element={<ForgotPassword />} />
          </Routes>
        )
      case `/resetpassword/${location.state?.resetId}`:
        return (
          <Routes>
            <Route path={`/resetpassword/:resetId`} element={<ResetPassword />} />
          </Routes>
        )
      default:
        return (
          <Routes>
            <Route path={window.location.pathname} element={<Login />} />
          </Routes>
        )
    }
  }
  else
  {
    return (
      <Routes>
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    )
  }
}

/* Function: Generate Auth Routes */
export const GenerateAuthRoutes = () => {
  // use Location Hook
  const location = useLocation();

  // Consider Valid Routes
  let isValidRoute = false;
  const globalRoutes = GlobalRoutes()
  globalRoutes.map((route) => {
    if (!isValidRoute && route === window.location.pathname)
      isValidRoute = true
    return route
  })
  // console.log(isValidRoute, window.location.pathname)

  if (isValidRoute)
  {
    switch (window.location.pathname) {
      case '/':
        return (
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        )
      case '/device':
        return (
          <Routes>
            <Route path='/device' element={<Device />} />
          </Routes>
        )
      case '/device/create':
        return (
          <Routes>
            <Route path='/device/create' element={<AddDevice />} />
          </Routes>
        )
      case `/device/details/${location.state?.deviceId}`:
        return (
          <Routes>
            <Route path='/device/details/:deviceId' element={<DetailsDevice />} />
          </Routes>
        )
      case `/device/update/${location.state?.deviceId}`:
        return (
          <Routes>
            <Route path='/device/update/:deviceId' element={<UpdateDevice />} />
          </Routes>
        )
      case '/service':
        return (
          <Routes>
            <Route path='/service' element={<Service />} />
          </Routes>
        )
      case '/service/create':
        return (
          <Routes>
            <Route path='/service/create' element={<AddService />} />
          </Routes>
        )
      case `/service/details/${location.state?.serviceId}`:
        return (
          <Routes>
            <Route path='/service/details/:serviceId' element={<DetailsService />} />
          </Routes>
        )
      case `/service/update/${location.state?.serviceId}`:
        return (
          <Routes>
            <Route path='/service/update/:serviceId' element={<UpdateDetailsService />} />
          </Routes>
        )
      case '/progression':
        return (
          <Routes>
            <Route path='/progression' element={<Progression />} />
          </Routes>
        )
      case '/progression/create':
        return (
          <Routes>
            <Route path='/progression/create' element={<AddProgression />} />
          </Routes>
        )
      case `/progression/details/${location.state?.progressionId}`:
        return (
          <Routes>
            <Route path='/progression/details/:progressionId' element={<DetailsProgression />} />
          </Routes>
        )
      case '/report':
        return (
          <Routes>
            <Route path='/report' element={<Report />} />
          </Routes>
        )
      case '/role':
        return (
          <Routes>
            <Route path='/role' element={<Roles />} />
          </Routes>
        )
      case '/role/create':
        return (
          <Routes>
            <Route path='/role/create' element={<AddRole />} />
          </Routes>
        )
      case `/role/update/${location.state?.roleId}`:
        return (
          <Routes>
            <Route path='/role/update/:roleId' element={<UpdateRole />} />
          </Routes>
        )
      case '/account':
        return (
          <Routes>
            <Route path='/account' element={<Accounts />} />
          </Routes>
        )
      case '/account/create':
        return (
          <Routes>
            <Route path='/account/create' element={<AddAccount />} />
          </Routes>
        )
      case `/account/update/${location.state?.userId}`:
        return (
          <Routes>
            <Route path='/account/update/:userId' element={<UpdateAccount />} />
          </Routes>
        )
      case '/log':
        return (
          <Routes>
            <Route path='/log' element={<ActivityHistory />} />
          </Routes>
        )
      case '/profile':
        return (
          <Routes>
            <Route path='/profile' element={<Profile />} />
          </Routes>
        )
      default:
        return (
          <Routes>
            {/* Not Found */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        )
    }
  }
  else
  {
    return (
      <Routes>
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    )
  }
}