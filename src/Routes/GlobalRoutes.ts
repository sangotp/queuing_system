import { useLocation } from 'react-router-dom';


export const GlobalRoutes = () => {
  const location = useLocation();
  return [
    '/',
    '/login',
    '/forgotpassword',
    `/resetpassword/${location.state?.resetId}`,
    '/device',
    '/device/details/:id',
    '/device/update/:id',
    '/device/create',
    '/service',
    '/service/details/:id',
    '/service/update/:id',
    '/service/create',
    '/progression',
    '/progression/details/:id',
    '/progression/create',
    '/report',
    '/role',
    '/role/create',
    '/role/update/:id',
    '/account',
    '/account/create',
    '/account/update/:id',
    '/log',
    '/profile',
  ] as String[]
}