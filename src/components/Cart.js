import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.items.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <p>Total: {cart.total}</p>
      </div>
    </div>
  );
};

export default Cart;
