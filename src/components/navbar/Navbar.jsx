import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import { FaBars , FaTimes} from "react-icons/fa"
import { useState } from "react"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const[color, setColor] =useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }

        
    }
    window.addEventListener("scroll",changeColor);
  return (
    <div className= {color ? "header header-bg":"header"}>
       <Link to ="/"><h1>Komal Garg</h1></Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}
       
       >
           
             <li>   <Link to="/"><h3>Home</h3></Link></li>
            
             <li>   <Link to="/project"><h3>Project</h3></Link></li>
            
              <li>  <Link to="/about"><h3>About</h3></Link></li>
            
              <li>  <Link to="/contact"><h3>Contact</h3></Link></li>
                </ul>
       <div className="hamburger" onClick={handleClick}>
    
        {click ? (<FaTimes size={20} style={{color: "#fff"}
            }
                />):(  <FaBars size={20} style={{color: "#fff"}
            } />
          )}
       
                  

                </div> 
                 
         
    </div>

  );
};

export default Navbar