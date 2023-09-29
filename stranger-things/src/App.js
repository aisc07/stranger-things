import { Routes, Route } from 'react-router-dom'
import Profile from './components/Pages/Profile'
import Login from './components/Pages/Login'
import Posts from './components/Pages/Posts'
import Register from './components/Pages/Register'
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/navbar" element={<NavBar/>} />  
        <Route path="/" element={<Posts/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
