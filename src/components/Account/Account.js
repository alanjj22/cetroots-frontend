import React, { useState } from 'react';
import Namecard from'./../Namecard';
import Vdtails from'./../Vdtails';
import Udtails from'./../Udetails';

function Account() {
    const [clicked,chClicked] = useState(false);
    function handleClick(){
        chClicked(!clicked);
    }

    return (
        <div>

            <Namecard name='Nihara R' sem="5th sem" />
            <Vdtails />
            <button onClick={handleClick}>Update</button>
            {clicked && <Udtails />}
            
        </div>
    )
}

export default Account;
