import React, { useState } from "react";
import './Udetails.css'

function Udetails() {
    const [data, setData] = useState({
        email: "",
        phoneNo: "",
        status: ""

      });
      function handleChange(event) {
        const { name, value } = event.target;
    
        setData(prevData => {
          return {
            ...prevData,
            [name]: value
          };
        });
      }
      function submitDetails(event) {
        
        event.preventDefault();
      }
    return (
        <div className="udtails">
        <h1>Update your details</h1>
            <form>
              <div>
                <label htmlFor="email">Email: </label>
                <input
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="ABC@gmail.com"
                /></div>
                <div>
                <label htmlFor="phoneNo">Phone Number: </label>
                <input
                id="phoneNo"
                name="phoneNo"
                onChange={handleChange}
                value={data.phoneNo}
                placeholder="9876543210"
                /></div>
                <div>
                <label htmlFor="status">Status: </label>
                <input
                id="status"
                name="status"
                onChange={handleChange}
                value={data.status}
                placeholder="1st sem"
                /></div>
                <button onClick={submitDetails}>Submit</button>
            </form>
        </div>
    )
}

export default Udetails;
