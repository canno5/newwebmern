import React from 'react'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Footer } from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './component/About'
import { Services } from './component/Services'
import { Contact } from './component/Contact'
import { Login } from './component/Login'
import { Register } from './component/Register'
import { ErrorPage } from './component/ErrorPage'
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />

    </>
  )
}
// "proxy": "http://localhost:2000/",