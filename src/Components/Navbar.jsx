import React from 'react'
import './Navbar.css'
import LogoName from '../images/Birla_Institute_of_Technology_Mesra.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
 <div>
       <nav>
       <div className="logo-div"><div className="logo">
  <img src={LogoName} alt="logo" />
  </div>
  <div className="ins-name">
    <h2>Birla Instiute of techlogy</h2>
  </div></div>
  
  <div className="right-section"> <ul>
    <li><Link to='/'>Home</Link></li>
    <li>About us</li>
    <li>Programs</li>
  </ul>
  
  <button type='button' id="login-id"><Link to='/login'>Admin login</Link></button></div>
 
  </nav>
    </div>
  
  
    </>

  )
}

export default Navbar
