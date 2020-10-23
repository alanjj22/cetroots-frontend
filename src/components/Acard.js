import React from 'react';

function Acard(props) {
    return (
        <div>
            <div className='box'>

            <img src='images/sv.jpg' alt='box' className='boxm' />
            <div className={props.color}>
            <h3>{props.head}</h3>
            <p className='content'>{props.content}</p>
            </div>
        </div>
        </div>
    )
}

export default Acard;
