import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'

const Routing = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home/:id/:name' element={<Home />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='*' element={<h2>Not Found!</h2>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default Routing