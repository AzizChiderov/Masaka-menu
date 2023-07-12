import { Outlet } from "react-router"
import React from 'react'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}

export default Layout