import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Practice from './practice'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/question' element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
