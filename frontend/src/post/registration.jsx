import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
  let navigate = useNavigate()
 

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  



  const [loading,setLoading] = useState(true)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  let content


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://wakili.onrender.com/register', {
        Username: username,
        Email: email,
        password: password,
      });
  
  
      if(response.data.message==='registered'){
        navigate('/navigation')
        
        }
  
  
    } 
    catch (error) {
      console.error('Registration failed', error);
      setRegistrationSuccess(false);
      setRegistrationError('Registration failed. Please try again.');
    }
  
  
  
  
  };
  















useEffect(()=>{
setTimeout(()=>{
setLoading(false)


},2500)





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
    <>
  
      <form onSubmit={handleSubmit}>
      <h1>Register Here</h1>
      <div>
        <label htmlFor="username">Username:</label>
      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
        </div>






        <div>
        <label htmlFor="email">Email:</label>
      <input
        type="email"
      required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </div>
     
    



<div>
<label htmlFor="password">password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
       required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
</div>


 
      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
        <button type="submit">Register</button>

<ReCAPTCHA
    sitekey="6LdMlZInAAAAAGH3iInS_e76zel9sjdHW8JJhCR1
    "
    onChange={onChange}
  />,

        {registrationSuccess && <h2>Registration successful</h2>}
        {registrationError && <p className="error">{registrationError}</p>}
      </form>
      <p>
        Already have an account? <Link to="/">Login Here</Link>
      </p>
    </>
  )
}



  return (
    <div className="container">
     {content}
    </div>
  );
}

export default Register;
