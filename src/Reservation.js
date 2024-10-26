// src/Reservation.js
import React from 'react';

const Reservation = () => (
  <section className="reservation">
    <h2>Book Your Reservation</h2>
    <form className="reservation-form">
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" required />

      <label htmlFor="guests">Guests:</label>
      <input type="number" id="guests" name="guests" min="1" max="10" required />

      <button type="submit" className="reserve-btn">Reserve Now</button>
    </form>
  </section>
);

export default Reservation;
