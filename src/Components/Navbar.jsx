import React from 'react'
import './Navbar.css'
import LogoName from '../images/Birla_Institute_of_Technology_Mesra.png'

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
    <li>Home</li>
    <li>About us</li>
    <li>Programs</li>
  </ul>
  
  <button type='button' id="login-id">Admin login</button></div>
 
  </nav>
    </div>
  
  
    </>

  )
}

export default Navbar
