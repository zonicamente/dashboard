import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Etapa4 from './pages/Etapa4';
import Etapa5 from './pages/Etapa5';
import Etapa6 from './pages/Etapa6';
import Etapa7 from './pages/Etapa7';
import Etapa8 from './pages/Etapa8';
import Etapa9 from './pages/Etapa9';
import Etapa10 from './pages/Etapa10';
import Etapa11 from './pages/Etapa11';
import Clock from './components/Clock';

function App() {
  return (
    <div className='d-flex'>
      <Router>
        <div className='barraLateral'>
          <Sidebar />
        </div>
        <div className='content flex-grow-1 contPrincipal'>
          
        <div className='reloj'>
          <Clock />
          </div>
          <Routes>
            <Route path='/' element={<Etapa1 />} />
            <Route path='/etapa2' element={<Etapa2 />} />
            <Route path='/etapa3' element={<Etapa3 />} />
            <Route path='/etapa4' element={<Etapa4 />} />
            <Route path='/etapa5' element={<Etapa5 />} />
            <Route path='/etapa6' element={<Etapa6 />} />
            <Route path='/etapa7' element={<Etapa7 />} />
            <Route path='/etapa8' element={<Etapa8 />} />
            <Route path='/etapa9' element={<Etapa9 />} />
            <Route path='/etapa10' element={<Etapa10 />} />
            <Route path='/etapa11' element={<Etapa11 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
