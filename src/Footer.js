import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Little Lemon</div>
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-contact">
        <p>123 Main St, Chicago, IL</p>
        <p>Email: info@littlelemon.com</p>
      </div>
    </footer>
  );
}

export default Footer;
