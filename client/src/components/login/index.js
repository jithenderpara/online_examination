import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import axios from 'axios';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', { user_email: name, user_password: password });
      // Handle successful login (e.g., redirect to dashboard)
      console.log('Login successful:', response.data);
      const data = response.data
      if (data.length > 0) {
        navigate(`/`)
        setMessage('Login successful');
      }
      else{
        console.error(data);
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;