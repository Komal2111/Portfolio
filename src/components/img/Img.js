import React from 'react'
import { Link } from 'react-router-dom'
import "./img.css"

const Img = () => {
  return (
    <div className='img'>
        <div className='mask'>
            <img className='into-img' 
            
          src=  "https://blogs.sw.siemens.com/wp-content/uploads/sites/24/2020/11/Code-into-processor-AdobeStock_248768547-scaled.jpeg"
            alt="komal"
            />
        </div>
        <div className='content'>
            
            <h1>I am a Software Developer</h1>
            <div className='btn1'>
                <Link to ="/project"  className='btn'>Projects</Link>
                <Link to ="/contact"  className='btn btn-light'>Contact</Link>
                </div>
                <div className='btn1'>
                <Link to ="/contact"  className='btn'>Download Resume</Link>
                </div>
                
        </div>
    </div>
  )
}

export default Img