import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          {/* Replace text with logo image */}
          <img src={`${process.env.PUBLIC_URL}/icons_assets/Logo.svg`} alt="Little Lemon Logo" />

        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
