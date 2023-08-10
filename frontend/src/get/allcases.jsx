import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Showcases() {
  const [seecase, setSeecase] = useState([]);

  useEffect(() => {
    async function fetchCases() {
      try {
        const response = await axios.get('http://localhost:4000/allcases');
        setSeecase(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCases();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Case Type</th>
            <th>Case Description</th>
            <th>ClientID</th>
            <th>Magistrate name</th>
            <th>location</th>
            <th>highcourt</th>
            <th>courtType</th>
          </tr>
        </thead>
        <tbody>
          {seecase.map((item) => (
            <tr key={item.id}>
              <td>{item.caseType}</td>
              <td>{item.caseDescription}</td>
              <td>{item.clientID}</td>
              <td>{item.magistrateName}</td>
              <td>{item.location}</td>
              <td>{item.courtType}</td>
              <td>{item.highcourt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/navigation">Home</Link>
    </div>
  );
}

export default Showcases;
