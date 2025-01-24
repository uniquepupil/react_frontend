// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated');

//   return isAuthenticated ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const authToken = localStorage.getItem('authToken'); // Check for the token

//   if (!authToken) {
//     return <Navigate to="/" replace />; // Redirect to login if not authenticated
//   }

//   return children; // Render the protected content
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

