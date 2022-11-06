import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../modules/auth/Login'

const PrivateRoutes = () => {
  return (
    <div>
      <Routes>
        <Route 
          path='/login' 
          element={<Login />}
        />
      </Routes>
    </div>
  )
}

export default PrivateRoutes