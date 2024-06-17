import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import styles from './Dashboard.module.css'; // Assuming you have a separate CSS module file for styling

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard</h2>
      <p>Welcome, {user.displayName || 'User'}!</p>
      <p>Email: {user.email}</p>
      {/* Display other user info here */}
    </div>
  );
};

export default Dashboard;
