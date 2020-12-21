import React from "react"
import Side from "./sideacc.js"
import Post from "./post.js"
import Acard from  './Acard.js';
import "./feed.css";
function Feed(){
  return <div style={{display:"inline",width:"100%"}}>
    <div className="name-card">
    <Side />
    </div>
    <div className="name-card-horizontal">
      <h2>Nihara R</h2>
      <h4>Followers 20</h4>
    </div>
    <div className="right-cards">
      
  <Post />

<Acard head="Infospica" content="i got it" color="con"  />
<Acard head="Google" content="i am kewl" color="con1" />
<Acard head="Anime" content="mass aanu" color="con" />
<Acard head="Hentai" content="creativity at its peak" color="con1" />

      </div>

  </div>

}
export default Feed;
