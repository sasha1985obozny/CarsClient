import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Auth from './pages/Auth/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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
          <Route path = '/CarsClient/' element = { <Home /> } />
          <Route path = '/CarsClient/services' element = { <Services /> } />
          <Route path = '/CarsClient/auth' element = { <Auth /> } />
          <Route path = '/CarsClient/login' element = { <Login /> } />
          <Route path = '/CarsClient/register' element = { <Register /> } />
          <Route path = '/CarsClient/user' element = { <User /> } />
          <Route path = '/CarsClient/admin' element = { <Admin /> } />
        </Routes>

        <ToastContainer position='bottom-right'/>
      </div>
  );
}

export default App;
