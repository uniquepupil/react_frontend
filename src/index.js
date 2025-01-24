import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginSignup from './pages/LoginSignup';
import MainPage from './pages/MainPage';
import ProtectedRoute from './components/ProtectedRoute';
import LostItemForm from './pages/LostItemForm';
import Found from './pages/Found';
import UserAccount from './pages/UserAccount';

// import Profile from './pages/profile';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginSignup />} />

        {/* Protected Route */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/main/lostitemform"
          element={
            <ProtectedRoute>
              <LostItemForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/main/found"
          element={
            <ProtectedRoute>
              <Found/>
            </ProtectedRoute>
          }
        />
                <Route
          path="/profile"
          element={
            <ProtectedRoute>
              
              <UserAccount/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
