
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Student_Login.css';
import Navbar from '../../Components/Navbar';
import Foot from '../../Components/Foot';

const Student_Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');

  const [rollNo, setRollNo] = useState('');
  const [course, setCourse] = useState(''); // Added course state
  const [passingYear, setPassingYear] = useState(''); 


  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

 

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handlePassingYearChange = (e) => {
    setPassingYear(e.target.value);
  };


  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    // This function is called when the user interacts with the reCAPTCHA component
    setCaptchaVerified(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (captchaVerified) {
      console.log('CAPTCHA is verified!');
      console.log('Name:', name);
      console.log('Email:', email);
      // ... (rest of the form data)
    } else {
      console.log('Please verify that you are not a robot.');
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1960 + 1 }, (_, index) => currentYear - index);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the selected file as needed
    console.log('Selected File:', file);
  };


  return (
    <>
   <div>
   <Navbar/>
   <div className="App1">
   <div className="header">
      <img src="https://www.shutterstock.com/image-vector/graduation-silhouette-water-color-painting-260nw-266031926.jpg" alt="Header Image" className="header-image" />
    </div>
    <div className="login-container">
  


      <form onSubmit={handleFormSubmit}>
      <fieldset>
       {/* Add image upload area below the form */}
       <legend>-----ALUMNI REGISTRATION FORM----- </legend>
       <div className="upload-area">
          <h3>Upload Image</h3>
          <div className="upload-box">
            Click to Upload
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
        </div>
      <br/>
     <br/>
     <br/>
    
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={handleDobChange} required />
        </label>
        <br />
        <label>
          Company:
          <input type="text" value={company} onChange={handleCompanyChange} required />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="tel" value={mobile} onChange={handleMobileChange} required />
        </label>
        <br />
        <label>
          Designation:
          <input type="text" value={designation} onChange={handleDesignationChange} required />
        </label>
        <br />
        
      
        <label>
          Roll No:
          <input type="text" value={rollNo} onChange={handleRollNoChange} required />
        </label>
        <br/>
        <br/>
        <label>
            Course:
            <select value={course} onChange={handleCourseChange} required>
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              
            </select>
          </label>
          <br />
          <label>
            Passing Year:
            <select value={passingYear} onChange={handlePassingYearChange} required>
              <option value="">Select Passing Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        <br />
        <br/>

        <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
          />
          <br/>
          <br/>
        <button type="submit">SUBMIT</button>
        </fieldset>
      </form>

<br/>
<br/>
<br/>
<br/>
<br/>
      </div>
      </div>
      </div>
        <Foot/>
       </>
  );
};

export default Student_Login;
