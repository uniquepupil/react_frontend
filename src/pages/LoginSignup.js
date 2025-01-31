import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showImage, setShowImage] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth > 768); // Hide image if screen width is <= 768px
    };

    handleResize(); // Check on first render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateMobileNumber = (mobile_number) => /^[0-9]{10}$/.test(mobile_number);

  const submitLoginForm = () => {
    const email = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    fetch('http://3.82.186.14:8000/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful.') {
          alert('Login successful');
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('userName', data.user.name);
          localStorage.setItem('userMobile_number', data.user.mobile_number);
          localStorage.setItem('userEmail', data.user.email);
          navigate('/main');
        } else {
          alert('Login failed: ' + (data.error || 'Unknown error'));
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };
  const copyToClipboard = () => {
    const email = "contact@uniquepupil.info";
    const password = "@Admin123";
  
    navigator.clipboard.writeText(`Email: ${email} Password: ${password}`)
      .then(() => {
        alert("Text copied! Email: contact@uniquepupil.info Password: @Admin123");
        
        // Auto-fill the login form fields
        document.getElementById('login-username').value = email;
        document.getElementById('login-password').value = password;
      })
      .catch((err) => console.error("Copy failed:", err));
  };
  
 


  const submitSignupForm = () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password1').value;
    const rpassword = document.getElementById('signup-password2').value;
    const name = document.getElementById('signup-username').value;
    const mobile_number = document.getElementById('signup-phone').value;

    if (!validateEmail(email)) {
      alert('Invalid email format. Use format: abc@domain.com');
      return;
    }

    if (!validateMobileNumber(mobile_number)) {
      alert('Mobile number must be exactly 10 digits.');
      return;
    }

    if (password !== rpassword) {
      alert('Passwords do not match. Please enter the same password.');
      return;
    }

    fetch('http://3.82.186.14:8000/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, mobile_number }),
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

  const styles = {
    container: {
      display: 'flex',
      justifyContent: showImage ? 'center' : 'center',
      alignItems: 'center',
      height: '100vh',
      //backgroundColor: '#f5f5f5',
    },
   formContainer: {
      backgroundColor: '#363f41  ',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      width: '350px',
      textAlign: 'center',
    },
    imageContainer: {
      marginRight: '40px',
      width: '600px',
      height: '600px',
    },
    imageStyle: { width: '600px', height: '600px', borderRadius: '10px', display: showImage ? 'block' : 'none' }, // Hide image if showImage is false
    
    inputBox: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    switchText: {
      marginTop: '10px',
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    switchTextt: {
      marginTop: '10px',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'bold',
    },
    alertOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    alertBox: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', width: '300px' },
    copyButton: { margin: '10px', padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    closeButton: { margin: '10px', padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  
  };

  return (
    <div style={styles.container}>
       {/* Custom Alert */}
       {showAlert && (
        <div style={styles.alertOverlay}>
          <div style={styles.alertBox}>
            <p>Welcome! <br></br>
            For demo purpose <br></br>
          Email: contact@uniquepupil.info<br></br>
          Password: @Admin123</p>
            <button onClick={copyToClipboard} style={styles.copyButton}>Copy</button>
            <button onClick={() => setShowAlert(false)} style={styles.closeButton}>OK</button>
          </div>
        </div>
      )}
      {/* Image Container */}
      <div style={styles.imageContainer}>
        <img src="images/lost-and-found.png" alt="Login Illustration" style={styles.imageStyle} />
      </div>

      {/* Form Container */}
      <div style={styles.formContainer}>
        {!isSignup ? (
          <div>
            <h2 style={styles.switchTextt}>Login</h2><br></br>
            <div style={styles.inputBox}>
              <input type="text" id="login-username" placeholder="Enter your email" required style={styles.input} />
            </div>
            <div style={styles.inputBox}>
              <input type="password" id="login-password" placeholder="Enter your password" required style={styles.input} />
            </div>
            <button onClick={submitLoginForm} style={styles.button}>Login</button>
            <p style={styles.switchText} onClick={() => setIsSignup(true)}>Don't have an account?<br></br> Sign up now</p>
          </div>
        ) : (
          <div>
            <h2 style={styles.switchTextt}>Signup</h2><br></br>
            <div style={styles.inputBox}>
              <input type="text" id="signup-username" placeholder="Enter your name" required style={styles.input} />
            </div>
            <div style={styles.inputBox}>
              <input type="email" id="signup-email" placeholder="Enter your email" required style={styles.input} />
            </div>
            <div style={styles.inputBox}>
              <input type="text" id="signup-phone" placeholder="Enter your phone number" required style={styles.input} />
            </div>
            <div style={styles.inputBox}>
              <input type="password" id="signup-password1" placeholder="Enter your password" required style={styles.input} />
            </div>
            <div style={styles.inputBox}>
              <input type="password" id="signup-password2" placeholder="Confirm your password" required style={styles.input} />
            </div>
            <button onClick={submitSignupForm} style={styles.button}>Signup</button>
            <p style={styles.switchText} onClick={() => setIsSignup(false)}>Already have an account?<br></br> Login now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
