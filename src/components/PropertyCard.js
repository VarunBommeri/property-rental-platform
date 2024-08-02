import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>{property.price}</p>
      <button onClick={() => dispatch(addToCart(property))}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
