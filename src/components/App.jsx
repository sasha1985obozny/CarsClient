import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

function App() {
  return (
      <div>
        <Routes>
          <Route path = 'CarsClient/' element = { <Home /> } />
          <Route path = 'CarsClient/services' element = { <Services /> } />
        </Routes>
      </div>
  );
}

export default App;
