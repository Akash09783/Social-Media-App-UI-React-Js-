import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
function Post({post}) {
    console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={require("../Images/Person/PR1.jpeg")}
              alt=""
            />
            <span className="postUserName">Mehar Sharma </span>
            <span className="postDate"> {post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img
            className="postImg"
            src={post.photo}           alt=""
          />
        
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={require("../Images/like.png")}
              alt=""
            />
            <img
              className="likeIcon"
              src={require("../Images/heart.png")}
              alt=""
            />
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
