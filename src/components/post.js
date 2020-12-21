import React from "react";
import './post.css';
function Post(){
  return <div className="boxp">
  <div>

    <div className="head">
  <i class="fas fa-pencil-alt icon2"></i>
  <h3 className="po">Share your post!</h3>
    </div>
    <div className="bott">
   <i class="fas fa-images icon3"></i>
   <i class="fas fa-file-alt icon3"></i>
  </div>
  </div>
  <button className="butt post">Post</button>

  </div>
}

export default Post;
