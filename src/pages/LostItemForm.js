import React from 'react';
import '../styles/style.css';
import "../styles/card.css";
import RecentReturns from '../components/RecentReturns';
import RecentFound from '../components/RecentFound';
import Navbar from '../components/navbar';

const LostFoundForm = () => {
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

  const rowfirst = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    width: '100%',
  };

  const columnfirst = {
    flex: '1 1 50%',
    padding: '20px',
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

  const imageStyle1 = {
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
        <div style={rowfirst}>
          {/* Left Column with Card */}
          <div style={columnfirst}>
            <div
              className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card"
              style={leftCardStyle}
            >
              <h5 style={formTitle}>Lost Item Report</h5>
              <form id="lostItemForm">
                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="location">Where It Was Lost:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="Enter the location"
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="lostItemName">Lost Item:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="lostItemName"
                    name="lostItemName"
                    required
                    placeholder="Enter the lost item"
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="description">Description:</label>
                  <textarea
                    style={inputStyle}
                    id="description"
                    name="description"
                    required
                    placeholder="Describe the lost item"
                  ></textarea>
                </div>

                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="dateLost">Date When Lost:</label>
                  <input
                    style={inputStyle}
                    type="date"
                    id="dateLost"
                    name="dateLost"
                    required
                  />
                </div>

                {/* New Upload Button */}
                <div style={formGroup}>
                  <label style={labelStyle} htmlFor="uploadImage">Upload an Image:</label>
                  <input
                    style={inputStyle}
                    type="file"
                    id="uploadImage"
                    name="uploadImage"
                    accept="image/*"
                  />
                </div>

                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Column with Image */}
          <div style={columnfirst}>
            <div style={centerStyle}>
              <h1>Report a Lost Item</h1>
            </div>
            <img
              src="/images/lost.png"
              alt="Lost and Found"
              style={imageStyle1}
            />
          </div>
        </div>
      </div>
      <div style={{}}>
        <RecentReturns />
        <RecentFound />
      </div>
    </div>
  );
};

export default LostFoundForm;

// const rr={

// }

// export default LostFoundForm;
