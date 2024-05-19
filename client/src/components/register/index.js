import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
// import './style.css'

const Register = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [formState, setformState] = useState({ 'name': '', 'email': '', 'group': '', 'password': '' });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { name, email, group, password } = formState
    formData.append('name', name);
    formData.append('email', email);
    formData.append('group', group);
    formData.append('password', password);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
      // setformState({'name':'', 'email':'','group':'', 'password':''})
      // navigate(`/login`)
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage('Error during registration');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setformState({ ...formState, [name]: value })
  }
  return (
    <div className="login-container">
      <div class="login-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div class="user-box">
            <input type="text" id="name" name="name" value={formState.name} onChange={(e) => handleChange(e)} required />
            <label htmlFor="name">Name</label>
          </div>
          <div class="user-box">
            <input type="text" id="email" name="email" value={formState.email} onChange={(e) => handleChange(e)} required />
            <label htmlFor="email">Email Id</label>
          </div>
          <div class="user-box">
            <input type="text" id="group" name="group" value={formState.group} onChange={(e) => handleChange(e)} required />
            <label htmlFor="group">Group</label>
          </div>
          <div class="user-box">
            <input type="password" id="password" name="password" value={formState.password} onChange={(e) => handleChange(e)} required />
            <label htmlFor="password">Password</label>
          </div>
          <div class="user-box">
            <input type="password" id="confirmpass" name="confirmpass" value={formState.confirmpass} onChange={(e) => handleChange(e)} required />
            <label htmlFor="confirmpass">Confirm Password</label>
          </div>
          <div class="user-box">  
            <input type="file" id="image" name="image" onChange={handleImageChange} />
            <label htmlFor="image">Hall Ticket Image</label>
          </div>
          <button type="buttom" className='login-btn'>Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
