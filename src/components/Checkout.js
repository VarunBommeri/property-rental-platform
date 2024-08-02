import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout process
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={bookingDetails.name} onChange={handleInputChange} placeholder="Name" required />
        <input type="email" name="email" value={bookingDetails.email} onChange={handleInputChange} placeholder="Email" required />
        <select name="paymentMethod" value={bookingDetails.paymentMethod} onChange={handleInputChange} required>
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Complete Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
