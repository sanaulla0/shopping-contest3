import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
const Mycart = () => {
   
  const cart = useSelector(state => state.cart);
console.log('cet' ,cart);
  return (
    <div>
      <h1>My Cart</h1>
       <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
          </li> 
        ))}
      </ul> 
      
    </div>
  )
}

export default Mycart;