import { Routes, Route } from 'react-router-dom';
import { Login, ForgotPassword, ResetPassword, NotFound } from '../../components';
import { GlobalRoutes } from '../../Routes/GlobalRoutes';
import { useLocation } from 'react-router-dom';

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
    console.log(window.location.pathname)
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