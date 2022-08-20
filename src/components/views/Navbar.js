import React from 'react'
import { Link } from 'react-router-dom';
import { ImHome3 } from 'react-icons/im';
import { FiSettings} from 'react-icons/fi';

export const Navbar = () => {
  return (
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
  )
}
