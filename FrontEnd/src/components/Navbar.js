import React from 'react';
import { Link} from "react-router-dom";
import '../styles/navbar.css';
import authstore from '../stores/authStore';

const Navbar = () => {
  const store = authstore();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        { store.loggedIn && <li><Link to="/logout">Logout</Link></li> }
      </ul>
    </nav>
  );
};

export default Navbar;