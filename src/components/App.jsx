import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Auth from './pages/Auth/Auth';

function App() {
  return (
      <div>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/services' element = { <Services /> } />
          <Route path = '/auth' element = { <Auth /> } />
        </Routes>
      </div>
  );
}

export default App;