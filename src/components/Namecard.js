import React from 'react';
import Upload from './upload-button.svg'
import useState from 'react';
import { Link } from 'react-router-dom'
import './Namecard.css'

function Namecard(props) {

  function handlepop(){
    return <div>
      <div id="mypop" className="pop">
        <button className="close" onClick={handleclose}>X</button>
        <img className="upload" src={Upload} alt="upload photo" />
      </div>

    </div>

  }

  function handleclose(){
    var x = document.getElementById("mypop");
    x.style.display = "none";



  }
    return (
        <div>
            <div className="card h">
              <div className="top pro">

                <h1 className='name'>{props.name}</h1>
                <img id="btn" className="circle-img" src='images/sv.jpg'  onClick={handlepop} alt="avatar_img" />
                

              </div>
              <div className="bottom">

              <p className='info'>Student at College of Engineering Trivandrum</p>
              <p className='info'>{props.sem}</p>
              <Link to='/myAccount'>
              <button className='butt'>Edit info</button>
                </Link>
              
             </div>
            </div>



    </div>
    )
}

export default Namecard;
