import React from 'react';
import Ico from "./star.svg";
import {useState} from 'react';



function Acard(props) {
  const [col,setcol]=useState(false);
  const [count,setcount]=useState(0);

  function handleclick(){
    setcol(!col);
    if(!col){
      setcount(1);
    }else{
      setcount(0);
    }

  }

  function handlecount(){

  }
    return (
        <div className='box'>
            <div >

            <img src='images/sv.jpg' alt='box' className='boxm' />
            <div className={props.color}>
            <h3>{props.head}</h3>
            <p className='content'>{props.content}</p>
            <i className="fa fa-star icon" onClick={handleclick} style={{color:col?'green':'white'}}  aria-hidden="true"><span className='num'>{count}</span></i>

            </div>
        </div>
        </div>
    )
}

export default Acard;
