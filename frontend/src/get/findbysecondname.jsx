import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Findclientbysecondname() {
  const [clientName, setClientName] = useState('')
  const [clientData, setClientData] = useState(null)
  const [error, setError] = useState(null)


  async function handleSearch (e)  {
    e.preventDefault()
    try {
      const response = await axios.get('http://localhost:4000/secondname', {
        params: { Secondname: clientName }
      });

      if (response.data.length===0) {
        setClientData(null);
        setError('Client Not Found!!!');
        
      } else {
        setClientData(response.data);
        setError(null)
        
      }
    } catch (error) {
      setError('Error fetching client data')
      setClientData(null)
      
    }
  };

  return (
    <div>
      <h1>Find Client By Second name</h1>
      <form onSubmit={handleSearch} >
        <label >Enter Second Name</label>
      <input
        type="text"
        
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <button>Search</button>
      
      {error && <p>{error}</p>}
      
      
      {clientData && (
        <div>
          <p>Client Information:</p>
          <pre>{JSON.stringify(clientData, null, 2)}</pre>
        </div>
      )}
  <Link to="/navigation">Home</Link>






      </form>
    
    </div>
  );
}

export default Findclientbysecondname;
