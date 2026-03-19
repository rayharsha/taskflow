import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { AuthProvider } from './lib/hooks/useAuthContext'
import { ToastContainer } from 'react-toastify'
import Register from './pages/register'
import ForgetPassword from './pages/forgetPassword'
import Todo from './pages/todo'
import Login from './pages/login'
import VerifyEmail from './pages/verifyEmail'
import ResetPassword from './pages/ResetPassword'
function App() {

  return (
       <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/auth/verify-email/:token' element={<VerifyEmail />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/todos' element={<AuthProvider><Todo /></AuthProvider>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
