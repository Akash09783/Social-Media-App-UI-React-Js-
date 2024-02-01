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
    <h1>hey its profile</h1>
  )
}

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <ProfileRightbar/>
      </div>
    </div>
  );
}

export default Rightbar;
