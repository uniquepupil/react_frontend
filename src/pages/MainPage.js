import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Profile from '../components/Profile';
import Home from './Home';
import Footer from '../components/footer';
import { mainURL } from '../services/services';

const MainPage = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileToggle = () => {
    setShowProfile((prev) => !prev);
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    localStorage.removeItem('authToken'); // Clear auth token
    window.location.href = '/'; // Redirect to login page
  };
  

  return (
    <div className="main-page">
      {/* Render the Navbar */}
      <Navbar onSignOut={handleSignOut} />

      <Home/>

      {/* Conditionally Render the Profile Component */}
      {showProfile && <Profile onSignOut={handleSignOut} />}

      {/* Main Content */}
      <div className="content" style={{ marginTop: showProfile ? '20px' : '70px' }}>
        <h1>Welcome to our website!</h1>
        <p>
          Here, you'll find a variety of services including lost & found, user
          profiles, and much more!
        </p>
      </div>
      {/* <div className='footer'> <Footer/></div> */}
      
    </div>
    
  );
};

export default MainPage;
