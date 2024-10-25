import React from 'react';

function Footer() {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#menu", text: "Menu" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">Little Lemon</div>
      <nav>
        <ul className="footer-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <address className="footer-contact">
        <p>123 Main St, Chicago, IL</p>
        <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
      </address>
    </footer>
  );
}

export default Footer;
