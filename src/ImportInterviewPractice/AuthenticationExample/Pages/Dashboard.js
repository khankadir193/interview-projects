import React, { useState } from 'react'
import { useAuth } from '../Auth/AuthContext';

const Dashboard = () => {
  const {logout} = useAuth();

  return (
    <div>
      <h3>Welcome:-{localStorage.getItem('user')}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard;