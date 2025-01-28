import React, { useState } from 'react';
import '../styles/style.css';
import "../styles/card.css";
import Navbar from '../components/navbar';
import RecentFoundItems from '../components/RecentFoundItem';
import RecentLostItems from '../components/RecentLostItem';
import { mainURL } from '../services/services';

const FoundItemForm = () => {
  const [location, setLocation] = useState('');
  const [foundItemName, setFoundItemName] = useState('');
  const [description, setDescription] = useState('');
  const [dateFound, setDateFound] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSignOut = () => {
    console.log("Signing out...");
    localStorage.removeItem('authToken'); // Clear auth token
    window.location.href = '/'; // Redirect to login page
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('name', localStorage.getItem('userName') || '');
    formData.append('mobile_number', localStorage.getItem('userMobile_number') || '');
    formData.append('location', location);
    formData.append('found_item_name', foundItemName);
    formData.append('description', description);
    formData.append('date_found', new Date(dateFound).toLocaleDateString('en-GB'));

    if (image) {
      formData.append('image', image);
    } else {
      console.warn("No image provided.");
    }
    

    try {
      const response = await fetch('http://3.82.186.14:8000/submit-found-item/', {
        method: 'POST',
        body: formData,
      });
      console.log("FormData being sent:", Object.fromEntries(formData.entries()));


      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar onSignOut={handleSignOut} />

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '20px' }}>
          {/* Left Column */}
          <div style={{ flex: '1 1 50%', padding: '20px 20px 20px 20px ' }}>
            <div className="lost-found-card" style={{ borderRadius: '10px', padding: '25px 20px', backgroundColor: 'black' }}>
              {/* <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Found Item Report</h5> */}
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px', padding: '0px 20px 0px 40px '  }}>
                  <label htmlFor="location" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'white' }}>Where It Was Found:</label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    placeholder="Enter the location"
                    style={{ width: '90%', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px', padding: '0px 20px 0px 40px '  }}>
                  <label htmlFor="foundItemName" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'white' }}>Found Item:</label>
                  <input
                    type="text"
                    id="foundItemName"
                    value={foundItemName}
                    onChange={(e) => setFoundItemName(e.target.value)}
                    required
                    placeholder="Enter the found item"
                    style={{ width: '90%', padding: '10px 30px 10px 30px', borderRadius: '8px', marginBottom: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px', padding: '0px 20px 0px 40px ' }}>
                  <label htmlFor="description" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'white' }}>Description:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Describe the found item"
                    style={{ width: '90%', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}
                  ></textarea>
                </div>

                <div style={{ marginBottom: '20px', padding: '0px 20px 0px 40px ' }}>
                  <label htmlFor="dateFound" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'white' }}>Date When Found:</label>
                  <input
                    type="date"
                    id="dateFound"
                    value={dateFound}
                    onChange={(e) => setDateFound(e.target.value)}
                    required
                    style={{ width: '90%', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px', padding: '0px 20px 0px 40px ' }}>
                  <label htmlFor="uploadImage" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'white' }}>Upload an Image:</label>
                  <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>

                {message && (
                  <p style={{ color: message.type === 'success' ? 'green' : 'red', marginTop: '10px' }}>{message.text}</p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column', 
  flex: '1 1 30%', 
  padding: '20px' 
}}>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h1>Report a Found Item</h1>
            </div>
            <img src="/images/found_animated.jpg" alt="Lost and Found" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
      <RecentLostItems/>
    </div>
  );
};

export default FoundItemForm;
