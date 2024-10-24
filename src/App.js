import React from 'react';
import './App.css';
import Specials from './Specials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          {/* Add your logo image here */}
          <img src={`${process.env.PUBLIC_URL}/icons_assets/Logo.svg`} alt="Little Lemon Logo" style={{ width: '150px' }} />
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>Fresh, vibrant, and delicious Mediterranean food right in the heart of Chicago.</p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/icons_assets/restaurant.jpg`} alt="Restaurant" />
        </div>
      </section>

      {/* Specials Section */}
      <Specials />

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
          <img src={`${process.env.PUBLIC_URL}/icons_assets/Mario_and_Adrian_A.jpg`} alt="Adrian" />
          <img src={`${process.env.PUBLIC_URL}/icons_assets/Mario_and_Adrian_b.jpg`} alt="Mario" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
