import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Findclient() {
  const [clientName, setClientName] = useState('')
  const [clientData, setClientData] = useState(null)
  const [error, setError] = useState(null)
 

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get('https://wakili.onrender.com/clientlist', {
        params: { Firstname: clientName }
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
     <form onSubmit={handleSearch}>
<p>Find Client by Firstname</p>
<label >Enter FirstName:</label>
<input
        type="text"
        p
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <button>Search</button>
      
      {error && <p className='message'>{error}</p>}
      
      
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

export default Findclient;
