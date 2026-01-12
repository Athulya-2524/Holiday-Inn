import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Auth insideRegister={false}/>}/>
          <Route path='/register' element={<Auth insideRegister={true}/>}/>
          
        </Routes>
      </div>
    </div>
  )
}

export default App