// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar'; // Your Navbar component
// import LostFoundForm from './pages/LostItemForm';
// //import HomePage from './pages/Home'; // Assuming this is your HomePage component
// import MainPage from './pages/MainPage'; // Your MainPage component
// //import UserAccount from './pages/UserAccount';
// import ProtectedRoute from './components/ProtectedRoute';


// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Switch>
//         {/* Route for Main Page */}
//         <Route path="/main" component={MainPage} />
        
//         {/* Route for Lost Item Form */}
//         <Route path="/lost" component={LostItemForm} />
//         <Route path="/found" component={Found} />
//         <Route path="/profile" component={UserAccount} />

        
//         {/* Route for Home Page */}
//         <Route path="/" exact component={MainPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'; // Your Navbar component
import LostFoundForm from './pages/LostItemForm';
import MainPage from './pages/MainPage'; // Your MainPage component
import ProtectedRoute from './components/ProtectedRoute';
import Found from './pages/Found'; // Assuming this is your Found page
import UserAccount from './pages/UserAccount'; // Assuming this is your UserAccount page
import LoginPage from './pages/LoginPage'; // Assuming you have a LoginPage
import RecentLostItems from './pages/recentlost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Route for Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes */}u
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lost"
          element={
            <ProtectedRoute>
              <LostFoundForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/found"
          element={
            <ProtectedRoute>
              <Found />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserAccount />
            </ProtectedRoute>
          }
        />
          
      </Routes>
    </Router>
  );
}

export default App;
