import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Auth from './pages/Auth'
import Sign from './pages/Sign'

function App() {
  const location = useLocation();

  // Pages where Navbar & Footer should be hidden
  const hideLayoutRoutes = ['/login', '/register'];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/register' element={<Sign />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
