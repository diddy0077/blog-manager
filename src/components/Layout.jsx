import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col'>
        <main className='flex-grow'>
          <Outlet />
        </main>
      <Footer/>
      </div>
    </div>
  )
}

export default Layout