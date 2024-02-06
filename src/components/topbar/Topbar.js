import React from "react";
import topbar from '../topbar/Topbar.css'
import {Link} from 'react-router-dom'
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">LovSocial<VolunteerActivismIcon/></span>
        </Link>
         
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friends, Post or Video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
          <Link to='/register'> <span className="topbarLink">HomePage</span></Link>
           
            <span className="topbarLink">TimeLine</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to="/profile/:username" style={{textDecoration:"none"}} >
          <img className="topbarImg" src={require("../Images/Person/PR1.jpeg")} alt="" />
          </Link>
      
        </div>
      </div>
    </>
  );
}

export default Topbar;
