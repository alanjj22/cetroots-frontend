import React, { useState } from 'react';
import Namecard from'./../Namecard';
import Vdtails from'./../Vdtails';
import Udtails from'./../Udetails';
import './Account.css';

function Account() {
    const [clicked,chClicked] = useState(false);
    function handleClick(){
        chClicked(!clicked);
    }

    return (
        <div>

            <Namecard name='Nihara R' sem="5th sem" />
            <div className='details'>
            <Vdtails />
            <button onClick={handleClick}>Update</button>
            {clicked && <Udtails />}
            </div>
            
            
        </div>
    )
}

export default Account;
