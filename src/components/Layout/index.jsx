import { Outlet } from "react-router"
import React from 'react'
import Header from '../Header/Header.jsx'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}

export default Layout