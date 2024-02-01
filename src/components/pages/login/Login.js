import React from "react";
import "./login.css";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="loginLogo">LovSocial<VolunteerActivismIcon/></h3>
        <span className="loginDesc">
            Connect With Friends and the world around you on LovSocial
        </span>
        </div>
        <div className="loginRight">
            <div className="loginBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
