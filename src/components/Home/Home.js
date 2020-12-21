import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Footer from "../Footer/footer.js"

function Home(){
  const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

  // return (<div style={{width:"100%"}}>
  //   <div className="logo" style={{overflow:"hidden"}}>
  return (<div>
    <div className="logo">
     <img src="images/logo.png" alt="logo" className="i1"/>
    <svg viewBox="0 0 100% 150">

	   <symbol  id="s-text">
		   <text className="fontsizecetroots" text-anchor="middle" x="50%" y="80%">cetroots</text>
	   </symbol>

	   <g className = "g-ants">
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
		   <use xlinkHref="#s-text" class="text-copy"></use>
	  </g>
  </svg>

  <x-sign>
"Explore your connections and bring CET under one family"
</x-sign>


    </div>
</div>

  );
}

export default Home;
