import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Findcasebyid() {
  const [clientid, setClientid] = useState("");
  const [clientdata, setClientdata] = useState(null);
  const [error, setError] = useState(null);

  async function Fetchcasebyid(e) {
    e.preventDefault()
    if(clientid.length < 24){
      setError('ID must be 24 charachters')
 
      }
 
    
    try {
      const response = await axios.get("http://localhost:4000/casedetails", {
        params: { clientID: clientid }
      });

   



      if (response.data.length === 0) {
        setClientdata(null);
        setError("Client has not been found");
      } else {
        setClientdata(response.data);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
      setError("An error occurred while fetching client data");
    }
  }

  return (
    
    <div>
      <h1>Find A Client's Case details Using ClientID</h1>
      <form onSubmit={Fetchcasebyid}>
      <label>Enter clientID:</label>
      <input
        type="text"
        required
        onChange={(e) => setClientid(e.target.value)}
      />
      <button>Search</button>

      {error && <p>{error}</p>} 

      {clientdata && (
        <div>
          <p>Client Information:</p>
          <pre>{JSON.stringify(clientdata, null, 2)}</pre>
        </div>
      )}
      <Link to="/navigation">Home</Link>





      </form>

    













 
    
    </div>
  );
}

export default Findcasebyid;

