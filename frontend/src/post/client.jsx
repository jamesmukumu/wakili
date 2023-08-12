import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Client() {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [age, setAge] = useState("");
  const[idNumber,setIdnumber] = useState("")
  const [message, setMessage] = useState("");

  async function handleformSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://wakili.onrender.com/client', {
        Firstname: firstname,
        Secondname: secondname,
        phoneNumber: phonenumber,
        age: age,
        idNumber:idNumber
      });

      setMessage(response.data.message || response.data.error);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="client">
      <h1>Client Personal Info</h1>
      <form onSubmit={handleformSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            required
            autoCapitalize="on"
            autoComplete="off"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div>
          <label>Secondname:</label>
          <input
            type="text"
            required
            autoCapitalize="on"
            autoComplete="off"
            value={secondname}
            onChange={(e) => setSecondname(e.target.value)}
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            required
            autoCapitalize="on"
            autoComplete="off"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>phonenumber:</label>
          <input
            type="number"
            required
            autoCapitalize="on"
            autoComplete="off"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div>
          <label>idnumber:</label>
          <input
            type="number"
            required
            value={idNumber}
            onChange={(e) => setIdnumber(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/navigation">Home</Link>
    </div>
  );
}

export default Client;
