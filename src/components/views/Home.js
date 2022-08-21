import React from 'react';
import States from './States';
import Showcase from './Showcase';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <Showcase />
      <States />
    </main>
  );
}

export default Home;
