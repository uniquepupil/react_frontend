import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { mainURL } from '../services/services';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const getCSRFToken = () => {
    const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='));
    return csrfToken ? csrfToken.split('=')[1] : null;
  };
  


  const submitLoginForm = () => {
    const email = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    const data = { email, password };
  console.log(`${mainURL}login/`);
    fetch(`${mainURL}login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful.') {
          alert('Login successful')
          // Store token in localStorage
          
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('token', data.access_token);
  
          // Store name, mobile number, and email from the backend response
          localStorage.setItem('userName', data.user.name);
          localStorage.setItem('userMobile_number', data.user.mobile_number);
          localStorage.setItem('userEmail', data.user.email);
  
          // Navigate to the main page
          navigate('/main');
        } else {
          alert('Login failed: ' + (data.error || 'Unknown error'));
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };
  
  

  const submitSignupForm = () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password1').value; 
    const name = document.getElementById('signup-username').value;
    const mobile_number = document.getElementById('signup-phone').value;
  
    const data = {
      email,
      password,
      name,
      mobile_number,
    };
  
    fetch('http://3.82.186.14:8000/signup/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User created successfully!') {
          alert('Signup successful! You can now log in.');
          setIsSignup(false); 
        } else {
          alert('Signup failed: ' + data.errors);
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };
  


  return (
    <div>
      <div className="heading">Army Institute of Technology</div>
      <div className="container">
        <div className="forms">
          <div className="form-content">
            {/* Login Form */}
            {!isSignup && (
              <div className="login-form">
                <div className="title">Login</div>
                <form id="login-form">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        id="login-username"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        id="login-password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input type="button" value="Login" onClick={submitLoginForm} />
                    </div>
                    <div className="text sign-up-text">
                      Don't have an account?{' '}
                      <label onClick={() => setIsSignup(true)}>Sign up now</label>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Signup Form */}
            {isSignup && (
              <div className="signup-form">
                <div className="title">Signup</div>
                <form id="signup-form">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        id="signup-username"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        id="signup-email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-phone"></i>
                      <input
                        type="text"
                        id="signup-phone"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        id="signup-password1"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        id="signup-password2"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input type="button" value="Signup" onClick={submitSignupForm} />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account?{' '}
                      <label onClick={() => setIsSignup(false)}>Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
