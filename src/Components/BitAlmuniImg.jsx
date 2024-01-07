import React, { useEffect } from 'react';
import './BitAlmuniImg.css';
import BuildingImg from '../images/Building.jpeg'
import Bg_pc from '../images/bg_pic1.jpg'
import AlumCentralImg from '../images/logo.png'
function BitAlmuniImg() {
  useEffect(() => {
    const universityImage = document.getElementById("university-image");
    const universityName = document.getElementById("university-name");
    const otherImage = document.getElementById('other-image');
    const otherDescription = document.getElementById("other-discription");
    const alumCentralLogo=document.querySelector('#alumCentralLogo');

   function showUniversity() {
      universityImage.style.opacity=1;
      universityName.style.opacity = 0.8;
      otherImage.style.display = "none";
      otherDescription.style.display = "none";
     alumCentralLogo.style.display="none";
      setTimeout(() => {
        universityImage.style.opacity = 0;
        universityName.style.opacity = 0;
        universityImage.style.display="none";
        universityName.style.display="none";

        showOther();
      }, 4000);
    }

     function showOther() {
      otherImage.style.display = "block";
      otherDescription.style.display = "block";
      alumCentralLogo.style.display="inline-block";

      // setTimeout(() => {
      //   otherImage.style.opacity = 0;
      //   otherDescription.style.opacity = 0;np
      //   showUniversity();
      // },);
    }

    showUniversity();
  }, []); 

  return (
    <>
      <div className="container">
        <div className="content-container">
          <div id="university-name"><span><h3  class="animate__animated animate__backInLeft animate__delay-1s">Welcome To👋</h3></span>
        <div><h2 className=' animate__animated animate__flipInX animate__delay-2s'> Bit Mesra 's Alumcentral</h2></div></div>
          <img src={BuildingImg} alt="" id="university-image" />
        </div>
                             
        <div className="content-container">
        <div id="alumCentralLogo">
            <img src={AlumCentralImg} alt="alum logo "  />
          </div>
          <div id="other-discription"  className=" animate__animated animate__fadeIn animate-delay-4.3s">
          Hi i am other div. I am here to make connection and flsdkjflsdkj
          sldjkflkdsjflsdakj
          kfsjgksajlkjdflsd khjjkdfkj isdnf sdhjfaksdlf aaakvkdjge
          kdjoejt agjkajdlkjdf sdlkfweijtoweja;fhggj;ad;  </div>
          <img src={Bg_pc} alt="background" id="other-image"  className=" animate__animated animate__fadeIn animate-delay-4.3s" />
        </div>
      </div>
    </>
  );
}

export default BitAlmuniImg;
