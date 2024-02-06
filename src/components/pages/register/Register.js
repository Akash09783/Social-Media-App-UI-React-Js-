import { Link } from 'react-router-dom';
import './resigster.css'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LoveSocial<VolunteerActivismIcon/></h3>
          <span className="loginDesc">
            Connect with friends and the world around you on LoveSocial<VolunteerActivismIcon/>
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <Link to="/login">
            <button className="loginButton">Sign Up</button>

            </Link>
          

            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}