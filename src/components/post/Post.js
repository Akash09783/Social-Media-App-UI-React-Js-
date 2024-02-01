import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={require('../Images/Person/PR1.jpeg')} alt="" />
            <span className="postUserName">Mehar Sharma </span>
            <span className="postDate"> 5 min ago</span>



          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="PostCenter">
            <span className="postText">Hey! Its My Fist post:) </span>
            <img className="postImg" src={require ('../Images/post/1.jpeg')} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={require ('../Images/like.png')} alt="" />
                <img className="likeIcon" src={require ('../Images/heart.png')} alt="" />
                <span className="postLikeCounter">32 People Like It</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
