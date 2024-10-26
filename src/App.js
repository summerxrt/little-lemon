import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Specials from './Specials';
import Footer from './Footer';
import Reservation from './Reservation'; // Import the Reservation component
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);


const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/"><img src={`${process.env.PUBLIC_URL}/icons_assets/Logo.svg`} alt="Little Lemon Logo" style={{ width: '150px' }} /></Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><Link to="/reservations">Reservations</Link></li>
      <li><a href="#order-online">Order Online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </nav>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <p>
      Little Lemon Chicago is a cozy and vibrant Mediterranean-inspired restaurant located in the heart of Chicago. Known for its fresh, flavorful dishes and warm ambiance, it’s a popular spot for both locals and visitors looking for healthy, delicious dining options. Whether you're enjoying a meal with family or celebrating a special occasion, Little Lemon offers a welcoming atmosphere that makes every visit memorable.</p>
      <Link to="/reservations" className="reserve-btn">Reserve a Table</Link>
    </div>
    <div className="hero-image">
      <img src={`${process.env.PUBLIC_URL}/icons_assets/restaurant.jpg`} alt="Restaurant" />
    </div>
  </section>
);

const Testimonials = () => (
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
);

const AboutSection = () => (
  <section className="about">
    <h2>About Little Lemon</h2>
    <p>Adrian and Mario started Little Lemon to bring the flavors of the Mediterranean to Chicago.</p>
    <div className="about-images">
      <img src={`${process.env.PUBLIC_URL}/icons_assets/Mario_and_Adrian_A.jpg`} alt="Adrian" />
      <img src={`${process.env.PUBLIC_URL}/icons_assets/Mario_and_Adrian_b.jpg`} alt="Mario" />
    </div>
  </section>
);

const Home = () => (
  <div>
    <HeroSection />
    <Specials />
    <Testimonials />
    <AboutSection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
