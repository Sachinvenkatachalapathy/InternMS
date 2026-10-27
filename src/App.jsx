import './App.css';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import { Login } from './Components-Login/Login';
import { ForgetPassword } from './Components-Login/Forget Password';
import { OtpForgetPassword } from './Components-Login/OTP Forget Password';
import { ResetPassword } from './Components-Login/Reset Password';
import { PasswordResetSuccess } from './Components-Login/Password Reset Success';
import { InternRegistrationNew } from './Components-Dashboard/Intern Registration New';
import { RegistrationOTP } from './Components-Dashboard/Registration OTP';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgetPassword />,
  },
  {
    path: '/otp',
    element: <OtpForgetPassword />,
  },
  {
  path: '/reset-password',
  element: <ResetPassword />,
  },
  {
  path: '/reset-success',
  element: <PasswordResetSuccess />,
  },
  {
    path: '/intern-registration',
    element: <InternRegistrationNew />,
  },
  {
    path: '/registration-otp',
    element: <RegistrationOTP />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;