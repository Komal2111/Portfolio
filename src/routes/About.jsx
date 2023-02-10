import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Projectbody from '../components/projectbody/Projectbody'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Projectbody heading="ABOUT" text="I am a friendly Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About
