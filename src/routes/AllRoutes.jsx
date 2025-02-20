import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default AllRoutes