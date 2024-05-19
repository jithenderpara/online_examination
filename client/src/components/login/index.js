import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { LOGIN } from '../apiEndpoints';
import './login.css';
import axios from 'axios';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN, { user_email: name, user_password: password });
      // Handle successful login (e.g., redirect to dashboard)
      console.log('Login successful:', response.data);
      const data = response.data
      if (data.length > 0) {
        navigate(`/`)
        setMessage('Login successful');
      }
      else {
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
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div class="user-box">
            
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="name">Email:</label>
          </div>
          <div class="user-box">
            
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="password">Password:</label>
          </div>
          <button className='login-btn' type="submit">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;