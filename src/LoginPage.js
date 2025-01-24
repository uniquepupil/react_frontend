import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLoginForm = () => {
    const data = { username, password };

    fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          window.location.href = 'index.html';
        } else {
          alert('Login failed: ' + (data.error || 'Unknown error'));
        }
      })
      .catch((error) => alert('Error: ' + error));
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="title">Login</div>
        <form id="login-form">
          <div className="input-boxes">
            <div className="input-box">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button input-box">
              <input type="button" value="Login" onClick={submitLoginForm} />
            </div>
            <div className="text sign-up-text">
              Don't have an account? <label htmlFor="flip">Sign up now</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
