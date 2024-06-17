import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Dashboard from './Dashboard'; // Import the Dashboard component
import Navbar from './Navbar';
import './App.css'; // Import global CSS

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
          {/* Redirects to SignIn if no user is authenticated */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
