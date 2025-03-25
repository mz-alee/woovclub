import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Ticketspage = () => {
  return (
    <div className='main-page flex h-screen '>
          <Sidebar/>
          <div className='w-full'>
            <Navbar/>
          </div>
    </div>
  )
}

export default Ticketspage