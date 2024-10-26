import React from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();

  // Handler for clearing the form (will trigger the clear function in BookingForm)
  const handleClearForm = () => {
    const form = document.getElementById('booking-form');
    form.reset();
  };

  // Handler for navigating back to the homepage
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Book Your Table</h1>
      <BookingForm />
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={handleClearForm} style={{ padding: '10px 20px' }}>Clear Form</button>
        <button onClick={handleGoBack} style={{ padding: '10px 20px' }}>Go Back to Home</button>
      </div>
    </div>
  );
}

export default BookingPage;
