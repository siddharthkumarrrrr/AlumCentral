import React, { useState } from "react";
import "../Form/Logingform.css";
import LogoName from "../../images/Birla_Institute_of_Technology_Mesra.png"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Navbar from "../../Components/Navbar";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const submithandler = (e) =>{
    e.preventdefault();
  }
  const toggleEye = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };
  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  return (
    <>
    <Navbar/>
      <div id="login-container">
        <div className="left">
          <img src="" alt="img" />
        </div>
        <div className="right">
          <div className="login-form">
            <h1 id="admin">Admin Login</h1>
            <form onSubmit={submithandler}>
              <div className="input-box">
                <label>Email Id</label>

                <span className="input-item">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                  />
                </span>
              </div>

              <div className="input-box">
                <label> Passsword</label>
                <div className="input-item">
                  <input
                    type={passwordType}
                    value={passwordInput}
                    name="password"
                    placeholder=" Enter Your Password"
                    onChange={passwordHandler}
                    required
                    
                  />
                    <span onClick={toggleEye}>
                    {passwordType === "text" ? (
                      <AiFillEye color={"#a7a7a7"} size={"20px"} />
                    ) : (
                      <AiFillEyeInvisible color={"#a7a7a7"} size={"20px"} />
                    )}
                  </span>
                
                </div>
              </div>
            <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
