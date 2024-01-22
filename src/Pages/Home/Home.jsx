import React from 'react'
import "./home.css"
import Navbar from '../../Components/Navbar' 
import BitAlmuniImg from '../../Components/BitAlmuniImg'
import Foot from '../../Components/Foot'
import CustomSlider from '../../Components/CustomSlider'
 import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    <Navbar/>
    <BitAlmuniImg/>
    <div className="message">
       The insitiute has given many eniginerss to make this Planet a better place.
      </div>

    
    <div className="button_list">
        <button>AlumiList</button>
        <button><Link to='./Student_login'>Click Here to Create Your Profile</Link></button>
      </div>
      <CustomSlider/>
      <Foot/>
     </div>
    
  )
}

export default Home
