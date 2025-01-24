import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSignOut }) => {
  const handleLogoutClick = () => {
    console.log("Logout button clicked");
    localStorage.setItem('isAuthenticated', 'false');
    if (onSignOut) {
      onSignOut();
    } else {
      console.warn("onSignOut function is not provided");
    }
  };

  return (
    <div style={navbarStyle} className="navbar">
      <div className="logo">
        <Link to="/main" style={linkStyle}>Lost & Found</Link>
      </div>
      <div className="links">
        <Link to="/main" style={linkStyle}>Home</Link>
        <Link to="#about-us" style={linkStyle}>About Us</Link>
        <Link to="lost" style={linkStyle}>Contact Us</Link>
        <Link to="/main/lostitemform" style={linkStyle}>Lost</Link>
        <Link to="/main/found" style={linkStyle}>Found</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>

        <button 
          onClick={handleLogoutClick} 
          style={{ ...buttonStyle, marginLeft: '15px', backgroundColor: '#d9534f' }}>
          Logout
        </button>
      </div>
    </div>
  );
};


const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  backgroundColor: 'black',
  color: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '16px',
  transition: 'color 0.3s ease',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

export default Navbar;
