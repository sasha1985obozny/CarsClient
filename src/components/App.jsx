import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Auth from './pages/Auth/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'features/auth/authSlice';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMe())
  // }, [])

  return (
      <div>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/services' element = { <Services /> } />
          <Route path = '/auth' element = { <Auth /> } />
          <Route path = '/login' element = { <Login /> } />
          <Route path = '/register' element = { <Register /> } />
          <Route path = '/user' element = { <User /> } />
          <Route path = '/admin' element = { <Admin /> } />
        </Routes>

        <ToastContainer position='bottom-right'/>
      </div>
  );
}

export default App;
