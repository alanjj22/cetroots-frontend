import React, { Component } from 'react'

class Datefrom extends Component {
    render() {
        let minOffset = 0, maxOffset = 100;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
        return(
                <select className="select-year" >
                    {yearList}
                </select>
        );
    }
}

export default Datefrom
