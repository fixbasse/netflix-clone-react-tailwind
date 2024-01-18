import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'

import Home from './pages/Home'
import Account from './pages/Account'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <AuthContextProvider>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App

//* 1. Create Navbar
//* 2. Use React Router

