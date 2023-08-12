import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import "../index.css"




function Login(){
let navigate = useNavigate()
const [loading,setLoading] = useState(true)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let content

  useEffect(()=>{
setTimeout(()=>{


setLoading(false)


},2000)





  },[])
  if(loading===true){
content=(
  <ClipLoader
  color={'#3E9191'}
  loading={loading}

  size={150}

/>


)


  }
  else{
    content=(
      <body>
        <img src="../images/black-price-tag-abstract-black-shapes.jpg" alt="" />
      <form onSubmit={handleSubmit}>
      <h2 className='h2'>Login</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            
            autoComplete='off'
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>





        <div>
          <label>Password:</label>
          <input
          required
            type={showPassword ? 'text' : 'password'}
           
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Show Password:</label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
       <button type='submit'>Login</button>
       <p  className='a'>Don't have an account? <Link to="/register">Register here</Link></p>
       <p className='message'>{message}</p>
       <a href="https://wakili.onrender.com/login"></a>
      </form>
     
    
      </body>
    )
  }

  async function handleSubmit(e){
    
    e.preventDefault();

    try {
      const response = await axios.post('https://wakili.onrender.com/login', {
        Username: username,
        password: password,
      });

      setMessage(response.data.message || response.data.error);
      if(response.data.message==='you have successfully logged in'){
       
   


        navigate('/navigation');

      }
   

   
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    {content}
     
    </div>

    
  );
};

export default Login;
