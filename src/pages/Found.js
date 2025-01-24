import React from 'react';
import '../styles/style.css';
import "../styles/card.css";
import RecentReturns from '../components/RecentReturns';
import RecentFound from '../components/RecentFound';
import Navbar from '../components/navbar';

const Found = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '40px',
    padding: '25px 20px 14px 20px',
  };

  const leftCardStyle = {
    borderRadius: "10px", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100%", 
    backgroundColor: 'black',
    padding: '25px 90px 14px 90px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    width: '100%',
  };

  const columnStyle = {
    flex: '1 1 50%',
    padding: '20px',
  };

  const formCard = {
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    maxWidth: '100%',
  };

  const formTitle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const formGroup = {
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '8px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px 40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    marginBottom: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '14px 26px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
  };

  const imageStyle = {
    width: '400%',
    maxWidth: '400px',
    borderRadius: '8px',
  };
  const handleSignOut = () => {
    console.log("Signing out...");
    localStorage.removeItem('authToken'); // Clear auth token
    window.location.href = '/'; // Redirect to login page
  };
  

  return (
    <div>
      <Navbar onSignOut={handleSignOut} />
      
      <div>
        <div style={rowStyle}>
          {/* Left Column with Card */}
          <div style={columnStyle}>
            <div className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card" style={leftCardStyle}>
              <h5 style={formTitle}>Found Item Report</h5>
              <form id="foundItemForm">
                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="foundLocation">Where It Was Found:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="foundLocation"
                    name="foundLocation"
                    required
                    placeholder="Enter the location"
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="foundItemName">Found Item:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="foundItemName"
                    name="foundItemName"
                    required
                    placeholder="Enter the found item"
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="description">Description:</label>
                  <textarea
                    style={inputStyle}
                    id="description"
                    name="description"
                    required
                    placeholder="Describe the found item"
                  ></textarea>
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="dateFound">Date When Found:</label>
                  <input
                    style={inputStyle}
                    type="date"
                    id="dateFound"
                    name="dateFound"
                    required
                  />
                </div>

                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Column with Image */}
          <div style={columnStyle}>
            <div style={centerStyle}>
              <h1>Report a Found Item</h1>
            </div>
            <img
              src="/images/found.png"  
              alt="Found and Found"
              style={imageStyle}
            />
          </div>
        </div>
      </div> 
      <div style={{}}>
        <RecentReturns/>
        <RecentFound/>
      </div>
    </div>
  );
};

export default Found;
