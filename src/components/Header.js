// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.jpg'; // Replace with the actual path to your logo image
import Navbar from './Navbar';
// import './Header.css';
function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="JNTUV_LOGO" className="logo" />
          <h1 className="logo-text">
            National Service Scheme<br/>
            <h5>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM</h5>
            <br/>
            </h1>
        </div>
      </div>
        <div className='nav'>
        <Navbar />
        </div>
    </header>
  );
}

export default Header;