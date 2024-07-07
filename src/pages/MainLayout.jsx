import React from 'react'
import { Outlet } from 'react-router'
import MainNaviagtion from '../components/MainNaviagtion'

const MainLayout = () => {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    <MainNaviagtion/>

    </>
  )
}

export default MainLayout