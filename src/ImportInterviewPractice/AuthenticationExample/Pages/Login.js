import React, { useState } from 'react'
import { useAuth } from '../Auth/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email,setEmail] = useState('');

  const handleEmail = (e)=>{
    setEmail(e.target.value);
  };

  const handleSubmit = (e)=>{ 
    e.preventDefault();
    login(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='mail' placeholder='enter your email' onChange={handleEmail} />
      <button>Submit</button>
    </form>

  )
}

export default Login;