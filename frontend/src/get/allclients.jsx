import React, { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "../tables.css"
function Viewclients() {
  const [seeallclients, setSeeallclients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get('http://localhost:4000/allclients');
        setSeeallclients(response.data)
      } catch (error) {
        console.error("Error fetching clients:", error)
      }
    }

    fetchClients() 

  }, [])

  return (
    <div className="container">
      <h1>View all client</h1>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Secondname</th>
            <th>Age</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {seeallclients.map((client) => (
            <tr key={client._id}>
              <td>{client.Firstname}</td>
              <td>{client.Secondname}</td>
              <td>{client.age} years</td>
              <td>{client.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/navigation">Home</Link>
    </div>
  );
}

export default Viewclients;
