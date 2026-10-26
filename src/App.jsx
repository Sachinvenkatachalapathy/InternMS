import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Components-Login/Login';
import { ForgetPassword } from './Components-Login/Forget Password';
import { OtpForgetPassword } from './Components-Login/OTP Forget Password';
import { ResetPassword } from './Components-Login/Reset Password';
import { PasswordResetSuccess } from './Components-Login/Password Reset Success';
import { InternRegistrationNew } from './Components-Dashboard/Intern Registration New';

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;