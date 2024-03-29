import React from "react";
import "./login.css";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="loginLogo">LovSocial<VolunteerActivismIcon/></h3>
        <span className="loginDesc">
            Connect With Friends and the world around you on LovSocial<VolunteerActivismIcon/>
        </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <Link to="/" >
            <button className="loginButton">Log In</button>
            </Link>
           
            <span className="loginForgot">Forgot Password?</span>
            <Link to='/register'>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            </Link>
          
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
