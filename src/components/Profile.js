import React, { useState } from 'react';

const Profile = ({ onSignOut }) => {
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: 'password123',
  });

  const handleProfileChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  return (
    <div className="profile" style={{ marginTop: '70px' }}>
      <h2>Profile</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={profile.username}
          onChange={(e) => handleProfileChange('username', e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => handleProfileChange('email', e.target.value)}
        />
      </div>
      <button onClick={() => alert('Profile updated!')}>Save Changes</button>
      <button onClick={onSignOut} style={{ marginTop: '10px' }}>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
