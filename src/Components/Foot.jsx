import React, { useEffect } from 'react';
import './Foot.css'
import LogoName from '../images/Birla_Institute_of_Technology_Mesra.png'
function Foot(){
    return(
        <>
        <div id="Footer">
        <div class="FooterContainer">
        <div class="FooterLeft">
        <img src={LogoName} alt="logo"></img>
        <h4>Department of Computer Application</h4>
        <p>Vinoba Bhave University, Hazaribagh</p>
        </div>
        <div class="FooterMiddle">
        <div class="FooterMiddleLeft">
        <ul>
        <a href="#/BCA">
        <li>BCA</li></a>
        <a href="#/MCA">
        <li>MCA</li></a>
        <a href="#/teachingMembers"><li>Teaching Staff</li></a>
        <a href="#/nonTeachingMembers"><li>Non Teaching Staff</li></a>
        <a href="#/"><li>Facility</li></a>
        </ul></div>
        <div class="FooterMiddleRight">
        <ul><a href="#/"><li>Notice</li></a>
        <a href="#/"><li>Events</li></a>
        <a href="#/library"><li>Library</li></a>
        <a href="#/gallery"><li>Gallery</li></a>
        <a href="#/contact"><li>Contact</li>
        </a><a href="#/about"> <li>About</li></a>
        </ul>
        </div>
        </div>
        <div class="FooterRight">
        <div class="mapouter">
        <div class="gmap_canvas">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.333698677276!2d85.43503007800219!3d23.41230984729636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1704727855800!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </div>
        </div>
        <div class="FooterCopyRight">
        <span>©&nbsp;CopyRight
         <span id="data">2024</span>
          by <a href="https://techiesgateway.com" target="_blank">
        <b>TechiesGateway</b></a>. All Rights Reserved.</span></div></div>


        </> 


    );}

    export default Foot;