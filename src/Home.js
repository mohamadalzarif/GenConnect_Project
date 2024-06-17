import React from 'react';
import styles from './Home.module.css'; // Import CSS module

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <h1>Welcome to GenConnect</h1>
      <p>Empowering Youth through Mentorship</p>
    </div>
  );
};

export default Home;
