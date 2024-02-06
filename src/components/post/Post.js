import React from "react";
import "./post.css";
import Profile from '../../profile/Profile'
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
import {Link} from 'react-router-dom'
function Post({post}) {
   const [like,SetLike]=useState(post.like)
   const [isLiked,SetIsLiked]=useState(false)




 const likeHandler=()=>{
  SetLike(isLiked?like-1:like+1);
  SetIsLiked(!isLiked)
 }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
         
            <Link to = "/profile/:username" >

            <img
              className="postProfileImg"
              src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
              alt=""
            />
            </Link>
            <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username} </span>
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
            src={post.photo}          alt=""
          />
        
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={require("../Images/like.png")}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={require("../Images/heart.png")}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
