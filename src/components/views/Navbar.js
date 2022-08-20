import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome3 } from 'react-icons/im';
import { FiSettings } from 'react-icons/fi';
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/" exact="true">
          <ImHome3 />
        </Link>
      </li>
      <li>
        <FiSettings />
      </li>
    </ul>
  </nav>
);

export default Navbar;
