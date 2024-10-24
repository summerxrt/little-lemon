import React from 'react';

function Hero() {
  return (
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
  );
}

export default Hero;
