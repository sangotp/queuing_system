import { useLocation } from 'react-router-dom';


export const GlobalRoutes = () => {
  const location = useLocation();
  return [
    '/',
    '/login',
    '/forgotpassword',
    `/resetpassword/${location.state?.resetId}`,
    '/device',
    `/device/details/${location.state?.deviceId}`,
    `/device/update/${location.state?.deviceId}`,
    '/device/create',
    '/service',
    `/service/details/${location.state?.serviceId}`,
    `/service/update/${location.state?.serviceId}`,
    '/service/create',
    '/progression',
    `/progression/details/${location.state?.progressionId}`,
    '/progression/create',
    '/report',
    '/role',
    '/role/create',
    `/role/update/${location.state?.roleId}`,
    '/account',
    '/account/create',
    `/account/update/${location.state?.userId}`,
    '/log',
    '/profile',
  ] as String[]
}