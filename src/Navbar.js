import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; // Make sure to import your Firebase auth instance
import styles from './Navbar.module.css'; // Import your CSS module for styling

const Navbar = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Optionally, handle any post-sign-out logic here (e.g., redirecting to home page)
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navItem}>Home</Link>
      {user ? (
        <>
          <Link to="/dashboard" className={styles.navItem}>Dashboard</Link>
          <button onClick={handleSignOut} className={`${styles.navItem} ${styles.button}`}>Sign Out</button>
          {/* Other authenticated user links */}
        </>
      ) : (
        <>
          <Link to="/signin" className={styles.navItem}>Sign In</Link>
          <Link to="/signup" className={styles.navItem}>Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
