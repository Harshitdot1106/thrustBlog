import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LOgin.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        fullname,
        password,
        email
      });
      setSuccess(true);
      console.log(response.data);
      navigate('/home'); 
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShow(!show)}
        >
          {!show ? 'Show' : 'Hide'} Password
        </button>
        <label>Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {success ? (
        <p className="success-message">User saved successfully!</p>
      ) : (
        <p className="error-message">Error Saving User</p>
      )}
    </div>
  );
}

export default Login;
