import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome3 } from 'react-icons/im';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <nav>
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
