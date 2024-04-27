import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
            <div className="main-content min-h-screen">
                {children}
            </div>
        <Footer/>
    </div>

  )
}

export default Layout