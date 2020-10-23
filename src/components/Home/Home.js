import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

function Home(){
  return (<div>
    <div className="logo">
     <img src="images/logo.png" alt="logo" className="i1"/>
    <svg viewBox="0 0 900 150">

	   <symbol id="s-text">
		   <text text-anchor="middle" x="50%" y="80%">cetroots</text>
	   </symbol>

	   <g className = "g-ants">
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
	  </g>
  </svg>

    

    </div>
</div>

  );
}

export default Home;
