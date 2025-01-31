import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { mainURL } from '../services/services';

const UserAccount = ({ onSignOut }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobile: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');


    if (token && email) {
      fetch(`${mainURL}user-details/?email=${email}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then((data) => {
          if (!data.error) {
            const defaultProfilePicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
            const customProfilePicture = 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg';
          
            const profilePicture = data.email === 'contact@uniquepupil.info' ? customProfilePicture : (data.profile_picture || defaultProfilePicture);
            setUser({
              username: data.name,
              email: data.email,
              mobile: data.mobile_number,
              profilePicture,
            });
            setUpdatedUser({
              username: data.name,
              email: data.email,
              mobile: data.mobile_number,
              profilePicture,
            });
          }
        })
        .catch((error) => console.error('Error fetching user details:', error));
    } else {
      console.log('No token or email found. Please log in first.');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignOut = () => {
    console.log("Signing out...");
    localStorage.removeItem('authToken'); // Clear auth token
    window.location.href = '/'; // Redirect to login page
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedUser((prev) => ({ ...prev, profilePicture: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    const token = localStorage.getItem('token');
  
    const formData = new FormData();
    formData.append('name', updatedUser.username);
    formData.append('mobile_number', updatedUser.mobile);
    if (updatedUser.profilePicture instanceof File) {
      formData.append('profile_picture', updatedUser.profilePicture);
    }
  
    fetch('${mainURL}update-profile/?email=' + user.email, {
      method: 'PATCH',
      headers: {
        // 'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Profile updated successfully:', data);
        setUser(updatedUser);
        setIsEditing(false);

      })
      .catch((error) => console.error('Error updating profile:', error));
  };
  
  

  return (
    
    <div className="user-account" style={{ marginTop: '70px', padding: '20px' }}>
      <Navbar onSignOut={handleSignOut} />
      <h2>User Account</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Profile Picture */}
        <div>
          <img
            src={updatedUser.profilePicture}
            alt="Profile"
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
          />
          {isEditing && (
            <input type="file" name="profilePicture" onChange={handleProfilePictureChange} />
          )}
        </div>

        {/* Username */}
        <div style={{ marginTop: '20px' }}>
          <label>Name: </label>
          <input
            type="text"
            name="username"
            value={updatedUser.username}
            onChange={handleInputChange}
            readOnly={!isEditing}
            style={{ backgroundColor: isEditing ? '#fff' : '#f5f5f5', border: isEditing ? '1px solid #ccc' : 'none' }}
          />
        </div>

        {/* Email */}
        <div style={{ marginTop: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            value={user.email}
            readOnly
            style={{ backgroundColor: '#f5f5f5', border: 'none' }}
          />
        </div>

        {/* Mobile Number */}
        <div style={{ marginTop: '10px' }}>
          <label>Mobile: </label>
          <input
            type="text"
            name="mobile"
            value={updatedUser.mobile}
            onChange={handleInputChange}
            readOnly={!isEditing}
            style={{ backgroundColor: isEditing ? '#fff' : '#f5f5f5', border: isEditing ? '1px solid #ccc' : 'none' }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '20px' }}>
          {isEditing ? (
            <>
              <button onClick={handleSave} style={{ marginRight: '10px' }}>
                Save
              </button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
