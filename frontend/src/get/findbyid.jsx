import React from "react";
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import "../clientinfo.css"


function Findbyid(){
const [id,setId] = useState("")
const [error,setError] = useState(null)
const [clientdata,setClientData] = useState(null)

async function Fetchdatabyid(e){
e.preventDefault()
const response = await axios.get('https://wakili.onrender.com/id',{
params:{idNumber:id}

})
if(response.data.length===0){
setClientData(null)

setError('Sorry Client not found')
}
else{
setClientData(response.data)

}

}

return(
<div className="container">
  <form onSubmit={Fetchdatabyid} >
  <label>Enter IDNumber:</label>
<input type="number" 
required
onChange={(e)=>setId(e.target.value)}



/>


<button>Search</button>


  </form>


{error && <p className="error">{error}</p>}
      
      
      {clientdata && (
        <div className="client info">
          <p>Client Information:</p>
          <pre>{JSON.stringify(clientdata, null, 2)}</pre>
        </div>
      )}
      <Link to="/navigation" className="home-link">Home</Link>
</div>


)


}
export default Findbyid