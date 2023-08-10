import React from "react";
import { Link } from "react-router-dom";
import "./preloader.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Navigation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  
  },
  

  []);






  let content;
  if (loading===true) {
    content = (
      <ClipLoader
        color={'#007bff'}
        loading={loading}
        size={150}
      />
    );
  } else {
    content = (
      <>
        <h1>Dashboard</h1>
        <ul>
          <li><Link to="/client">1  Add New Client</Link></li>
          <li><Link to="/case">2  Add New Case</Link></li>
          <li><Link to="/allclients">3 See clients</Link></li>
          <li><Link to="/allcases"> 4 See cases</Link></li>
          <li><Link to="/clientlist"> 5 Find Existing Client By FirstName</Link></li>
          <li><Link to="/id"> 6 Find Existing Client by ID number</Link></li>
          <li><Link to="/casedetails"> 7 Find Existing Case by ClientID</Link></li>
          <li><Link to="/secondname">8 Find Existing Case by Secondname</Link></li>
        </ul>
      </>
    );
  }

  return (
    <div className="div">
      {content}
    </div>
  );
}

export default Navigation;
