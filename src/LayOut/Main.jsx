import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Pages/Home/Navbar/Navbar'

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Main