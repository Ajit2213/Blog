import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
// import './App.css'
import { Home } from './pages/Home';
import { NewContent } from './pages/NewContent';
import { Edit } from './pages/Edit';
import { Navbar } from './components/Navbar';
import { PostCard } from './components/PostCard';
function App() {
 

  return (
    <div>
       <Navbar/>

       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Create' element={<NewContent/>}></Route>
        <Route path='/Edit/:id' element={<Edit/>}></Route>
       </Routes>

      
    </div>
  )
}

export default App
