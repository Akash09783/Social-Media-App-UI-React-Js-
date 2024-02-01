import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({profile}) {
const HomeRightbar = ()=>{
  return(
    <>
       <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src={require("../Images/gift.png")}
            alt=""
          />
          <span className="birthdayText">
            <b>Ajay Gehnoliya</b> and <b>Other Friends</b> have a birthday Today
          </span>
        </div>
        <img className="rightbarAd" src={require("../Images/ad.png")} alt="" />
        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    </>
  )
}


const ProfileRightbar =()=>{
  return(
    <>
      <h4 className="'rightbarTitle">User Information</h4>
      <br/>
      <div className="rightbarInfo">
      <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">City:</span>
         <span className="rightbarInfoValue">Jaipur</span> 
        </div>
        <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">From:</span>
         <span className="rightbarInfoValue">Rajasthan</span> 
        </div>
        <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Relationship</span>
         <span className="rightbarInfoValue">Single</span> 
        </div>
       
      </div>
      <h4 className="rightbarTitle">User Friends</h4>

<div className="rightbarFollowings">
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/PR1.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/2.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/3.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/4.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/5.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
<div className="rightbarFollowing">
  <img className="rightbarFollowingImg" src={require('../Images/Person/6.jpeg')} alt="" />
  <span className="rightbarFollowingName">Namasvi Kumawat</span>
</div>
</div>
    </>
  )
}

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/>:<HomeRightbar/>} 
      </div>
    </div>
  );
}

export default Rightbar;
