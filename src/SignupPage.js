import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const submitSignupForm = () => {
    if (password1 !== password2) {
      alert("Passwords don't match!");
      return;
    }

    const data = {
      username,
      phone,
      email,
      password1,
      password2,
    };

    fetch('http://127.0.0.1:8000/auth/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User created successfully!') {
          window.location.href = 'index.html';
        } else {
          alert('Signup failed: ' + data.errors);
        }
      })
      .catch((error) => alert('Error: ' + error));
  };

  return (
    <div className="container">
      <div className="signup-form">
        <div className="title">Signup</div>
        <form id="signup-form">
          <div className="input-boxes">
            <div className="row">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <i className="fas fa-id-card"></i>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm your password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            <div className="button input-box">
              <input type="button" value="Signup" onClick={submitSignupForm} />
            </div>
            <div className="text sign-up-text">
              Already have an account? <label htmlFor="flip">Login now</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
