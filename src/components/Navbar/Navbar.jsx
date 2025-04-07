import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <h1 className="brand-title">BUILD WITH</h1>
      <div className="nav-container">
        {/* First Row */}
        <ul className="nav-row">
          <li>
            <Link className='anchor-link' smooth={true} offset={-50} duration={500} to="contact">
              <p onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact</p>
            </Link>
          </li>
          <li>
            <Link className='anchor-link' smooth={true} offset={-50} duration={500} to="people">
              <p onClick={() => setMenu("people")} className={menu === 'people' ? 'active' : ''}>People said</p>
            </Link>
          </li>
          <li>
            <Link className='anchor-link' smooth={true} offset={-50} duration={500} to="phone">
              <p onClick={() => setMenu('phone')} className={menu === 'phone' ? 'active' : ''}>Phone</p>
            </Link>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default Navbar;
