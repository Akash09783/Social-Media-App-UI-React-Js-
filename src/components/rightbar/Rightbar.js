import React from "react";
import "./rightbar.css";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src={require('../Images/Person/3.jpeg')}
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">John Fizale</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
