import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Little Lemon</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>Fresh, vibrant, and delicious Mediterranean food right in the heart of Chicago.</p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="path-to-image-placeholder" alt="Restaurant" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>This Week's Specials</h2>
        <div className="specials-container">
          <div className="special">
            <img src="path-to-image-placeholder" alt="Special 1" />
            <h3>Greek Salad</h3>
            <p>Fresh tomatoes, cucumbers, olives, and feta cheese.</p>
            <p>$12.99</p>
          </div>
          <div className="special">
            <img src="path-to-image-placeholder" alt="Special 2" />
            <h3>Bruschetta</h3>
            <p>Grilled bread topped with tomatoes, garlic, and basil.</p>
            <p>$8.99</p>
          </div>
          <div className="special">
            <img src="path-to-image-placeholder" alt="Special 3" />
            <h3>Lemon Dessert</h3>
            <p>A sweet, tangy lemon pie with whipped cream.</p>
            <p>$6.99</p>
          </div>
        </div>
        <button className="order-btn">Order Online</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Best Mediterranean food in town!"</p>
          <p>- John D.</p>
          <div className="stars">★★★★★</div>
        </div>
        <div className="testimonial">
          <p>"The lemon dessert is amazing!"</p>
          <p>- Sarah W.</p>
          <div className="stars">★★★★★</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Little Lemon</h2>
        <p>Adrian and Mario started Little Lemon to bring the flavors of the Mediterranean to Chicago.</p>
        <div className="about-images">
          <img src="path-to-image-placeholder" alt="Adrian" />
          <img src="path-to-image-placeholder" alt="Mario" />
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;
