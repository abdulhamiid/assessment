import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/" exact="true">
          <RiArrowGoBackFill />
        </Link>
      </li>
      <li>
        <FiSettings />
      </li>
    </ul>
  </nav>
);

export default Navbar;
