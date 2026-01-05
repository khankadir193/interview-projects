import React, { useState } from 'react'
import { useAuth } from '../Auth/AuthContext';
import '../authStyle.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [email,setEmail] = useState('');
  const navigate = useNavigate();

  // const handleEmail = (e)=>{
  //   setEmail(e.target.value);
  // };

  const handleSubmit = (e)=>{ 
    e.preventDefault();
    // console.log('emal..',email);
    login({email});
    navigate('/dashboard');
    alert('Successfully has been Logged In');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='mail' placeholder='enter your email' onChange={e => setEmail(e.target.value)} className='iEmail' />
      <button className='btn-submit'>Submit</button>
    </form>
  )
}

export default Login;