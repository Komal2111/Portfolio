import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Projectbody from '../components/projectbody/Projectbody'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Projectbody heading="CONTACT" text ="Lets have a chat"/>
    <Footer/>
    </div>
  )
}

export default Contact