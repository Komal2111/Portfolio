import React from 'react'
import "./footer.css"
import {  FaGit, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
    
                
        <div className='email'>
        <FaMailBulk size={40} style={{color: 'white' ,marginRight: "2rem" }}></FaMailBulk>
        <a href='komalsnp2111@gmail.com'>komalsnp2111@gmail.com</a>
        </div>
        <div className='email'>
        <FaLinkedinIn size={40} style={{color: 'white' ,marginRight: "2rem" }}></FaLinkedinIn>
        <a href='https://www.linkedin.com/in/komal-garg-31080a222/'>https://www.linkedin.com/in/komal-garg-31080a222/</a>
        </div>
        <div className='email'>
        <FaGit size={40} style={{color: 'white' ,marginRight: "2rem" }}></FaGit>
        <a href='https://github.com/Komal2111'>https://github.com/Komal2111</a>
        </div>
        
        


    </div>
    </div>
  )
}

export default Footer