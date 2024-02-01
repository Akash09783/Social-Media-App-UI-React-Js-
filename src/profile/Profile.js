import "./profile.css";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Siderbar";
import Feed from '../components/feed/Feed';
import Rightbar from "../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={require('../components/Images/post/3.jpeg')}
                alt=""
              />
              <img
                className="profileUserImg"
                src={require('../components/Images/Person/PR1.jpeg')}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Suhani</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}