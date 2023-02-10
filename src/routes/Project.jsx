import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Projectbody from '../components/projectbody/Projectbody'
import ProjectWork from '../components/projectwork/ProjectWork'

const Project = () => {
  return (
    <>
      <Navbar/>
    
      
    
      
      <Projectbody heading="PROJECTS" text="my work"/>
      <ProjectWork/>
      <Footer/>
    </>  
      
  
  )
}

export default Project
