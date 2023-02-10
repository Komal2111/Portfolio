import React from 'react'
import './projectbody.css'

const Projectbody = (props) => {
  return (
    <div className='portfolio-img'>
     
      <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
      <div className='heading1'>

      </div>
     
    </div>
  )
}

export default Projectbody