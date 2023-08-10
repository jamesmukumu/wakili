import React from "react";
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom"


function Case(){
const [casetype,setCaseType] = useState('')
const [casedescription,setCasedescription] = useState('')
const [clientid,setClientid] = useState('')
const [message,setMessage] = useState('')
const  [location,setLocation] = useState('')
const  [highcourt,setHighcourt] = useState('')
const  [courtType,setCourttype] = useState('')
const  [magistratename,setMagistrate] = useState('')
const [error,setError]  = useState(null)



 async function submitCase(e){

e.preventDefault()
if(clientid.length < 24){

    setError('clientID length must be 24 charachters(16bytes)')
 }

try {
   const response =  await axios.post('http://localhost:4000/cases',{
    caseType:casetype,
    caseDescription:casedescription,
    clientID:clientid,
    courtType:courtType,
    location:location,
    highcourt:highcourt,
    magistrateName:magistratename
    
     })
    
     setMessage(response.data.message || response.data.error)
} catch (error) {
    console.log(error)
}

}


    return(
        <div className="cases">
            <h1>Client Case Description</h1>
<form  onSubmit={submitCase}>
<div>
    <label>Casetype:</label>
    <input type="text"  required value={casetype} onChange={(e)=>setCaseType(e.target.value)}/>
</div>

<div>
    <label>CaseDescription:</label>
<textArea type="text"   required value={casedescription} onChange={(e)=>setCasedescription(e.target.value)}/>
</div>

<div>
    <label>ClientID:</label>
<input type="text"    value={clientid} onChange={(e)=>setClientid(e.target.value)}/>
</div>


<div>
    <label>magistrateName:</label>
    <input type="text"  required  onChange={(e)=>setMagistrate(e.target.value)}/>
</div>



<div>
    <label>location:</label>
    <input type="text"  required  onChange={(e)=>setLocation(e.target.value)}/>
</div>



<div>
    <label>highcourt:</label>
    <input type="text"  required  onChange={(e)=>setHighcourt(e.target.value)}/>
</div>


<div>
    <label>courtType:</label>
    <input type="text"  required  onChange={(e)=>setCourttype(e.target.value)}/>
</div>

















<button type="submit">Submit</button>

</form>


<Link to="/navigation">Home</Link>
{error && <p className="message">{error}</p>}
{message && <p className="message">{message}</p>}
<p>&copy;Karanja Mbugua @2023</p>
        </div>
    )
}
export default Case