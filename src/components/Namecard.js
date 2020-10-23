import React from 'react';

function Namecard(props) {
    return (
        <div>
            <div className="card h">
        <div className="top pro">

        <h1 className='name'>{props.name}</h1>
        <img className="circle-img" src='images/sv.jpg' alt="avatar_img" />
        </div>
        <div className="bottom">

      <p className='info'>Student at College of Engineering Trivandrum</p>
      <p className='info'>{props.sem}</p>
    </div>
  </div>
        </div>
    )
}

export default Namecard;
